import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';
import { RevealDirective } from '../../directives/reveal.directive';

const TERMINAL_CONTENT = `{
  "name": "Tegar Bayu Saputra",
  "role": "Frontend Developer",
  "location": "Yogyakarta, Indonesia",
  "links": {
    "email": "tegarbayusaputraa@gmail.com",
    "github": "github.com/tegarbayusaputra",
    "linkedin": "linkedin.com/in/tegarbayusaputra"
  },
  "stack": {
    "frontend": ["Angular", "React", "TypeScript", "HTML5", "CSS3"],
    "backend": ["PHP", "Laravel", "MySQL"],
    "styling": ["Tailwind CSS", "SCSS", "Bootstrap"],
    "state": ["Signals", "RxJS"],
    "tools": ["Git", "GitHub", "Figma", "VS Code", "Postman", "Vite", "Composer", "Angular CLI"]
  },
  "practices": [
    "Type-safe & Modular Architecture",
    "Reusable Component Design",
    "Code Reviews & Cross-browser Compat.",
    "RESTful API Integration",
    "Responsive Design & Accessibility (a11y)",
    "Remote-First & Autonomous Work",
    "On-time Delivery"
  ],
  "experience": [
    "Agency Internship (foundational web dev)",
    "Freelance Clients (scalable production apps)"
  ],
  "education": "Computer and Network Engineering - SMK N 1 Tempel",
  "status": "Available for hire ✅"
}`;

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="about" class="section-shell section-shell-left section-padding bg-gray-200">
      <div class="section-wordmark right-4 top-10 hidden text-[5rem] md:block md:text-[8rem] lg:text-[10rem]">
        ABOUT<br/>CODE
      </div>

      <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div appReveal="up" class="mb-12 md:mb-16">
          <!-- <div class="section-stamp mb-5 w-max">Snowy Blueprint</div> -->
          <span class="section-label">{{ i18n.t()['about']['label'] }}</span>
          <h2 class="section-heading mt-3" [innerHTML]="i18n.t()['about']['heading'].replace('\\n', '<br/>')">
          </h2>
        </div>

        <!-- Two-column Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          <!-- LEFT: Bio -->
          <div appReveal="left" [revealDelay]="100" class="space-y-8">
            <!-- Bio text -->
            <div class="space-y-5">
              <p class="font-body text-ink-muted text-lg leading-relaxed">
                {{ i18n.t()['about']['bio_p1'] }}
              </p>
              <p class="font-body text-ink-muted text-lg leading-relaxed">
                {{ i18n.t()['about']['bio_p2'] }}
              </p>
              <p class="font-body text-ink-muted text-lg leading-relaxed">
                {{ i18n.t()['about']['bio_p3'] }}
              </p>
            </div>

            <!-- Highlight cards -->
            <div class="grid grid-cols-2 gap-4">
              <ng-container *ngFor="let card of highlightCards; let i = index">
                <div
                  appReveal="zoom"
                  [revealDelay]="160 + i * 80"
                  class="border border-border rounded-xl p-5 bg-white hover:border-electric transition-colors"
                >
                  <div class="text-2xl mb-2">{{ card.icon }}</div>
                  <div class="font-body font-bold text-ink text-sm">{{ card.title }}</div>
                  <div class="font-body text-xs text-ink-subtle mt-0.5">{{ card.subtitle }}</div>
                </div>
              </ng-container>
            </div>

            <!-- Angular badge strip -->
            <div class="flex flex-wrap gap-2 pt-2">
              <ng-container *ngFor="let badge of angularBadges; let i = index">
                <span appReveal="soft" [revealDelay]="260 + i * 45" class="tech-badge">{{ badge }}</span>
              </ng-container>
            </div>
          </div>

          <!-- RIGHT: Terminal -->
          <div appReveal="right" [revealDelay]="180" class="terminal-window shadow-brutal-lg">
            <!-- Terminal title bar -->
            <div class="terminal-bar">
              <div class="terminal-dot bg-red-500/80"></div>
              <div class="terminal-dot bg-yellow-500/80"></div>
              <div class="terminal-dot bg-green-500/80"></div>
              <span class="font-mono text-xs text-white/40 ml-3">tegar@portfolio ~ {{ i18n.t()['about']['terminal_title'] }}</span>
            </div>

            <!-- Terminal Body -->
            <div class="terminal-body min-h-[400px]">
              <!-- Prompt line -->
              <div class="flex items-center gap-2 mb-4">
                <span class="text-electric font-semibold">❯</span>
                <span class="text-white/60">cat</span>
                <span class="text-green-400">technical-dna.json</span>
              </div>

              <!-- JSON content with typing effect -->
              <pre class="text-green-300 text-xs leading-relaxed whitespace-pre-wrap font-mono">{{ displayedText() }}<span *ngIf="isTyping()" class="animate-blink text-white">▌</span></pre>
            </div>
          </div>
        </div>

      </div>
    </section>
  `,
})
export class About implements OnInit, OnDestroy {
  protected i18n = inject(I18nService);

  displayedText = signal('');
  isTyping = signal(true);

  private typingInterval: ReturnType<typeof setInterval> | null = null;
  private currentIndex = 0;

  highlightCards = [
    { icon: '⚡', title: 'Frontend', subtitle: 'Angular · React · TypeScript' },
    { icon: '🛠️', title: 'Full Stack', subtitle: 'Laravel · PHP · MySQL' },
    { icon: '🚀', title: 'Freelance', subtitle: 'Production-ready delivery' },
    { icon: '🌐', title: 'Remote-First', subtitle: 'Autonomous & reliable' },
  ];

  angularBadges = [
    'Angular', 'React', 'TypeScript', 'PHP', 'Laravel',
    'MySQL', 'RxJS', 'Tailwind CSS', 'Git', 'REST API',
  ];

  ngOnInit(): void {
    setTimeout(() => this.startTyping(), 600);
  }

  ngOnDestroy(): void {
    if (this.typingInterval) clearInterval(this.typingInterval);
  }

  private startTyping(): void {
    const content = TERMINAL_CONTENT;
    this.currentIndex = 0;
    this.isTyping.set(true);

    this.typingInterval = setInterval(() => {
      if (this.currentIndex < content.length) {
        this.displayedText.set(content.slice(0, this.currentIndex + 1));
        this.currentIndex++;
      } else {
        this.isTyping.set(false);
        if (this.typingInterval) clearInterval(this.typingInterval);
      }
    }, 18);
  }
}
