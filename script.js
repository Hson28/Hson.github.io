// Vänta tills hela sidan har laddats
document.addEventListener('DOMContentLoaded', () => {

    /* =============================================
       1. SKRIVMASKIN-EFFEKT FÖR H1 (ROBUST VERSION)
    ============================================= */
    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) {
        // Texten är definierad här för att garantera att den körs
        const textToType = "Hej, jag är Jehanni Halvarsson."; 
        
        heroTitle.textContent = ''; // Töm elementet

        // Skapa cursorn
        const cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        heroTitle.appendChild(cursor);

        let i = 0;
        const typingSpeed = 100; // Millisekunder per tecken

        function typeWriter() {
            if (i < textToType.length) {
                // Skriv tecknet *före* cursorn
                heroTitle.insertBefore(document.createTextNode(textToType.charAt(i)), cursor);
                i++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                // Klart! Dölj cursorn snyggt
                cursor.style.animation = 'none';
                cursor.style.opacity = '0';
                setTimeout(() => cursor.remove(), 2000); // Ta bort helt
            }
        }
        
        // Starta effekten efter en kort fördröjning
        setTimeout(typeWriter, 500); 
    }


    /* =============================================
       2. MOBILNAVIGERING (HAMBURGERMENY)
    ============================================= */
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('nav-open');
            navToggle.classList.toggle('nav-open');
            
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
       3. FADE-IN EFFEKT VID SCROLL
    ============================================= */
    const faders = document.querySelectorAll('.fade-in');
    
    const appearOptions = {
        threshold: 0.1, 
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); 
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });


    /* =============================================
       4. AKTIV LÄNK I NAVIGERINGEN VID SCROLL
    ============================================= */
    const sections = document.querySelectorAll('main section[id]');
    const navAnchors = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) { 
                currentSectionId = section.getAttribute('id');
            }
        });

        navAnchors.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === `#${currentSectionId}`) {
                a.classList.add('active');
            }
        });
        
        if (pageYOffset < 150) {
             navAnchors.forEach(a => a.classList.remove('active'));
        }
    });

}); // Slut på DOMContentLoaded
