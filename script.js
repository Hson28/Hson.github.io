/**
 * Portfölj-skript (Vanilla JS)
 *
 * Hanterar:
 * 1. Mörkt/Ljust Téma (med localStorage & prefers-color-scheme)
 * 2. Språkväxling SV/EN (med localStorage)
 * 3. Åtkomstvänlig mobilmeny
 * 4. Mjuk scrollning för ankar-länkar
 *
 * Inga externa bibliotek, inga trackers, ingen console.log.
 */

(function () {
    "use strict";

    // --- 1. Språkdata ---
    // INSTRUKTION: Lägg till nya nyckel-värde-par här för att utöka översättningar.
    // Se till att varje element i HTML som ska översättas har ett matchande `data-lang-key`.
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
        navLinks: document.querySelectorAll(".nav-link"),
        langElements: document.querySelectorAll("[data-lang-key]"),
        anchorLinks: document.querySelectorAll('a[href^="#"]')
    };

    // --- 3. Variabler ---
    let currentTheme = "light";
    let currentLang = "sv";

    // --- 4. Temahantering ---

    /**
     * Tillämpar ett tema (mörkt/ljust) på <html>-elementet.
     * @param {string} theme - Temat som ska tillämpas ('dark' eller 'light').
     */
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
        
        // Uppdatera <meta theme-color>
        try {
            document.querySelector('meta[name="theme-color"][media="(prefers-color-scheme: light)"]')
                    .setAttribute("content", theme === "dark" ? "#1a202c" : "#ffffff");
            document.querySelector('meta[name="theme-color"][media="(prefers-color-scheme: dark)"]')
                    .setAttribute("content", theme === "dark" ? "#1a202c" : "#ffffff");
        } catch (e) {
            // Ignorera tyst om meta-taggar inte finns
        }
    }

    /**
     * Växlar mellan mörkt och ljust tema och sparar valet.
     */
    function toggleTheme() {
        const newTheme = currentTheme === "light" ? "dark" : "light";
        applyTheme(newTheme);
        try {
            localStorage.setItem("theme", newTheme);
        } catch (e) {
            // localStorage kan misslyckas (t.ex. privat läge)
        }
    }

    /**
     * Initialiserar temat baserat på localStorage eller systeminställning.
     */
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

        // Lyssna på systemändringar
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
            // Uppdatera endast om användaren inte har gjort ett aktivt val
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

    /**
     * Sparar standardtext (svenska) i ett data-attribut för enkel återställning.
     */
    function storeDefaultLanguage() {
        dom.langElements.forEach(el => {
            el.dataset.defaultSv = el.textContent.trim();
        });
    }

    /**
     * Uppdaterar textinnehållet på sidan baserat på valt språk.
     * @param {string} lang - Språkkoden ('sv' eller 'en').
     */
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

        dom.langElements.forEach(el => {
            const key = el.dataset.langKey;
            if (lang === "en" && translations.en[key]) {
                el.textContent = translations.en[key];
            } else {
                // Återgå till svenska (antingen från cache eller standard-HTML)
                el.textContent = el.dataset.defaultSv || el.textContent;
            }
        });

        currentLang = lang;
    }

    /**
     * Växlar mellan svenska och engelska och sparar valet.
     */
    function toggleLanguage() {
        const newLang = currentLang === "sv" ? "en" : "sv";
        updateText(newLang);
        try {
            localStorage.setItem("language", newLang);
        } catch (e) {
            // localStorage kan misslyckas
        }
    }

    /**
     * Initialiserar språket baserat på localStorage eller webbläsarinställning.
     */
    function initLanguage() {
        storeDefaultLanguage();
        let savedLang = null;
        try {
            savedLang = localStorage.getItem("language");
        } catch (e) {
            // localStorage otillgängligt
        }

        const browserLang = navigator.language.split("-")[0];
        
        if (savedLang) {
            updateText(savedLang);
        } else if (browserLang === "en") {
            updateText("en");
        } else {
            updateText("sv"); // Standard
        }
    }

    // --- 6. Mobilnavigation ---

    /**
     * Växlar synligheten för mobilmenyn.
     */
    function toggleMenu() {
        if (!dom.navMenu || !dom.navToggle) return;
        
        const isVisible = dom.navMenu.getAttribute("data-visible") === "true";
        dom.navMenu.setAttribute("data-visible", !isVisible);
        dom.navToggle.setAttribute("aria-expanded", !isVisible);
        
        // Hindra scrollning av body när menyn är öppen
        dom.html.style.overflow = !isVisible ? "hidden" : "auto";
    }
    
    /**
     * Stänger menyn (används av Escape-knapp och länkklick).
     */
    function closeMenu() {
        if (!dom.navMenu || !dom.navToggle) return;

        if (dom.navMenu.getAttribute("data-visible") === "true") {
            dom.navMenu.setAttribute("data-visible", false);
            dom.navToggle.setAttribute("aria-expanded", false);
            dom.html.style.overflow = "auto";
        }
    }

    // --- 7. Mjuk Scrollning ---

    /**
     * Hanterar mjuk scrollning för interna ankar-länkar.
     * @param {Event} e - Klickhändelsen.
     */
    function smoothScroll(e) {
        try {
            const hash = e.currentTarget.hash;
            const target = document.querySelector(hash);
            
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
                
                // Stäng menyn om en nav-länk klickades på mobil
                closeMenu();

                // Flytta fokus till den nya sektionen för tillgänglighet
                target.setAttribute("tabindex", "-1");
                target.focus();
            }
        } catch (err) {
            // Fallback till standardbeteende
        }
    }

    // --- 8. Initiering & Händelselyssnare ---

    /**
     * Binder alla händelselyssnare.
     */
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
        
        // Stäng menyn när en länk klickas
        dom.navLinks.forEach(link => {
            link.addEventListener("click", closeMenu);
        });

        // Hantera Escape-tryckning för att stänga menyn
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                closeMenu();
            }
        });

        // Mjuk scrollning
        dom.anchorLinks.forEach(link => {
            link.addEventListener("click", smoothScroll);
        });
    }

    /**
     * Körs när DOM är fullständigt laddad.
     */
    function init() {
        initTheme();
        initLanguage();
        bindEvents();
    }

    // Kör initieringen
    document.addEventListener("DOMContentLoaded", init);

})();
