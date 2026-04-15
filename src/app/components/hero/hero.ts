import { Component, inject, ChangeDetectionStrategy, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      id="home"
      class="relative min-h-screen bg-snow flex flex-col items-center justify-center overflow-hidden pt-32 pb-20"
    >
      <!-- Top banner text -->
      <div class="absolute top-24 left-0 w-full text-center z-0">
        <span class="font-display italic text-ink text-2xl md:text-5xl tracking-tight opacity-90 uppercase">
          Web Developer
        </span>
      </div>

      <!-- Rotating Status Badge -->
      <div class="absolute top-32 right-12 md:top-48 md:right-24 z-20 hidden sm:block">
        <div class="relative w-24 h-24 md:w-32 md:h-32">
          <div class="absolute inset-0 animate-spin-slow">
            <svg viewBox="0 0 100 100" class="w-full h-full">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
              <text class="font-body font-black uppercase text-[10px] tracking-widest fill-ink">
                <textPath xlink:href="#circlePath" spacing="auto">
                  • AVAILABLE FOR NEW PROJECTS • AVAILABLE FOR NEW PROJECTS
                </textPath>
              </text>
            </svg>
          </div>
          <div class="absolute inset-0 flex items-center justify-center">
             <div class="w-2 h-2 bg-electric rounded-full animate-pulse shadow-[0_0_10px_#2563eb]"></div>
          </div>
        </div>
      </div>

      <!-- MAIN MASSIVE TEXT LAYER (Background-ish but visible) -->
      <div class="relative z-0 w-full max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        <h1
          class="font-body font-black text-ink leading-[0.85] md:leading-[0.8] tracking-tighter select-none whitespace-nowrap pointer-events-none text-6xl sm:text-8xl md:text-[12rem] lg:text-[15rem]"
        >
          I'M TEGAR.
        </h1>
        <h1
          class="font-body font-black text-ink leading-[0.85] md:leading-[0.8] tracking-tighter select-none whitespace-nowrap pointer-events-none text-6xl sm:text-8xl md:text-[12rem] lg:text-[15rem]"
        >
          FRONT-END
        </h1>
        <h1
          class="font-body font-black text-ink leading-[0.85] md:leading-[0.8] tracking-tighter select-none whitespace-nowrap pointer-events-none text-6xl sm:text-8xl md:text-[12rem] lg:text-[15rem]"
        >
          ENGINEER.
        </h1>
      </div>

      <!-- PROFILE PHOTO OVERLAP LAYER -->
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-full max-w-[450px] md:max-w-500 h-[450px] md:h-[650px] group">
        <div class="w-full h-full relative">
           <img
            src="assets/image01.png"
            alt="Tegar Bayu"
            class="w-full h-full object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          />
          <div class="absolute inset-0 bg-ink-muted/10 rounded-2xl"></div>
        </div>
      </div>

      <!-- CTAs (Top Layer) -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 w-max z-20">
        <a href="#projects" class="bg-electric text-white font-body font-bold px-8 py-3.5 rounded-2xl shadow-brutal-blue transition-all hover:scale-105 active:scale-95" (click)="scrollTo('projects', $event)">
          VIEW WORK
        </a>
      </div>

      <!-- Decorative side text blocks -->
      <div class="absolute left-10 bottom-10 max-w-[200px] hidden lg:block z-20">
        <div class="w-10 h-1 bg-ink mb-4"></div>
        <p class="font-body text-[11px] leading-relaxed text-ink uppercase font-bold tracking-wider">
          {{ i18n.t().hero.decorative_left }}
        </p>
      </div>

      <div class="absolute right-10 bottom-10 max-w-[200px] hidden lg:block z-20 text-right">
        <div class="w-10 h-1 bg-ink mb-4 ml-auto"></div>
        <p class="font-body text-[11px] leading-relaxed text-ink uppercase font-bold tracking-wider">
          {{ i18n.t().hero.decorative_right }}
        </p>
      </div>
    </section>
  `,
  styles: [],
})
export class Hero {
  protected i18n = inject(I18nService);

  stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '20+', label: 'Projects Shipped' },
    { value: '100%', label: 'Standalone Components' },
    { value: 'v21', label: 'Angular Version' },
  ];

  scrollTo(id: string, event: Event): void {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
