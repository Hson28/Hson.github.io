// Vänta tills hela HTML-dokumentet är laddat
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Hantering av Hamburgermeny ---
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        // Växla klassen 'nav-open' på nav-länkarna
        navLinks.classList.toggle('nav-open');
        
        // Växla aria-expanded attributet för tillgänglighet
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);

        // Växla klass på body för att förhindra scrollning när menyn är öppen
        document.body.classList.toggle('no-scroll');
    });

    // Stäng menyn om man klickar på en länk
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
            // Om elementet är i bild
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Sluta observera elementet efter att det har animerats in
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Starta när 10% av elementet syns
    });

    // Applicera observatören på varje fade-in element
    fadeElements.forEach(el => fadeObserver.observe(el));


    // --- 3. Aktiv nav-länk vid scroll ---
    const sections = document.querySelectorAll('section[id]');
    const navLinksA = document.querySelectorAll('nav .nav-links a');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Hämta ID från sektionen som är i bild
                const id = entry.target.getAttribute('id');
                
                // Ta bort 'active'-klassen från alla länkar
                navLinksA.forEach(link => {
                    link.classList.remove('active');
                    // Lägg till 'active' på den länk vars href matchar sektionens ID
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        rootMargin: '-30% 0px -60% 0px' // Justerar när länken ska bli aktiv
    });

    // Applicera observatören på varje sektion
    sections.forEach(sec => sectionObserver.observe(sec));

});

// CSS som behövs för 'no-scroll' när menyn är öppen
const noScrollStyle = document.createElement('style');
noScrollStyle.innerHTML = `
    body.no-scroll {
        overflow: hidden;
    }
`;
document.head.appendChild(noScrollStyle);
