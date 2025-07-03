
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

//Arreglo de personas con nombre y provincia (actualizado desde Excel)
const personas = [
    { nombre: "Perez Martina", provincia: "Entre Ríos" },
    { nombre: "Weiss Brenda Gianella", provincia: "Entre Ríos" },
    { nombre: "Lucchesi Andrés Ernesto Ricardo", provincia: "Entre Ríos" },
    { nombre: "Marelli Lucia", provincia: "Santa Fe" },
    { nombre: "Rau Cynthia Gabriela", provincia: "Entre Ríos" },
    { nombre: "Claudia Soraya Castelli", provincia: "Entre Ríos" },
    { nombre: "Correa Ariadna Micaela", provincia: "Santa Fe" },
    { nombre: "Villanueva Maria Del Rosario", provincia: "Entre Ríos" },
    { nombre: "Bernard Sol", provincia: "Santa Fe" },
    { nombre: "Rodríguez Nicolás", provincia: "Santa Fe" },
    { nombre: "Diaz Denise", provincia: "Entre Ríos" },
    { nombre: "Manasseri Brenda Cruz", provincia: "Entre Ríos" },
    { nombre: "Thefs Sergio José", provincia: "Río Negro" },
    { nombre: "Fanega Carla Daniela", provincia: "Santa Fe" },
    { nombre: "Forziati Grinovero Cristian Exequiel", provincia: "Entre Ríos" },
    { nombre: "Rossi Osvaldo Victor", provincia: "Santa Fe" },
    { nombre: "Gómez Ríos Victoria", provincia: "Entre Ríos" },
    { nombre: "Weigandt Barbara Agustina", provincia: "Entre Ríos" },
    { nombre: "Ferreira Narella Martina", provincia: "Entre Ríos" },
    { nombre: "Musso Giannina", provincia: "Entre Ríos" },
    { nombre: "Martinez Flavio Emmanuel", provincia: "Entre Ríos" },
    { nombre: "Zuber Camila", provincia: "Entre Ríos" },
    { nombre: "Aranguiz Rodriguez Yolanda", provincia: "Bs As" },
    { nombre: "Nani Constanza", provincia: "Entre Ríos" },
    { nombre: "María Gimena Muñoz", provincia: "San Luis" },
    { nombre: "Bendz Martina", provincia: "Entre Ríos" },
    { nombre: "Leguizamón Ana Paula", provincia: "Entre Ríos" },
    { nombre: "Garcia Victoria Abril", provincia: "Entre Ríos" },
    { nombre: "Machado Melina Abril", provincia: "Entre Ríos" },
    { nombre: "Aguiar María Lorena", provincia: "Buenos Aires" },
    { nombre: "Alcántara Luisina", provincia: "Buenos Aires" },
    { nombre: "Martínez Ariadna", provincia: "Entre Ríos" },
    { nombre: "Krohling Ailén", provincia: "Santa Fe" },
    { nombre: "Cañete Cornacchione Agostina", provincia: "Entre Ríos" },
    { nombre: "Aguirre Florencia", provincia: "Santa Fe" },
    { nombre: "Rojas Ascaino Natalia Belén", provincia: "Entre Ríos" },
    { nombre: "Tamagno Carla Luján", provincia: "Entre Ríos" },
    { nombre: "Raim Rocio Daiana", provincia: "Entre Ríos" },
    { nombre: "Galli Iara", provincia: "Entre Ríos" },
    { nombre: "Correa Lihuen", provincia: "Entre Ríos" },
    { nombre: "Masetto Valentina", provincia: "Entre Ríos" },
    { nombre: "Solis Carmela", provincia: "Entre Ríos" },
    { nombre: "Vergara Nadine Naiara", provincia: "Entre Ríos" },
    { nombre: "Frias Juan Pablo Nicolás", provincia: "Entre Ríos" },
    { nombre: "Basaldúa Oriana", provincia: "Entre Ríos" },
    { nombre: "González Melina", provincia: "Buenos Aires" },
    { nombre: "Yamila Somaschini", provincia: "Buenos Aires" },
    { nombre: "Sánchez Agostina Noemi", provincia: "San Luis" },
    { nombre: "Alicia Isabel Copes", provincia: "Santa Fe" },
    { nombre: "Pereyra Daniela Katherine", provincia: "Córdoba" },
    { nombre: "Lara Acosta", provincia: "Santa Fe" },
    { nombre: "Elgart Joaquín Francisco", provincia: "Entre Ríos" },
    { nombre: "Ingeme Chaves Carlos Eduardo", provincia: "Caba" },
    { nombre: "Gomez María Ailen", provincia: "Buenos Aires" },
    { nombre: "Fessia Candela", provincia: "Santa Fe" },
    { nombre: "Valenzuela Anabella Milagros", provincia: "Entre Ríos" },
    { nombre: "Busi Camila", provincia: "Entre Ríos" },
    { nombre: "Nuñez Micaela", provincia: "Buenos Aires" },
    { nombre: "Lourdes Antonio", provincia: "Buenos Aires" },
    { nombre: "Fernández Walter", provincia: "Entre Ríos" },
    { nombre: "Monroy Ana Victoria", provincia: "Entre Ríos" },
    { nombre: "Villarreal Fermín", provincia: "Córdoba" },
    { nombre: "Foglino Marco Gonzalo", provincia: "Córdoba" },
    { nombre: "Acuña Sandro Fabian", provincia: "Entre Ríos" },
    { nombre: "Fernández Campón Manuela", provincia: "Santa Fe" },
    { nombre: "Andrea Silvina Strocen Schelske", provincia: "Misiones" }
];


