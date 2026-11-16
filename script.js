/**
*  Portfölj-skript (Vanilla JS)
*  Hanterar:
*  1. Mörkt/Ljust Tema
*  2. Språkväxling
*  3. Mobilmeny (med inline-fallback mot mobil-cache)
*  4. Animationer (Skrivmaskin & snabb scroll)
*  5. Pop-ups för kurser och diagram (inkl. taggar & tangentbordsstöd)
*  6. Kopiera mejladress & Tillbaka till toppen-pil
*/
(function () {
    "use strict";

    // --- 1. Språkdata ---
    const translations = {
        en: {
            meta_title: "Jehanni — Aspiring IT Security Specialist",
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
            hero_h1: "Jehanni Halvarsson",
            hero_tagline: "Aspiring IT Security Specialist with a background in education and leadership. I turn complex technical concepts into clear insights, identify risks, and help build a strong security culture.",
            hero_cta: "Get in touch",
            about_h2: "About Me",
            about_p1: "After several years working as a preschool teacher and team leader, I am now transitioning into cybersecurity as an IT Security Specialist through TUC Vocational University. In a field where the human factor is often the deciding link, I bring solid experience in leadership, clear communication, and structured workflows.",
            about_p2: "My background in education means I am used to explaining complex concepts in an accessible way—a crucial skill when rolling out security policies or leading security awareness initiatives. I take a methodical approach to documentation and incident response, and I thrive as a bridge between technical teams and the wider organization.",
            about_h3: "Certifications & Education",
            about_cert1: "Networking Basics (Cisco)",
            about_cert2: "Networking Devices and Initial Configuration (Cisco)",
            about_cert3: "Endpoint Security (Cisco)",
            
            // --- KURS-TEXTER (ENGELSKA) ---
            courses_h2: "Academic Courses",
            progress_label: "Program Progress (Theory & Courses)",
            progress_stats: "8 of 11 courses completed (1 in progress)",
            courses_completed: "Completed & In Progress",
            courses_upcoming: "Upcoming Courses",
            tag_upcoming: "Upcoming",
            tag_ongoing: "In Progress",
            read_more: "Click to read more →",
            
            // Kurs 1
            course1_title: "Network Engineering",
            course1_points: "25 YH Credits",
            course1_desc: "Configuring routers and switches, VLANs, and Access Control Lists (ACLs). Also covers wireless network security and packet analysis.",
            blog_course1: "<p>This course provided a solid theoretical and hands-on foundation in designing, securing, and troubleshooting computer networks. Starting with network architecture, the OSI and TCP/IP models, IPv4/IPv6 addressing, and subnetting, I quickly moved on to configuring routers and switches via the CLI, hardening devices, and segmenting networks with VLANs.</p><p>A major part of the course focused on traffic control and security using Access Control Lists (ACLs), routing protocols, and DNS integration, alongside planning and securing wireless networks. Troubleshooting was a constant theme—using Cisco Packet Tracer and Wireshark, I diagnosed and resolved security flaws and connectivity issues in deliberately misconfigured environments.</p><p>The course concluded with a practical design challenge where I gathered network requirements, designed a resilient infrastructure, and presented the solution orally.</p>",

            // Kurs 2
            course2_title: "IT Infrastructure",
            course2_points: "25 YH Credits",
            course2_desc: "Designing resilient and secure IT environments. Covers server and application virtualization, cloud services, and backup and disaster recovery strategies.",
            blog_course2: "<p>In this course, we explored how modern IT infrastructures are designed, optimized, and secured. We started with server architecture and resource management before moving into virtualization with Hyper-V, containerization, and hybrid cloud models.</p><p>A large portion of the curriculum focused on business continuity and disaster recovery. We performed vulnerability assessments, implemented backup strategies based on the 3-2-1 rule, and worked hands-on with system hardening across both physical and virtual servers.</p><p>Finally, we focused on secure remote access by comparing and configuring VPN protocols (such as OpenVPN and L2TP) and deploying bastion hosts (jumpboxes). Everything came together in a comprehensive group project where we designed and defended a complete, secure enterprise infrastructure.</p>",

            // Kurs 3
            course3_title: "IT Security Fundamentals",
            course3_points: "30 YH Credits",
            course3_desc: "Protecting systems and data through risk analysis, Zero Trust architecture, and firewall configuration. Covers PKI, digital certificates, SSO, and MFA.",
            blog_course3: "<p>This course laid the groundwork for systematic security work in the role of an IT Security Specialist. We worked extensively with security documentation, ISO standards, and practical risk and vulnerability assessments to proactively identify threats across both on-premises and cloud environments.</p><p>Identity and Access Management (IAM) built on Zero Trust principles was a central theme. Through hands-on labs, we hardened Active Directory environments (Secure AD DS), implemented Single Sign-On (SSO) and Multi-Factor Authentication (MFA), and connected segmented domains to Microsoft Azure behind firewalls.</p><p>We also covered cryptography, digital signatures, and Public Key Infrastructure (PKI) to secure communications using digital certificates—culminating in intensive full-day practical exams.</p>",

            // Kurs 4
            course4_title: "Information Security & IT Law",
            course4_points: "25 YH Credits",
            course4_desc: "Practical application of GDPR and NIS2. Covers risk assessments, incident response planning, and frameworks such as ISO/IEC 27000 and NIST.",
            blog_course4: "<p>This course bridged technical cybersecurity with the legal and regulatory frameworks that govern modern information management. Starting from the CIA triad (Confidentiality, Integrity, and Availability) and guidelines from the Swedish Civil Contingencies Agency (MSB), I delved into the GDPR, the Camera Surveillance Act, and the legal responsibilities of data controllers and processors.</p><p>We worked hands-on with Information Security Management Systems (ISMS) based on the ISO/IEC 27000 series, alongside frameworks like NIST SP 800-53 and IEC 62443 for OT security. Using methodologies from MSB, OWASP, and the NIST Risk Management Framework (RMF), I led workshops to map critical assets and assess organizational vulnerabilities.</p><p>In the final phase, I drafted incident response plans and information security policies while analyzing how the NIS2 directive impacts incident reporting, compliance, and the balance between robust security and personal privacy.</p>",

            // Kurs 5
            course5_title: "Windows Security",
            course5_points: "20 YH Credits",
            course5_desc: "Minimizing attack surfaces in Microsoft environments through system hardening. Covers AD/LDAP, access control (IAM), security baselines, and auditing.",
            blog_course5: "<p>An advanced technical deep dive into securing Microsoft environments from endpoint to server. We began by examining Windows internals—including the kernel, LSA, SAM, and boot security—before working hands-on to reduce the attack surface using security baselines, Windows Defender Application Control (WDAC), Attack Surface Reduction (ASR) rules, and SMB hardening.</p><p>Within identity security, we worked with Kerberos, LDAP, and Extended Protection for Authentication (EPA), as well as protecting credentials using Credential Guard, HVCI, and dMSA. To detect and investigate threats, we configured granular audit policies and analyzed event logs using Sysmon, Microsoft Defender, and Microsoft Sentinel.</p><p>The course also covered modern endpoint management via GPO and Intune, data encryption with BitLocker, TPM, TLS, and QUIC, and hardware-backed protections like Virtualization-Based Security (VBS) and Shadow Stack, wrapping up with a review of the security architecture in Windows Server 2025.</p>",

            // Kurs 6
            course6_title: "Linux, Unix & macOS Security",
            course6_points: "20 YH Credits",
            course6_desc: "Administering, configuring, and hardening Linux, Unix, and macOS environments according to security benchmarks to minimize attack surfaces.",
            blog_course6: "<p>This course provided a thorough practical foundation in securing Linux, Unix, and macOS systems in enterprise environments. Using Ubuntu LTS and KVM virtualization as our base, we conducted threat assessments and applied both baseline and advanced system hardening in line with industry benchmarks.</p><p>A major focus was reducing the attack surface through strict user privilege management, file permissions, and authentication controls (such as SSH hardening), as well as auditing active processes and disabling unnecessary services. We also configured host-based firewalls and set up comprehensive logging for auditing and anomaly detection.</p><p>The course concluded with an intensive 48-hour practical exam where we had to harden, document, and defend an entire server environment against strict security requirements.</p>",

            // Kurs 7
            course7_title: "Network Security",
            course7_points: "30 YH Credits",
            course7_desc: "Defending against network attacks, intrusions, and malware. Hands-on work with firewalls, IDS/IPS systems, network segmentation, and secure protocols.",
            blog_course7: "<p>This course focused on technical network defense and protecting organizational infrastructure and data. We analyzed common attack vectors—ranging from volumetric DDoS attacks and web exploitation to malware propagation—as well as handling internal policy violations.</p><p>Much of the coursework revolved around detecting and mitigating intrusions in practice. We deployed and tuned IDS/IPS systems, firewalls, and endpoint protection, and practiced investigating network vulnerabilities, strengthening encryption protocols, and implementing effective countermeasures.</p>",

            // Kurs 8
            course8_title: "Ethical Hacking",
            course8_points: "25 YH Credits",
            course8_desc: "Penetration testing methodologies, vulnerability scanning, network exploitation, and lateral movement, combined with incident response and digital forensics.",
            blog_course8: "<p>This course provided hands-on insight into the attacker mindset in order to proactively find and remediate vulnerabilities across both software and hardware. Starting with reconnaissance, network scanning with Nmap, and packet analysis in Wireshark, we progressed to initial access, payload generation, password attacks, and establishing persistence.</p><p>A key part of the training covered post-exploitation and lateral movement, navigating domain environments using tools like Metasploit, Meterpreter, and Responder. Finally, we connected offensive tactics to defensive operations through modules on intrusion detection, incident response planning, and digital forensics to preserve evidence and restore systems after a breach.</p>",

            // Kurs 9 (Pågående)
            course9_title: "Advanced IT Security",
            course9_points: "25 YH Credits",
            course9_desc: "Managing complex security architectures, structured incident response (IR), log analysis in SIEM platforms, and SOC workflows.",
            blog_course9: "<p>We are currently diving into advanced cybersecurity, focusing on complex enterprise architectures and defensive operations. Our hands-on work centers on log analysis in SIEM platforms, threat monitoring with SOC tools, and structured Incident Response (IR) to detect, analyze, and contain sophisticated threats.</p>",
            
            // Kommande kurser
            course10_title: "Cloud Security",
            course10_points: "25 YH Credits",
            course10_desc: "Security architecture and configuration in cloud environments (such as Azure and AWS), Identity and Access Management (IAM), and Zero Trust implementation.",
            
            course11_title: "Degree Project / Thesis",
            course11_points: "20 YH Credits",
            course11_desc: "Capstone project combining theory and practical application within a chosen cybersecurity specialization.",

            blog_upcoming: "<p>This course hasn't started yet. I will post an overview of my labs and key takeaways here as soon as it gets underway!</p>",

            // --- HEMMALABB TEXTER (ENGELSKA) ---
            homelab_h2: "Home Lab",
            homelab_intro: "One thing I quickly realized when building and running a home lab is that it is never truly finished. There is always a configuration to fine-tune, a temporary workaround that deserves a proper fix, or a new technology waiting to be tested. That constant drive to improve and experiment is what makes it so rewarding.",
            homelab_intro_2: "What started as a few devices scattered on a shelf has now moved into a modified IKEA cabinet outfitted with a 10\" rack and temperature-controlled cooling. Inside, a simple home setup has evolved into a much more resilient architecture featuring a dedicated hardware firewall at the edge and a three-node Proxmox cluster. Alongside the cluster, I run a standalone management node that handles cluster quorum and secure remote access.",
            
            // Topologi (Interaktivt diagram)
            topo_h3: "Interactive Network Topology",
            topo_click_info: "(Click any node to learn more)",
            
            topo_net_title: "Internet",
            topo_net_desc: "Upstream Network",
            topo_net_modal: "<p>Internet connectivity comes in behind double NAT from the upstream router. No inbound ports are exposed to the public internet; all external access is handled exclusively through encrypted outbound tunnels (Tailscale and Cloudflare Tunnels / playit.gg).</p>",
            
            topo_fw_title: "Firewall",
            topo_fw_desc: "Cisco ASA 5506-X",
            topo_fw_role: "Gateway & DHCP",
            topo_fw_modal: "<p>Serves as the lab's perimeter defense and default gateway. The firewall handles internal DHCP leases and enforces security policies and routing between the lab network and the outside world.</p>",
            
            topo_sw_title: "Core Switch",
            topo_sw_desc: "MikroTik hEX",
            topo_sw_role: "Distribution",
            topo_sw_modal: "<p>Central distribution switch linking the firewall to the physical devices in the 10\" rack. It is also where logical VLAN segmentation is being staged.</p>",
            
            topo_ext_title: "Port Expansion",
            topo_ext_desc: "Tenda 5-Port Switch",
            topo_ext_role: "Infrastructure",
            topo_ext_modal: "<p>An unmanaged gigabit switch used to expand physical port capacity in the rack, ensuring every server node has a reliable wired connection.</p>",
            
            topo_ap_title: "Lab Wi-Fi",
            topo_ap_desc: "Cudy Travel Router (AP)",
            topo_ap_role: "Access Point",
            topo_ap_modal: "<p>Configured strictly as a wireless access point with routing and DHCP disabled, providing isolated wireless access directly to the lab subnet.</p>",
            
            topo_mgmt_title: "Management & VPN",
            topo_mgmt_desc: "Okdo Radxa 4C",
            topo_mgmt_role: "Quorum & Access",
            topo_mgmt_modal: "<p>Standalone management node running <strong>Tailscale VPN</strong> as a subnet router, giving me secure remote access to the entire lab from anywhere.</p><p>It also serves as a <strong>QDevice</strong> for the Proxmox cluster. If one of the main compute nodes is rebooted or taken offline for maintenance, the Radxa node ensures the cluster maintains quorum and stays operational without interruption.</p>",
            
            topo_qdevice_badge: "🔗 QDevice Quorum: Okdo Radxa 4C",
            topo_cluster_title: "Proxmox Cluster (Lab Cluster)",
            topo_cluster_desc: "High Availability Compute",
            topo_cluster_role: "Virtualization",
            topo_cluster_modal: "<p>A three-node cluster built on compact physical servers. It uses fast local storage on each node while maintaining high availability through cluster management and external quorum support from the management node.</p><p>The cluster runs a mix of lightweight LXC containers and full virtual machines, including dedicated Docker hosts, monitoring dashboards, and Debian-based test environments.</p>",

            // Homelab Cards
            lab1_title: "Network & Infrastructure",
            lab1_sub: "Hardware Firewall",
            lab1_desc: "Dedicated hardware firewall and switching infrastructure focused on traffic control and preparing for strict VLAN segmentation.",
            blog_lab1: "<p>The lab network is anchored by a dedicated Cisco ASA hardware firewall that acts as the gateway and inspects all inbound and outbound traffic. Behind it, a central switch distributes connectivity to the physical server nodes and a dedicated wireless access point.</p><p>An ongoing project in the lab is rolling out strict VLAN segmentation. The goal is to completely isolate public-facing services (such as game server containers) from the internal management network, putting Zero Trust principles into practice.</p>",

            lab2_title: "Proxmox Cluster & Virtualization",
            lab2_sub: "Compute & Containers",
            lab2_desc: "Three-node compute cluster backed by a standalone management node (QDevice) for quorum and high availability.",
            blog_lab2: "<p>Compute in the lab is powered by a three-node Proxmox VE cluster. By integrating a standalone Linux management node as a QDevice, the cluster maintains quorum and stability even when a compute node is taken offline for maintenance.</p><p>Workloads are split between lightweight LXC containers and full virtual machines, including dedicated Docker hosts for isolated services. This setup lets me spin up, test, and tear down complex server environments quickly and reliably.</p>",

            lab3_title: "Security, Access & Management",
            lab3_sub: "Hardening & VPN",
            lab3_desc: "Secure remote access via VPN, SSH key-only authentication, and MFA-protected interfaces to keep the attack surface minimal.",
            blog_lab3: "<p>Security is built into every layer of the home lab. To keep the external attack surface as small as possible, no management ports are exposed to the public internet. Instead, all remote administration goes through an encrypted VPN tunnel (Tailscale) hosted on the dedicated management node.</p><p>Web interfaces such as Proxmox are protected with Multi-Factor Authentication (MFA). At the OS level, password authentication is disabled entirely—all SSH connections require cryptographic keys (Ed25519) to prevent unauthorized access.</p>",

            // --- SKILLS (HOVER) TEXTER ---
            skills_h2: "Skills & Competencies",
            skills_tech: "Technical Skills",
            skills_soft: "Core Strengths",
            
            skill_network_title: "Networking & Firewalls",
            skill_network_desc: "Network design and segmentation (VLANs, ACLs), Cisco ASA, IDS/IPS, packet analysis with Wireshark, and secure VPN deployments (Tailscale, OpenVPN).",
            
            skill_windows_title: "Windows & Active Directory",
            skill_windows_desc: "Hardening Windows environments (GPO, WDAC, ASR). Securing identities and domain services via AD DS, LDAP, and Kerberos.",
            
            skill_linux_title: "Linux & System Hardening",
            skill_linux_desc: "Administering and hardening Ubuntu and Debian systems. Attack surface reduction, service isolation, strict file permissions, logging, and SSH hardening.",
            
            skill_iam_title: "IAM & Zero Trust",
            skill_iam_desc: "Implementing Zero Trust architectures. Managing PKI, digital certificates, SSO, MFA, and credential protection such as Credential Guard.",
            
            skill_vm_title: "Virtualization & Clustering",
            skill_vm_desc: "Cluster management with Proxmox VE, KVM, and Hyper-V. Workload isolation using LXC containers and Docker, plus Azure integration and backup strategies.",
            
            skill_grc_title: "Risk Analysis & GRC",
            skill_grc_desc: "Applying ISO/IEC 27000 and NIST RMF. Hands-on experience with incident response plans, security policies, and regulatory compliance (GDPR, NIS2).",
            
            skill_monitoring_title: "Pentesting, SIEM & Forensics",
            skill_monitoring_desc: "Vulnerability scanning and penetration testing (Kali, Nmap, Metasploit) combined with log analysis (Sysmon, SIEM) and digital forensics.",
            
            skill_endpoint_title: "Endpoint & Data Protection",
            skill_endpoint_desc: "Device management via Microsoft Intune, data encryption (BitLocker, TPM), and hardware-backed security features (VBS, HVCI, CFG).",

            // Mjuka färdigheter
            soft_leadership: "Educational Leadership",
            soft_systematic: "Methodical Mindset",
            soft_communication: "Clear Communicator",
            soft_problem_solving: "Analytical Problem Solver",
            soft_organization: "Structured & Organized",
            soft_responsibility: "Strong Ownership",
            soft_adaptability: "Adaptable",
            soft_integrity: "High Integrity",

            cv_h2: "CV / Resume",
            cv_p: "Download my full CV for a detailed overview of my education, work experience, and technical profile.",
            cv_button_sv: "Download CV (SV)",
            cv_button_en: "Download CV (EN)",

            contact_h2: "Want to get in touch?",
            contact_p: "I am always happy to connect, talk about cybersecurity, or discuss future opportunities. Looking for someone who combines technical depth with a methodical mindset and strong communication skills? Feel free to reach out!",
            contact_btn_email: "Email me",
            contact_btn_copy: "Copy email address",
            contact_btn_copied: "Copied!",
            contact_btn_linkedin: "Connect on LinkedIn",
            
            footer_copy: "© 2026 Jehanni Halvarsson. All rights reserved.",
            footer_cloudflare: "This site uses Cloudflare for security and privacy-friendly analytics. No tracking cookies are used.",
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
        copyEmailBtn: document.getElementById("copy-email-btn"),
        backToTopBtn: document.querySelector(".back-to-top"),
        
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
            if (!hash || hash === "#") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                closeMenu();
                return;
            }
            const target = document.querySelector(hash);
            
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
                closeMenu();
                target.setAttribute("tabindex", "-1");
                target.focus({ preventScroll: true });
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

    // --- 12. Kopiera mejladress & Tillbaka till toppen ---
    function handleCopyEmail() {
        if (!dom.copyEmailBtn) return;
        const email = dom.copyEmailBtn.getAttribute("data-email") || "jehanni.halvarsson@protonmail.com";
        const spanEl = dom.copyEmailBtn.querySelector("[data-lang-key='contact_btn_copy']");

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(email).then(() => {
                showCopiedFeedback(spanEl);
            }).catch(() => {
                fallbackCopyEmail(email, spanEl);
            });
        } else {
            fallbackCopyEmail(email, spanEl);
        }
    }

    function fallbackCopyEmail(email, spanEl) {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand("copy");
            showCopiedFeedback(spanEl);
        } catch (err) {
            // Ignorera
        }
        document.body.removeChild(textArea);
    }

    function showCopiedFeedback(spanEl) {
        if (!spanEl) return;
        const originalText = currentLang === "en" ? translations.en.contact_btn_copy : (spanEl.dataset.defaultSv || "Kopiera mejladress");
        const copiedText = currentLang === "en" ? translations.en.contact_btn_copied : "Kopierad!";
        
        spanEl.textContent = copiedText;
        dom.copyEmailBtn.classList.add("is-copied");

        setTimeout(() => {
            spanEl.textContent = currentLang === "en" ? translations.en.contact_btn_copy : originalText;
            dom.copyEmailBtn.classList.remove("is-copied");
        }, 2000);
    }

    function initBackToTop() {
        if (!dom.backToTopBtn) return;
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                dom.backToTopBtn.classList.add("is-visible");
            } else {
                dom.backToTopBtn.classList.remove("is-visible");
            }
        }, { passive: true });
    }

    // --- 13. Initiering ---
    function bindEvents() {
        if (dom.themeToggle) dom.themeToggle.addEventListener("click", toggleTheme);
        if (dom.langToggle) dom.langToggle.addEventListener("click", toggleLanguage);
        if (dom.navToggle) dom.navToggle.addEventListener("click", toggleMenu);
        if (dom.copyEmailBtn) dom.copyEmailBtn.addEventListener("click", handleCopyEmail);
        
        dom.navLinks.forEach(link => link.addEventListener("click", closeMenu));
        
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
        initBackToTop();
    }

    document.addEventListener("DOMContentLoaded", init);

})();
