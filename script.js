/**
 * Portfölj-skript (Vanilla JS)
 * * Hanterar:
 * 1. Mörkt/Ljust Téma
 * 2. Språkväxling (FIXAD för flaggor)
 * 3. Mobilmeny (FIXAD)
 * 4. Animationer (Endast skrivmaskin & scroll)
 */

(function () {
    "use strict";

    // --- 1. Språkdata ---
    const translations = {
        en: {
            meta_title: "Jehanni — IT Security Specialist Student",
            skip_link: "Skip to main content",
            nav_home: "Jehanni Halvarsson",
            header_title: "IT Security Specialist Student",
            aria_menu: "Menu",
            nav_about: "About",
            nav_projects: "Projects",
            nav_skills: "Skills",
            nav_cv: "CV",
            nav_reflection: "Reflection",
            hero_h1: "Jehanni",
            hero_tagline: "From preschool teacher to IT security. Protecting systems instead of sandboxes.",
            hero_cta: "View my projects",
            about_h2: "About Me",
            about_p1: "I am currently studying to become an IT Security Specialist at TUC Vocational School. However, my professional journey began in a completely different environment: as a preschool teacher educated at Stockholm University. After four years in education, I decided to channel my curiosity for technology into a career where I build and protect digital infrastructure.",
            about_p2: "My background has given me a unique perspective. The ability to create secure environments, identify risks, and communicate clearly is just as crucial in a server room as it is in a classroom. I am passionate about understanding technology at a deep level – from routing protocols to security auditing – and translating complex security issues into understandable solutions.",
            about_h3: "Certificates & Education",
            about_cert1: "Networking Devices and Initial Configuration (Cisco)",
            about_cert2: "Networking Basics (Cisco)",
            about_cert3: "Introduction to Cybersecurity (Cisco)",
            projects_h2: "Featured Projects",
            project1_title: "Backup Server with LUKS",
            project1_role: "Personal Project",
            project1_desc: "Design and deployment of a secure, automated backup server on a Debian machine. Utilizes full disk encryption with LUKS and rsync over SSH for data transfer.",
            project_link_repo: "GitHub Repo",
            project2_title: "Network Segmentation (Homelab)",
            project2_role: "Study Project",
            project2_desc: "Implementation of VLANs and strict firewall rules (using pfSense) in a homelab environment to isolate IoT devices from the primary network and block suspicious traffic.",
            project_link_writeup: "Read Write-up",
            skills_h2: "Core Competencies",
            skill_linux: "Linux & Hardening",
            skill_network: "Network & TCP/IP",
            skill_firewall: "Firewalls (UFW/pfSense)",
            skill_security: "Defense in Depth",
            skill_risk: "Risk Analysis (RSA)",
            skill_vm: "Virtualization (Hypervisor)",
            skill_audit: "Security Auditing",
            skill_wordpress: "Wordpress",
            cv_h2: "CV / Resume",
            cv_p: "My full CV, containing detailed information about my education, experience, and technical skills, is available for download.",
            cv_button_sv: "Download CV (SV)",
            cv_button_en: "Download CV (EN)",
            reflection_h2: "A Security-Conscious Portfolio",
            reflection_p1: "This portfolio is intentionally built without third-party frameworks, tracking scripts, or analytics tools. It runs entirely client-side and makes no network requests other than loading the necessary files.",
            reflection_p2: "By using clean, semantic HTML, modern CSS, and minimal vanilla JavaScript, the attack surface is minimized, loading times are improved, and your privacy as a visitor is respected. No cookies, no `localStorage` for tracking (only for your theme and language preferences), and no data is sent to a server.",
            reflection_cite: "— Jehanni",
            footer_copy: "© 2025 Jehanni. All rights reserved.",
            footer_github: "GitHub",
            footer_linkedin: "LinkedIn"
        }
    };

    // --- 2. DOM-element ---
    const dom = {
        html: document.documentElement,
        themeToggle: document.querySelector(".theme-toggle"),
        langToggle: document.querySelector(".lang-toggle"),
        navToggle: document.querySelector(".nav-toggle"),
        navMenu: document.querySelector(".site-nav"), 
        navLinks: document.querySelectorAll(".nav-link"),
        langElements: document.querySelectorAll("[data-lang-key]"),
        anchorLinks: document.querySelectorAll('a[href^="#"]'),
        heroH1: document.querySelector(".hero-text h1"),
        heroTagline: document.querySelector(".hero-tagline"),
        projectCards: document.querySelectorAll(".project-card")
    };

    // --- 3. Variabler ---
    let currentTheme = "light";
    let currentLang = "sv";
    let isTyping = false; 
    let typingTimeout = null; 

    // --- 4. Temahantering ---
    function applyTheme(theme) {
        dom.html.setAttribute("data-theme", theme);
        if (dom.themeToggle) {
            dom.themeToggle.setAttribute("aria-label",
                theme === "dark"
                    ? "Växla till ljust läge"
                    : "Växla till mörkt läge"
            );
        }
        currentTheme = theme;
        
        try {
            document.querySelector('meta[name="theme-color"][media="(prefers-color-scheme: light)"]')
                    .setAttribute("content", theme === "dark" ? "#1a202c" : "#ffffff");
            document.querySelector('meta[name="theme-color"][media="(prefers-color-scheme: dark)"]')
                    .setAttribute("content", theme === "dark" ? "#1a202c" : "#ffffff");
        } catch (e) {
            // Ignorera tyst
        }
    }

    function toggleTheme() {
        const newTheme = currentTheme === "light" ? "dark" : "light";
        applyTheme(newTheme);
        try {
            localStorage.setItem("theme", newTheme);
        } catch (e) {
            // localStorage kan misslyckas
        }
    }

    function initTheme() {
        let savedTheme = null;
        try {
            savedTheme = localStorage.getItem("theme");
        } catch (e) {
            // localStorage otillgängligt
        }

        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        
        if (savedTheme) {
            applyTheme(savedTheme);
        } else if (prefersDark) {
            applyTheme("dark");
        } else {
            applyTheme("light");
        }

        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
            let userChoice = null;
            try {
                userChoice = localStorage.getItem("theme");
            } catch (err) {
                //
            }
            
            if (!userChoice) {
                applyTheme(e.matches ? "dark" : "light");
            }
        });
    }

    // --- 5. Språkhantering ---
    function storeDefaultLanguage() {
        dom.langElements.forEach(el => {
            el.dataset.defaultSv = el.textContent.trim();
        });
    }

    function updateText(lang) {
        dom.html.setAttribute("lang", lang);
        
        if (dom.langToggle) {
            dom.langToggle.setAttribute("lang", lang === "sv" ? "sv" : "en");
            dom.langToggle.setAttribute("aria-label",
                lang === "sv"
                    ? "Byt språk till engelska"
                    : "Switch language to Swedish"
            );
        }

        if (typingTimeout) {
            clearTimeout(typingTimeout);
            typingTimeout = null;
        }
        isTyping = false; 
        
        if (dom.heroH1) dom.heroH1.classList.remove("typing-effect");
        if (dom.heroTagline) dom.heroTagline.classList.remove("typing-effect");

        const h1Text = (lang === 'en' && translations.en['hero_h1']) 
            ? translations.en['hero_h1'] 
            : (dom.heroH1 ? dom.heroH1.dataset.defaultSv : "");
        
        const taglineText = (lang === 'en' && translations.en['hero_tagline']) 
            ? translations.en['hero_tagline'] 
            : (dom.heroTagline ? dom.heroTagline.dataset.defaultSv : "");

        dom.langElements.forEach(el => {
            const key = el.dataset.langKey;
            
            if (el === dom.heroH1 || el === dom.heroTagline) {
                el.textContent = ""; 
                return;
            }

            if (lang === "en" && translations.en[key]) {
                el.textContent = translations.en[key];
            } else {
                el.textContent = el.dataset.defaultSv || el.textContent;
            }
        });
        
        // H1: 50ms, Tagline: 25ms
        startTypeEffect(dom.heroH1, h1Text, 50, () => {
            startTypeEffect(dom.heroTagline, taglineText, 25, null);
        });

        currentLang = lang;
    }

    function toggleLanguage() {
        const newLang = currentLang === "sv" ? "en" : "sv";
        updateText(newLang); 
        try {
            localStorage.setItem("language", newLang);
        } catch (e) {
            // localStorage kan misslyckas
        }
    }

    function initLanguage() {
        storeDefaultLanguage();
        let savedLang = null;
        try {
            savedLang = localStorage.getItem("language");
        } catch (e) {
            // localStorage otillgängligt
        }

        const browserLang = navigator.language.split("-")[0];
        let initialLang = "sv";
        
        if (savedLang) {
            initialLang = savedLang;
        } else if (browserLang === "en") {
            initialLang = "en";
        }
        
        updateText(initialLang);
    }

    // --- 6. Mobilnavigation ---
    function toggleMenu() {
        if (!dom.navMenu || !dom.navToggle) return;
        
        const isVisible = dom.navMenu.getAttribute("data-visible") === "true";
        dom.navMenu.setAttribute("data-visible", !isVisible);
        dom.navToggle.setAttribute("aria-expanded", !isVisible);
        dom.html.style.overflow = !isVisible ? "hidden" : "auto";
    }
    
    function closeMenu() {
        if (!dom.navMenu || !dom.navToggle) return;

        if (dom.navMenu.getAttribute("data-visible") === "true") {
            dom.navMenu.setAttribute("data-visible", false);
            dom.navToggle.setAttribute("aria-expanded", false);
            dom.html.style.overflow = "auto";
        }
    }

    // --- 7. Mjuk Scrollning ---
    function smoothScroll(e) {
        try {
            const hash = e.currentTarget.hash;
            const target = document.querySelector(hash);
            
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
                closeMenu();
                target.setAttribute("tabindex", "-1");
                target.focus();
            }
        } catch (err) {
            // Fallback
        }
    }

    // --- 8. Skrivmaskinseffekt ---
    function startTypeEffect(element, text, speed = 150, callback = null) {
        if (!element || !text) {
            if(callback) callback(); 
            return;
        } 
        
        if (!isTyping) isTyping = true; 

        element.textContent = ""; 
        element.classList.add("typing-effect");
        let i = 0;

        function typeWriter() {
            if (!isTyping) { 
                element.classList.remove("typing-effect");
                return;
            }

            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                typingTimeout = setTimeout(typeWriter, speed);
            } else {
                element.classList.remove("typing-effect");
                typingTimeout = null;
                
                if (!callback) {
                    isTyping = false;
                }
                
                if (callback) {
                    callback(); 
                }
            }
        }
        
        setTimeout(typeWriter, speed); 
    }


    // --- 9. Scroll-animation ---
    function initScrollObserver() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (!('IntersectionObserver' in window) || prefersReducedMotion) {
            dom.projectCards.forEach(card => card.classList.add('is-visible'));
            return;
        }

        const observerOptions = {
            root: null, 
            rootMargin: '0px',
            threshold: 0.1 
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        };

        const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);

        dom.projectCards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 100}ms`;
            scrollObserver.observe(card);
        });
    }

    
    // --- 10. Scrollspy ---
    function initScrollspy() {
        if (!('IntersectionObserver' in window)) {
            return; 
        }
        
        const sections = document.querySelectorAll("main section[id]");
        
        const observerOptions = {
            root: null,
            rootMargin: "-40% 0px -60% 0px",
            threshold: 0 
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);

                    dom.navLinks.forEach(link => link.classList.remove('is-active'));
                    
                    if (activeLink) {
                        activeLink.classList.add('is-active');
                    }
                }
            });
        };

        const scrollspyObserver = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach(section => {
            scrollspyObserver.observe(section);
        });
    }


    // --- 11. Initiering ---
    function bindEvents() {
        if (dom.themeToggle) dom.themeToggle.addEventListener("click", toggleTheme);
        if (dom.langToggle) dom.langToggle.addEventListener("click", toggleLanguage);
        if (dom.navToggle) dom.navToggle.addEventListener("click", toggleMenu);
        
        dom.navLinks.forEach(link => link.addEventListener("click", closeMenu));
        document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });
        dom.anchorLinks.forEach(link => link.addEventListener("click", smoothScroll));
    }

    function init() {
        initTheme();
        initLanguage(); 
        bindEvents();
        initScrollObserver(); 
        initScrollspy();    
    }

    document.addEventListener("DOMContentLoaded", init);

})();
