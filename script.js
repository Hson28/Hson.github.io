/**
 * Portfölj-skript (Vanilla JS)
 *
 * Hanterar:
 * 1. Mörkt/Ljust Téma (med localStorage & prefers-color-scheme)
 * 2. Språkväxling SV/EN (med localStorage)
 * 3. Åtkomstvänlig mobilmeny
 * 4. Mjuk scrollning för ankar-länkar
 * 5. Skrivmaskinseffekt för H1 och Tagline (kedjad)
 * 6. "Staggered" fade-in på projektkort (IntersectionObserver)
 * 7. "Scrollspy" för aktiv meny-länk (IntersectionObserver)
 *
 * Inga externa bibliotek, inga trackers, ingen console.log.
 */

(function () {
    "use strict";

    // --- 1. Språkdata ---
    // (Inga ändringar i denna sektion)
    const translations = {
        en: {
            meta_title: "Jehanni — IT Security Specialist Student",
            skip_link: "Skip to main content",
            nav_home: "Jehanni",
            header_title: "IT Security Specialist Student",
            aria_menu: "Menu",
            nav_about: "About",
            nav_projects: "Projects",
            nav_skills: "Skills",
            nav_cv: "CV",
            nav_reflection: "Reflection",
            hero_h1: "Jehanni",
            hero_tagline: "I build secure networks and deploy robust backup solutions.",
            hero_cta: "View my projects",
            about_h2: "About Me",
            about_p1: "I am a driven IT security student with a deep interest in defensive security, network architecture, and Linux administration. My focus is on building robust and resilient systems from the ground up. I strongly believe in 'security by design' and that proactive measures are key to a secure digital environment.",
            about_p2: "Currently, I am studying [Your Program Name] at [Your School], where I specialize in [Area 1] and [Area 2]. I am always looking for new challenges where I can apply and expand my knowledge in practice.",
            about_h3: "Certificates & Education",
            about_cert1: "Cisco Certified Network Associate (CCNA) - In Progress",
            about_cert2: "Example Certificate (e.g., CompTIA Security+) - 2024",
            about_cert3: "Introduction to Cybersecurity (Cisco NetAcad) - 2023",
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
            skill_linux: "Linux Administration",
            skill_network: "Network Configuration & Troubleshooting",
            skill_automation: "Automation (Bash/Ansible)",
            skill_security: "Security Principles",
            skill_crypto: "Encryption Technologies",
            skill_vm: "Virtualization (KVM/Proxmox)",
            skill_incident: "Incident Handling (Basic)",
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
        navMenu: document.querySelector("#primary-navigation"),
        navLinks: document.querySelectorAll(".nav-link"), // Används nu av Scrollspy
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
    // (Inga ändringar i denna sektion)
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
            // Ignorera tyst om meta-taggar inte finns
        }
    }

    function toggleTheme() {
        const newTheme = currentTheme === "light" ? "dark" : "light";
        applyTheme(newTheme);
        try {
            localStorage.setItem("theme", newTheme);
        } catch (e) {
            // localStorage kan misslyckas (t.ex. privat läge)
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
    // (Inga ändringar i denna sektion)
    function storeDefaultLanguage() {
        dom.langElements.forEach(el => {
            el.dataset.defaultSv = el.textContent.trim();
        });
    }

    function updateText(lang) {
        dom.html.setAttribute("lang", lang);
        
        if (dom.langToggle) {
            dom.langToggle.textContent = lang === "sv" ? "EN" : "SV";
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
        
        startTypeEffect(dom.heroH1, h1Text, 100, () => {
            startTypeEffect(dom.heroTagline, taglineText, 50, null);
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
    // (Inga ändringar i denna sektion)
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
    // (Inga ändringar i denna sektion)
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
            // Fallback till standardbeteende
        }
    }

    // --- 8. Skrivmaskinseffekt ---
    // (Inga ändringar i denna sektion)
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


    // --- 9. Scroll-animation (Staggered Fade-in) ---
    // UPPDATERAD: LÄGGER TILL "STAGGER" (fördröjning)
    function initScrollObserver() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // Fallback för gamla webbläsare eller om användaren vill ha minskad rörelse
        if (!('IntersectionObserver' in window) || prefersReducedMotion) {
            dom.projectCards.forEach(card => card.classList.add('is-visible'));
            return;
        }

        const observerOptions = {
            root: null, 
            rootMargin: '0px',
            threshold: 0.1 // Utlös när 10% är synligt
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

        // Sätt observatören att titta på varje projektkort
        dom.projectCards.forEach((card, index) => {
            // --- NY RAD FÖR "STAGGERED" EFFEKT ---
            // Lägger till en fördröjning (0s, 0.1s, 0.2s, etc.)
            card.style.transitionDelay = `${index * 100}ms`;
            // --- SLUT PÅ NY RAD ---

            scrollObserver.observe(card);
        });
    }

    
    // --- 10. Scrollspy (Aktiv meny-länk) --- (NY SEKTION)
    
    /**
     * Initialiserar en IntersectionObserver för att markera aktiv länk i menyn.
     */
    function initScrollspy() {
        if (!('IntersectionObserver' in window)) {
            return; // Scrollspy är "nice to have", funkar inte i gamla webbläsare
        }
        
        const sections = document.querySelectorAll("main section[id]");
        
        const observerOptions = {
            root: null,
            // "rootMargin" definierar en horisontell "linje" i mitten av skärmen
            // -40% från toppen, -60% från botten = en 20% hög zon i mitten
            rootMargin: "-40% 0px -60% 0px",
            threshold: 0 // Utlös så fort zonen träffas
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                // När en sektion träffar vår "linje" i mitten...
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);

                    // Rensa alla andra aktiva länkar
                    dom.navLinks.forEach(link => link.classList.remove('is-active'));
                    
                    // Lägg till aktiv klass på den rätta
                    if (activeLink) {
                        activeLink.classList.add('is-active');
                    }
                }
            });
        };

        const scrollspyObserver = new IntersectionObserver(observerCallback, observerOptions);

        // Observera alla sektioner
        sections.forEach(section => {
            scrollspyObserver.observe(section);
        });
    }


    // --- 11. Initiering & Händelselyssnare --- (Tidigare Sektion 10)

    function bindEvents() {
        if (dom.themeToggle) {
            dom.themeToggle.addEventListener("click", toggleTheme);
        }
        
        if (dom.langToggle) {
            dom.langToggle.addEventListener("click", toggleLanguage);
        }

        if (dom.navToggle) {
            dom.navToggle.addEventListener("click", toggleMenu);
        }
        
        dom.navLinks.forEach(link => {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                closeMenu();
            }
        });

        dom.anchorLinks.forEach(link => {
            link.addEventListener("click", smoothScroll);
        });
    }

    function init() {
        initTheme();
        initLanguage(); 
        bindEvents();
        initScrollObserver(); // Startar "staggered fade-in"
        initScrollspy();    // NY RAD: Startar "scrollspy"
    }

    document.addEventListener("DOMContentLoaded", init);

})();
