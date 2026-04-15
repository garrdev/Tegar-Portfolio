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
        'I build high-performance, pixel-perfect web applications with Angular & modern JS. Obsessed with clean code and beautiful UI.',
      cta_projects: 'View Projects',
      cta_cv: 'Download CV',
      scroll_hint: 'Scroll to explore',
      decorative_left: 'Focusing on clean code, robust architecture, and great user experiences.',
      decorative_right: 'Specialized in building performant, scalable web applications with Angular & Tailwind CSS.',
    },
    about: {
      label: 'About Me',
      heading: 'Crafting Digital\nExperiences',
      bio_p1:
        'Hi! I\'m Tegar Bayu Saputra, a passionate Front-End Engineer based in Indonesia. I specialize in building scalable and maintainable web applications using Angular, TypeScript, and modern CSS frameworks.',
      bio_p2:
        'I care deeply about developer experience, performance budgets, and pixel-perfect execution. When I\'m not coding, you\'ll find me exploring new design systems or contributing to open source.',
      bio_p3:
        'Currently focused on Angular v21 Signals, Zoneless architecture, and crafting exceptional user interfaces.',
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
      cta_linkedin: 'Connect on LinkedIn',
    },
    footer: {
      tagline: 'Building the web, one component at a time.',
      rights: 'All rights reserved.',
      nav_title: 'Navigation',
      built_with: 'Built With',
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
        'Aku membangun aplikasi web berkinerja tinggi dan sempurna piksel dengan Angular & JavaScript modern. Terobsesi dengan kode bersih dan UI yang indah.',
      cta_projects: 'Lihat Proyek',
      cta_cv: 'Unduh CV',
      scroll_hint: 'Gulir untuk menjelajahi',
      decorative_left: 'Berfokus pada kode yang bersih, arsitektur yang kuat, dan pengalaman pengguna yang luar biasa.',
      decorative_right: 'Spesialis dalam membangun aplikasi web yang performa dan skalabel dengan Angular & Tailwind CSS.',
    },
    about: {
      label: 'Tentang Saya',
      heading: 'Merancang Pengalaman\nDigital',
      bio_p1:
        'Halo! Saya Tegar Bayu Saputra, seorang Front-End Engineer yang bersemangat dan berbasis di Indonesia. Saya berspesialisasi dalam membangun aplikasi web yang skalabel menggunakan Angular, TypeScript, dan framework CSS modern.',
      bio_p2:
        'Saya sangat peduli terhadap pengalaman developer, performa aplikasi, dan eksekusi yang sempurna. Ketika tidak coding, saya menjelajahi design system baru atau berkontribusi pada open source.',
      bio_p3:
        'Saat ini berfokus pada Angular v21 Signals, arsitektur Zoneless, dan membuat antarmuka pengguna yang luar biasa.',
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
      cta_linkedin: 'Terhubung di LinkedIn',
    },
    footer: {
      tagline: 'Membangun web, satu komponen dalam satu waktu.',
      rights: 'Seluruh hak dilindungi.',
      nav_title: 'Navigasi',
      built_with: 'Dibuat Dengan',
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
