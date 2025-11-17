// Vänta tills hela sidan har laddats
document.addEventListener('DOMContentLoaded', () => {

    /* =============================================
       1. MOBILNAVIGERING (HAMBURGERMENY)
    ============================================= */
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            // Växla .nav-open-klassen på länk-listan för att visa/dölja
            navLinks.classList.toggle('nav-open');
            
            // Växla .nav-open på knappen för att animera till "X"
            navToggle.classList.toggle('nav-open');

            // Uppdatera ARIA-attribut för tillgänglighet
            const isMenuOpen = navLinks.classList.contains('nav-open');
            navToggle.setAttribute('aria-expanded', isMenuOpen);
        });
    }

    // Stäng menyn automatiskt när man klickar på en länk
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-open')) {
                navLinks.classList.remove('nav-open');
                navToggle.classList.remove('nav-open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });


    /* =============================================
       2. FADE-IN EFFEKT VID SCROLL
       (Matchar din .fade-in och .is-visible CSS)
    ============================================= */
    const faders = document.querySelectorAll('.fade-in');
    
    const appearOptions = {
        threshold: 0.1, // Starta när 10% av elementet syns
        rootMargin: "0px 0px -50px 0px" // Starta lite innan den når botten av viewport
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                // Lägg till klassen som din CSS väntar på
                entry.target.classList.add('is-visible');
                // Sluta observera elementet efter att det animerats en gång
                observer.unobserve(entry.target); 
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });


    /* =============================================
       3. AKTIV LÄNK I NAVIGERINGEN VID SCROLL
       (Matchar din .active CSS-klass)
    ============================================= */
    const sections = document.querySelectorAll('main section[id]');
    const navAnchors = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // 150px offset gör att länken markeras lite innan sektionen når toppen
            if (pageYOffset >= sectionTop - 150) { 
                currentSectionId = section.getAttribute('id');
            }
        });

        navAnchors.forEach(a => {
            a.classList.remove('active');
            // Jämför länkens href (t.ex. "#om-mig") med sektionens ID
            if (a.getAttribute('href') === `#${currentSectionId}`) {
                a.classList.add('active');
            }
        });
        
        // Hantera specialfall för toppen av sidan
        // Om vi är väldigt nära toppen, avmarkera allt.
        if (pageYOffset < 150) {
             navAnchors.forEach(a => a.classList.remove('active'));
             // Om du vill att "Startsida"-länken ska vara aktiv högst upp,
             // hitta den och lägg till .active här istället.
        }
    });

}); // Slut på DOMContentLoaded
