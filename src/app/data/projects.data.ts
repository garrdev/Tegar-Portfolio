export type ProjectSlug =
  | 'eyegil'
  | 'amazain'
  | 'cms-amazain'
  | 'herokind'
  | 'eyegil-v1'
  | 'developer-portfolio';

export interface ProjectLocaleContent {
  summary: string;
  intro: string;
  challenge: string;
  solution: string;
  impact: string;
}

export interface ProjectDetailData {
  id: number;
  slug: ProjectSlug;
  title: string;
  category: string;
  image: string;
  stack: string[];
  featured?: boolean;
  liveUrl?: string;
  period: string;
  role: string;
  client: string;
  highlights: string[];
  content: {
    EN: ProjectLocaleContent;
    ID: ProjectLocaleContent;
  };
}

export const PROJECTS: ProjectDetailData[] = [
  {
    id: 1,
    slug: 'eyegil',
    title: 'EYEGIL | Partner Digitalmu',
    category: 'Digital Agency',
    image: '/assets/Project/landing page eyegil.png',
    stack: ['Laravel', 'Bootstrap', 'UI/UX Design', 'Enterprise Solutions'],
    featured: true,
    liveUrl: 'https://eyegil.com/',
    period: '2025',
    role: 'Front-End Developer',
    client: 'EYEGIL',
    highlights: ['Company Profile', 'Service Showcase', 'Responsive UI', 'Lead Generation'],
    content: {
      EN: {
        summary:
          'A reliable digital partner site built to present EYEGIL services with a modern and business-ready experience.',
        intro:
          'This project focused on turning EYEGIL into a stronger digital presence through a clean landing structure, clearer service communication, and a sharper brand impression.',
        challenge:
          'The website needed to feel professional and persuasive while staying simple enough for potential clients to understand the offer quickly.',
        solution:
          'I structured the content into a conversion-friendly flow, refined the visual hierarchy, and delivered responsive layouts that keep the agency profile polished across devices.',
        impact:
          'The result is a more credible digital front door for EYEGIL, making the brand easier to trust, browse, and contact.',
      },
      ID: {
        summary:
          'Website mitra digital yang dirancang untuk menampilkan layanan EYEGIL dengan pengalaman yang modern dan siap bisnis.',
        intro:
          'Project ini berfokus memperkuat kehadiran digital EYEGIL lewat struktur landing page yang rapi, komunikasi layanan yang lebih jelas, dan kesan brand yang lebih tajam.',
        challenge:
          'Website harus terasa profesional dan meyakinkan, tetapi tetap cukup sederhana agar calon klien cepat memahami value yang ditawarkan.',
        solution:
          'Saya menyusun konten dalam alur yang lebih conversion-friendly, memperjelas visual hierarchy, dan membangun layout responsif agar company profile tetap terlihat solid di berbagai device.',
        impact:
          'Hasilnya adalah pintu masuk digital yang lebih kredibel untuk EYEGIL, sehingga brand lebih mudah dipercaya, dijelajahi, dan dihubungi.',
      },
    },
  },
  {
    id: 2,
    slug: 'amazain',
    title: 'AMAZAIN Training & Consulting',
    category: 'Education/Consulting',
    image: '/assets/Project/landing page amazain.png',
    stack: ['Laravel', 'Bootstrap', 'Swiper.js', 'Corporate Training'],
    liveUrl: 'https://amazaintraining.com/',
    period: '2025',
    role: 'Front-End Developer',
    client: 'AMAZAIN',
    highlights: ['Training Catalog', 'Consulting Profile', 'Responsive Landing Page', 'Content Structure'],
    content: {
      EN: {
        summary:
          'A corporate training and consulting website designed to communicate expertise, programs, and trust in one cohesive experience.',
        intro:
          'AMAZAIN needed a website that could present learning services in a way that felt structured, professional, and approachable for business audiences.',
        challenge:
          'The brand had to explain multiple services without overwhelming visitors, while still guiding them toward inquiry and consultation.',
        solution:
          'I built a clean content rhythm, organized service sections for clarity, and used flexible responsive components to support both storytelling and conversion.',
        impact:
          'The site now works as a stronger presentation layer for AMAZAIN, helping visitors understand offerings faster and engage with the company more confidently.',
      },
      ID: {
        summary:
          'Website training dan consulting korporat yang dirancang untuk menyampaikan expertise, program, dan trust dalam satu pengalaman yang solid.',
        intro:
          'AMAZAIN membutuhkan website yang mampu menampilkan layanan pembelajaran dengan cara yang terstruktur, profesional, dan tetap mudah didekati oleh audiens bisnis.',
        challenge:
          'Brand harus menjelaskan banyak layanan tanpa membuat pengunjung kewalahan, sambil tetap mengarahkan mereka ke inquiry dan konsultasi.',
        solution:
          'Saya membangun ritme konten yang rapi, menata section layanan agar lebih jelas, dan memakai komponen responsif yang mendukung storytelling sekaligus conversion.',
        impact:
          'Website ini sekarang menjadi lapisan presentasi yang lebih kuat untuk AMAZAIN, membantu pengunjung memahami penawaran lebih cepat dan berinteraksi dengan perusahaan dengan lebih yakin.',
      },
    },
  },
  {
    id: 3,
    slug: 'cms-amazain',
    title: 'CMS Amazain',
    category: 'CMS',
    image: '/assets/Project/cms amazain.png',
    stack: ['Laravel', 'Bootstrap', 'MariaDB', 'Back-Office System'],
    period: '2025',
    role: 'Front-End Developer',
    client: 'AMAZAIN',
    highlights: ['Admin Dashboard', 'Data Management', 'Internal Workflow', 'Operational Efficiency'],
    content: {
      EN: {
        summary:
          'A custom back-office CMS built to simplify internal operations around training management and client administration.',
        intro:
          'This system was designed as an internal tool for handling training schedules, consultant data, and operational information in a more organized way.',
        challenge:
          'The interface had to support admin efficiency, reduce repetitive work, and make complex operational data easier to manage day to day.',
        solution:
          'I developed a practical dashboard experience with structured information blocks, straightforward CRUD flows, and layouts optimized for routine internal use.',
        impact:
          'The CMS gives the team a more centralized operational workflow, improving consistency and saving time on administrative tasks.',
      },
      ID: {
        summary:
          'CMS back-office kustom yang dibangun untuk menyederhanakan operasional internal terkait manajemen training dan administrasi klien.',
        intro:
          'Sistem ini dirancang sebagai tools internal untuk mengelola jadwal training, data konsultan, dan informasi operasional dengan cara yang lebih terorganisir.',
        challenge:
          'Antarmuka harus mendukung efisiensi admin, mengurangi pekerjaan berulang, dan membuat data operasional yang kompleks lebih mudah dikelola setiap hari.',
        solution:
          'Saya mengembangkan pengalaman dashboard yang praktis dengan blok informasi terstruktur, alur CRUD yang langsung, dan layout yang dioptimalkan untuk penggunaan internal rutin.',
        impact:
          'CMS ini memberi tim workflow operasional yang lebih terpusat, meningkatkan konsistensi dan menghemat waktu untuk tugas administratif.',
      },
    },
  },
  {
    id: 4,
    slug: 'herokind',
    title: 'Herokind Academy',
    category: 'EdTech',
    image: '/assets/Project/landing page herokind.jpeg',
    stack: ['Laravel', 'Bootstrap', 'MySQL', 'Educational Platform'],
    liveUrl: 'https://herokindacademy.eyegil.com/',
    period: '2025',
    role: 'Front-End Developer',
    client: 'Herokind Academy',
    highlights: ['Education Landing Page', 'Program Promotion', 'Mobile Friendly', 'Trust Building'],
    content: {
      EN: {
        summary:
          'An educational platform presence created to showcase English learning programs with a friendly and convincing user journey.',
        intro:
          'Herokind Academy needed a site that could make its programs feel practical, welcoming, and relevant for students aiming to improve real-world English skills.',
        challenge:
          'Education websites often become text-heavy, so the key challenge was balancing information depth with a light and motivating browsing experience.',
        solution:
          'I focused on readable layouts, strong CTA placement, and visual sections that support the academy narrative without making the page feel dense.',
        impact:
          'The final experience helps Herokind communicate its value more clearly and encourages prospective learners to explore the programs further.',
      },
      ID: {
        summary:
          'Kehadiran digital platform edukasi yang dibuat untuk menampilkan program belajar bahasa Inggris dengan user journey yang ramah dan meyakinkan.',
        intro:
          'Herokind Academy membutuhkan website yang bisa membuat programnya terasa praktis, hangat, dan relevan bagi siswa yang ingin meningkatkan kemampuan bahasa Inggris untuk kebutuhan nyata.',
        challenge:
          'Website edukasi sering kali terlalu padat teks, jadi tantangan utamanya adalah menyeimbangkan kedalaman informasi dengan pengalaman browsing yang ringan dan memotivasi.',
        solution:
          'Saya fokus pada layout yang mudah dibaca, penempatan CTA yang kuat, dan section visual yang mendukung narasi akademi tanpa membuat halaman terasa berat.',
        impact:
          'Hasil akhirnya membantu Herokind menyampaikan value dengan lebih jelas dan mendorong calon peserta untuk mengeksplor program lebih jauh.',
      },
    },
  },
  {
    id: 5,
    slug: 'eyegil-v1',
    title: 'EYEGIL V1',
    category: 'Digital Agency',
    image: '/assets/Project/landing page eyegil V!.png',
    stack: ['Laravel', 'Bootstrap', 'UI/UX Design'],
    liveUrl: 'https://eyegil.com/',
    period: '2024',
    role: 'Front-End Developer',
    client: 'EYEGIL',
    highlights: ['Landing Page', 'Brand Foundation', 'Service Positioning', 'Responsive Design'],
    content: {
      EN: {
        summary:
          'The first version of the EYEGIL website, built to establish an initial digital identity and a clear service presence.',
        intro:
          'This first iteration laid the groundwork for how EYEGIL would present itself online before the later refinements of the current version.',
        challenge:
          'The early-stage site needed to be fast to launch while still forming a dependable and recognizable first impression for the agency.',
        solution:
          'I focused on the essentials: concise page structure, clear service framing, and a responsive layout that could support future iterations.',
        impact:
          'It gave the brand a solid digital starting point and opened the way for the more polished evolution that followed.',
      },
      ID: {
        summary:
          'Versi pertama website EYEGIL yang dibangun untuk membentuk identitas digital awal dan kehadiran layanan yang jelas.',
        intro:
          'Iterasi pertama ini menjadi fondasi bagaimana EYEGIL menampilkan dirinya secara online sebelum penyempurnaan pada versi yang sekarang.',
        challenge:
          'Website tahap awal harus cepat diluncurkan tetapi tetap mampu membentuk first impression yang meyakinkan dan mudah dikenali untuk agency ini.',
        solution:
          'Saya fokus pada hal-hal esensial: struktur halaman yang ringkas, framing layanan yang jelas, dan layout responsif yang bisa mendukung iterasi berikutnya.',
        impact:
          'Project ini memberi brand titik awal digital yang solid dan membuka jalan untuk evolusi versi yang lebih matang setelahnya.',
      },
    },
  },
  {
    id: 6,
    slug: 'developer-portfolio',
    title: 'Developer Portfolio',
    category: 'Portfolio',
    image: '/assets/Project/first porto.png',
    stack: ['Angular 21', 'Signals', 'Tailwind CSS', 'Zoneless', 'TypeScript'],
    period: '2026',
    role: 'Front-End Engineer',
    client: 'Personal Project',
    highlights: ['Angular 21', 'Signal-based i18n', 'Brutalist UI', 'Section Motion'],
    content: {
      EN: {
        summary:
          'A personal portfolio built to present front-end work through a bold, performant, and expressive Angular experience.',
        intro:
          'This portfolio is both a showcase and a playground for the way I approach layout, motion, component architecture, and front-end storytelling.',
        challenge:
          'The site needed to feel distinctive without becoming noisy, while still keeping performance, readability, and maintainability under control.',
        solution:
          'I used Angular standalone components, signal-based i18n, a tailored brutalist visual system, and reusable motion patterns to create a more intentional presentation.',
        impact:
          'The result is a portfolio that better reflects both technical depth and design sensitivity, making each project easier to explore in context.',
      },
      ID: {
        summary:
          'Portfolio pribadi yang dibangun untuk menampilkan karya front-end lewat pengalaman Angular yang berani, cepat, dan ekspresif.',
        intro:
          'Portfolio ini menjadi showcase sekaligus playground untuk cara saya mengolah layout, motion, arsitektur komponen, dan storytelling front-end.',
        challenge:
          'Website ini harus terasa khas tanpa menjadi berisik, sambil tetap menjaga performa, keterbacaan, dan maintainability.',
        solution:
          'Saya memakai Angular standalone components, i18n berbasis signal, visual system brutalist yang disesuaikan, dan pola motion reusable untuk menciptakan presentasi yang lebih intentional.',
        impact:
          'Hasilnya adalah portfolio yang lebih merepresentasikan kedalaman teknis sekaligus sensitivitas desain, sehingga tiap project lebih mudah dieksplor dalam konteksnya.',
      },
    },
  },
];

export function getProjectBySlug(slug: string | null): ProjectDetailData | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
