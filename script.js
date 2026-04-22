// ===============================
// NUEVO CONTADOR INDEPENDIENTE
// ===============================
document.addEventListener("DOMContentLoaded", () => {
    const dEl = document.getElementById('t-days');
    const hEl = document.getElementById('t-hours');
    const mEl = document.getElementById('t-mins');
    const sEl = document.getElementById('t-secs');
    
    if (!dEl || !hEl || !mEl || !sEl) return;
    
    const countDownDate = new Date('2026-10-14T08:00:00-03:00').getTime();

    function update() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        if (distance < 0) {
            dEl.innerText = "000";
            hEl.innerText = "00";
            mEl.innerText = "00";
            sEl.innerText = "00";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        dEl.innerText = String(days).padStart(3, '0');
        hEl.innerText = String(hours).padStart(2, '0');
        mEl.innerText = String(minutes).padStart(2, '0');
        sEl.innerText = String(seconds).padStart(2, '0');
    }
    
    update();
    setInterval(update, 1000);
});

// ===============================
// CANVAS CONSTELACIONES - FECHAS
// ===============================
(function() {
    const canvas = document.getElementById('fechas-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let stars = [];
    const STAR_COUNT = 60;
    const CONNECT_DIST = 120;
    let w, h;

    function resize() {
        const rect = canvas.parentElement.getBoundingClientRect();
        w = canvas.width = rect.width;
        h = canvas.height = rect.height;
    }

    function initStars() {
        stars = [];
        for (let i = 0; i < STAR_COUNT; i++) {
            stars.push({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.3,
                r: Math.random() * 1.8 + 0.5,
                alpha: Math.random() * 0.5 + 0.3,
                pulse: Math.random() * Math.PI * 2
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, w, h);
        
        // Draw connections
        for (let i = 0; i < stars.length; i++) {
            for (let j = i + 1; j < stars.length; j++) {
                const dx = stars[i].x - stars[j].x;
                const dy = stars[i].y - stars[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < CONNECT_DIST) {
                    const opacity = (1 - dist / CONNECT_DIST) * 0.15;
                    ctx.strokeStyle = `rgba(212, 175, 55, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(stars[i].x, stars[i].y);
                    ctx.lineTo(stars[j].x, stars[j].y);
                    ctx.stroke();
                }
            }
        }

        // Draw & update stars
        for (const s of stars) {
            s.pulse += 0.02;
            const flicker = 0.5 + 0.5 * Math.sin(s.pulse);
            const a = s.alpha * flicker;

            // Glow
            ctx.beginPath();
            const grd = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 4);
            grd.addColorStop(0, `rgba(212, 175, 55, ${a * 0.6})`);
            grd.addColorStop(1, 'rgba(212, 175, 55, 0)');
            ctx.fillStyle = grd;
            ctx.arc(s.x, s.y, s.r * 4, 0, Math.PI * 2);
            ctx.fill();

            // Core
            ctx.beginPath();
            ctx.fillStyle = `rgba(255, 240, 200, ${a})`;
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fill();

            // Move
            s.x += s.vx;
            s.y += s.vy;
            if (s.x < 0 || s.x > w) s.vx *= -1;
            if (s.y < 0 || s.y > h) s.vy *= -1;
        }

        requestAnimationFrame(draw);
    }

    window.addEventListener('resize', () => { resize(); initStars(); });
    resize();
    initStars();
    draw();
})();
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



// ===============================
// DOOSIER PONENTES SLIDER
// ===============================
function initPonentesSlider() {
    const sliderTrack = document.querySelector('.slider-track');
    let slides = Array.from(document.querySelectorAll('.slider-item'));
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    const dotsContainer = document.querySelector('.slider-dots');

    let currentIndex = 0;
    const slidesPerView = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 2 : 1;
    const advanceStep = 3;
    const totalSlides = slides.length;

    // Clonar últimos N slides y agregarlos al principio
    for (let i = totalSlides - slidesPerView; i < totalSlides; i++) {
        const clone = slides[i].cloneNode(true);
        clone.classList.add('clone');
        sliderTrack.insertBefore(clone, sliderTrack.firstChild);
    }

    // Clonar primeros N slides y agregarlos al final
    for (let i = 0; i < slidesPerView; i++) {
        const clone = slides[i].cloneNode(true);
        clone.classList.add('clone');
        sliderTrack.appendChild(clone);
    }

    const allSlides = Array.from(document.querySelectorAll('.slider-item'));
    const totalSlidesWithClones = allSlides.length;

    currentIndex = slidesPerView;
    const slideWidth = allSlides[0].offsetWidth;

    let autoSlide;

    function startAutoSlide() {
        autoSlide = setInterval(() => {
            nextSlide();
        }, 5000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    function updateSlider(animate = true) {
        if (animate) {
            sliderTrack.style.transition = 'transform 0.5s ease-in-out';
        } else {
            sliderTrack.style.transition = 'none';
        }
        const offset = -currentIndex * slideWidth;
        sliderTrack.style.transform = `translateX(${offset}px)`;

        const realIndex = (currentIndex - slidesPerView + totalSlides) % totalSlides;
        document.querySelectorAll('.dot').forEach((dot, idx) => {
            dot.classList.toggle('active', idx === realIndex);
        });

        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }

    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentIndex = i + slidesPerView;
            updateSlider();
            resetAutoSlide();
        });
        dotsContainer.appendChild(dot);
    }

    function nextSlide() {
        currentIndex += advanceStep;
        updateSlider();

        if (currentIndex >= totalSlides + slidesPerView) {
            setTimeout(() => {
                sliderTrack.style.transition = 'none';
                currentIndex = slidesPerView + (currentIndex - (totalSlides + slidesPerView));
                updateSlider(false);
            }, 500);
        }
    }

    function prevSlide() {
        currentIndex -= advanceStep;
        updateSlider();

        if (currentIndex < slidesPerView) {
            setTimeout(() => {
                sliderTrack.style.transition = 'none';
                currentIndex = totalSlides + currentIndex;
                updateSlider(false);
            }, 500);
        }
    }

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });

    function resetAutoSlide() {
        stopAutoSlide();
        startAutoSlide();
    }

    // SOLO pausa al poner puntero encima de cualquier slide
    allSlides.forEach(slide => {
        slide.addEventListener('mouseenter', () => stopAutoSlide());
        slide.addEventListener('mouseleave', () => startAutoSlide());
    });

    updateSlider(false);
    startAutoSlide();
}

// Unificar inicialización en DOMContentLoaded
// (AOS, GalleryCarousel y Ponentes)
document.addEventListener('DOMContentLoaded', function () {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            mirror: false,
            offset: 120,
            delay: 0,
        });
    }
    if (document.getElementById('gallery-track')) {
        new GalleryCarousel();
    }
    if (document.querySelector('.slider-track')) {
        initPonentesSlider();
    }
});

// ===============================
// ACORDEON LISTA PROGRAMA
// ===============================

function toggleAccordion(id) {
    // Selecciona el contenido y la flecha
    const content = document.getElementById(id + '-content');
    const arrow = document.getElementById(id + '-arrow');
    // Alterna la visibilidad
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        arrow.classList.add('rotate-180');
    } else {
        content.classList.add('hidden');
        arrow.classList.remove('rotate-180');
    }
}



// ===============================
// GALERÍA DEL CONGRESO - CARRUSEL
// ===============================
class GalleryCarousel {
    constructor() {
        this.currentIndex = 0;
        this.totalImages = 23;
        this.autoPlayInterval = null;
        this.autoPlayDelay = 4000;
        this.isModalOpen = false;
        this.modalCurrentIndex = 0;

        this.init();
    }

    init() {
        this.createGalleryItems();
        this.createDots();
        this.bindEvents();
        this.startAutoPlay();
        this.updateView();
    }

    createGalleryItems() {
        const track = document.getElementById('gallery-track');
        if (!track) return;

        for (let i = 1; i <= this.totalImages; i++) {
            const item = document.createElement('div');
            item.className = 'gallery-item';

            const img = document.createElement('img');
            img.src = `img/galeria/${i}.jpg`;
            img.alt = `Foto del congreso ${i}`;
            img.className = 'gallery-image';
            img.dataset.index = i - 1;

            // Efecto de carga progresiva
            img.style.opacity = '0';
            img.onload = () => {
                setTimeout(() => {
                    img.style.transition = 'opacity 0.5s ease';
                    img.style.opacity = '1';
                }, i * 100);
            };

            item.appendChild(img);
            track.appendChild(item);
        }
    }

    createDots() {
        const dotsContainer = document.getElementById('gallery-dots');
        if (!dotsContainer) return;

        const totalDots = Math.ceil(this.totalImages / 3);

        for (let i = 0; i < totalDots; i++) {
            const dot = document.createElement('div');
            dot.className = 'gallery-dot';
            if (i === 0) dot.classList.add('active');
            dot.dataset.index = i;
            dotsContainer.appendChild(dot);
        }
    }

    bindEvents() {
        // Navegación con botones
        const prevBtn = document.getElementById('gallery-prev');
        const nextBtn = document.getElementById('gallery-next');

        if (prevBtn) prevBtn.addEventListener('click', () => this.prevSlide());
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextSlide());

        // Navegación con dots
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('gallery-dot')) {
                const index = parseInt(e.target.dataset.index);
                this.goToSlide(index);
            }
        });

        // Abrir modal al hacer clic en imagen
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('gallery-image')) {
                const index = parseInt(e.target.dataset.index);
                this.openModal(index);
            }
        });

        // Modal events
        this.bindModalEvents();

        // Pausar autoplay al hover
        const carousel = document.querySelector('.gallery-carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', () => this.pauseAutoPlay());
            carousel.addEventListener('mouseleave', () => this.startAutoPlay());
        }

        // Navegación con teclado
        document.addEventListener('keydown', (e) => {
            if (this.isModalOpen) {
                switch (e.key) {
                    case 'Escape':
                        this.closeModal();
                        break;
                    case 'ArrowLeft':
                        this.modalPrev();
                        break;
                    case 'ArrowRight':
                        this.modalNext();
                        break;
                }
            } else {
                switch (e.key) {
                    case 'ArrowLeft':
                        this.prevSlide();
                        break;
                    case 'ArrowRight':
                        this.nextSlide();
                        break;
                }
            }
        });
    }

    bindModalEvents() {
        const modal = document.getElementById('gallery-modal');
        const closeBtn = document.getElementById('gallery-modal-close');
        const modalPrevBtn = document.getElementById('modal-prev');
        const modalNextBtn = document.getElementById('modal-next');

        if (closeBtn) closeBtn.addEventListener('click', () => this.closeModal());
        if (modalPrevBtn) modalPrevBtn.addEventListener('click', () => this.modalPrev());
        if (modalNextBtn) modalNextBtn.addEventListener('click', () => this.modalNext());

        // Cerrar modal al hacer clic fuera de la imagen
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal();
                }
            });
        }
    }

    nextSlide() {
        const maxIndex = Math.ceil(this.totalImages / 3) - 1;
        this.currentIndex = (this.currentIndex + 1) > maxIndex ? 0 : this.currentIndex + 1;
        this.updateView();
        this.resetAutoPlay();
    }

    prevSlide() {
        const maxIndex = Math.ceil(this.totalImages / 3) - 1;
        this.currentIndex = (this.currentIndex - 1) < 0 ? maxIndex : this.currentIndex - 1;
        this.updateView();
        this.resetAutoPlay();
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.updateView();
        this.resetAutoPlay();
    }

    updateView() {
        const track = document.getElementById('gallery-track');
        const items = document.querySelectorAll('.gallery-item');
        const dots = document.querySelectorAll('.gallery-dot');

        if (!track) return;

        items.forEach((item, index) => {
            const diff = index - this.currentIndex;
            const absDiff = Math.abs(diff);

            // Base z-index (center is highest)
            item.style.zIndex = this.totalImages - absDiff;

            if (diff === 0) {
                // Activo / Centro
                item.style.transform = `translateX(0) scale(1) translateZ(0)`;
                item.style.opacity = '1';
                item.style.filter = 'brightness(1) contrast(1.1) blur(0px)';
                item.classList.add('active');
            } else {
                // Inactivos (Lados)
                const direction = diff < 0 ? -1 : 1;
                // Movemos lateralmente un 60%, escalamos hacia abajo un 20% por posición, alejamos en Z
                const xOffset = direction * 60 * Math.max(0.5, 1 - (absDiff - 1) * 0.5); 
                const scale = Math.max(0.6, 1 - absDiff * 0.15);
                const zOffset = -absDiff * 100;
                
                item.style.transform = `translateX(${xOffset}%) scale(${scale}) translateZ(${zOffset}px)`;
                item.style.opacity = absDiff > 2 ? '0' : (absDiff === 1 ? '0.7' : '0.3');
                item.style.filter = `brightness(${0.6 - absDiff * 0.1}) blur(${absDiff * 1.5}px)`;
                item.classList.remove('active');
            }
        });

        // Actualizar dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }

    startAutoPlay() {
        if (this.autoPlayInterval) return;

        this.autoPlayInterval = setInterval(() => {
            if (!this.isModalOpen) {
                this.nextSlide();
            }
        }, this.autoPlayDelay);
    }

    pauseAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }

    resetAutoPlay() {
        this.pauseAutoPlay();
        this.startAutoPlay();
    }

    openModal(imageIndex) {
        this.isModalOpen = true;
        this.modalCurrentIndex = imageIndex;
        this.pauseAutoPlay();

        const modal = document.getElementById('gallery-modal');
        const modalImg = document.getElementById('gallery-modal-img');
        const counter = document.getElementById('gallery-modal-counter');

        if (modal && modalImg) {
            modalImg.src = `img/galeria/${imageIndex + 1}.jpg`;
            modalImg.alt = `Foto del congreso ${imageIndex + 1}`;

            if (counter) {
                counter.textContent = `${imageIndex + 1} / ${this.totalImages}`;
            }

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';

            // Efecto de entrada suave
            setTimeout(() => {
                modalImg.style.transform = 'scale(1)';
                modalImg.style.opacity = '1';
            }, 50);
        }
    }

    closeModal() {
        this.isModalOpen = false;
        const modal = document.getElementById('gallery-modal');

        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            this.startAutoPlay();
        }
    }

    modalNext() {
        this.modalCurrentIndex = (this.modalCurrentIndex + 1) % this.totalImages;
        this.updateModalImage();
    }

    modalPrev() {
        this.modalCurrentIndex = (this.modalCurrentIndex - 1 + this.totalImages) % this.totalImages;
        this.updateModalImage();
    }

    updateModalImage() {
        const modalImg = document.getElementById('gallery-modal-img');
        const counter = document.getElementById('gallery-modal-counter');

        if (modalImg) {
            // Efecto de transición
            modalImg.style.opacity = '0.5';
            modalImg.style.transform = 'scale(0.95)';

            setTimeout(() => {
                modalImg.src = `img/galeria/${this.modalCurrentIndex + 1}.jpg`;
                modalImg.alt = `Foto del congreso ${this.modalCurrentIndex + 1}`;

                if (counter) {
                    counter.textContent = `${this.modalCurrentIndex + 1} / ${this.totalImages}`;
                }

                // Restaurar efecto
                setTimeout(() => {
                    modalImg.style.opacity = '1';
                    modalImg.style.transform = 'scale(1)';
                }, 100);
            }, 150);
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            mirror: false,
            offset: 120,
            delay: 0,
        });
    }
    if (document.getElementById('gallery-track')) {
        new GalleryCarousel();
    }
});


// // ===============================
// // BANNER 24/7
// // ===============================

// document.addEventListener('DOMContentLoaded', function () {
//     const banner = document.getElementById('banner');
//     const bannerContainer = document.getElementById('banner-container');
//     const navbar = document.getElementById('navbar');
//     const logo = document.getElementById('logo-247'); // Asegúrate de que el logo tenga este ID

//     // Guarda la posición original del banner
//     const bannerRect = bannerContainer.getBoundingClientRect();
//     let bannerTop = bannerRect.top + window.pageYOffset;

//     function handleScroll() {
//         const navbarHeight = navbar.offsetHeight;

//         if (window.pageYOffset > bannerTop - navbarHeight) {
//             if (!banner.classList.contains('fixed-style')) {
//                 banner.classList.add('fixed-style');
//                 bannerContainer.classList.add('fixed-banner');
//                 bannerContainer.style.height = banner.offsetHeight + 'px';

//                 // Mover el logo a la derecha cuando el banner se fija
//                 logo.classList.add('move-right');
//             }
//         } else {
//             if (banner.classList.contains('fixed-style')) {
//                 banner.classList.remove('fixed-style');
//                 bannerContainer.classList.remove('fixed-banner');
//                 bannerContainer.style.height = '';

//                 // Devolver el logo a su posición original
//                 logo.classList.remove('move-right');
//             }
//         }
//     }

//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('resize', function () {
//         const newRect = bannerContainer.getBoundingClientRect();
//         bannerTop = newRect.top + window.pageYOffset;
//         handleScroll();
//     });
// });



// ===================================================
// SLIDER DE AVALES Y PATROCINADORES (CÓDIGO FINAL)
// ===================================================
document.addEventListener("DOMContentLoaded", function () {
    const setupInfiniteSlider = (trackId) => {
        const trackElement = document.getElementById(trackId);
        if (!trackElement) return; // Si no encuentra el elemento, no hace nada

        const originalLogos = Array.from(trackElement.children);
        if (originalLogos.length === 0) return; // No hacer nada si no hay logos

        // 1. Duplicamos los logos para asegurar que el bucle sea fluido
        originalLogos.forEach(logo => {
            const clone = logo.cloneNode(true);
            clone.ariaHidden = true; // Buena práctica para accesibilidad
            trackElement.appendChild(clone);
        });

        // 2. Calculamos el ancho exacto de la primera mitad del carrusel (los logos originales)
        let totalWidth = 0;
        originalLogos.forEach(item => {
            const style = getComputedStyle(item);
            const marginRight = parseFloat(style.marginRight) || 0;
            totalWidth += item.offsetWidth + marginRight;
        });

        // 3. Aplicamos el ancho calculado como una variable CSS al propio track
        //    Esto permite que la animación CSS sepa exactamente cuánto debe desplazarse.
        trackElement.style.setProperty('--track-width', totalWidth);
    };
    
    // Inicializamos el carrusel de avales
    setupInfiniteSlider('avales-track');
});

// ===================================================
// ANIMACIÓN GEOMÉTRICA (NODOS) - FONDO CONTADOR
// ===================================================
document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById('network-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    
    function resizeCanvas() {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
        initParticles();
    }

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5; // Size 0.5 to 2.5
            this.speedX = (Math.random() * 0.8) - 0.4; // Very slow movement
            this.speedY = (Math.random() * 0.8) - 0.4;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Bounce on edges
            if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
            if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
        }

        draw() {
            ctx.fillStyle = 'rgba(212, 175, 55, 0.8)'; // Gold color
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        particlesArray = [];
        // Map particle density to screen surface. Less particles on smaller screens. Minimum 40.
        let numberOfParticles = Math.max(40, Math.floor((canvas.width * canvas.height) / 12000));
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    function connectParticles() {
        let maxDistance = 150;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let dx = particlesArray[a].x - particlesArray[b].x;
                let dy = particlesArray[a].y - particlesArray[b].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance) {
                    let opacity = 1 - (distance / maxDistance);
                    ctx.strokeStyle = `rgba(212, 175, 55, ${opacity * 0.4})`; // Gold fading lines
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        
        connectParticles();
        requestAnimationFrame(animateParticles);
    }

    // Initialize
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animateParticles();
});
// ==================== PROGRAMA DE ACTIVIDADES - TABS ====================
function switchProgramaTab(tabId) {
    // Deactivate all tabs
    document.querySelectorAll('.programa-tab').forEach(tab => tab.classList.remove('active'));
    // Deactivate all panels
    document.querySelectorAll('.programa-panel').forEach(panel => panel.classList.remove('active'));
    
    // Activate the clicked tab
    const tabs = document.querySelectorAll('.programa-tab');
    const panels = ['dia1', 'dia2', 'dia3', 'extras'];
    const idx = panels.indexOf(tabId);
    if (idx !== -1 && tabs[idx]) {
        tabs[idx].classList.add('active');
    }
    
    // Activate the corresponding panel
    const panel = document.getElementById('panel-' + tabId);
    if (panel) {
        panel.classList.add('active');
    }
}
