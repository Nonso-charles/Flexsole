const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    navLinks.classList.remove('active');
});

// Close menu when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 &&
        !e.target.closest('.menu-btn') &&
        !e.target.closest('.nav-links')) {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behaviour: 'smooth'
        });
    });
});