// Vänta tills hela sidan har laddats
document.addEventListener('DOMContentLoaded', () => {

    /* =============================================
       SPRÅKHANTERING (SV/EN)
    ============================================= */

    // 1. Definiera alla våra text-strängar
    const translations = {
        sv: {
            logo: "Ditt Namn_",
            nav_home: "Hem",
            nav_about: "Om mig",
            nav_projects: "Projekt",
            nav_contact: "Kontakt",
            hero_title: "IT-Säkerhetsspecialist",
            hero_subtitle_static: "Student med fokus på >", // Statisk del av texten
            hero_subtitle_dynamic: ["Penetrationstestning", "Nätverksanalys", "Säker Kod"], // Roterande ord
            about_title: "Om Mig",
            about_text: "Här skriver du en professionell sammanfattning. Jag är en driven student inom IT-säkerhet vid [Din Skola]... Mina intresseområden inkluderar penetrationstestning, nätverkssäkerhet och säker kodutveckling.",
            projects_title: "Projekt",
            project1_title: "CTF Writeups",
            project1_desc: "En samling av mina lösningar från diverse Capture The Flag-tävlingar (t.ex. Hack The Box).",
            project_link: "Läs mer →",
            project2_title: "Säkerhetsanalys-Verktyg",
            project2_desc: "Ett Python-script som automatiserar rekognosering av nätverk och identifierar vanliga sårbarheter.",
            contact_title: "Kontakt",
            contact_text: "Låt oss komma i kontakt. Du hittar mig på följande plattformar:",
            footer_text: "© 2025 Ditt Namn. Byggd från grunden."
        },
        en: {
            logo: "Your Name_",
            nav_home: "Home",
            nav_about: "About",
            nav_projects: "Projects",
            nav_contact: "Contact",
            hero_title: "IT Security Specialist",
            hero_subtitle_static: "Student focusing on >", // Static part
            hero_subtitle_dynamic: ["Penetration Testing", "Network Analysis", "Secure Code"], // Rotating words
            about_title: "About Me",
            about_text: "Write your professional summary here. I am a dedicated IT Security student at [Your School]... My areas of interest include penetration testing, network security, and secure code development.",
            projects_title: "Projects",
            project1_title: "CTF Writeups",
            project1_desc: "A collection of my solutions from various Capture The Flag competitions (e.g., Hack The Box).",
            project_link: "Read more →",
            project2_title: "Security Analysis Tool",
            project2_desc: "A Python script that automates network reconnaissance and identifies common vulnerabilities.",
            contact_title: "Contact",
            contact_text: "Let's get in touch. You can find me on the following platforms:",
            footer_text: "© 2025 Your Name. Built from scratch."
        }
    };

    // 2. Hämta knapparna
    const langSV = document.getElementById('lang-sv');
    const langEN = document.getElementById('lang-en');

    // 3. Funktion för att byta språk
    const setLanguage = (lang) => {
        // Uppdatera 'lang'-attributet på <html>-taggen
        document.documentElement.lang = lang;

        // Markera aktiv knapp
        langSV.classList.toggle('active', lang === 'sv');
        langEN.classList.toggle('active', lang === 'en');

        // Loopa igenom alla element som har ett 'data-key' attribut
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            
            // Kolla om nyckeln finns i vår översättningsfil
            if (translations[lang][key]) {
                // Undantag för skrivmaskins-effekten
                if (key === 'hero_subtitle') {
                    // Starta om skrivmaskins-effekten med de nya orden
                    const staticText = translations[lang].hero_subtitle_static;
                    const dynamicWords = translations[lang].hero_subtitle_dynamic;
                    startTypingEffect(staticText, dynamicWords);
                } else {
                    // Uppdatera texten för alla andra element
                    element.textContent = translations[lang][key];
                }
            }
        });
    };

    // 4. Lägg till klick-lyssnare på knapparna
    langSV.addEventListener('click', () => setLanguage('sv'));
    langEN.addEventListener('click', () => setLanguage('en'));

    // 5. Sätt standardspråket (Svenska) vid sidladdning
    setLanguage('sv');


    /* =============================================
       "COOL EFFEKT": SKRIVMASKIN
    ============================================= */
    
    const typingElement = document.querySelector('.typing-effect');
    let typingCursor; // Vi skapar markören med JS

    function createCursor() {
        if (!typingCursor) {
            typingCursor = document.createElement('span');
            typingCursor.className = 'typing-cursor';
            typingElement.appendChild(typingCursor);
        }
    }

    async function typeWriter(text, isDeleting = false) {
        const speed = isDeleting ? 50 : 150; // Snabbar upp radering
        const currentText = typingElement.textContent;
        
        // Ta bort markören innan vi ändrar text
        if (typingCursor) typingCursor.remove();

        if (isDeleting) {
            typingElement.textContent = currentText.slice(0, -1);
        } else {
            typingElement.textContent = text.slice(0, currentText.length + 1);
        }

        // Lägg tillbaka markören
        createCursor();
        typingElement.appendChild(typingCursor);
        
        return new Promise(resolve => setTimeout(resolve, speed));
    }

    // Huvudloop för skrivmaskinen
    async function startTypingEffect(staticText, dynamicWords) {
        // Rensa befintlig text (om vi byter språk)
        typingElement.textContent = '';
        createCursor();

        // Skriv ut den statiska delen
        for (let i = 0; i < staticText.length; i++) {
            await typeWriter(staticText);
        }

        // Pausa
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Loopa de dynamiska orden
        let wordIndex = 0;
        while (true) {
            const word = dynamicWords[wordIndex];

            // Skriv ordet
            for (let i = 0; i < word.length; i++) {
                await typeWriter(staticText + word);
            }
            await new Promise(resolve => setTimeout(resolve, 2000)); // Pausa med fullt ord

            // Radera ordet
            for (let i = 0; i < word.length; i++) {
                await typeWriter(staticText + word, true);
            }
            await new Promise(resolve => setTimeout(resolve, 500)); // Kort paus innan nästa

            wordIndex = (wordIndex + 1) % dynamicWords.length;
        }
    }

    // Starta effekten (initialt med svenska)
    const initialStatic = translations.sv.hero_subtitle_static;
    const initialDynamic = translations.sv.hero_subtitle_dynamic;
    startTypingEffect(initialStatic, initialDynamic);

});
