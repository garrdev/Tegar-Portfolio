import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService, ProjectDescKey } from '../../services/i18n.service';

export interface Project {
  id: number;
  title: string;
  descKey: ProjectDescKey;
  stack: string[];
  caseStudyUrl: string;
  liveUrl?: string;
  category: string;
  image: string;
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="projects" class="section-padding bg-snow">
      <div class="max-w-7xl mx-auto">

        <!-- Section Header -->
        <div class="mb-12 md:mb-16">
          <h2 class="font-body font-black text-ink text-4xl sm:text-6xl md:text-7xl mb-4 tracking-tighter uppercase leading-[0.9]">
            {{ i18n.t().projects.featured_title }}
          </h2>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ng-container *ngFor="let project of projects; let i = index">
            <article class="bg-white border-border/40 border p-6 rounded-2xl flex flex-col group hover:shadow-xl transition-all duration-500 relative overflow-hidden">
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
                  {{ i18n.t().projects.descriptions[project.descKey] }}
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
                <a [href]="project.liveUrl" target="_blank" *ngIf="project.liveUrl" class="text-ink hover:text-electric transition-colors">
                  {{ i18n.t().projects.live_demo }}
                </a>
                <span class="text-border/60" *ngIf="project.liveUrl">|</span>
                <a [href]="project.caseStudyUrl" target="_blank" class="text-ink hover:text-electric transition-colors">
                  {{ i18n.t().projects.case_study }}
                </a>
              </div>
            </article>
          </ng-container>
        </div>

      </div>

      <!-- Marquee transition -->
      <div class="mt-20 border-y border-ink/10 py-8 overflow-hidden bg-white">
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

  projects: Project[] = [
    {
      id: 1,
      title: 'EYEGIL | Partner Digitalmu',
      descKey: 'eyegil',
      stack: ['Laravel', 'Bootstrap', 'UI/UX Design', 'Enterprise Solutions'],
      caseStudyUrl: '#',
      liveUrl: 'https://eyegil.com/',
      category: 'Digital Agency',
      image: 'assets/Project/landing page eyegil.png',
      featured: true,
    },
    {
      id: 2,
      title: 'AMAZAIN Training & Consulting',
      descKey: 'amazain',
      stack: ['Laravel', 'Bootstrap', 'Swiper.js', 'Corporate Training'],
      caseStudyUrl: '#',
      liveUrl: 'https://amazaintraining.com/',
      category: 'Education/Consulting',
      image: 'assets/Project/landing page amazain.png',
    },
    {
      id: 3,
      title: 'CMS Amazain',
      descKey: 'cms_amazain',
      stack: ['Laravel', 'Bootstrap', 'MariaDB', 'Back-Office System'],
      caseStudyUrl: '#',
      category: 'CMS',
      image: 'assets/Project/cms amazain.png',
    },
    {
      id: 4,
      title: 'Herokind Academy',
      descKey: 'herokind',
      stack: ['Laravel', 'Bootstrap', 'MySQL', 'Educational Platform'],
      caseStudyUrl: '#',
      liveUrl: 'https://herokindacademy.eyegil.com/',
      category: 'EdTech',
      image: 'assets/Project/landing page herokind.jpeg',
    },
    {
      id: 5,
      title: 'EYEGIL V1',
      descKey: 'eyegil_v1',
      stack: ['Laravel', 'Bootstrap', 'UI/UX Design'],
      caseStudyUrl: '#',
      liveUrl: 'https://eyegil.com/',
      category: 'Digital Agency',
      image: 'assets/Project/landing page eyegil V!.png',
    },
    {
      id: 6,
      title: 'Developer Portfolio',
      descKey: 'portfolio',
      stack: ['Angular 21', 'Signals', 'Tailwind CSS', 'Zoneless', 'TypeScript'],
      caseStudyUrl: '#',
      category: 'Portfolio',
      image: 'assets/Project/first porto.png',
    },
  ];
}
