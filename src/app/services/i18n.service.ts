import { Injectable, signal, computed } from '@angular/core';

export type Lang = 'ID' | 'EN';
export type ProjectDescKey = keyof typeof translations.EN.projects.descriptions;

export const translations = {
  EN: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      tools: 'Tools',
      contact: 'Contact',
    },
    hero: {
      greeting: "I'M TEGAR.",
      role: 'FRONT-END ENGINEER',
      subtitle:
        'I build scalable, production-ready web interfaces using Angular, React & TypeScript — and go full-stack with Laravel & MySQL when needed.',
      cta_projects: 'View Projects',
      cta_cv: 'Download CV',
      scroll_hint: 'Scroll to explore',
      decorative_left: 'Clean, reusable components. Type-safe code. Cross-browser compatibility.',
      decorative_right: 'From agency internship to freelance — delivering scalable apps with Angular, React & Laravel.',
    },
    about: {
      label: 'About Me',
      heading: 'Crafting Digital\nExperiences',
      bio_p1:
        'Frontend Developer with experience architecting and delivering scalable, production-ready web interfaces using Angular, React, and TypeScript. Capable of working across the full stack when needed, with hands-on experience in PHP (Laravel) and MySQL for backend integration.',
      bio_p2:
        'Progressed from foundational web development during an agency internship to independently building type-safe, modular applications for freelance clients. Skilled in writing clean, reusable code components, conducting code reviews, and ensuring cross-browser compatibility.',
      bio_p3:
        'Proven ability to work autonomously in remote-first environments with strong written communication and consistent, on-time delivery.',
      terminal_title: 'Technical DNA',
    },
    projects: {
      label: 'Projects',
      heading: 'Selected Works',
      featured_title: 'Featured Work.',
      subheading: 'A curated selection of my most impactful projects.',
      case_study: 'Case Study',
      live_demo: 'Live Demo',
      descriptions: {
        eyegil: 'A reliable digital partner specializing in building professional, modern, and responsive websites tailored to business needs, from company profiles to custom enterprise systems.',
        amazain: 'A learning partner dedicated to developing people and organizations through impactful training and sustainable development.',
        cms_amazain: 'A robust custom back-office system designed to streamline management of training schedules, consultant databases, and client inquiries for Amazain Training & Consulting.',
        herokind: 'An English education platform designed to provide practical training in speaking, grammar, and PTE to help students master English for real-world applications.',
        eyegil_v1: 'The first iteration of the Eyegil digital partner site, focusing on core services and a clean, impactful landing page experience.',
        component_library: 'A custom Angular component library with 30+ components, full Storybook documentation, and accessibility compliance.',
        portfolio: 'This portfolio! Built with Angular 21 Zoneless, Signal-based i18n (ID/EN), Tailwind CSS, and a Brutalist Minimalist design.',
      }
    },
    tools: {
      label: 'Tools & Technologies',
      heading: 'MY TOOLS',
      needs_title: 'ALL YOUR TECH STACK NEEDS.',
      subheading: 'Technologies I work with daily to build modern web experiences.',
    },
    contact: {
      label: 'Get in Touch',
      heading: "LET'S BUILD SOMETHING GREAT.",
      subheading: 'Open for opportunities and collaborations.',
      cta_email: 'Send an Email',
      cta_whatsapp: 'WhatsApp Chat',
      cta_linkedin: 'Connect on LinkedIn',
    },
    footer: {
      tagline: 'Yogyakarta-based dev. Coffee-fueled. Ships clean code.',
      rights: 'All rights reserved.',
      nav_title: 'Navigation',
      built_with: 'Built With',
      currently: {
        title: 'CURRENTLY',
        status: 'Open to work & collaborations',
        location: 'Yogyakarta, ID (GMT+7)',
      },
    },
  },
  ID: {
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      projects: 'Proyek',
      tools: 'Alat',
      contact: 'Kontak',
    },
    hero: {
      greeting: "AKU TEGAR.",
      role: 'FRONT-END ENGINEER',
      subtitle:
        'Aku membangun antarmuka web yang skalabel dan siap produksi menggunakan Angular, React & TypeScript — dan bisa full-stack dengan Laravel & MySQL saat dibutuhkan.',
      cta_projects: 'Lihat Proyek',
      cta_cv: 'Unduh CV',
      scroll_hint: 'Gulir untuk menjelajahi',
      decorative_left: 'Komponen bersih dan reusable. Kode type-safe. Kompatibilitas lintas browser.',
      decorative_right: 'Dari magang agency hingga freelance — menghadirkan aplikasi skalabel dengan Angular, React & Laravel.',
    },
    about: {
      label: 'Tentang Saya',
      heading: 'Merancang Pengalaman\nDigital',
      bio_p1:
        'Frontend Developer dengan pengalaman merancang dan menghadirkan antarmuka web yang skalabel dan siap produksi menggunakan Angular, React, dan TypeScript. Mampu bekerja lintas stack saat dibutuhkan, dengan pengalaman langsung di PHP (Laravel) dan MySQL untuk integrasi backend.',
      bio_p2:
        'Berkembang dari pengembangan web dasar saat magang di agency hingga membangun aplikasi modular yang type-safe secara mandiri untuk klien freelance. Terampil dalam menulis komponen kode yang bersih dan reusable, melakukan code review, dan memastikan kompatibilitas lintas browser.',
      bio_p3:
        'Terbukti mampu bekerja secara mandiri di lingkungan remote-first dengan komunikasi tertulis yang kuat dan pengiriman yang konsisten tepat waktu.',
      terminal_title: 'DNA Teknis',
    },
    projects: {
      label: 'Proyek',
      heading: 'Karya Terpilih',
      featured_title: 'Karya Unggulan.',
      subheading: 'Koleksi proyek terbaik dan berdampak yang telah saya bangun.',
      case_study: 'Studi Kasus',
      live_demo: 'Demo Langsung',
      descriptions: {
        eyegil: 'Mitra digital terpercaya yang berspesialisasi dalam membangun situs web profesional, modern, dan responsif yang disesuaikan dengan kebutuhan bisnis, mulai dari profil perusahaan hingga sistem kustom enterprise.',
        amazain: 'Mitra pembelajaran yang didedikasikan untuk mengembangkan individu dan organisasi melalui pelatihan yang berdampak dan pengembangan berkelanjutan.',
        cms_amazain: 'Sistem back-office kustom yang kuat yang dirancang untuk merampingkan manajemen jadwal pelatihan, database konsultan, dan pertanyaan klien untuk Amazain Training & Consulting.',
        herokind: 'Platform edukasi bahasa Inggris yang dirancang untuk memberikan pelatihan praktis dalam berbicara, tata bahasa, dan PTE untuk membantu siswa menguasai bahasa Inggris dalam aplikasi dunia nyata.',
        eyegil_v1: 'Iterasi pertama dari situs mitra digital Eyegil, berfokus pada layanan inti dan pengalaman landing page yang bersih dan berdampak.',
        component_library: 'Library komponen Angular kustom dengan 30+ komponen, dokumentasi Storybook lengkap, dan kepatuhan aksesibilitas.',
        portfolio: 'Portfolio ini! Dibangun dengan Angular 21 Zoneless, i18n berbasis Signal (ID/EN), Tailwind CSS, dan desain Brutalist Minimalist.',
      }
    },
    tools: {
      label: 'Alat & Teknologi',
      heading: 'ALAT SAYA',
      needs_title: 'SEMUA KEBUTUHAN TECH STACK ANDA.',
      subheading: 'Teknologi yang saya gunakan setiap hari untuk membangun pengalaman web modern.',
    },
    contact: {
      label: 'Hubungi Saya',
      heading: 'MARI BANGUN SESUATU YANG HEBAT.',
      subheading: 'Terbuka untuk peluang dan kolaborasi.',
      cta_email: 'Kirim Email',
      cta_whatsapp: 'Chat WhatsApp',
      cta_linkedin: 'Terhubung di LinkedIn',
    },
    footer: {
      tagline: 'Dev dari Yogyakarta. Ditenagai kopi. Kirim kode yang bersih.',
      rights: 'Seluruh hak dilindungi.',
      nav_title: 'Navigasi',
      built_with: 'Dibuat Dengan',
      currently: {
        title: 'SAAT INI',
        status: 'Terbuka untuk pekerjaan & kolaborasi',
        location: 'Yogyakarta, ID (GMT+7)',
      },
    },
  },
};

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly lang = signal<Lang>('ID');

  readonly t = computed(() => translations[this.lang()]);

  toggle(): void {
    this.lang.update((current) => (current === 'ID' ? 'EN' : 'ID'));
  }

  setLang(lang: Lang): void {
    this.lang.set(lang);
  }
}
