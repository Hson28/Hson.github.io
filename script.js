/**
 * Portfölj-skript (Vanilla JS)
 * * Hanterar:
 * 1. Mörkt/Ljust Téma
 * 2. Språkväxling (FIXAD för flaggor)
 * 3. Mobilmeny (FIXAD)
 * 4. Animationer (Endast skrivmaskin & scroll)
 * 5. Modal / Pop-ups för kurser (NY)
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
            hero_tagline: "Future IT Security Specialist with a pedagogical background. I make the complex understandable, identify risks, and strengthen security culture. Looking for an internship (LIA)!",
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
            read_more: "Click to read more →",
            
            // Kurs 1
            course1_title: "Network Technology",
            course1_points: "25 YH Credits",
            course1_desc: "Configuration of routers and switches, VLANs, and access lists. Also covers access control in wireless networks and troubleshooting with protocol analyzers.",
            blog_course1: "<p>This course provided a comprehensive foundation in computer networking, taking me from theoretical concepts to practical implementation and troubleshooting. It began with the fundamental principles of network architecture, focusing on the OSI and TCP/IP models, IPv4 and IPv6 addressing, and subnetting. Building on this theory, I gained hands-on experience configuring routers and switches via the CLI (Command Line Interface), establishing device security, and setting up VLANs (Virtual Local Area Networks).</p><p>As the course progressed, the focus shifted to securing and maintaining these environments. I learned to control network traffic using Access Control Lists (ACLs), configure routing, and integrate DNS. A significant portion of the course was dedicated to wireless networks, where I planned, secured, and optimized access points through radio planning. Throughout all these stages, there was a strong emphasis on practical troubleshooting. Using simulation tools like Cisco Packet Tracer and protocol analyzers like Wireshark, I was able to diagnose and resolve security flaws and connectivity issues in deliberately misconfigured network environments.</p><p>Ultimately, the course culminated in applying all these technical skills to real-world scenarios. I learned how to identify specific network requirements, design robust infrastructure solutions, and present these technical designs in an oral presentation.</p>",

            // Kurs 2
            course2_title: "IT Infrastructure",
            course2_points: "25 YH Credits",
            course2_desc: "Building highly available and secure IT infrastructures. Includes PC, server, data, and application virtualization as well as backup platforms.",
            blog_course2: "<p>This course in IT infrastructure provided an in-depth understanding of how modern IT environments are built, optimized, and secured. It began with a focus on server architecture and system optimization, where I learned to efficiently manage shared resources, evaluate different server platforms based on performance and security, and optimize servers for energy efficiency. The course then shifted to virtualization and cloud tools. I gained practical knowledge of virtual machines (VMs), specifically using Hyper-V, and explored cloud infrastructure through both private and public clouds as well as container technology.</p><p>A large part of the course was dedicated to IT security, processes, and disaster recovery. We went through the history and current state of security, conducted vulnerability assessments, and learned the importance of robust backups according to the 3-2-1 rule. In this section, we also delved into system hardening and how to protect systems against side-channel attacks. The theory was complemented by practical elements, such as individual on-site labs and the examination of physical servers.</p><p>Finally, the focus was on secure network access and remote control. The course covered how VPNs contribute to secure access by comparing protocols like PPTP, L2TP, and OpenVPN, as well as how and when a so-called jumpbox (bastion host) should be used. All these theoretical and practical elements were then tied together in an extensive group project. This gave me the chance to apply my new knowledge of infrastructure and security in a larger project, which was ultimately presented in a final on-site examination.</p>",

            // Kurs 3
            course3_title: "Basic IT Security",
            course3_points: "30 YH Credits",
            course3_desc: "Protecting systems and data through risk analysis, Zero Trust architecture, and firewall configuration. Management of PKI, digital certificates, SSO, and MFA.",
            blog_course3: "<p>This course provided a solid foundation in the principles of protecting modern IT environments and data, with a clear focus on the professional role of an IT security specialist. The training began with a strong emphasis on security documentation, standards like ISO, as well as risk analysis and risk management. Through both theory and practical labs, I was trained to perform systematic risk and vulnerability assessments (RSA) to proactively identify and manage security risks linked to the internet and cloud services.</p><p>A central theme of the course was identity and access management based on a Zero Trust architecture. I delved into how to secure user privileges through techniques such as Single Sign-On (SSO) and two- and three-factor authentication. These concepts were put into practice through labs where we worked on securing Active Directory Domain Services (Secure AD DS), connecting domains behind firewalls, and integrating with cloud environments like Microsoft Azure.</p><p>Furthermore, the course covered crucial techniques for protecting systems against malware and intrusions. We studied encryption, digital signatures, and firewall implementation. Great importance was placed on Public Key Infrastructure (PKI) and the management of digital certificates to ensure reliable communication. The course concluded with intensive, full-day labs where all theoretical and practical elements were examined, closely followed by a comprehensive knowledge check ahead of the final exam.</p>",

            // Kurs 4
            course4_title: "Information Security and IT Law",
            course4_points: "25 YH Credits",
            course4_desc: "Application of GDPR and NIS2. Practical work with risk assessments, creating incident response plans, and standards like ISO 27000 and NIST.",
            blog_course4: "<p>This course connected the technical aspects of IT security with the organizational and legal frameworks that govern modern information management. The course began with the fundamentals of information security, focusing on the CIA triad (confidentiality, integrity, and availability) and the Swedish Civil Contingencies Agency's (MSB) basic principles for systematic and risk-based security work. I then delved into IT-related law with a comprehensive review of the General Data Protection Regulation (GDPR), the Camera Surveillance Act, and e-Privacy. This included the division of responsibilities between data controllers and processors, as well as the handling of consent, legal grounds, and the right to erasure.</p><p>A central feature of the course was working with established security standards. I studied the structure and function of the ISO 27000 series and the implementation of Information Security Management Systems (ISMS), and was introduced to frameworks like NIST 800-53 and IEC-62443 for OT security. This theoretical foundation was put into practice through in-depth risk analyses. Using methods from MSB, OWASP, and NIST RMF, I conducted workshops to map assets, identify threats and vulnerabilities, and analyze how sensitive data should be handled.</p><p>In the final parts of the course, the focus shifted to operational incident management and strategic policy work. I was trained in establishing incident response plans – from preparation and detection to response and recovery – and how to design a comprehensive information security policy. We also discussed legal responsibilities during incidents and were introduced to the requirements of the NIS2 directive. Finally, I analyzed complex IT-legal situations, evaluated organizational compliance, and problematized the balance between rigorous IT security and personal integrity.</p>",

            // Kurs 5
            course5_title: "IT Security Windows",
            course5_points: "20 YH Credits",
            course5_desc: "Minimizing attack surfaces through hardening. Covers LDAP management, Identity and Access (IDA) Control, password policies, and logging/auditing.",
            blog_course5: "<p>This course was primarily about systematically hardening Windows environments. We worked extensively with Active Directory and Group Policies (GPO) to tighten permissions. We implemented secure password policies, managed identity control via LDAP, and configured rigorous logging/auditing to quickly detect unauthorized activity.</p>",

            // Kurs 6
            course6_title: "IT Security Linux, Unix and Mac",
            course6_points: "20 YH Credits",
            course6_desc: "Administration and configuration of systems according to security standards. Focus on system hardening and minimizing possible attack surfaces for installed services.",
            blog_course6: "<p>Since a vast majority of the world's servers run Linux, understanding how to secure them is crucial. We practiced minimizing the attack surface by disabling unnecessary services, carefully configuring file permissions in the terminal, and hardening SSH access according to established security standards.</p>",

            // Kommande kurser
            course7_title: "Network Security",
            course7_points: "30 YH Credits",
            course7_desc: "Deep dive into firewalls, VPNs, segmentation, IDS/IPS, and advanced network traffic analysis.",
            
            course8_title: "Ethical Hacking",
            course8_points: "25 YH Credits",
            course8_desc: "Methods for penetration testing, vulnerability scanning, and exploitation to offensively identify flaws.",
            
            course9_title: "Advanced IT Security",
            course9_points: "25 YH Credits",
            course9_desc: "Managing complex security architectures, incident response (IR), log analysis in SIEM, and SOC tools.",
            
            course10_title: "Cloud Security",
            course10_points: "25 YH Credits",
            course10_desc: "Security configuration and architecture in cloud environments (e.g., Azure/AWS), identity management (IAM), and Zero Trust.",
            
            course11_title: "Thesis / Degree Project",
            course11_points: "20 YH Credits",
            course11_desc: "Final project work that ties together theory and practice within a chosen specialization area of IT security.",

            blog_upcoming: "<p>I haven't started this course yet. More information and a summary of my labs and insights will be published here as soon as the course begins!</p>",

            // --- SKILLS (HOVER) TEXTER ---
            skills_h2: "Skills & Competencies",
            skills_tech: "Technical Skills",
            skills_soft: "Personal Traits",
            
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

            // Mjuka färdigheter
            soft_leadership: "Leadership",
            soft_systematic: "Systematic Approach",
            soft_communication: "Communication Skills",
            soft_problem_solving: "Problem Solving",
            soft_organization: "Organizational Skills",
            soft_responsibility: "Sense of Responsibility",
            soft_adaptability: "Adaptability",
            soft_integrity: "High Integrity",

            cv_h2: "CV / Resume",
            cv_p: "My full CV, containing detailed information about my education, experience, and technical skills, is available for download.",
            cv_button_sv: "Download CV (SV)",
            cv_button_en: "Download CV (EN)",

            contact_h2: "Looking for a driven LIA intern?",
            contact_p: "I am currently looking for an internship (LIA) where I can put my studies into practice. If you are looking for someone who combines technical knowledge with methodical thinking and pedagogical skills, let's grab a coffee!",
            contact_btn_email: "Email me",
            contact_btn_linkedin: "Message on LinkedIn",
            
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
        projectCards: document.querySelectorAll(".project-card"),
        
        // Modal-element
        modal: document.getElementById('course-modal'),
        modalTitle: document.getElementById('modal-title'),
        modalSubtitle: document.getElementById('modal-subtitle'),
        modalBody: document.getElementById('modal-body'),
        modalClosers: document.querySelectorAll('[data-close="modal"]'),
        modalTriggers: document.querySelectorAll('.modal-trigger')
    };

    // --- 3. Variabler ---
    let currentTheme = "light";
    let currentLang = "sv";
    let isTyping = false; 
    let typingTimeout = null; 
    let activeCard = null; // För att hålla koll på öppen modal

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
            if (!el.dataset.defaultSv) {
                el.dataset.defaultSv = el.innerHTML.trim();
            }
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
                el.innerHTML = ""; 
                return;
            }

            if (lang === "en" && translations.en[key]) {
                el.innerHTML = translations.en[key];
            } else {
                el.innerHTML = el.dataset.defaultSv || el.innerHTML;
            }
        });
        
        // Uppdatera modalens innehåll om den råkar vara öppen när man byter språk
        if (activeCard) {
            openModal(activeCard);
        }

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

    // --- 11. Modal Logik (NY) ---
    function openModal(card) {
        if (!dom.modal) return;
        activeCard = card;
        
        const titleEl = card.querySelector('h3');
        const pointsEl = card.querySelector('.project-role');
        const blogEl = card.querySelector('.course-blog');
        
        if (dom.modalTitle && titleEl) dom.modalTitle.textContent = titleEl.textContent;
        if (dom.modalSubtitle && pointsEl) dom.modalSubtitle.textContent = pointsEl.textContent;
        if (dom.modalBody && blogEl) dom.modalBody.innerHTML = blogEl.innerHTML;
        
        dom.modal.setAttribute('aria-hidden', 'false');
        dom.html.style.overflow = 'hidden'; 
    }

    function closeModal() {
        if (!dom.modal) return;
        dom.modal.setAttribute('aria-hidden', 'true');
        dom.html.style.overflow = 'auto';
        activeCard = null;
    }


    // --- 12. Initiering ---
    function bindEvents() {
        if (dom.themeToggle) dom.themeToggle.addEventListener("click", toggleTheme);
        if (dom.langToggle) dom.langToggle.addEventListener("click", toggleLanguage);
        if (dom.navToggle) dom.navToggle.addEventListener("click", toggleMenu);
        
        dom.navLinks.forEach(link => link.addEventListener("click", closeMenu));
        
        // Ny modal-lyssnare
        dom.modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => openModal(trigger));
        });
        dom.modalClosers.forEach(closer => {
            closer.addEventListener('click', closeModal);
        });

        // Stäng menyer/modaler med Esc-tangenten
        document.addEventListener("keydown", (e) => { 
            if (e.key === "Escape") {
                closeMenu(); 
                closeModal();
            }
        });
        
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

})();/**
 * Portfölj-skript (Vanilla JS)
 * * Hanterar:
 * 1. Mörkt/Ljust Téma
 * 2. Språkväxling (FIXAD för flaggor)
 * 3. Mobilmeny (FIXAD)
 * 4. Animationer (Endast skrivmaskin & scroll)
 * 5. Modal / Pop-ups för kurser (NY)
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
            hero_tagline: "Future IT Security Specialist with a pedagogical background. I make the complex understandable, identify risks, and strengthen security culture. Looking for an internship (LIA)!",
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
            read_more: "Click to read more →",
            
            // Kurs 1
            course1_title: "Network Technology",
            course1_points: "25 YH Credits",
            course1_desc: "Configuration of routers and switches, VLANs, and access lists. Also covers access control in wireless networks and troubleshooting with protocol analyzers.",
            blog_course1: "During this course, we built networks from scratch in a lab environment. We gained hands-on experience configuring Cisco routers and switches, and implemented VLANs to separate and secure traffic. A large part of the course also focused on analyzing network traffic with Wireshark to find and fix errors and security flaws in communication.",

            // Kurs 2
            course2_title: "IT Infrastructure",
            course2_points: "25 YH Credits",
            course2_desc: "Building highly available and secure IT infrastructures. Includes PC, server, data, and application virtualization as well as backup platforms.",
            blog_course2: "Here we learned how companies build their IT environments to be both secure and highly available (High Availability). We worked extensively with various virtualization platforms and set up our own servers and services. We also discussed strategies for backups and resource management to ensure high performance and redundancy.",

            // Kurs 3
            course3_title: "Basic IT Security",
            course3_points: "30 YH Credits",
            course3_desc: "Protecting systems and data through risk analysis, Zero Trust architecture, and firewall configuration. Management of PKI, digital certificates, SSO, and MFA.",
            blog_course3: "An incredibly exciting course where we dove into protecting systems against modern threats and malware. We configured firewalls, created and managed digital certificates (PKI) for secure server access, and looked closely at implementing modern authentication like Zero Trust, SSO, and multi-factor authentication (MFA).",

            // Kurs 4
            course4_title: "Information Security and IT Law",
            course4_points: "25 YH Credits",
            course4_desc: "Application of GDPR and NIS2. Practical work with risk assessments, creating incident response plans, and standards like ISO 27000 and NIST.",
            blog_course4: "Technology is only one half of security – rules, laws, and policies are the other. In this course, we learned how directives like GDPR and NIS2 practically affect organizations. I gained valuable practice in conducting formal risk analyses and writing incident response plans based on known standards like the ISO 27000 series and NIST.",

            // Kurs 5
            course5_title: "IT Security Windows",
            course5_points: "20 YH Credits",
            course5_desc: "Minimizing attack surfaces through hardening. Covers LDAP management, Identity and Access (IDA) Control, password policies, and logging/auditing.",
            blog_course5: "This course was primarily about systematically hardening Windows environments. We worked extensively with Active Directory and Group Policies (GPO) to tighten permissions. We implemented secure password policies, managed identity control via LDAP, and configured rigorous logging/auditing to quickly detect unauthorized activity.",

            // Kurs 6
            course6_title: "IT Security Linux, Unix and Mac",
            course6_points: "20 YH Credits",
            course6_desc: "Administration and configuration of systems according to security standards. Focus on system hardening and minimizing possible attack surfaces for installed services.",
            blog_course6: "Since a vast majority of the world's servers run Linux, understanding how to secure them is crucial. We practiced minimizing the attack surface by disabling unnecessary services, carefully configuring file permissions in the terminal, and hardening SSH access according to established security standards.",

            // Kommande kurser
            course7_title: "Network Security",
            course7_points: "30 YH Credits",
            course7_desc: "Deep dive into firewalls, VPNs, segmentation, IDS/IPS, and advanced network traffic analysis.",
            
            course8_title: "Ethical Hacking",
            course8_points: "25 YH Credits",
            course8_desc: "Methods for penetration testing, vulnerability scanning, and exploitation to offensively identify flaws.",
            
            course9_title: "Advanced IT Security",
            course9_points: "25 YH Credits",
            course9_desc: "Managing complex security architectures, incident response (IR), log analysis in SIEM, and SOC tools.",
            
            course10_title: "Cloud Security",
            course10_points: "25 YH Credits",
            course10_desc: "Security configuration and architecture in cloud environments (e.g., Azure/AWS), identity management (IAM), and Zero Trust.",
            
            course11_title: "Thesis / Degree Project",
            course11_points: "20 YH Credits",
            course11_desc: "Final project work that ties together theory and practice within a chosen specialization area of IT security.",

            blog_upcoming: "I haven't started this course yet. More information and a summary of my labs and insights will be published here as soon as the course begins!",

            // --- SKILLS (HOVER) TEXTER ---
            skills_h2: "Skills & Competencies",
            skills_tech: "Technical Skills",
            skills_soft: "Personal Traits",
            
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

            // Mjuka färdigheter
            soft_leadership: "Leadership",
            soft_systematic: "Systematic Approach",
            soft_communication: "Communication Skills",
            soft_problem_solving: "Problem Solving",
            soft_organization: "Organizational Skills",
            soft_responsibility: "Sense of Responsibility",
            soft_adaptability: "Adaptability",
            soft_integrity: "High Integrity",

            cv_h2: "CV / Resume",
            cv_p: "My full CV, containing detailed information about my education, experience, and technical skills, is available for download.",
            cv_button_sv: "Download CV (SV)",
            cv_button_en: "Download CV (EN)",

            contact_h2: "Looking for a driven LIA intern?",
            contact_p: "I am currently looking for an internship (LIA) where I can put my studies into practice. If you are looking for someone who combines technical knowledge with methodical thinking and pedagogical skills, let's grab a coffee!",
            contact_btn_email: "Email me",
            contact_btn_linkedin: "Message on LinkedIn",
            
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
        projectCards: document.querySelectorAll(".project-card"),
        
        // Modal-element
        modal: document.getElementById('course-modal'),
        modalTitle: document.getElementById('modal-title'),
        modalSubtitle: document.getElementById('modal-subtitle'),
        modalBody: document.getElementById('modal-body'),
        modalClosers: document.querySelectorAll('[data-close="modal"]'),
        modalTriggers: document.querySelectorAll('.modal-trigger')
    };

    // --- 3. Variabler ---
    let currentTheme = "light";
    let currentLang = "sv";
    let isTyping = false; 
    let typingTimeout = null; 
    let activeCard = null; // För att hålla koll på öppen modal

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
        
        // Uppdatera modalens innehåll om den råkar vara öppen när man byter språk
        if (activeCard) {
            openModal(activeCard);
        }

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

    // --- 11. Modal Logik (NY) ---
    function openModal(card) {
        if (!dom.modal) return;
        activeCard = card;
        
        const titleEl = card.querySelector('h3');
        const pointsEl = card.querySelector('.project-role');
        const blogEl = card.querySelector('.course-blog');
        
        if (dom.modalTitle && titleEl) dom.modalTitle.textContent = titleEl.textContent;
        if (dom.modalSubtitle && pointsEl) dom.modalSubtitle.textContent = pointsEl.textContent;
        if (dom.modalBody && blogEl) dom.modalBody.innerHTML = blogEl.innerHTML;
        
        dom.modal.setAttribute('aria-hidden', 'false');
        dom.html.style.overflow = 'hidden'; 
    }

    function closeModal() {
        if (!dom.modal) return;
        dom.modal.setAttribute('aria-hidden', 'true');
        dom.html.style.overflow = 'auto';
        activeCard = null;
    }


    // --- 12. Initiering ---
    function bindEvents() {
        if (dom.themeToggle) dom.themeToggle.addEventListener("click", toggleTheme);
        if (dom.langToggle) dom.langToggle.addEventListener("click", toggleLanguage);
        if (dom.navToggle) dom.navToggle.addEventListener("click", toggleMenu);
        
        dom.navLinks.forEach(link => link.addEventListener("click", closeMenu));
        
        // Ny modal-lyssnare
        dom.modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => openModal(trigger));
        });
        dom.modalClosers.forEach(closer => {
            closer.addEventListener('click', closeModal);
        });

        // Stäng menyer/modaler med Esc-tangenten
        document.addEventListener("keydown", (e) => { 
            if (e.key === "Escape") {
                closeMenu(); 
                closeModal();
            }
        });
        
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
