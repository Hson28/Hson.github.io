/**
*  Portfölj-skript (Vanilla JS)
*  Hanterar:
*  1. Mörkt/Ljust Tema
*  2. Språkväxling (FIXAD för flaggor)
*  3. Mobilmeny (FIXAD)
*  4. Animationer (Endast skrivmaskin & scroll)
*  5. Pop-ups för kurser och hemmalabb
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
            nav_homelab: "Home Lab",
            nav_skills: "Skills",
            nav_cv: "CV",
            nav_contact: "Contact",
            hero_h1: "Jehanni",
            hero_tagline: "Future IT Security Specialist with a pedagogical background. I make the complex understandable, identify risks, and strengthen security culture.",
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
            tag_ongoing: "Ongoing",
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
            blog_course5: "<p>This intensive course provided an advanced technical specialization in security for Microsoft environments, from the client side to the server level. The training began with a detailed analysis of the current threat landscape and Windows' underlying architecture. I gained in-depth knowledge of the operating system's core (Kernel), LSA, SAM, and boot security. After that, we shifted focus to actively minimizing the attack surface through system hardening. This included working with security baselines, implementing WDAC (Windows Defender Application Control) and ASR (Attack Surface Reduction) rules, as well as securing network protocols like SMB.</p><p>A critical area during the course was identity and access management. I delved into protocols such as Kerberos and LDAP, configured Extended Protection for Authentication (EPA), and learned advanced techniques for protecting credentials and secrets using Credential Guard, HVCI, and DMSA. To be able to detect and respond to threats, great emphasis was placed on logging and monitoring. I was trained in structuring event logs and audit policies, as well as using powerful monitoring tools like Sysmon, Microsoft Defender, and Microsoft Sentinel.</p><p>In the later parts of the course, modern device management and data protection were covered. I learned to control and secure devices via GPO and Intune, and to protect data at rest and in transit using encryption technologies like BitLocker, TPM, TLS, and QUIC. The training concluded with highly advanced security mechanisms, such as Virtualization-Based Security (VBS), Shadow Stack, and Control Flow Guard (CFG). All of this was finally tied together in a comprehensive deep dive into the security architecture of the new Windows Server 2025, where we evaluated security from the hardware and silicon level all the way up to specific workloads.</p>",

            // Kurs 6
            course6_title: "IT Security Linux, Unix and Mac",
            course6_points: "20 YH Credits",
            course6_desc: "Administration and configuration of systems according to security standards. Focus on system hardening and minimizing possible attack surfaces for installed services.",
            blog_course6: "<p>Right now, we are working practically with administering and configuring Linux and Unix systems. Since a vast majority of the world's servers run Linux, understanding how to secure them is crucial. We are practicing minimizing the attack surface by disabling unnecessary services, carefully configuring file permissions in the terminal, and hardening SSH access according to established security standards.</p>",

            // Kurs 7 (Nu bland avklarade)
            course7_title: "Network Security",
            course7_points: "30 YH Credits",
            course7_desc: "Management of network attacks, intrusion attempts, and malware. Practical work with firewalls, IDS/IPS systems, and secure protocols.",
            blog_course7: "<p>This course provided an in-depth understanding of technical network security with a strong focus on protecting organizational IT infrastructure and information. We studied and analyzed the most common types of network attacks, including full-scale attacks, web attacks, and malware propagation, as well as how to handle internal breaches of established security policies.</p><p>A central feature was practical work in detecting and responding to intrusion attempts. We delved into intrusion security by implementing and evaluating IDS/IPS systems, firewalls, and antivirus software. Additionally, we practiced analyzing and evaluating networks to independently investigate security flaws, take protective measures, and modify security protocols and encryption.</p>",

            // Kurs 8 (Nu bland avklarade)
            course8_title: "Ethical Hacking",
            course8_points: "25 YH Credits",
            course8_desc: "Methods for penetration testing, vulnerability scanning, network intrusions, lateral movement, incident response, and digital forensics.",
            blog_course8: "<p>This course provided an in-depth practical understanding of how an attacker operates and how to proactively identify and remediate vulnerabilities, including hardware-based ones. We started with fundamental methods for reconnaissance, network scanning with Nmap, and traffic analysis via Wireshark. From there, we moved on to advanced concepts such as initial access, payload creation, brute forcing, and establishing persistence in an environment.</p><p>A significant portion of the training focused on post-exploitation and lateral movement, practicing how to navigate through domain environments using tools like Metasploit, Meterpreter, and Responder. The course also effectively bridged the offensive perspective with defensive security by evaluating monitoring and intrusion detection strategies, establishing incident response plans, and applying digital forensics to secure evidence and recover systems after an incident.</p>",

            // Kommande kurser
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

            // --- HEMMALABB TEXTER (ENGELSKA) ---
            homelab_h2: "Home Lab",
            homelab_intro: "A home lab is never really 'finished' – there is always something to optimize or a new technology to test. From previously being spread out on a shelf, the entire build is now housed in a modified IKEA cabinet with a 10\" rack and temperature-controlled cooling. The lab serves as my personal test environment where I work hands-on with cluster management, virtualization, and network architecture, which has deepened my technical understanding in a way that is hard to achieve just by reading.",
            
            lab1_title: "Network & Infrastructure",
            lab1_sub: "Hardware Firewall",
            lab1_desc: "Dedicated hardware firewall and switch infrastructure. Planning and preparations for strict VLAN segmentation.",
            blog_lab1: "<p>The lab's network is built around a dedicated Cisco ASA hardware firewall that acts as a gateway and handles incoming and outgoing traffic. A central switch solution then distributes the network to the various physical units and wireless access points.</p><p>An ongoing project is implementing strict VLAN segmentation. The purpose is to isolate public-facing services (like containers hosting game servers) from the internal management network, practically applying Zero Trust concepts.</p>",

            lab2_title: "Proxmox Cluster & Virtualization",
            lab2_sub: "Compute & Containers",
            lab2_desc: "Cluster environment with three active nodes and a standalone management node (QDevice) for quorum and stability.",
            blog_lab2: "<p>The foundation of the environment's compute power is a Proxmox cluster consisting of three active nodes. By integrating a standalone Linux-based management node as a QDevice, I ensure the cluster maintains quorum (vote majority) and stability even if one of the compute nodes is taken offline for maintenance.</p><p>The environment is divided into resource-efficient LXC containers and full-scale virtual machines, hosting among other things a Docker environment for isolated services. The architecture allows me to spin up, test, and tear down complex server environments quickly and efficiently.</p>",

            lab3_title: "Security, Access & Management",
            lab3_sub: "Hardening & VPN",
            lab3_desc: "Secure remote access via VPN, SSH hardening, and MFA-protected interfaces to minimize the attack surface.",
            blog_lab3: "<p>Security is a common thread throughout the home lab. To keep the attack surface minimal, no critical management ports are exposed directly to the public web. Instead, all remote access is routed through a secure VPN tunnel (Tailscale) hosted on the dedicated management node.</p><p>Authentication to web interfaces (like Proxmox) is protected by Two-Factor Authentication (MFA). At the system level, traditional password logins are completely disabled; all SSH access to the nodes requires cryptographic keys (ed25519) to resist unauthorized access attempts.</p>",

            // --- SKILLS (HOVER) TEXTER ---
            skills_h2: "Skills & Competencies",
            skills_tech: "Technical Skills",
            skills_soft: "Personal Traits",
            
            skill_network_title: "Network & Infrastructure",
            skill_network_desc: "Network design and security (VLANs, ACLs). Experience with Cisco devices, traffic analysis using Wireshark, and secure connections (VPN, Bastion).",
            
            skill_windows_title: "Windows & Active Directory",
            skill_windows_desc: "Hardening of Windows environments (GPO, WDAC, ASR). Secure management of identities and domains via AD DS, LDAP, and Kerberos.",
            
            skill_linux_title: "Linux & Hardening",
            skill_linux_desc: "CLI administration (Debian/Ubuntu). Minimizing attack surfaces through service configuration, strict file permissions, and SSH hardening.",
            
            skill_iam_title: "IAM & Zero Trust",
            skill_iam_desc: "Implementation of Zero Trust architecture. Management of PKI, digital certificates, SSO, MFA, and protection technologies like Credential Guard.",
            
            skill_vm_title: "Virtualization & Cloud",
            skill_vm_desc: "Building high-availability environments with Hyper-V and virtual machines. Integration with cloud services (Azure) and Disaster Recovery.",
            
            skill_grc_title: "Risk Analysis & GRC",
            skill_grc_desc: "Application of ISO 27000 and NIST RMF. Practical work with incident response plans, security policies, and compliance (GDPR, NIS2).",
            
            skill_monitoring_title: "Monitoring & Logging",
            skill_monitoring_desc: "Threat and unauthorized activity detection. Configuration of event logs and analysis via tools like Sysmon and Microsoft Sentinel.",
            
            skill_endpoint_title: "Endpoint & Data Protection",
            skill_endpoint_desc: "Device management via Intune. Data encryption (BitLocker, TPM) and hardware-level protection mechanisms (VBS, HVCI, CFG).",

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

            contact_h2: "Want to get in touch?",
            contact_p: "I am always open to making new connections, discussing IT security, or talking about future opportunities. If you are looking for someone who combines technical knowledge with methodical thinking and pedagogical skills, feel free to reach out!",
            contact_btn_email: "Email me",
            contact_btn_linkedin: "Message on LinkedIn",
            
            footer_copy: "© 2026 Jehanni Halvarsson. All rights reserved.",
            footer_cloudflare: "This site uses Cloudflare for security and anonymous statistics. No tracking cookies are used.",
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

    // --- 11. Modal Logik ---
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
        
        // Modal-lyssnare
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
