import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';
import { environment } from '../../../environments/environment';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="bg-ink text-white">
      <!-- Top separator -->
      <div class="h-1 bg-gradient-to-r from-electric via-violet-500 to-electric"></div>

      <div class="max-w-7xl mx-auto px-6 py-16">
        <div appReveal="up" class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          <!-- Brand -->
          <div class="md:col-span-1 flex flex-col items-center md:items-start">
            <div class="font-body font-black text-4xl mb-3 uppercase tracking-tighter">
              TEGAR<span class="text-electric">.</span>
            </div>
            <p class="font-body text-white/60 text-sm leading-relaxed max-w-xs text-center md:text-left">
              {{ i18n.t()['footer']['tagline'] }}
            </p>
            <!-- Social links -->
            <div class="flex gap-4 mt-6 justify-center md:justify-start">
              <a
                href="https://github.com/tegarbay"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-github"
                class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all"
                aria-label="GitHub"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a
                [href]="'https://' + env.contact.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-linkedin"
                class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all"
                aria-label="LinkedIn"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                [href]="'mailto:' + env.contact.email"
                id="footer-email"
                class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all"
                aria-label="Email"
              >
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
              <!-- WhatsApp -->
              <a
                [href]="'https://wa.me/' + env.contact.whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-whatsapp"
                class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all"
                aria-label="WhatsApp"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="text-center md:text-left">
            <h3 class="font-body text-sm font-semibold text-white/40 uppercase tracking-widest mb-5">{{ i18n.t()['footer']['nav_title'] }}</h3>
            <ul class="space-y-3">
              <li *ngFor="let link of navLinks">
                <a [href]="link.href"
                   class="font-body text-white/70 hover:text-white transition-colors text-sm">
                  {{ i18n.t()['nav'][link.key] }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Currently / Personal Status -->
          <div class="flex flex-col items-center md:items-start">
            <h3 class="font-body text-sm font-semibold text-white/40 uppercase tracking-widest mb-5 w-full text-center md:text-left">
              {{ i18n.t()['footer']['currently']['title'] }}
            </h3>
            <div class="w-full max-w-[280px] rounded-2xl bg-white/[0.03] border border-white/10 p-5 backdrop-blur-sm hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 group">
              <!-- Status item -->
              <div class="flex items-center gap-3 mb-4 justify-start text-left">
                <span class="relative flex h-2.5 w-2.5 shrink-0">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span class="font-body text-xs text-white/80 tracking-wide">
                  {{ i18n.t()['footer']['currently']['status'] }}
                </span>
              </div>
              
              <!-- Location item -->
              <div class="flex items-center gap-3 justify-start text-left">
                <svg class="w-4 h-4 text-white/50 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span class="font-body text-xs text-white/60">
                  {{ i18n.t()['footer']['currently']['location'] }}
                </span>
              </div>
            </div>
          </div>

        </div>

        <!-- Bottom bar -->
        <div class="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="font-mono text-xs text-white/40">
            © 2026 Tegar Bayu. All rights reserved.
          </p>
          <p class="font-mono text-xs text-white/40">
            Handcrafted in Yogyakarta ☕
          </p>
        </div>
      </div>
    </footer>
  `,
})
export class Footer {
  protected i18n = inject(I18nService);
  readonly env = environment;
  currentYear = new Date().getFullYear();

  navLinks: { href: string; key: keyof typeof import('../../services/i18n.service').translations.EN.nav }[] = [
    { href: '/#home', key: 'home' },
    { href: '/#about', key: 'about' },
    { href: '/#projects', key: 'projects' },
    { href: '/#tools', key: 'tools' },
    { href: '/#contact', key: 'contact' },
  ];


}
