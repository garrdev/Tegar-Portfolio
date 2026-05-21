import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Hero } from '../../components/hero/hero';
import { Marquee } from '../../components/marquee/marquee';
import { About } from '../../components/about/about';
import { Projects } from '../../components/projects/projects';
import { Tools } from '../../components/tools/tools';
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Hero, Marquee, About, Projects, Tools, Contact],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main>
      <app-hero />
      <app-marquee />
      <app-about />
      <app-projects />
      <app-tools />
      <app-contact />
    </main>
  `,
})
export class HomePage {}
