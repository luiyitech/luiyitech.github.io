document.addEventListener('DOMContentLoaded', function() {
    // Testimonios
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove('active');
        });
        testimonials[index].classList.add('active');
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    showTestimonial(currentIndex);
    setInterval(nextTestimonial, 7000); // Cambia el comentario cada 7 segundos

    // Cuenta regresiva para la inscripción
    const countdownTarget = new Date('2025-10-15T08:00:00-03:00').getTime(); // Fecha y hora del congreso (hora de Argentina - Formato ISO 8601)
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const countdownContainer = document.getElementById('countdown');
    const registrationSection = document.getElementById('inscripcion'); // Para ocultar la cuenta regresiva al finalizar

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = countdownTarget - now;

        if (difference < 0) {
            clearInterval(countdownInterval);
            countdownContainer.innerHTML = '<p class="countdown-message">¡El congreso ha comenzado!</p>';
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        daysElement.textContent = days.toString().padStart(2, '0');
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
    }

    updateCountdown(); // Ejecutar al cargar la página
    const countdownInterval = setInterval(updateCountdown, 1000);
});
