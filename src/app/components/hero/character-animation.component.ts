import { Component, ElementRef, ViewChild, AfterViewInit, NgZone } from '@angular/core';

// --- FSM Engine Definitions ---
const States = {
  INIT: 'INIT',
  INTRO: 'INTRO',
  IDLE: 'IDLE',
  HOVER: 'HOVER'
} as const;

const Events = {
  LOAD: 'LOAD',
  INTRO_ENDED: 'INTRO_ENDED',
  HOVER_ENTER: 'HOVER_ENTER',
  HOVER_LEAVE: 'HOVER_LEAVE'
} as const;

type StateType = typeof States[keyof typeof States];
type EventType = typeof Events[keyof typeof Events];

@Component({
  selector: 'app-character-animation',
  standalone: true,
  template: `
    <div
      class="hero-container group"
      (mouseenter)="dispatch('HOVER_ENTER')"
      (mouseleave)="dispatch('HOVER_LEAVE')"
    >
      <!-- Dual Video Elements -->
      <video #vA id="vA" class="char-video" style="opacity: 1; z-index: 2;" muted playsinline preload="auto"></video>
      <video #vB id="vB" class="char-video" style="opacity: 0; z-index: 1;" muted playsinline preload="auto"></video>
    </div>
  `,
  styles: [`
    :host { display: block; width: 100%; height: 100%; }
    .hero-container {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      background-color: transparent;
    }
    .char-video {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: opacity 0.3s ease, transform 0.4s ease;
      pointer-events: none;
    }
    .hero-container:hover .char-video {
      transform: scale(1.02); /* Slight scale interaction */
    }
  `]
})
export class CharacterAnimationComponent implements AfterViewInit {
  @ViewChild('vA') vARef!: ElementRef<HTMLVideoElement>;
  @ViewChild('vB') vBRef!: ElementRef<HTMLVideoElement>;

  // FSM Engine Core
  private state: StateType = States.INIT;
  private active!: HTMLVideoElement;
  private inactive!: HTMLVideoElement;
  private isTransitioning = false; // Guard anti spam

  private sources = {
    intro: 'assets/caracter/intro.mp4',
    idle: 'assets/caracter/idle.mp4',
    hover: 'assets/caracter/hover.mp4'
  };

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit() {
    this.active = this.vARef.nativeElement;
    this.inactive = this.vBRef.nativeElement;

    // Double-force muting to avoid strict browser blocks
    this.active.muted = true; this.active.defaultMuted = true;
    this.inactive.muted = true; this.inactive.defaultMuted = true;

    this.preloadAssets();
    this.dispatch(Events.LOAD);
  }

  // ===== FSM Dispatcher =====
  dispatch(event: EventType) {
    switch (this.state) {
      case States.INIT:
        if (event === Events.LOAD) {
          this.state = States.INTRO;
          this.playIntro();
        }
        break;

      case States.INTRO:
        if (event === Events.INTRO_ENDED) {
          this.state = States.IDLE;
          this.playIdle();
        }
        // ignore hover saat intro (Guard ditangani secara otomatis)
        break;

      case States.IDLE:
        if (event === Events.HOVER_ENTER) {
          this.state = States.HOVER;
          this.playHover();
        }
        break;

      case States.HOVER:
        if (event === Events.HOVER_LEAVE) {
          this.state = States.IDLE;
          this.playIdle();
        }
        break;
    }
  }

  // ===== View Controllers =====
  private playIntro() {
    this.active.loop = false;
    this.active.src = this.sources.intro;
    
    // Pastikan listener berjalan di dalam Angular Zone jika butuh trigger UI, tapi FSM class mandiri
    this.active.onended = () => {
      this.dispatch(Events.INTRO_ENDED);
    };

    this.attemptPlay(this.active);
  }

  private playIdle() {
    this.crossfadeTo(this.sources.idle, true);
  }

  private playHover() {
    this.crossfadeTo(this.sources.hover, false);
  }

  // Engine pemutar Dual-Video
  private crossfadeTo(src: string, loop: boolean) {
    if (this.isTransitioning) return; // Guard 1: Sedang pindah
    this.isTransitioning = true;

    const next = this.inactive;
    next.src = src;
    next.loop = loop;
    
    // Penting: tunggu siap main
    const onReady = () => {
      // Set posisi awal biar rapih, asal metadata minimal sudah muat
      if (next.readyState >= 1) next.currentTime = 0; 
      
      this.attemptPlay(next).then(() => {
        // Eksekusi Fade Transition
        this.active.style.opacity = '0';
        this.active.style.zIndex = '1';
        
        next.style.opacity = '1';
        next.style.zIndex = '2';

        // Swap referensi FSM
        [this.active, this.inactive] = [next, this.active];

        // Selesai transisi, bebaskan guard dan bereskan memori lama
        setTimeout(() => {
          this.inactive.pause();
          this.isTransitioning = false;
        }, 300);
      });
    };

    // Eksekusi load data cache
    if (next.readyState >= 3) {
      onReady();
    } else {
      next.onloadeddata = () => {
        next.onloadeddata = null;
        onReady();
      };
      next.load();
    }
  }

  private attemptPlay(video: HTMLVideoElement): Promise<void> {
    return new Promise((resolve) => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.then(() => resolve())
        .catch(err => {
          console.warn('Info: Browser block (auto override applied)', err);
          video.muted = true; 
          resolve(); 
        });
      } else {
        resolve();
      }
    });
  }

  private preloadAssets() {
    // Hidden prefetch ke memori DOM browser anti lag
    [this.sources.idle, this.sources.hover].forEach(src => {
      const v = document.createElement('video');
      v.src = src;
      v.preload = 'auto';
    });
  }
}
