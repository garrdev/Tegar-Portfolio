import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="contact" class="section-padding bg-snow relative overflow-hidden">
      <!-- Decorative background text -->
      <div class="absolute -bottom-10 -right-10 md:-bottom-20 md:-right-20 pointer-events-none select-none opacity-5 md:opacity-10 z-0">
        <span class="font-display font-black text-ink italic text-[8rem] sm:text-[12rem] md:text-[20rem] leading-[0.8]">
          HELLO
        </span>
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        <!-- Label -->
        <span class="section-label mb-4 block animate-fade-in">
          {{ i18n.t().contact.label }}
        </span>

        <!-- Heading -->
        <h2 class="font-body font-black text-ink text-4xl sm:text-6xl md:text-8xl mb-8 max-w-4xl animate-fade-in-up leading-[0.9]">
          {{ i18n.t().contact.heading }}
        </h2>

        <!-- Subheading -->
        <p class="font-body text-lg md:text-xl text-ink-subtle mb-12 max-w-2xl animate-fade-in-up" style="animation-delay: 0.1s">
          {{ i18n.t().contact.subheading }}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap gap-6 animate-fade-in-up relative z-20" style="animation-delay: 0.2s">
          <a
            [href]="'https://mail.google.com/mail/?view=cm&fs=1&to=' + env.contact.email"
            target="_blank"
            class="btn-primary group"
          >
            {{ i18n.t().contact.cta_email }}
            <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a
            [href]="'https://' + env.contact.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-outline group"
          >
            {{ i18n.t().contact.cta_linkedin }}
            <svg class="w-5 h-5 transition-opacity opacity-50 group-hover:opacity-100" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
            </svg>
          </a>
        </div>

        <!-- Secondary Info -->
        <div class="mt-24 pt-12 border-t border-border/40 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h4 class="font-mono text-xs font-bold text-electric uppercase tracking-widest mb-4">Availability</h4>
            <p class="font-body text-ink-subtle">
              Based in Indonesia. Working hours: GMT+7 (Mon-Fri 09:00 - 17:00).
            </p>
          </div>
          <div>
            <h4 class="font-mono text-xs font-bold text-electric uppercase tracking-widest mb-4">Inquiries</h4>
            <p class="font-body text-ink-subtle">
              Expect a response within 24-48 hours for general inquiries.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class Contact {
  protected i18n = inject(I18nService);
  protected env = environment;
}
