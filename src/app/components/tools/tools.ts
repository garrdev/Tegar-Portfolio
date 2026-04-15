import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';

interface Skill {
  name: string;
  rotate: string;
  translate: string;
  size: 'sm' | 'md' | 'lg';
  delay: string;
}

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="tools" class="section-padding bg-electric overflow-hidden relative">
      <!-- Background Decorations -->
      <div class="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0 opacity-20">
        <div class="absolute top-[10%] left-[5%] w-64 h-64 border-[40px] border-white/10 rounded-full animate-drift" style="--rotate: 45deg"></div>
        <div class="absolute bottom-[10%] right-[5%] w-80 h-80 border-[60px] border-white/5 animate-drift" style="--rotate: -20deg"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)]"></div>
        <div class="absolute top-[40%] right-[15%] w-32 h-32 bg-white/10 rounded-lg animate-spin-slow"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto">

        <!-- Section Header -->
        <div class="text-center mb-16 md:mb-24">
           <h2
            class="font-display italic font-black text-white leading-none text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {{ i18n.t().tools.needs_title }}
          </h2>
        </div>

        <!-- Tech Stack Cloud -->
        <!-- Desktop: Scattered Absolute Positioning -->
        <div class="hidden md:block relative transition-all duration-700" style="height: 600px;">
          <ng-container *ngFor="let skill of skills; let i = index">
            <div
              class="absolute cursor-default bg-white border-2 border-ink text-ink font-body font-bold rounded-full transition-transform duration-300 hover:scale-110 hover:z-50 animate-drift shadow-[4px_4px_0px_#000]"
              [style.--rotate]="skill.rotate.replace('rotate(', '').replace(')', '')"
              [style.animation-delay]="skill.delay"
              [style.top]="skill.top"
              [style.left]="skill.left"
              [style.font-size]="skill.size === 'lg' ? '1.25rem' : skill.size === 'md' ? '1rem' : '0.85rem'"
              [style.padding]="skill.size === 'lg' ? '1rem 2.5rem' : skill.size === 'md' ? '0.75rem 2rem' : '0.6rem 1.5rem'"
              [style.z-index]="i"
            >
              {{ skill.name }}
            </div>
          </ng-container>
        </div>

        <!-- Mobile: Managed Flex Layout -->
        <div class="md:hidden flex flex-wrap justify-center gap-3">
          <ng-container *ngFor="let skill of skills; let i = index">
            <div
              class="bg-white border border-ink text-ink font-body font-bold rounded-full px-4 py-2 text-xs brutal-shadow-sm transition-transform active:scale-95"
              [style.animation-delay]="skill.delay"
            >
              {{ skill.name }}
            </div>
          </ng-container>
        </div>

      </div>
    </section>
  `,
})
export class Tools {
  protected i18n = inject(I18nService);

  skills: (Skill & { top: string; left: string })[] = [
    { name: 'Angular 21', rotate: 'rotate(-8deg)', translate: 'translateY(0)', top: '5%', left: '2%', size: 'lg', delay: '0s' },
    { name: 'TypeScript', rotate: 'rotate(5deg)', translate: 'translateY(-5px)', top: '2%', left: '22%', size: 'lg', delay: '0.2s' },
    { name: 'Signals', rotate: 'rotate(-3deg)', translate: 'translateY(3px)', top: '8%', left: '46%', size: 'md', delay: '0.1s' },
    { name: 'RxJS', rotate: 'rotate(11deg)', translate: 'translateY(-8px)', top: '3%', left: '64%', size: 'sm', delay: '0.3s' },
    { name: 'Tailwind CSS', rotate: 'rotate(-12deg)', translate: 'translateY(2px)', top: '1%', left: '76%', size: 'lg', delay: '0.15s' },

    { name: 'Standalone Components', rotate: 'rotate(6deg)', translate: 'translateY(-3px)', top: '28%', left: '0%', size: 'md', delay: '0.4s' },
    { name: 'Zoneless', rotate: 'rotate(-5deg)', translate: 'translateY(5px)', top: '25%', left: '28%', size: 'sm', delay: '0.25s' },
    { name: 'SCSS', rotate: 'rotate(14deg)', translate: 'translateY(-6px)', top: '22%', left: '48%', size: 'sm', delay: '0.35s' },
    { name: 'API Integration', rotate: 'rotate(-9deg)', translate: 'translateY(4px)', top: '26%', left: '60%', size: 'md', delay: '0.5s' },
    { name: 'Git & GitHub', rotate: 'rotate(4deg)', translate: 'translateY(-2px)', top: '20%', left: '78%', size: 'sm', delay: '0.45s' },

    { name: 'REST API', rotate: 'rotate(-6deg)', translate: 'translateY(6px)', top: '50%', left: '4%', size: 'sm', delay: '0.6s' },
    { name: 'NgRx', rotate: 'rotate(9deg)', translate: 'translateY(-4px)', top: '48%', left: '20%', size: 'md', delay: '0.55s' },
    { name: 'Figma', rotate: 'rotate(-14deg)', translate: 'translateY(3px)', top: '52%', left: '42%', size: 'sm', delay: '0.7s' },
    { name: 'Node.js', rotate: 'rotate(7deg)', translate: 'translateY(-7px)', top: '47%', left: '58%', size: 'md', delay: '0.65s' },
    { name: 'Performance Audit', rotate: 'rotate(-4deg)', translate: 'translateY(2px)', top: '50%', left: '74%', size: 'sm', delay: '0.8s' },

    { name: 'Storybook', rotate: 'rotate(11deg)', translate: 'translateY(-5px)', top: '72%', left: '1%', size: 'sm', delay: '0.9s' },
    { name: 'Unit Testing', rotate: 'rotate(-7deg)', translate: 'translateY(4px)', top: '70%', left: '18%', size: 'md', delay: '0.85s' },
    { name: 'Accessibility', rotate: 'rotate(3deg)', translate: 'translateY(-3px)', top: '75%', left: '40%', size: 'sm', delay: '1s' },
    { name: 'Web Components', rotate: 'rotate(-10deg)', translate: 'translateY(6px)', top: '68%', left: '60%', size: 'md', delay: '0.95s' },
    { name: 'CI/CD', rotate: 'rotate(8deg)', translate: 'translateY(-4px)', top: '73%', left: '80%', size: 'sm', delay: '1.1s' },
  ];

  learningSkills = ['Angular SSR', 'PWA', 'Web Assembly'];
}
