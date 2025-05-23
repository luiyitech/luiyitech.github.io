
// ===============================
// CONTADOR REGRESIVO
// ===============================
function updateCountdown() {
    const targetDate = new Date('2025-10-15T08:00:00-03:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(3, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    } else {
        document.getElementById('days').textContent = '000';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
    }
}

// Actualizar contador cada segundo
setInterval(updateCountdown, 1000);
updateCountdown();

// ===============================
// SMOOTH SCROLL PARA NAVEGACIÓN
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===============================
// ANIMACIÓN DE APARICIÓN EN SCROLL
// ===============================
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.card-hover, .flip-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// ===============================
// LOGO Y NAVBAR SHRINK PROPORCIONAL
// ===============================
document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        const navbar = document.getElementById('navbar');
        const navContainer = document.getElementById('nav-container');
        const logo = document.getElementById('logo');

        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navContainer.classList.add('scrolled');
            logo.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
            navContainer.classList.remove('scrolled');
            logo.classList.remove('scrolled');
        }
    });
});
