// Funktion för att toggla mörkt/ljust läge
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Ladda tema från localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
}

// Hamburger meny toggle med fokus-trap
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
let isMenuOpen = false;

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    navMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isMenuOpen);
    
    if (isMenuOpen) {
        // Fokus-trap
        const focusableElements = navMenu.querySelectorAll('a');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        firstElement.focus();
        
        navMenu.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            }
            if (e.key === 'Escape') {
                closeMenu();
            }
        });
    }
}

function closeMenu() {
    isMenuOpen = false;
    navMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
    hamburger.focus();
}

hamburger.addEventListener('click', toggleMenu);

// Lazy-loading av bilder
const images = document.querySelectorAll('img[loading="lazy"]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// Animationer/entrances med IntersectionObserver
const sections = document.querySelectorAll('section');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => sectionObserver.observe(section));

// Respektera reduced motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    sectionObserver.disconnect();
}

// Kontaktform validering
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

function validateForm(e) {
    e.preventDefault();
    let isValid = true;
    
    // Validera namn
    if (nameInput.value
