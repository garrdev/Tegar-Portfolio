import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';
import { RevealDirective } from '../../directives/reveal.directive';

/** Typed shape for a single stat card. */
interface HeroStat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      id="home"
      class="relative min-h-screen bg-snow overflow-hidden"
    >

      <!-- ══ FULL-BLEED VIDEO (background layer) ══ -->
      <div
        appReveal="soft"
        [revealDelay]="60"
        class="absolute inset-0 w-full h-full z-0"
      >
        <video
          #heroVideo
          class="w-full h-full object-cover"
          [src]="videoSrc"
          autoplay
          muted
          loop
          playsinline
          preload="auto"
        ></video>
      </div>

      <!-- ══ GRADIENT OVERLAY ══ -->
      <div
        class="absolute inset-0 z-10
               bg-gradient-to-r from-snow/80 via-snow/35 to-transparent
               lg:from-snow/70 lg:via-snow/20 lg:to-transparent"
      ></div>

      <!-- ══ VIGNETTE OVERLAY (covers video watermark) ══ -->
      <div
        class="absolute bottom-0 right-0 w-64 h-64 z-10 pointer-events-none
               bg-[radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.55),transparent_70%)]"
      ></div>

      <!-- ══ AUDIO (hidden) ══ -->
      <audio #heroAudio [src]="audioSrc" loop preload="auto"></audio>

      <!-- ══ TEXT CONTENT (foreground) ══ -->
      <div
        class="relative z-20 min-h-screen
               flex flex-col justify-center
               px-6 md:px-14 lg:px-20
               pt-32 pb-20 lg:pt-0 lg:pb-0
               max-w-2xl"
      >

        <!-- Headline -->
        <div appReveal="up" [revealDelay]="200" class="mb-6">
          <h1
            class="font-body font-black text-ink tracking-tighter
                   leading-[1.0]
                   text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {{ i18n.t().hero.greeting }}<br />
            {{ i18n.t().hero.role }}.
          </h1>
        </div>

        <!-- Description -->
        <div appReveal="up" [revealDelay]="300" class="mb-8">
          <p class="font-body text-ink/70 text-base md:text-lg leading-relaxed max-w-[38ch]">
            {{ i18n.t().hero.description }}
          </p>
        </div>

        <!-- CTA row -->
        <div appReveal="up" [revealDelay]="400" class="flex flex-wrap items-center gap-4 mb-10">
          <a
            href="#projects"
            class="inline-block bg-electric text-white font-body font-bold
                   px-8 py-3.5 rounded-2xl shadow-brutal-blue
                   transition-all hover:scale-105 active:scale-95"
            (click)="scrollTo('projects', $event)"
          >
            {{ i18n.t().hero.cta_view_work }}
          </a>
          <a
            href="#about"
            class="inline-block border-2 border-ink text-ink font-body font-bold
                   px-8 py-3.5 rounded-2xl
                   transition-all hover:bg-ink hover:text-snow hover:scale-105 active:scale-95"
            (click)="scrollTo('about', $event)"
          >
            {{ i18n.t().hero.cta_cv }}
          </a>
        </div>

        <!-- Stats row -->
        <div appReveal="up" [revealDelay]="500" class="flex flex-wrap gap-x-8 gap-y-4">
          @for (stat of stats; track stat.value) {
            <div class="flex flex-col gap-0.5">
              <span class="font-body font-black text-electric text-2xl tracking-tighter">
                {{ stat.value }}
              </span>
              <span class="font-body text-[11px] text-ink/50 uppercase tracking-wider">
                {{ stat.label }}
              </span>
            </div>
          }
        </div>

      </div>
      <!-- /TEXT CONTENT -->

      <!-- ══ AUDIO TOGGLE BUTTON ══ -->
      <button
        appReveal="zoom"
        [revealDelay]="600"
        (click)="toggleAudio()"
        class="absolute bottom-6 right-6 z-30
               flex items-center gap-2
               border-2 font-body font-bold text-sm px-4 py-2.5 rounded-2xl
               backdrop-blur-sm shadow-md
               transition-all hover:scale-105 active:scale-95"
        [class]="audioOn()
          ? 'border-electric bg-electric text-white shadow-brutal-blue'
          : 'border-ink bg-white/80 text-ink hover:bg-ink hover:text-snow'"
        [attr.aria-label]="audioOn() ? 'Mute audio' : 'Play audio'"
      >
        @if (audioOn()) {
          <!-- Speaker ON -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>
          <span>MUSIC ON</span>
        } @else {
          <!-- Speaker OFF -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
          </svg>
          <span>MUSIC</span>
        }
      </button>

      <!-- ══ FLOATING GLASSMORPHISM TECH CARDS (Right side Area) ══ -->
      <div class="absolute inset-0 z-20 pointer-events-none hidden lg:block">
        
        <!-- Connecting Line between 3 main tech cards -->
        <svg
          class="absolute inset-0 w-full h-full pointer-events-none z-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M 77 25 C 87 35, 87 37, 85 47 C 82 57, 80 59, 83 69"
            fill="none"
            class="stroke-electric opacity-25"
            stroke-width="0.35"
            stroke-dasharray="1.5 1.5"
          />
        </svg>

        <!-- Badge Sticker: Open to Work -->
        <div
          appReveal="zoom"
          [revealDelay]="1200"
          class="absolute top-[8%] right-[20%] pointer-events-auto
                 border-2 border-ink bg-snow px-3 py-1.5 rounded-lg
                 font-mono text-xs font-bold text-ink rotate-[-3deg]
                 hover:scale-105 active:scale-95 transition-all duration-300 cursor-default"
        >
          OPEN TO REMOTE
        </div>
        
        <!-- Card 1: Angular -->
        <div
          appReveal="zoom"
          [revealDelay]="800"
          class="absolute top-[22%] right-[18%] pointer-events-auto
                 flex items-center gap-3 px-4 py-3
                 bg-white/10 backdrop-blur-md border border-white/20
                 rounded-2xl shadow-xl hover:bg-white/15 hover:scale-105
                 transition-all duration-300 animate-drift cursor-default"
          style="--rotate: 3deg; animation-duration: 6s; animation-delay: 0s;"
        >
          <img src="assets/icon/angular.webp" alt="Angular Logo" class="w-7 h-7 object-contain drop-shadow-[0_2px_8px_rgba(221,0,49,0.3)]" />
          <span class="font-body text-xs font-bold text-ink uppercase tracking-wider">Angular</span>
        </div>

        <!-- Tier 2 Icon: VS Code -->
        <div
          appReveal="zoom"
          [revealDelay]="1100"
          class="absolute top-[34%] right-[24%] pointer-events-auto
                 w-10 h-10 flex items-center justify-center
                 bg-white/10 backdrop-blur-md border border-white/20
                 rounded-full shadow-lg hover:bg-white/15 hover:scale-110
                 transition-all duration-300 animate-drift cursor-default"
          style="--rotate: 5deg; animation-duration: 9s; animation-delay: 1.5s;"
        >
          <svg class="w-5 h-5 text-[#007ACC]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.985 17.56a1.5 1.5 0 0 0-.47-1.087L16.275 10l7.24-6.474a1.5 1.5 0 0 0 .47-1.086 1.488 1.488 0 0 0-.853-1.353L18.232.193a1.5 1.5 0 0 0-1.705.29L6.963 8.784l-4.12-3.127a1 1 0 0 0-1.277.057l-1.321 1.2a1 1 0 0 0-.001 1.479L4.14 12 .244 15.607a1 1 0 0 0 .001 1.479l1.321 1.2a1 1 0 0 0 1.277.057l4.12-3.127 9.564 8.301a1.5 1.5 0 0 0 1.705.29l4.901-2.36a1.493 1.493 0 0 0 .853-1.353l-.001-.034zm-18.02-5.56l7.175-5.46v10.92L5.965 12z"/>
          </svg>
        </div>

        <!-- Card 2: TypeScript -->
        <div
          appReveal="zoom"
          [revealDelay]="900"
          class="absolute top-[44%] right-[8%] pointer-events-auto
                 flex items-center gap-3 px-4 py-3
                 bg-white/10 backdrop-blur-md border border-white/20
                 rounded-2xl shadow-xl hover:bg-white/15 hover:scale-105
                 transition-all duration-300 animate-drift cursor-default"
          style="--rotate: -2deg; animation-duration: 8s; animation-delay: 1s;"
        >
          <img src="assets/icon/Typescript.svg.webp" alt="TypeScript Logo" class="w-7 h-7 object-contain drop-shadow-[0_2px_8px_rgba(49,120,198,0.3)]" />
          <span class="font-body text-xs font-bold text-ink uppercase tracking-wider">TypeScript</span>
        </div>

        <!-- Tier 2 Icon: Figma -->
        <div
          appReveal="zoom"
          [revealDelay]="1150"
          class="absolute top-[56%] right-[5%] pointer-events-auto
                 w-10 h-10 flex items-center justify-center
                 bg-white/10 backdrop-blur-md border border-white/20
                 rounded-full shadow-lg hover:bg-white/15 hover:scale-110
                 transition-all duration-300 animate-drift cursor-default"
          style="--rotate: -6deg; animation-duration: 7.5s; animation-delay: 0.5s;"
        >
          <img src="assets/icon/figma.jpg" alt="Figma Logo" class="w-5 h-5 object-contain" />
        </div>

        <!-- Card 3: React -->
        <div
          appReveal="zoom"
          [revealDelay]="1000"
          class="absolute top-[66%] right-[14%] pointer-events-auto
                 flex items-center gap-3 px-4 py-3
                 bg-white/10 backdrop-blur-md border border-white/20
                 rounded-2xl shadow-xl hover:bg-white/15 hover:scale-105
                 transition-all duration-300 animate-drift cursor-default"
          style="--rotate: 4deg; animation-duration: 7s; animation-delay: 2s;"
        >
          <img src="assets/icon/React-icon.svg.webp" alt="React Logo" class="w-7 h-7 object-contain drop-shadow-[0_2px_8px_rgba(97,218,251,0.4)]" />
          <span class="font-body text-xs font-bold text-ink uppercase tracking-wider">React</span>
        </div>

        <!-- Plus Sign 1 (dekoratif) -->
        <div
          appReveal="zoom"
          [revealDelay]="1300"
          class="absolute top-[16%] right-[10%] pointer-events-none select-none"
        >
          <svg class="w-4 h-4 text-ink/10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
        </div>

        <!-- Plus Sign 2 (dekoratif) -->
        <div
          appReveal="zoom"
          [revealDelay]="1350"
          class="absolute top-[75%] right-[22%] pointer-events-none select-none"
        >
          <svg class="w-4 h-4 text-ink/10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class Hero implements AfterViewInit, OnDestroy {
  protected i18n = inject(I18nService);
  private hostEl = inject(ElementRef<HTMLElement>);

  /** IntersectionObserver — auto-pauses audio when #home leaves viewport. */
  private sectionObserver!: IntersectionObserver;

  @ViewChild('heroVideo') private videoRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('heroAudio') private audioRef!: ElementRef<HTMLAudioElement>;

  /** Reactive audio state — drives the speaker icon without triggering full CD cycle. */
  readonly audioOn = signal(false);

  /** Asset paths — single source of truth, easy to update. */
  protected readonly videoSrc = 'assets/character/vid 1.webm';
  protected readonly audioSrc = 'assets/audio/vid 1.mp3';

  readonly stats: HeroStat[] = [
    { value: '1+', label: 'Years Exp.' },
    { value: '10+', label: 'Projects' },
  ];

  ngAfterViewInit(): void {
    // Ensure video autoplays (some browsers need an explicit call after view init)
    const video = this.videoRef.nativeElement;
    video.muted = true;
    video.play().catch(() => {/* silently handled — browser policy */});

    // Auto-pause audio when the hero section scrolls out of view
    this.sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && this.audioOn()) {
          this.audioRef.nativeElement.pause();
          this.audioOn.set(false);
        }
      },
      { threshold: 0.1 } // fires when < 10% of the section is visible
    );
    this.sectionObserver.observe(this.hostEl.nativeElement.querySelector('#home') ?? this.hostEl.nativeElement);
  }

  ngOnDestroy(): void {
    this.sectionObserver?.disconnect();
  }

  toggleAudio(): void {
    const audio = this.audioRef.nativeElement;
    const video = this.videoRef.nativeElement;
    
    if (this.audioOn()) {
      audio.pause();
      this.audioOn.set(false);
    } else {
      // Synchronize audio to the current video time
      audio.currentTime = video.currentTime;
      audio.play().catch(() => {/* browser blocked — user must interact first */});
      this.audioOn.set(true);
    }
  }

  /** Pause audio when user navigates away or switches tabs */
  @HostListener('document:visibilitychange', [])
  onVisibilityChange(): void {
    if (document.hidden && this.audioOn()) {
      this.audioRef.nativeElement.pause();
      this.audioOn.set(false);
    }
  }

  scrollTo(id: string, event: Event): void {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
