/**
*  Portfölj-skript (Vanilla JS)
*  Hanterar:
*  1. Mörkt/Ljust Tema
*  2. Språkväxling
*  3. Mobilmeny
*  4. Animationer (Skrivmaskin & snabb scroll)
*  5. Pop-ups för kurser och diagram (inkl. taggar & tangentbordsstöd)
*  6. Kopiera mejladress & Tillbaka till toppen-pil
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
            progress_label: "Study Progress (Theory & Courses)",
            progress_stats: "8 of 11 courses completed (1 ongoing)",
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

            // Kurs 6 (Avklarad)
            course6_title: "IT Security Linux, Unix and Mac",
            course6_points: "20 YH Credits",
            course6_desc: "Administration, configuration, and hardening of Linux, Unix, and Mac environments according to security standards to minimize attack surfaces and secure services.",
            blog_course6: "<p>This course provided an in-depth understanding of how Linux, Unix, and Mac systems are structured and secured in professional environments. Starting with Ubuntu LTS and Linux-based virtualization (such as KVM), we worked systematically to analyze threat landscapes and implement both foundational and advanced system hardening according to established security standards.</p><p>A major focus was minimizing potential attack surfaces through strict control of users, file permissions, and authentication mechanisms, alongside auditing active processes and installed system services. We also delved into OS-level network security and how to configure robust logging, traceability, and detection to identify anomalies early.</p><p>Finally, the technical aspects were tied together with preventive security work, risk analysis, and advanced defense mechanisms. These skills were tested in an extensive 48-hour practical examination where an entire environment had to be hardened, documented, and defended against specific security requirements.</p>",

            // Kurs 7
            course7_title: "Network Security",
            course7_points: "30 YH Credits",
            course7_desc: "Management of network attacks, intrusion attempts, and malware. Practical work with firewalls, IDS/IPS systems, and secure protocols.",
            blog_course7: "<p>This course provided an in-depth understanding of technical network security with a strong focus on protecting organizational IT infrastructure and information. We studied and analyzed the most common types of network attacks, including full-scale attacks, web attacks, and malware propagation, as well as how to handle internal breaches of established security policies.</p><p>A central feature was practical work in detecting and responding to intrusion attempts. We delved into intrusion security by implementing and evaluating IDS/IPS systems, firewalls, and antivirus software. Additionally, we practiced analyzing and evaluating networks to independently investigate security flaws, take protective measures, and modify security protocols and encryption.</p>",

            // Kurs 8
            course8_title: "Ethical Hacking",
            course8_points: "25 YH Credits",
            course8_desc: "Methods for penetration testing, vulnerability scanning, network intrusions, lateral movement, incident response, and digital forensics.",
            blog_course8: "<p>This course provided an in-depth practical understanding of how an attacker operates and how to proactively identify and remediate vulnerabilities, including hardware-based ones. We started with fundamental methods for reconnaissance, network scanning with Nmap, and traffic analysis via Wireshark. From there, we moved on to advanced concepts such as initial access, payload creation, brute forcing, and establishing persistence in an environment.</p><p>A significant portion of the training focused on post-exploitation and lateral movement, practicing how to navigate through domain environments using tools like Metasploit, Meterpreter, and Responder. The course also effectively bridged the offensive perspective with defensive security by evaluating monitoring and intrusion detection strategies, establishing incident response plans, and applying digital forensics to secure evidence and recover systems after an incident.</p>",

            // Kurs 9 (Pågående)
            course9_title: "Advanced IT Security",
            course9_points: "25 YH Credits",
            course9_desc: "Managing complex security architectures, incident response (IR), log analysis in SIEM, and SOC tools.",
            blog_course9: "<p>Right now, we are diving deep into advanced IT security with a focus on complex security architectures and practical defensive operations. We are working with log analysis in SIEM systems, monitoring via SOC tools, and structured Incident Response (IR) to effectively detect, analyze, and isolate advanced threats.</p>",
            
            // Kommande kurser
            course10_title: "Cloud Security",
            course10_points: "25 YH Credits",
            course10_desc: "Security configuration and architecture in cloud environments (e.g., Azure/AWS), identity management (IAM), and Zero Trust.",
            
            course11_title: "Thesis / Degree Project",
            course11_points: "20 YH Credits",
            course11_desc: "Final project work that ties together theory and practice within a chosen specialization area of IT security.",

            blog_upcoming: "<p>I haven't started this course yet. More information and a summary of my labs and insights will be published here as soon as the course begins!</p>",

            // --- HEMMALABB TEXTER (ENGELSKA) ---
            homelab_h2: "Home Lab",
            homelab_intro: "If there's one thing I've learned from building and running a home lab, it's that it's never really 'finished'. Either there's something to optimize, a quick fix that should be done properly, or a new technology that just has to be tested. It's exactly that feeling of never quite being satisfied and always seeing the next project on the horizon that makes it so much fun.",
            homelab_intro_2: "From previously sitting scattered on a normal shelf, the entire build has now moved into a modified IKEA cabinet with a 10\" rack and temperature-controlled cooling. On the inside, a simpler home setup has grown into a significantly more robust environment with a dedicated hardware firewall at the front, and a Proxmox cluster with three active nodes. In addition, I have a standalone management node that, among other things, handles the cluster's quorum and secure remote access.",
            
            // Topologi (Interaktivt diagram)
            topo_h3: "Interactive Network Topology",
            topo_click_info: "(Click the nodes to read more)",
            
            topo_net_title: "Internet",
            topo_net_desc: "Upstream network",
            topo_net_modal: "<p>The internet connection arrives via double-NAT from the upstream equipment. No incoming ports are open to the public; all external access is handled exclusively via encrypted outbound tunnels (Tailscale and Cloudflare Tunnels/playit.gg).</p>",
            
            topo_fw_title: "Firewall",
            topo_fw_desc: "Cisco ASA 5506-X",
            topo_fw_role: "Gateway & DHCP",
            topo_fw_modal: "<p>Acts as the homelab's primary line of defense and gateway. The firewall distributes internal IP addresses via DHCP and manages security policies and routing between the network's inside and outside.</p>",
            
            topo_sw_title: "Main Switch",
            topo_sw_desc: "MikroTik hEX",
            topo_sw_role: "Distribution",
            topo_sw_modal: "<p>A central distribution switch that routes the connection from the firewall to the remaining physical devices in the 10\" rack. Future logical VLAN segmentation is also being prepared here.</p>",
            
            topo_ext_title: "Port Expansion",
            topo_ext_desc: "Tenda 5-port Switch",
            topo_ext_role: "Infrastructure",
            topo_ext_modal: "<p>A simple unmanaged switch used to expand the number of physical ports in the rack, ensuring all server nodes receive a stable wired gigabit connection.</p>",
            
            topo_ap_title: "Wireless Lab Net",
            topo_ap_desc: "Cudy Travel Router (AP)",
            topo_ap_role: "Access Point",
            topo_ap_modal: "<p>Functions as a dedicated wireless access point with routing and DHCP disabled. Provides secure wireless access exclusively to the lab's isolated SSID and subnet.</p>",
            
            topo_mgmt_title: "Management & VPN",
            topo_mgmt_desc: "Okdo Radxa 4C",
            topo_mgmt_role: "Quorum & Access",
            topo_mgmt_modal: "<p>Critical standalone management node. Runs <strong>Tailscale VPN</strong> as a subnet router, giving me secure remote access to the entire lab no matter where I am.</p><p>Furthermore, it acts as a <strong>QDevice</strong> for the Proxmox cluster. If one of the large servers needs a reboot or goes down, the Radxa ensures the cluster retains its quorum (vote majority) and continues to operate undisturbed.</p>",
            
            topo_qdevice_badge: "🔗 QDevice Quorum: Okdo Radxa 4C",
            topo_cluster_title: "Proxmox Cluster (Lab Cluster)",
            topo_cluster_desc: "High Availability Compute",
            topo_cluster_role: "Virtualization",
            topo_cluster_modal: "<p>A hyper-converged cluster consisting of three physical micro-computers. The environment relies entirely on local storage for speed but ensures stability through smart cluster routing and the external quorum support from the management node.</p><p>It hosts a series of isolated LXC containers and virtual machines, including dedicated Docker hosts, monitoring dashboards, and alternative Debian-based management environments.</p>",

            // Homelab Cards
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
            
            skill_network_title: "Network & Firewalls",
            skill_network_desc: "Design and segmentation (VLANs, ACLs), Cisco ASA, IDS/IPS, traffic analysis using Wireshark, and secure VPN solutions (Tailscale, OpenVPN).",
            
            skill_windows_title: "Windows & Active Directory",
            skill_windows_desc: "Hardening of Windows environments (GPO, WDAC, ASR). Secure management of identities and domains via AD DS, LDAP, and Kerberos.",
            
            skill_linux_title: "Linux & Hardening",
            skill_linux_desc: "Administration and hardening (Ubuntu/Debian). Minimizing attack surfaces, service isolation, strict file permissions, logging, and SSH hardening.",
            
            skill_iam_title: "IAM & Zero Trust",
            skill_iam_desc: "Implementation of Zero Trust architecture. Management of PKI, digital certificates, SSO, MFA, and protection technologies like Credential Guard.",
            
            skill_vm_title: "Virtualization & Clusters",
            skill_vm_desc: "Cluster management with Proxmox VE, KVM, and Hyper-V. Service isolation using LXC containers and Docker, plus cloud integration (Azure) and backup.",
            
            skill_grc_title: "Risk Analysis & GRC",
            skill_grc_desc: "Application of ISO 27000 and NIST RMF. Practical work with incident response plans, security policies, and compliance (GDPR, NIS2).",
            
            skill_monitoring_title: "Pentesting, SIEM & Forensics",
            skill_monitoring_desc: "Vulnerability scanning and ethical hacking (Kali, Nmap, Metasploit) combined with log analysis (Sysmon, SIEM) and digital forensics.",
            
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
            contact_btn_copy: "Copy email",
            contact_btn_copied: "Copied! ✓",
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
        navList: document.getElementById("primary-navigation"),
        navLinks: document.querySelectorAll(".nav-link"),
        langElements: document.querySelectorAll("[data-lang-key]"),
        anchorLinks: document.querySelectorAll('a[href^="#"]'),
        heroH1: document.querySelector(".hero-text h1"),
        heroTagline: document.querySelector(".hero-tagline"),
        projectCards: document.querySelectorAll(".project-card"),
        copyEmailBtn: document.getElementById("copy-email-btn"),
        backToTopBtn: document.getElementById("back-to-top"),
        
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
    let activeCard = null;

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

        if (dom.backToTopBtn) {
            const label = lang === "en" ? "Back to top" : "Tillbaka till toppen";
            dom.backToTopBtn.setAttribute("aria-label", label);
            dom.backToTopBtn.setAttribute("title", label);
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
        
        if (activeCard) {
            openModal(activeCard);
        }

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
        const nextState = !isVisible;
        dom.navMenu.setAttribute("data-visible", nextState);
        if (dom.navList) dom.navList.setAttribute("data-visible", nextState);
        dom.navToggle.setAttribute("aria-expanded", nextState);
        dom.html.style.overflow = nextState ? "hidden" : "auto";
    }

    function closeMenu() {
        if (!dom.navMenu || !dom.navToggle) return;

        if (dom.navMenu.getAttribute("data-visible") === "true") {
            dom.navMenu.setAttribute("data-visible", false);
            if (dom.navList) dom.navList.setAttribute("data-visible", false);
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


    // --- 9. Scroll-animation (OPTIMERAD: Ingen kumulativ fördröjning) ---
    function initScrollObserver() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (!('IntersectionObserver' in window) || prefersReducedMotion) {
            dom.projectCards.forEach(card => card.classList.add('is-visible'));
            return;
        }

        const observerOptions = {
            root: null, 
            rootMargin: '0px 0px 60px 0px',
            threshold: 0.05 
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    setTimeout(() => {
                        entry.target.style.transitionDelay = '0ms';
                    }, 450);
                    observer.unobserve(entry.target);
                }
            });
        };

        const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);

        dom.projectCards.forEach((card, index) => {
            const columnDelay = (index % 3) * 70;
            card.style.transitionDelay = `${columnDelay}ms`;
            scrollObserver.observe(card);
        });
    }


    // --- 10. Scrollspy & Tillbaka till toppen ---
    function initScrollspy() {
        if ('IntersectionObserver' in window) {
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
            sections.forEach(section => scrollspyObserver.observe(section));
        }

        if (dom.backToTopBtn) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 350) {
                    dom.backToTopBtn.classList.add('is-visible');
                } else {
                    dom.backToTopBtn.classList.remove('is-visible');
                }
            }, { passive: true });

            dom.backToTopBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }

    // --- 11. Modal Logik (inkl. taggar i modalen) ---
    function openModal(card) {
        if (!dom.modal) return;
        activeCard = card;
        
        const titleEl = card.querySelector('h3');
        const pointsEl = card.querySelector('.project-role');
        const blogEl = card.querySelector('.course-blog');
        const tagsEl = card.querySelector('.project-tags');
        
        if (dom.modalTitle && titleEl) dom.modalTitle.textContent = titleEl.textContent;
        if (dom.modalSubtitle && pointsEl) dom.modalSubtitle.textContent = pointsEl.textContent;
        
        if (dom.modalBody && blogEl) {
            const tagsHtml = tagsEl ? `<div class="project-tags" style="margin-top: 0; margin-bottom: 1.25rem;">${tagsEl.innerHTML}</div>` : '';
            dom.modalBody.innerHTML = tagsHtml + blogEl.innerHTML;
        }
        
        dom.modal.setAttribute('aria-hidden', 'false');
        dom.html.style.overflow = 'hidden'; 
    }

    function closeModal() {
        if (!dom.modal) return;
        dom.modal.setAttribute('aria-hidden', 'true');
        dom.html.style.overflow = 'auto';
        if (activeCard) {
            activeCard.focus();
        }
        activeCard = null;
    }

    // --- 12. Kopiera mejladress ---
    function copyEmail() {
        if (!dom.copyEmailBtn) return;
        const email = dom.copyEmailBtn.dataset.email;
        const spanEl = dom.copyEmailBtn.querySelector('span');
        if (!navigator.clipboard || !email || !spanEl) return;

        navigator.clipboard.writeText(email).then(() => {
            const originalText = spanEl.textContent;
            spanEl.textContent = currentLang === 'en'
                ? translations.en.contact_btn_copied
                : 'Kopierad! ✓';
            dom.copyEmailBtn.classList.add('is-copied');

            setTimeout(() => {
                spanEl.textContent = currentLang === 'en'
                    ? translations.en.contact_btn_copy
                    : (spanEl.dataset.defaultSv || originalText);
                dom.copyEmailBtn.classList.remove('is-copied');
            }, 2200);
        });
    }

    // --- 13. Initiering ---
    function bindEvents() {
        if (dom.themeToggle) dom.themeToggle.addEventListener("click", toggleTheme);
        if (dom.langToggle) dom.langToggle.addEventListener("click", toggleLanguage);
        if (dom.navToggle) dom.navToggle.addEventListener("click", toggleMenu);
        
        dom.navLinks.forEach(link => link.addEventListener("click", closeMenu));

        if (dom.copyEmailBtn) {
            dom.copyEmailBtn.addEventListener("click", copyEmail);
        }

        // Modal-lyssnare (musklick + tangentbord Enter/Mellanslag)
        dom.modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => openModal(trigger));
            trigger.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openModal(trigger);
                }
            });
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
