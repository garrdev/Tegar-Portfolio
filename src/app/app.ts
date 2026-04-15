import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Tools } from './components/tools/tools';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { Marquee } from './components/marquee/marquee';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, Navbar, Hero, About, Projects, Tools, Contact, Footer, Marquee],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-marquee />
      <app-about />
      <app-projects />
      <app-tools />
      <app-contact />
    </main>
    <app-footer />
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
    }
  `],
})
export class App {}
