// --- 1. Ordbok för översättningar ---
const translations = {
    "sv": {
        "nav_about": "Om Mig",
        "nav_skills": "Kompetenser",
        "nav_projects": "Projekt",
        "nav_contact": "Kontakt",
        "hero_title": "Hej, jag är Jehanni Halvarsson.",
        "hero_subtitle": "Studerande IT-säkerhetsspecialist med passion för att bygga och skydda digitala system.",
        "hero_desc": "Jag studerar just nu IT-SÄKERHETSPECIALIST på TUC Yrkeshögskola och fokuserar på att utveckla praktiska färdigheter inom nätverkssäkerhet, penetrationstestning och incidenthantering. Jag letar ständigt efter nya utmaningar och möjligheter att tillämpa mina kunskaper i praktiken.",
        "hero_cta": "Se mina projekt",
        "about_title": "Om Mig",
        "about_p1": "Mitt intresse för IT-säkerhet började när [skriv din korta personliga story...]. Det som driver mig är problemlösningen och den ständiga utmaningen i att ligga steget före hotaktörer.",
        "about_p2": "Efter min examen är mitt mål att arbeta som [t.ex. \"SOC-analytiker\"...]. Jag är särskilt intresserad av molnsäkerhet och incidenthantering.",
        "about_cta": "Ladda ner mitt CV (PDF)",
        "skills_title": "Kompetenser & Verktyg",
        "skills_cat1_title": "Tekniska Områden",
        "skills_cat1_li1": "Nätverkssäkerhet (IDS/IPS, VPN)",
        "skills_cat1_li2": "Penetrationstestning",
        "skills_cat1_li3": "Incidenthantering & Forensik",
        "skills_cat1_li4": "Säkerhetsanalys (SIEM)",
        "skills_cat1_li5": "Sårbarhetsanalys",
        "skills_cat1_li6": "Molnsäkerhet (Grundläggande)",
        "skills_cat2_title": "Verktyg & Plattformar",
        "skills_cat2_li1": "Kali Linux",
        "skills_cat2_li2": "Wireshark",
        "skills_cat2_li3": "Nmap",
        "skills_cat2_li4": "Burp Suite",
        "skills_cat2_li5": "Metasploit",
        "skills_cat2_li6": "Splunk (Grundläggande)",
        "skills_cat3_title": "Språk & Skripting",
        "skills_cat3_li1": "Python",
        "skills_cat3_li2": "Bash",
        "skills_cat3_li3": "PowerShell",
        "projects_title": "Mina Projekt",
        "projects_desc": "Det bästa sättet att lära sig är att bygga (och bryta). Här är några projekt jag arbetat med.",
        "project1_title": "Projekt 1: Säkert Hemmalabb",
        "project1_desc": "Jag har byggt ett segmenterat hemnätverk med pfSense som brandvägg för att isolera IoT-enheter från mitt primära nätverk. Projektet inkluderade uppsättning av VLAN, brandväggsregler och en centraliserad loggserver.",
        "project1_tech": "<strong>Tekniker:</strong> pfSense, VLAN, Suricata (IDS), Syslog.",
        "project2_title": "Projekt 2: \"Capture The Flag\" (CTF) Write-ups",
        "project2_desc": "Jag deltar aktivt i CTF-tävlingar på plattformar som TryHackMe och Hack The Box. Här har jag samlat mina \"write-ups\" (genomgångar) för några av de maskiner jag har klarat.",
        "project2_tech": "<strong>Tekniker:</strong> Nmap, Metasploit, Burp Suite, Python.",
        "project2_cta": "Läs mina write-ups här",
        "project3_title": "Projekt 3: Sårbarhetsanalys (Skolprojekt)",
        "project3_desc": "Genomförde en sårbarhetsanalys (enligt OWASP Top 10) av en test-webbapplikation. Identifierade och rapporterade flera sårbarheter, inklusive XSS och SQL-injektion.",
        "project3_tech": "<strong>Tekniker:</strong> OWASP ZAP, Burp Suite, SQLMap.",
        "contact_title": "Kontakta mig",
        "contact_desc": "Jag är alltid öppen för att diskutera nya möjligheter. Tveka inte att höra av dig!",
        "contact_email": "din.email@exempel.com",
        "contact_linkedin": "LinkedIn",
        "contact_github": "GitHub",
        "footer_text": "&copy; 2025 Jehanni Halvarsson. Byggd med HTML, CSS och GitHub Pages."
    },
    "en": {
        "nav_about": "About Me",
        "nav_skills": "Skills",
        "nav_projects": "Projects",
        "nav_contact": "Contact",
        "hero_title": "Hi, I'm Jehanni Halvarsson.",
        "hero_subtitle": "Aspiring IT Security Specialist with a passion for building and protecting digital systems.",
        "hero_desc": "I am currently studying IT SECURITY SPECIALIST at TUC Yrkeshögskola, focusing on developing practical skills in network security, penetration testing, and incident response. I am constantly seeking new challenges and opportunities to apply my knowledge.",
        "hero_cta": "View my projects",
        "about_title": "About Me",
        "about_p1": "My interest in IT security began when [write your short personal story...]. What drives me is the problem-solving and the constant challenge of staying one step ahead of threat actors.",
        "about_p2": "After graduation, my goal is to work as a [e.g., \"SOC Analyst\", \"Penetration Tester\"...]. I am particularly interested in cloud security and incident response.",
        "about_cta": "Download my CV (PDF)",
        "skills_title": "Skills & Tools",
        "skills_cat1_title": "Technical Areas",
        "skills_cat1_li1": "Network Security (IDS/IPS, VPN)",
        "skills_cat1_li2": "Penetration Testing",
        "skills_cat1_li3": "Incident Response & Forensics",
        "skills_cat1_li4": "Security Analysis (SIEM)",
        "skills_cat1_li5": "Vulnerability Analysis",
        "skills_cat1_li6": "Cloud Security (Basic)",
        "skills_cat2_title": "Tools & Platforms",
        "skills_cat2_li1": "Kali Linux",
        "skills_cat2_li2": "Wireshark",
        "skills_cat2_li3": "Nmap",
        "skills_cat2_li4": "Burp Suite",
        "skills_cat2_li5": "Metasploit",
        "skills_cat2_li6": "Splunk (Basic)",
        "skills_cat3_title": "Languages & Scripting",
        "skills_cat3_li1": "Python",
        "skills_cat3_li2": "Bash",
        "skills_cat3_li3": "PowerShell",
        "projects_title": "My Projects",
        "projects_desc": "The best way to learn is by building (and breaking). Here are some projects I've worked on.",
        "project1_title": "Project 1: Secure Home Lab",
        "project1_desc": "I built a segmented home network using pfSense as a firewall to isolate IoT devices from my primary network. The project included setting up VLANs, firewall rules, and a centralized log server.",
        "project1_tech": "<strong>Technologies:</strong> pfSense, VLAN, Suricata (IDS), Syslog.",
        "project2_title": "Project 2: \"Capture The Flag\" (CTF) Write-ups",
        "project2_desc": "I actively participate in CTF competitions on platforms like TryHackMe and Hack The Box. Here, I've collected my write-ups for some of the machines I have completed.",
        "project2_tech": "<strong>Technologies:</strong> Nmap, Metasploit, Burp Suite, Python.",
        "project2_cta": "Read my write-ups here",
        "project3_title": "Project 3: Vulnerability Analysis (School Project)",
        "project3_desc": "Performed a vulnerability analysis (based on OWASP Top 10) of a test web application. Identified and reported several vulnerabilities, including XSS and SQL injection.",
        "project3_tech": "<strong>Technologies:</strong> OWASP ZAP, Burp Suite, SQLMap.",
        "contact_title": "Contact Me",
        "contact_desc": "I'm always open to discussing new opportunities. Feel free to get in touch!",
        "contact_email": "your.email@example.com",
        "contact_linkedin": "LinkedIn",
        "contact_github": "GitHub",
        "footer_text": "&copy; 2025 Jehanni Halvarsson. Built with HTML, CSS and GitHub Pages."
    }
};

