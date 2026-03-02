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
            nav_projects: "Courses",
            nav_skills: "Skills",
            nav_cv: "CV",
            nav_contact: "Contact",
            hero_h1: "Jehanni",
            hero_tagline: "Future IT Security Specialist with a pedagogical background. I make the complex understandable and build robust solutions. Looking for an internship (LIA)!",
            hero_cta: "Contact me",
            about_h2: "About Me",
            about_p1: "I am transitioning from a preschool teacher and workplace leader to an IT Security Specialist via TUC Vocational School. In a world where the human factor is often the crucial link, I bring skills that are central to a successful security organization.",
            about_p2: "My pedagogical leadership means I am used to making the complex understandable – a key when implementing security routines and security awareness training. I work methodically with documentation and incident management, and I am driven to act as a link between technical specialists and the rest of the organization.",
            about_h3: "Certificates & Education",
            about_cert1: "Networking Basics (Cisco)",
            about_cert2: "Networking Devices and Initial Configuration (Cisco)",
            about_cert3: "Endpoint Security (Cisco)",
            
            // --- KURS-TEXTER (ENGELSKA) ---
            courses_h2: "Academic Courses",
            courses_completed: "Completed & Ongoing",
            courses_upcoming: "Upcoming Courses",
            tag_upcoming: "Upcoming",
            
            // Kurs 1
            course1_title: "Network Technology",
            course1_points: "XX YH Credits",
            course1_desc: "Basic understanding of networks, the OSI and TCP/IP models. Working with routing, switching, and physical infrastructure.",
            
            // Kurs 2
            course2_title: "IT Infrastructure",
            course2_points: "XX YH Credits",
            course2_desc: "Design and management of modern IT infrastructure, including server environments, virtualization, and storage solutions.",
            
            // Kurs 3
            course3_title: "Basic IT Security",
            course3_points: "XX YH Credits",
            course3_desc: "Introduction to threat landscapes, vulnerabilities, cryptography, and fundamental security principles like the CIA triad.",
            
            // Kurs 4
            course4_title: "Information Security and IT Law",
            course4_points: "XX YH Credits",
            course4_desc: "GRC focus. Application of frameworks like the ISO 27000 series, as well as laws and directives such as GDPR and NIS2.",
            
            // Kurs 5
            course5_title: "IT Security Windows",
            course5_points: "XX YH Credits",
            course5_desc: "Security hardening of Windows environments. Covers Active Directory management, Group Policy (GPO), and permission structures.",
            
            // Kurs 6
            course6_title: "IT Security Linux, Unix and Mac",
            course6_points: "XX YH Credits",
            course6_desc: "Administration, securing, and in-depth permission management in Unix-based systems.",
            
            // Kurs 7
            course7_title: "Network Security",
            course7_points: "XX YH Credits",
            course7_desc: "Deep dive into firewalls, VPNs, segmentation, IDS/IPS, and advanced network traffic analysis.",
            
            // Kurs 8
            course8_title: "Ethical Hacking",
            course8_points: "XX YH Credits",
            course8_desc: "Methods for penetration testing, vulnerability scanning, and exploitation to offensively identify flaws.",
            
            // Kurs 9
            course9_title: "Advanced IT Security",
            course9_points: "XX YH Credits",
            course9_desc: "Managing complex security architectures, incident response (IR), log analysis in SIEM, and SOC tools.",
            
            // Kurs 10
            course10_title: "Cloud Security",
            course10_points: "XX YH Credits",
            course10_desc: "Security configuration and architecture in cloud environments (e.g., Azure/AWS), identity management (IAM), and Zero Trust.",
            
            // Kurs 11
            course11_title: "Thesis / Degree Project",
            course11_points: "XX YH Credits",
            course11_desc: "Final project work that ties together theory and practice within a chosen specialization area of IT security.",

            // --- SKILLS (HOVER) TEXTER ---
            skills_h2: "Core Competencies",
            skill_linux_title: "Linux & Hardening",
            skill_linux_desc: "Familiarity with CLI environments (Debian/Ubuntu). Managing permissions (chmod/chown), SSH hardening, and service management (systemd).",
            skill_network_title: "Network & TCP/IP",
            skill_network_desc: "Deep understanding of the OSI model. Traffic analysis with Wireshark/tcpdump and segmentation via VLAN/Subnetting.",
            skill_firewall_title: "Firewalls",
            skill_firewall_desc: "Rule configuration in pfSense and UFW. Default 'Deny All' principle and stateful inspection.",
            skill_security_title: "Defense in Depth",
            skill_security_desc: "Applying security in layers: from physical access and perimeter protection to application security and user awareness.",
            skill_risk_title: "Risk Analysis (GRC)",
            skill_risk_desc: "Asset identification and threat modeling. Working with risk assessments (RSA) and compliance with frameworks like ISO 27001.",
            skill_vm_title: "Virtualization",
            skill_vm_desc: "Building secure lab environments using Hyper-V and VirtualBox to safely test malware or configure isolated servers.",
            skill_audit_title: "Security Auditing",
            skill_audit_desc: "Reviewing logs (syslog/auth.log), vulnerability scanning, and verifying configuration files.",
            skill_wordpress_title: "Web Security",
            skill_wordpress_desc: "Securing CMS (WordPress), implementing HTTPS/TLS, and mitigating common OWASP Top 10 vulnerabilities.",

            cv_h2: "CV / Resume",
            cv_p: "My full CV, containing detailed information about my education, experience, and technical skills, is available for download.",
            cv_button_sv: "Download CV (SV)",
            cv_button_en: "Download CV (EN)",

            contact_h2: "Looking for a driven LIA intern?",
            contact_p: "I am currently looking for an internship (LIA) where I can put my studies into practice. If you are looking for someone who combines technical knowledge with methodical thinking and pedagogical skills, let's grab a coffee!",
            contact_btn_email: "Email me",
            contact_btn_tel: "Call +46 76-836 66 09",
            
            footer_copy: "© 2026 Jehanni Halvarsson. All rights reserved.",
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
