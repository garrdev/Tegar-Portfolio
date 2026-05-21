import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';
import { environment } from '../../../environments/environment';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RevealDirective],
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
        <span appReveal="up" class="section-label mb-4 block">
          {{ i18n.t().contact.label }}
        </span>

        <!-- Heading -->
        <h2 appReveal="up" [revealDelay]="90" class="font-body font-black text-ink text-4xl sm:text-6xl md:text-8xl mb-8 max-w-4xl leading-[0.9]">
          {{ i18n.t().contact.heading }}
        </h2>

        <!-- Subheading -->
        <p appReveal="up" [revealDelay]="180" class="font-body text-lg md:text-xl text-ink-subtle mb-12 max-w-2xl">
          {{ i18n.t().contact.subheading }}
        </p>

        <!-- CTA Buttons -->
        <div appReveal="up" [revealDelay]="260" class="flex flex-wrap gap-6 relative z-20">
          <a
            [href]="'mailto:' + env.contact.email"
            target="_blank"
            class="btn-primary group"
          >
            {{ i18n.t().contact.cta_email }}
            <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a
            [href]="'https://wa.me/' + env.contact.whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-outline group hover:bg-[#25D366] hover:text-white hover:border-[#25D366]"
          >
            {{ i18n.t().contact.cta_whatsapp }}
            <svg class="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.014 12.032c0 2.123.542 4.197 1.57 6.059L0 24l6.105-1.602a11.834 11.834 0 005.937 1.597h.005c6.637 0 12.032-5.396 12.036-12.032a11.84 11.84 0 00-3.577-8.487" />
            </svg>
          </a>
          <a
            [href]="'https://' + env.contact.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-outline group text-ink"
          >
            {{ i18n.t().contact.cta_linkedin }}
            <svg class="w-5 h-5 transition-opacity opacity-50 group-hover:opacity-100" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
            </svg>
          </a>
        </div>

        <!-- Secondary Info -->
        <div class="mt-24 pt-12 border-t border-border/40 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div appReveal="left" [revealDelay]="320">
            <h4 class="font-mono text-xs font-bold text-electric uppercase tracking-widest mb-4">Availability</h4>
            <p class="font-body text-ink-subtle">
              Based in Indonesia. Working hours: GMT+7 (Mon-Fri 09:00 - 17:00).
            </p>
          </div>
          <div appReveal="right" [revealDelay]="380">
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
