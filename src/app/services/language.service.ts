import { Injectable, signal } from '@angular/core';

export type Language = 'id' | 'en';

export interface Translations {
    nav: {
        about: string;
        skills: string;
        experience: string;
        projects: string;
        contact: string;
    };
    hero: {
        greeting: string;
        name: string;
        title: string;
        description: string;
        cta: string;
    };
    about: {
        title: string;
        description: string;
    };
    skills: {
        title: string;
        subtitle: string;
    };
    experience: {
        title: string;
        subtitle: string;
    };
    projects: {
        title: string;
        subtitle: string;
        viewProject: string;
        viewCode: string;
    };
    contact: {
        title: string;
        subtitle: string;
        name: string;
        email: string;
        message: string;
        send: string;
        sending: string;
    };
}

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    private currentLang = signal<Language>('id');

    constructor() {
        // Load saved language preference or default to Indonesian
        const savedLang = localStorage.getItem('preferred-language') as Language;
        if (savedLang && (savedLang === 'id' || savedLang === 'en')) {
            this.currentLang.set(savedLang);
        }
    }

    getCurrentLanguage() {
        return this.currentLang();
    }

    setLanguage(lang: Language) {
        this.currentLang.set(lang);
        localStorage.setItem('preferred-language', lang);
    }

    toggleLanguage() {
        const newLang: Language = this.currentLang() === 'id' ? 'en' : 'id';
        this.setLanguage(newLang);
    }

    getTranslations(): Translations {
        return this.currentLang() === 'id' ? this.getIndonesianTranslations() : this.getEnglishTranslations();
    }

    private getIndonesianTranslations(): Translations {
        return {
            nav: {
                about: 'Tentang Saya',
                skills: 'Keahlian',
                experience: 'Pengalaman',
                projects: 'Proyek',
                contact: 'Kontak'
            },
            hero: {
                greeting: 'Halo, Saya',
                name: 'Tegar Bayu Saputra',
                title: 'Full Stack Developer',
                description: 'Saya membangun aplikasi web modern dengan Angular, React, dan Node.js. Passionate tentang menciptakan pengalaman pengguna yang luar biasa.',
                cta: 'Lihat Proyek Saya'
            },
            about: {
                title: 'Tentang Saya',
                description: 'Saya adalah seorang Full Stack Developer dengan pengalaman dalam membangun aplikasi web yang scalable dan user-friendly. Saya senang belajar teknologi baru dan menyelesaikan masalah yang kompleks.'
            },
            skills: {
                title: 'Keahlian',
                subtitle: 'Teknologi yang saya kuasai'
            },
            experience: {
                title: 'Pengalaman',
                subtitle: 'Perjalanan profesional saya'
            },
            projects: {
                title: 'Proyek',
                subtitle: 'Beberapa karya yang telah saya buat',
                viewProject: 'Lihat Proyek',
                viewCode: 'Lihat Kode'
            },
            contact: {
                title: 'Hubungi Saya',
                subtitle: 'Mari bekerja sama',
                name: 'Nama',
                email: 'Email',
                message: 'Pesan',
                send: 'Kirim Pesan',
                sending: 'Mengirim...'
            }
        };
    }

    private getEnglishTranslations(): Translations {
        return {
            nav: {
                about: 'About Me',
                skills: 'Skills',
                experience: 'Experience',
                projects: 'Projects',
                contact: 'Contact'
            },
            hero: {
                greeting: 'Hello, I\'m',
                name: 'Tegar Bayu Saputra',
                title: 'Full Stack Developer',
                description: 'I build modern web applications with Angular, React, and Node.js. Passionate about creating exceptional user experiences.',
                cta: 'View My Work'
            },
            about: {
                title: 'About Me',
                description: 'I am a Full Stack Developer with experience in building scalable and user-friendly web applications. I love learning new technologies and solving complex problems.'
            },
            skills: {
                title: 'Skills',
                subtitle: 'Technologies I work with'
            },
            experience: {
                title: 'Experience',
                subtitle: 'My professional journey'
            },
            projects: {
                title: 'Projects',
                subtitle: 'Some of my recent work',
                viewProject: 'View Project',
                viewCode: 'View Code'
            },
            contact: {
                title: 'Get In Touch',
                subtitle: 'Let\'s work together',
                name: 'Name',
                email: 'Email',
                message: 'Message',
                send: 'Send Message',
                sending: 'Sending...'
            }
        };
    }
}
