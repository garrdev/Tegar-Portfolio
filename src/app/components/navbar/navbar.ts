import {
  Component,
  inject,
  signal,
  HostListener,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { I18nService } from '../../services/i18n.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header
      class="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4"
    >
      <nav
        class="flex items-center justify-between px-6 py-2.5 rounded-full border transition-all duration-500"
        [ngClass]="(scrolled() || mobileMenuOpen()) 
          ? 'bg-white border-border/40 shadow-[0_8px_30px_rgba(0,0,0,0.08)]' 
          : 'bg-white/0 border-border/40 shadow-none'"
      >
        <!-- Logo -->
        <a
          href="#home"
          class="font-body font-black text-ink text-sm tracking-tighter flex-shrink-0 uppercase"
          (click)="scrollTo('home', $event)"
        >
          Tegar<span class="text-electric">.</span>
        </a>

        <!-- Desktop: Nav Links & Toggle -->
        <div class="hidden md:flex items-center gap-1">
          <ng-container *ngFor="let link of navLinks; let last = last">
            <a
              [href]="'#' + link.id"
              class="font-body text-[11px] font-bold tracking-[0.05em] px-2 py-1 uppercase transition-all duration-200"
              [ngClass]="{
                'text-electric': activeSection() === link.id,
                'text-ink hover:text-electric': activeSection() !== link.id
              }"
              (click)="scrollTo(link.id, $event)"
            >
              {{ i18n.t()['nav'][link.key] }}
            </a>
            <span *ngIf="!last" class="text-border/60 text-[10px]">|</span>
          </ng-container>

          <!-- Divider before toggle -->
          <div class="w-px h-3 bg-border/60 mx-1.5 hidden md:block"></div>

          <!-- Language Toggle -->
          <button
            class="hidden md:flex items-center gap-1 px-2 py-1 hover:text-electric transition-colors"
            (click)="i18n.toggle()"
          >
            <span
              class="font-body text-[10px] font-bold"
              [ngClass]="i18n.lang() === 'ID' ? 'text-electric' : 'text-ink-subtle'"
            >ID</span>
            <span class="text-border/60 text-[10px]">|</span>
            <span
              class="font-body text-[10px] font-bold"
              [ngClass]="i18n.lang() === 'EN' ? 'text-electric' : 'text-ink-subtle'"
            >EN</span>
          </button>
        </div>

        <!-- Mobile: Hamburger Button -->
        <button
          class="flex md:hidden flex-col items-center justify-center w-8 h-8 gap-1.5"
          (click)="mobileMenuOpen.set(!mobileMenuOpen())"
        >
          <div class="w-6 h-0.5 bg-ink transition-transform duration-300" [ngClass]="{'rotate-45 translate-y-2': mobileMenuOpen()}"></div>
          <div class="w-6 h-0.5 bg-ink transition-opacity duration-300" [ngClass]="{'opacity-0': mobileMenuOpen()}"></div>
          <div class="w-6 h-0.5 bg-ink transition-transform duration-300" [ngClass]="{'-rotate-45 -translate-y-2': mobileMenuOpen()}"></div>
        </button>

        <!-- Mobile Menu Overlay -->
        <div
          *ngIf="mobileMenuOpen()"
          class="absolute top-16 left-0 right-0 p-4 bg-white border border-border/40 rounded-3xl shadow-2xl md:hidden animate-fade-in"
        >
          <div class="flex flex-col gap-4">
            <a
              *ngFor="let link of navLinks"
              [href]="'#' + link.id"
              class="font-body text-sm font-bold tracking-widest px-4 py-2 uppercase text-ink"
              (click)="scrollTo(link.id, $event); mobileMenuOpen.set(false)"
            >
              {{ i18n.t()['nav'][link.key] }}
            </a>
            <div class="h-px bg-border/20 mx-4 my-2"></div>
            <button
              class="flex items-center gap-2 px-4 py-2 hover:text-electric transition-colors"
              (click)="i18n.toggle(); mobileMenuOpen.set(false)"
            >
              <span class="font-body text-[10px] font-bold" [ngClass]="i18n.lang() === 'ID' ? 'text-electric' : 'text-ink-subtle'">ID</span>
              <span class="text-border/60 text-[10px]">|</span>
              <span class="font-body text-[10px] font-bold" [ngClass]="i18n.lang() === 'EN' ? 'text-electric' : 'text-ink-subtle'">EN</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    :host { display: block; }
  `],
})
export class Navbar {
  protected i18n = inject(I18nService);
  private readonly router = inject(Router);

  scrolled = signal(false);
  activeSection = signal('home');
  mobileMenuOpen = signal(false);

  navLinks: { id: string; key: keyof typeof import('../../services/i18n.service').translations.EN.nav }[] = [
    { id: 'home', key: 'home' },
    { id: 'about', key: 'about' },
    { id: 'projects', key: 'projects' },
    { id: 'tools', key: 'tools' },
    { id: 'contact', key: 'contact' },
  ];

  constructor() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        this.mobileMenuOpen.set(false);
        this.updateActiveSection();
      });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.scrolled.set(window.scrollY > 40);
    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    const sections = ['home', 'about', 'projects', 'tools', 'contact'];
    for (const id of [...sections].reverse()) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 100) {
        this.activeSection.set(id);
        return;
      }
    }
    this.activeSection.set('home');
  }

  async scrollTo(id: string, event: Event): Promise<void> {
    event.preventDefault();

    if (this.router.url !== '/') {
      await this.router.navigate(['/'], { fragment: id });
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
