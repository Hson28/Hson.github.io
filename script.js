// IIFE för att undvika globala variabler
(function() {
    // Tema-toggle med localStorage persistens
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.setAttribute('