// Función para obtener una persona aleatoria
function getPersonaAleatoria() {
    return personas[Math.floor(Math.random() * personas.length)];
}

// Función principal para mostrar el pop-up
function mostrarPopup() {
    const persona = getPersonaAleatoria();

    // Creación de elementos del pop-up
    const popup = document.createElement("div");
    popup.classList.add("popup");

    const img = document.createElement("img");
    img.src = "https://img.freepik.com/vetores-premium/mapa-da-cidade-com-planta-de-localizacao-com-pino-para-cartografia-de-rota-gps-backround-ponteiros-de-navegacao-vermelhos_152104-165.jpg";
    img.alt = persona.nombre;

    const textContainer = document.createElement("div");
    textContainer.classList.add("popup-text");

    // Primera línea de texto con el nombre en negrita
    const line1 = document.createElement("p");
    const nameStrong = document.createElement("strong"); // Nuevo elemento para el nombre en negrita
    nameStrong.textContent = persona.nombre; // Asigna el nombre al elemento strong

    line1.appendChild(nameStrong); // Añade el nombre en negrita
    // Solo provincia, sin ciudad
    line1.appendChild(document.createTextNode(` de ${persona.provincia}.`));

    // Segunda línea de texto (mensaje de registro)
    const line2 = document.createElement("p");
    line2.classList.add("popup-line2");

    const highlightSpan = document.createElement("span");
    highlightSpan.classList.add("highlight-register");
    highlightSpan.textContent = "Se acaba de registrar";

    line2.appendChild(document.createTextNode("✨ "));
    line2.appendChild(highlightSpan);
    line2.appendChild(document.createTextNode(" ✨"));

    // Ensamblaje del pop-up
    textContainer.appendChild(line1);
    textContainer.appendChild(line2);

    popup.appendChild(img);
    popup.appendChild(textContainer);
    document.body.appendChild(popup);

    // Lógica de aparición y desaparición del pop-up
    setTimeout(() => {
        popup.classList.add("show");
    }, 500);

    setTimeout(() => {
        popup.classList.remove("show");
        popup.style.visibility = "hidden";

        setTimeout(() => {
            document.body.removeChild(popup);

            // Temporización aleatoria para el siguiente pop-up
            const nextDelay = Math.random() * (18000 - 7000) + 5000;
            setTimeout(mostrarPopup, nextDelay);

        }, 500);

    }, 8000);
}

// Inicio de la cadena de pop-ups
setTimeout(mostrarPopup, 2000);


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
        const dots = document.querySelectorAll('.gallery-dot');

        if (track) {
            const offset = -this.currentIndex * 100;
            track.style.transform = `translateX(${offset}%)`;
        }

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


/* ================================================= */
/* POP-UP FLOTANTE (ESTRUCTURA FINAL Y DEFINITIVA)   */
/* ================================================= */
document.addEventListener('DOMContentLoaded', () => {

    // --- FUNCIÓN PARA CREAR EL POP-UP ---
    function crearPopupConcurso() {
        if (document.querySelector('.contest-popup-float')) {
            return document.querySelector('.contest-popup-float');
        }
        const popup = document.createElement('div');
        popup.className = 'contest-popup-float';
        const imagenSrc = "img/concurso-congreso.jpg";
        
        // ✅ ESTRUCTURA CLAVE: Fíjate cómo el botón <a> está FUERA y después del <div> del texto.
        // Esto es lo que permite ocultar el texto sin ocultar el botón.
        popup.innerHTML = `
            <img src="${imagenSrc}" alt="Anuncio del Concurso de Imágenes Forenses">
            
            <div class="contest-popup-text">
                <p><strong>¡Tenemos un concurso!</strong></p>
                <p>Demuestra tu talento en nuestro concurso de imagenes forenses y gana premios increíbles.</p>
            </div>

            <a href="concurso.html" target="_blank" class="contest-popup-button">¡Quiero participar!</a>
            
            <button class="contest-popup-close">&times;</button>
        `;

        document.body.appendChild(popup);
        
        popup.classList.add('hidden');
        setTimeout(() => {
            popup.classList.add('show');
        }, 100);

        popup.querySelector('.contest-popup-close').addEventListener('click', () => {
            popup.style.display = 'none';
        });
        return popup;
    }

    // --- LÓGICA DEL OBSERVADOR DE SCROLL ---
    const popup = crearPopupConcurso();
    const seccionTrigger = document.querySelector('.hero-bg');

    if (!seccionTrigger || !popup) return;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                popup.classList.remove('hidden');
            } else {
                popup.classList.add('hidden');
            }
        });
    }, options);
    observer.observe(seccionTrigger);
});