import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../services/i18n.service';
import { RevealDirective } from '../../directives/reveal.directive';
import { PROJECTS } from '../../data/projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="projects" class="section-shell section-shell-right section-padding bg-snow">
      <div class="section-wordmark left-4 top-20 hidden text-[5rem] md:block md:text-[8rem] lg:text-[10rem]">
        BEST<br/>WORK
      </div>

      <div class="max-w-7xl mx-auto">

        <!-- Section Header -->
        <div appReveal="up" class="mb-12 md:mb-16">
          <div class="section-stamp mb-5 w-max">Selected Case Studies</div>
          <h2 class="font-body font-black text-ink text-4xl sm:text-6xl md:text-7xl mb-4 tracking-tighter uppercase leading-[0.9]">
            {{ i18n.t().projects.featured_title }}
          </h2>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ng-container *ngFor="let project of projects; let i = index">
            <article
              [appReveal]="i % 2 === 0 ? 'left' : 'right'"
              [revealDelay]="120 + i * 90"
              class="bg-white border-border/40 border p-6 rounded-2xl flex flex-col group hover:shadow-xl transition-all duration-500 relative overflow-hidden"
            >
              <div class="absolute right-5 top-5 rounded-full border border-electric/15 bg-white/95 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-electric/80">
                0{{ i + 1 }}
              </div>

              <!-- Project Image -->
              <div class="aspect-video bg-border/20 rounded-xl mb-6 overflow-hidden relative">
                <img
                  [src]="project.image"
                  [alt]="project.title"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              <!-- Content -->
              <div class="flex-1">
                 <h3 class="font-body font-black text-ink text-2xl mb-2 transition-colors group-hover:text-electric tracking-tight">
                  {{ project.title }}
                </h3>
                <p class="font-body text-ink-subtle text-sm leading-relaxed mb-6 line-clamp-2">
                  {{ project.content[i18n.lang()].summary }}
                </p>

                <!-- Tech Stack Badges (Gray style from image) -->
                <div class="flex flex-wrap gap-2 mb-6">
                  <ng-container *ngFor="let tech of project.stack">
                    <span class="font-body text-[10px] font-bold text-ink-subtle bg-border/30 px-3 py-1.5 rounded-lg uppercase tracking-wider transition-colors hover:bg-border/50">
                      {{ tech }}
                    </span>
                  </ng-container>
                </div>
              </div>

              <!-- Links -->
              <div class="flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest pt-4 border-t border-border/40">
                <a [routerLink]="['/projects', project.slug]" class="text-ink hover:text-electric transition-colors">
                  {{ i18n.t().projects.case_study }}
                </a>
              </div>
            </article>
          </ng-container>
        </div>

      </div>

      <!-- Marquee transition -->
      <div appReveal="soft" [revealDelay]="180" class="mt-20 border-y border-ink/10 py-8 overflow-hidden bg-white">
        <div class="animate-marquee">
          <div class="flex items-center gap-12 text-ink/40 font-body font-black text-2xl md:text-4xl uppercase tracking-tighter shrink-0 px-6">
            <span>Selected Projects</span>
            <span class="text-electric">•</span>
            <span>Digital Solutions</span>
            <span class="text-electric">•</span>
            <span>Brutalist Design</span>
            <span class="text-electric">•</span>
            <span>Performance first</span>
            <span class="text-electric">•</span>
          </div>
          <!-- Duplicate for seamless loop -->
          <div class="flex items-center gap-12 text-ink/40 font-body font-black text-2xl md:text-4xl uppercase tracking-tighter shrink-0 px-6">
            <span>Selected Projects</span>
            <span class="text-electric">•</span>
            <span>Digital Solutions</span>
            <span class="text-electric">•</span>
            <span>Brutalist Design</span>
            <span class="text-electric">•</span>
            <span>Performance first</span>
            <span class="text-electric">•</span>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class Projects {
  protected i18n = inject(I18nService);

  projects = PROJECTS;
}