// --- NY FUNKTION: Skrivmaskinseffekt ---
let typewriterTimeout; // Global variabel för att kunna avbryta animationen

function typewriterEffect(element, text, speed = 50) {
    // Avbryt omedelbart en tidigare pågående skrivning
    clearTimeout(typewriterTimeout);

    let i = 0;
    element.innerHTML = ''; // Rensa texten
    element.classList.remove('typing-done'); // Ta bort "klar"-klassen

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            // Spara ID:t så vi kan avbryta det om språket byts igen
            typewriterTimeout = setTimeout(type, speed); 
        } else {
            // Skrivandet är klart
            element.classList.add('typing-done');
        }
    }
    type();
}


// --- 2. Funktion för att byta språk (MODIFIERAD) ---

const setLanguage = (lang) => {
    document.documentElement.lang = lang; // Sätt 'lang' på <html>

    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        const translation = translations[lang][key];
        
        if (translation) {
            // --- NY LOGIK ---
            // Om det är rubriken, kör skrivmaskinseffekten
            if (key === 'hero_title') {
                // Kör bara effekten om texten faktiskt skiljer sig
                if (element.textContent !== translation) {
                    typewriterEffect(element, translation);
                }
            } else {
                // För alla andra element, uppdatera som vanligt
                element.innerHTML = translation;
            }
            // --- SLUT PÅ NY LOGIK ---
        }
    });

    localStorage.setItem('language', lang); // Spara val

    document.getElementById('lang-sv').classList.toggle('active-lang', lang === 'sv');
    document.getElementById('lang-en').classList.toggle('active-lang', lang === 'en');
};


// --- All annan JS körs när sidan laddats ---

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Hantering av Hamburgermeny ---
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('nav-open');
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        document.body.classList.toggle('no-scroll');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('nav-open');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('no-scroll');
        });
    });

    // --- 2. Fade-in på sektioner vid scroll ---
    const fadeElements = document.querySelectorAll('.fade-in');

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    fadeElements.forEach(el => fadeObserver.observe(el));


    // --- 3. Aktiv nav-länk vid scroll ---
    const sections = document.querySelectorAll('section[id]');
    const navLinksA = document.querySelectorAll('nav .nav-links a');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                navLinksA.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        rootMargin: '-30% 0px -60% 0px'
    });
    sections.forEach(sec => sectionObserver.observe(sec));


    // --- 4. Språkväxlings-logik ---
    const langSvButton = document.getElementById('lang-sv');
    const langEnButton = document.getElementById('lang-en');

    langSvButton.addEventListener('click', () => {
        setLanguage('sv');
        navLinks.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('no-scroll');
    });

    langEnButton.addEventListener('click', () => {
        setLanguage('en');
        navLinks.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('no-scroll');
    });

    const savedLang = localStorage.getItem('language') || 'sv';
    setLanguage(savedLang);

});

// CSS som behövs för 'no-scroll' när menyn är öppen
const noScrollStyle = document.createElement('style');
noScrollStyle.innerHTML = `
    body.no-scroll {
        overflow: hidden;
    }
`;
document.head.appendChild(noScrollStyle);
