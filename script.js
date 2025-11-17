/* ---
   script.js
   Hanterar all interaktivitet för portföljsidan.
   - Tema-växlare (Mörkt/Ljust läge)
   - Preloader
   - Mobilnavigation (Hamburger)
   - Aktiv länk-markering vid scroll
   - "Läs mer" Modaler för projekt
   - Formulärvalidering (client-side)
   - Mjuka scroll-animationer (Scroll Reveal)
   --- */

// Kör skriptet när DOM är fullständigt laddat
document.addEventListener('DOMContentLoaded', () => {

    /* === 1. Ikon-initiering (Feather Icons) === */
    // Ersätter alla <i data-feather="ikon-namn"></i> med SVG:er.
    try {
        feather.replace();
    } catch (error) {
        console.error('Feather Icons kunde inte laddas.', error);
    }

    /* === 2. Preloader === */
    // Vi använder window.load istället för DOMContentLoaded för att vänta på
    // att alla resurser (bilder, etc.) har laddats.
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.classList.add('fade-out');
            // Ta bort från DOM efter att övergången är klar
            preloader.addEventListener('transitionend', () => {
                preloader.remove();
            });
        });
    }


    /* === 3. Tema-växlare (Ljust/Mörkt läge) === */
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Funktion för att applicera temat
    const applyTheme = (theme) => {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme); // Spara valet
    };

    // Kontrollera om användaren har ett sparat val
    const savedTheme = localStorage.getItem('theme');
    
    // Kontrollera om användaren har en systempreferens
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        applyTheme(savedTheme); // Använd sparat tema
    } else if (prefersDark) {
        applyTheme('dark'); // Använd systemets mörka läge
    } else {
        applyTheme('light'); // Standard till ljust läge
    }

    // Lyssnare för knappen
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(newTheme);
        });
    }


    /* === 4. Mobilnavigation === */
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const primaryNav = document.getElementById('primary-navigation');

    if (mobileNavToggle && primaryNav) {
        mobileNavToggle.addEventListener('click', () => {
            const isNavOpen = primaryNav.classList.toggle('nav-open');
            mobileNavToggle.setAttribute('aria-expanded', isNavOpen);
            document.body.classList.toggle('nav-open'); // För att låsa scroll
        });

        // Stäng menyn om man klickar på en länk inuti den
        primaryNav.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav-link')) {
                primaryNav.classList.remove('nav-open');
                mobileNavToggle.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('nav-open');
            }
        });

        // Stäng menyn om man klickar utanför (på overlayn)
        document.body.addEventListener('click', (e) => {
            if (document.body.classList.contains('nav-open') && !primaryNav.contains(e.target) && !mobileNavToggle.contains(e.target)) {
                primaryNav.classList.remove('nav-open');
                mobileNavToggle.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('nav-open');
            }
        });
    }


    /* === 5. Aktiv länk-markering vid scroll === */
    // Använder IntersectionObserver för prestanda (istället för 'scroll'-event)
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    if (sections.length > 0 && navLinks.length > 0) {
        const observerOptions = {
            root: null, // Använder viewport
            rootMargin: '-20% 0px -80% 0px', // Aktiveras när sektionen är i mitten
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    
                    // Ta bort 'active' från alla länkar
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                    });
                    
                    // Lägg till 'active' på den matchande länken
                    const matchingLink = document.querySelector(`.nav-link[href="#${id}"]`);
                    if (matchingLink) {
                        matchingLink.classList.add('active');
                    }
                }
            });
        }, observerOptions);

        // Observera alla sektioner
        sections.forEach(section => {
            observer.observe(section);
        });
    }


    /* === 6. Scroll Reveal (Mjuka animationer) === */
    const scrollElements = document.querySelectorAll('.scroll-reveal');

    if (scrollElements.length > 0) {
        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Sluta observera när den väl är synlig
                    scrollObserver.unobserve(entry.target); 
                }
            });
        }, { threshold: 0.1 }); // Starta när 10% av elementet är synligt

        scrollElements.forEach(el => {
            scrollObserver.observe(el);
        });
    }


    /* === 7. Projekt Modaler (Läs mer) === */
    const modal = document.getElementById('project-modal');
    const modalOpenButtons = document.querySelectorAll('[data-modal-target]');
    const modalCloseButtons = document.querySelectorAll('[data-modal-close]');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const modalContentStore = document.getElementById('modal-content-store');

    let lastFocusedElement; // Spara elementet som hade fokus innan modalen öppnades

    const openModal = (targetId) => {
        const contentId = `modal-${targetId}-content`;
        const contentElement = document.getElementById(contentId);
        const projectCard = document.querySelector(`[data-modal-target="${targetId}"]`).closest('.project-card');
        const projectTitle = projectCard.querySelector('.project-title').textContent;

        if (contentElement && modalTitle && modalBody) {
            // Spara fokus
            lastFocusedElement = document.activeElement;

            // Fyll modalen med innehåll
            modalTitle.textContent = projectTitle;
            modalBody.innerHTML = contentElement.innerHTML;
            
            // Visa modalen
            modal.classList.add('is-open');
            modal.setAttribute('aria-hidden', 'false');
            
            // Sätt fokus på den första fokuserbara saken (stäng-knappen)
            modal.querySelector('.modal-close').focus();
        } else {
            console.error('Kunde inte hitta modal-innehåll för:', targetId);
        }
    };

    const closeModal = () => {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        
        // Återställ fokus
        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }
    };

    if (modal && modalOpenButtons.length > 0 && modalContentStore) {
        // Öppna modal
        modalOpenButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetId = button.dataset.modalTarget;
                openModal(targetId);
            });
        });

        // Stäng modal (knapp & overlay)
        modalCloseButtons.forEach(button => {
            button.addEventListener('click', closeModal);
        });

        // Stäng modal med Escape-tangenten
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('is-open')) {
                closeModal();
            }
        });

        // Grundläggande "focus trap"
        modal.addEventListener('keydown', (e) => {
            if (e.key !== 'Tab') return;

            const focusableElements = modal.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.shiftKey) { // Shift + Tab
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else { // Tab
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        });
    }


    /* === 8. Kontaktformulär Validering === */
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitButton = document.getElementById('submit-button');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // Förhindra standard (mailto:) för att validera först
            e.preventDefault();

            // Rensa tidigare fel
            clearErrors();
            
            // Hämta fält
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            let isValid = true;

            // Validera namn
            if (name.value.trim() === '') {
                showError(name, 'Namn får inte vara tomt.');
                isValid = false;
            }

            // Validera e-post
            if (email.value.trim() === '') {
                showError(email, 'E-post får inte vara tomt.');
                isValid = false;
            } else if (!isValidEmail(email.value)) {
                showError(email, 'Ange en giltig e-postadress.');
                isValid = false;
            }

            // Validera meddelande
            if (message.value.trim() === '') {
                showError(message, 'Meddelande får inte vara tomt.');
                isValid = false;
            }

            // Om allt är OK
            if (isValid) {
                // Simulera "skickar"
                submitButton.textContent = 'Skickar...';
                submitButton.disabled = true;
                formStatus.textContent = '';
                formStatus.className = '';

                // Simulera ett asynkront anrop
                setTimeout(() => {
                    // Visa framgångsmeddelande
                    formStatus.textContent = 'Tack för ditt meddelande! Jag återkommer snart.';
                    formStatus.classList.add('success');
                    
                    // Återställ knapp och rensa formulär
                    submitButton.textContent = 'Skicka meddelande';
                    submitButton.disabled = false;
                    contactForm.reset();

                    // Fallback till mailto: om vi *inte* hade simulerat:
                    // contactForm.submit(); // Detta skulle öppna mail-klienten
                }, 1000);
            } else {
                formStatus.textContent = 'Vänligen korrigera felen i formuläret.';
                formStatus.classList.add('error');
            }
        });
    }

    const showError = (input, message) => {
        const formGroup = input.closest('.form-group');
        const errorDiv = formGroup.querySelector('.error-message');
        
        formGroup.classList.add('invalid');
        errorDiv.textContent = message;
    };

    const clearErrors = () => {
        const invalidGroups = contactForm.querySelectorAll('.form-group.invalid');
        invalidGroups.forEach(group => {
            group.classList.remove('invalid');
            group.querySelector('.error-message').textContent = '';
        });
        
        if(formStatus) {
            formStatus.textContent = '';
            formStatus.className = '';
        }
    };

    const isValidEmail = (email) => {
        // Enkel regex för e-postvalidering
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

});
