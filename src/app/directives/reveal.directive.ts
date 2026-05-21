import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  DestroyRef,
  Directive,
  ElementRef,
  Input,
  PLATFORM_ID,
  Renderer2,
  inject,
} from '@angular/core';

type RevealVariant = 'up' | 'down' | 'left' | 'right' | 'zoom' | 'soft';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements AfterViewInit {
  @Input('appReveal') variant: RevealVariant = 'up';
  @Input() revealDelay = 0;
  @Input() revealDuration = 700;
  @Input() revealOnce = true;
  @Input() revealThreshold = 0.18;

  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;

    this.renderer.addClass(element, 'reveal');
    this.renderer.addClass(element, `reveal-${this.variant}`);
    this.renderer.setStyle(element, '--reveal-delay', `${this.revealDelay}ms`);
    this.renderer.setStyle(element, '--reveal-duration', `${this.revealDuration}ms`);

    if (!isPlatformBrowser(this.platformId) || this.prefersReducedMotion()) {
      this.show(element);
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      this.show(element);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.show(element);

            if (this.revealOnce) {
              observer.unobserve(element);
            }
          } else if (!this.revealOnce) {
            this.hide(element);
          }
        }
      },
      {
        threshold: this.revealThreshold,
        rootMargin: '0px 0px -12% 0px',
      },
    );

    observer.observe(element);
    this.destroyRef.onDestroy(() => observer.disconnect());
  }

  private prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  private show(element: HTMLElement): void {
    this.renderer.addClass(element, 'is-visible');
  }

  private hide(element: HTMLElement): void {
    this.renderer.removeClass(element, 'is-visible');
  }
}
