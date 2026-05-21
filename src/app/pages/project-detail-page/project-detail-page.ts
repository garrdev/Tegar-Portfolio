import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { environment } from '../../../environments/environment';
import { getProjectBySlug } from '../../data/projects.data';
import { RevealDirective } from '../../directives/reveal.directive';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-project-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="section-shell section-shell-right bg-snow">
      <ng-container *ngIf="project() as project; else notFound">
        <section class="section-padding pt-36 md:pt-40">
          <div class="section-wordmark right-4 top-20 hidden text-[5rem] md:block md:text-[8rem] lg:text-[11rem]">
            CASE<br/>STUDY
          </div>

          <div class="max-w-7xl mx-auto">
            <a
              appReveal="down"
              routerLink="/"
              fragment="projects"
              class="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-electric"
            >
              <span aria-hidden="true">&larr;</span>
              {{ copy().back }}
            </a>

            <div class="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start lg:gap-16">
              <div class="min-w-0">
                <div appReveal="soft" class="section-stamp mb-5 w-max">{{ copy().detailStamp }}</div>
                <span appReveal="up" class="section-label">{{ project.category }}</span>
                <h1
                  appReveal="up"
                  [revealDelay]="90"
                  class="mt-4 font-body text-4xl font-black uppercase leading-[0.9] tracking-tighter text-ink sm:text-6xl md:text-7xl"
                >
                  {{ project.title }}
                </h1>
                <p
                  appReveal="up"
                  [revealDelay]="180"
                  class="mt-6 max-w-3xl text-lg leading-relaxed text-ink-subtle md:text-xl"
                >
                  {{ content(project).summary }}
                </p>

                <div appReveal="up" [revealDelay]="240" class="mt-8 flex flex-wrap gap-3">
                  <span
                    *ngFor="let tech of project.stack"
                    class="rounded-full border border-border bg-white px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-ink-subtle"
                  >
                    {{ tech }}
                  </span>
                </div>

                <div
                  appReveal="zoom"
                  [revealDelay]="280"
                  class="mt-14 overflow-hidden rounded-[2rem] border border-border/60 bg-white p-3 brutal-shadow"
                >
                  <div class="aspect-[16/10] overflow-hidden rounded-[1.4rem] bg-border/20">
                    <img [src]="project.image" [alt]="project.title" class="h-full w-full object-cover object-top" />
                  </div>
                </div>

                <div class="mt-16 grid gap-8">
                  <article appReveal="up" class="rounded-[2rem] border border-border/60 bg-white p-8 md:p-10">
                    <h2 class="font-body text-3xl font-black tracking-tight text-ink md:text-4xl">
                      {{ copy().summaryTitle }}
                    </h2>
                    <p class="mt-5 text-base leading-relaxed text-ink-subtle md:text-lg">
                      {{ content(project).intro }}
                    </p>
                  </article>

                  <article appReveal="up" [revealDelay]="90" class="rounded-[2rem] border border-border/60 bg-white p-8 md:p-10">
                    <h2 class="font-body text-3xl font-black tracking-tight text-ink md:text-4xl">
                      {{ copy().challengeTitle }}
                    </h2>
                    <p class="mt-5 text-base leading-relaxed text-ink-subtle md:text-lg">
                      {{ content(project).challenge }}
                    </p>
                  </article>

                  <article appReveal="up" [revealDelay]="180" class="rounded-[2rem] border border-border/60 bg-white p-8 md:p-10">
                    <h2 class="font-body text-3xl font-black tracking-tight text-ink md:text-4xl">
                      {{ copy().journeyTitle }}
                    </h2>
                    <p class="mt-5 text-base leading-relaxed text-ink-subtle md:text-lg">
                      {{ content(project).solution }}
                    </p>

                    <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div class="overflow-hidden rounded-[1.5rem] border border-border/50 bg-snow p-3">
                        <img
                          [src]="project.image"
                          [alt]="project.title + ' preview 1'"
                          class="aspect-[4/3] w-full rounded-[1rem] object-cover object-top"
                        />
                      </div>
                      <div class="overflow-hidden rounded-[1.5rem] border border-border/50 bg-snow p-3">
                        <img
                          [src]="project.image"
                          [alt]="project.title + ' preview 2'"
                          class="aspect-[4/3] w-full rounded-[1rem] object-cover object-center"
                        />
                      </div>
                    </div>
                  </article>

                  <article appReveal="up" [revealDelay]="260" class="rounded-[2rem] border border-border/60 bg-electric p-8 text-white md:p-10">
                    <div class="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                      {{ copy().outcomeEyebrow }}
                    </div>
                    <h2 class="mt-3 font-body text-3xl font-black tracking-tight text-white md:text-4xl">
                      {{ copy().outcomeTitle }}
                    </h2>
                    <p class="mt-5 text-base leading-relaxed text-white/90 md:text-lg">
                      {{ content(project).impact }}
                    </p>
                  </article>
                </div>
              </div>

              <aside class="lg:self-start lg:pt-10">
                <div class="lg:sticky lg:top-24 lg:grid lg:gap-6">
                  <div
                    appReveal="right"
                    [revealDelay]="220"
                    class="rounded-[2rem] border border-border/60 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                  >
                    <h3 class="font-display text-2xl font-bold tracking-tight text-ink">
                      {{ copy().overviewTitle }}
                    </h3>

                    <div class="mt-6 space-y-5 border-t border-border/50 pt-6">
                      <div>
                        <div class="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-electric">{{ copy().overviewCategory }}</div>
                        <div class="mt-2 font-body font-semibold text-ink">{{ project.category }}</div>
                      </div>
                      <div>
                        <div class="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-electric">{{ copy().overviewClient }}</div>
                        <div class="mt-2 font-body font-semibold text-ink">{{ project.client }}</div>
                      </div>
                      <div>
                        <div class="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-electric">{{ copy().overviewRole }}</div>
                        <div class="mt-2 font-body font-semibold text-ink">{{ project.role }}</div>
                      </div>
                      <div>
                        <div class="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-electric">{{ copy().overviewPeriod }}</div>
                        <div class="mt-2 font-body font-semibold text-ink">{{ project.period }}</div>
                      </div>
                      <div>
                        <div class="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-electric">{{ copy().overviewStack }}</div>
                        <div class="mt-3 flex flex-wrap gap-2">
                          <span
                            *ngFor="let tech of project.stack"
                            class="rounded-full border border-border bg-snow px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-ink-subtle"
                          >
                            {{ tech }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    appReveal="right"
                    [revealDelay]="300"
                    class="mt-6 rounded-[2rem] bg-ink p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)] lg:mt-0"
                  >
                    <h3 class="font-body text-2xl font-black tracking-tight text-white">
                      {{ copy().ctaTitle }}
                    </h3>
                    <p class="mt-4 text-sm leading-relaxed text-white/75">
                      {{ copy().ctaText }}
                    </p>

                    <a
                      [href]="'https://wa.me/' + env.contact.whatsapp"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-electric px-5 py-3 font-body text-sm font-bold uppercase tracking-wide text-white transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      {{ copy().ctaPrimary }}
                    </a>

                    <div class="mt-6 border-t border-white/10 pt-5">
                      <a [href]="'mailto:' + env.contact.email" class="font-body text-sm font-semibold text-white hover:text-electric">
                        {{ copy().ctaSecondary }}
                      </a>
                    </div>

                    <div class="mt-6 flex flex-wrap gap-2">
                      <span
                        *ngFor="let item of project.highlights"
                        class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-body text-[11px] font-semibold uppercase tracking-wide text-white/75"
                      >
                        {{ item }}
                      </span>
                    </div>

                    <a
                      *ngIf="project.liveUrl"
                      [href]="project.liveUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="mt-6 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-white/70 hover:text-white"
                    >
                      {{ copy().liveLink }}
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </ng-container>

      <ng-template #notFound>
        <section class="section-padding pt-40">
          <div class="mx-auto max-w-3xl rounded-[2rem] border border-border/60 bg-white p-10 text-center">
            <div class="section-label">{{ copy().notFoundEyebrow }}</div>
            <h1 class="mt-4 font-body text-4xl font-black uppercase tracking-tighter text-ink">
              {{ copy().notFoundTitle }}
            </h1>
            <a routerLink="/" fragment="projects" class="btn-primary mt-8">
              {{ copy().back }}
            </a>
          </div>
        </section>
      </ng-template>
    </main>
  `,
})
export class ProjectDetailPage {
  private readonly route = inject(ActivatedRoute);
  protected readonly i18n = inject(I18nService);
  protected readonly env = environment;

  protected readonly project = computed(() =>
    getProjectBySlug(this.route.snapshot.paramMap.get('slug')),
  );

  protected readonly copy = computed(() =>
    this.i18n.lang() === 'ID'
      ? {
          back: 'Kembali ke Proyek',
          detailStamp: 'Project Breakdown',
          summaryTitle: 'Ringkasan Proyek',
          challengeTitle: 'Tantangannya',
          journeyTitle: 'Perjalanan Desain',
          outcomeEyebrow: 'Hasil',
          outcomeTitle: 'Dampak Akhir',
          overviewTitle: 'Ringkas Proyek',
          overviewCategory: 'Kategori',
          overviewClient: 'Klien',
          overviewRole: 'Peran',
          overviewPeriod: 'Periode',
          overviewStack: 'Tech Stack',
          ctaTitle: 'Butuh hasil serupa?',
          ctaText:
            'Hubungi saya lewat WhatsApp atau email dengan konteks project kamu. Nanti saya bantu breakdown kebutuhan dan arah eksekusinya.',
          ctaPrimary: 'Chat WhatsApp',
          ctaSecondary: 'Kirim email',
          liveLink: 'Lihat website live',
          notFoundEyebrow: 'Project Tidak Ditemukan',
          notFoundTitle: 'Halaman project yang kamu cari tidak tersedia.',
        }
      : {
          back: 'Back To Projects',
          detailStamp: 'Project Breakdown',
          summaryTitle: 'Project Summary',
          challengeTitle: 'The Challenge',
          journeyTitle: 'The Design Journey',
          outcomeEyebrow: 'Outcome',
          outcomeTitle: 'Final Impact',
          overviewTitle: 'Project Overview',
          overviewCategory: 'Category',
          overviewClient: 'Client',
          overviewRole: 'Role',
          overviewPeriod: 'Timeline',
          overviewStack: 'Tech Stack',
          ctaTitle: 'Need similar results?',
          ctaText:
            'Reach out on WhatsApp or email with your project context. I can help break down the scope and shape the right execution path.',
          ctaPrimary: 'Chat WhatsApp',
          ctaSecondary: 'Send email',
          liveLink: 'Visit live website',
          notFoundEyebrow: 'Project Not Found',
          notFoundTitle: 'The project page you requested is not available.',
        },
  );

  protected content(project: NonNullable<ReturnType<typeof getProjectBySlug>>) {
    return project.content[this.i18n.lang()];
  }
}
