import { Component, ChangeDetectionStrategy } from '@angular/core';

const ITEMS = [
  'DEVELOPMENT',
  'DESIGN',
  'ANIMATION',
  'PERFORMANCE',
  'ACCESSIBILITY',
];

@Component({
  selector: 'app-marquee',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="marquee-wrapper">
      <div class="marquee-track">
        <!-- Buffer 1 -->
        <div class="marquee-inner animate-marquee" aria-hidden="true">
          @for (item of items; track item) {
            <span class="marquee-item">{{ item }}</span>
            <span class="marquee-sep" aria-hidden="true">✦</span>
          }
        </div>
        <!-- Buffer 2 (clone for seamless loop) -->
        <div class="marquee-inner animate-marquee" aria-hidden="true">
          @for (item of items; track item) {
            <span class="marquee-item">{{ item }}</span>
            <span class="marquee-sep" aria-hidden="true">✦</span>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .marquee-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
      background-color: #2563eb;
      border-top: 3px solid #0f172a;
      border-bottom: 3px solid #0f172a;
      transform: rotate(-1.2deg) scaleX(1.05);
      z-index: 10;
      margin: -12px 0;
      padding: 14px 0;
    }

    .marquee-track {
      display: flex;
      width: max-content;
    }

    .marquee-inner {
      display: flex;
      align-items: center;
      gap: 0;
      white-space: nowrap;
    }

    .marquee-item {
      font-family: var(--font-body);
      font-weight: 900;
      font-size: clamp(0.9rem, 2vw, 1.25rem);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #ffffff;
      padding: 0 1.5rem;
    }

    .marquee-sep {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.75rem;
      flex-shrink: 0;
    }

    /* Override global hover-pause rule */
    .marquee-inner:hover,
    .marquee-inner.animate-marquee:hover {
      animation-play-state: running !important;
    }
  `],
})
export class Marquee {
  readonly items = ITEMS;
}
