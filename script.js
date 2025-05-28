
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

//Arreglo de personas con nombre, ciudad y provincia
const personas = [
    { nombre: "Analia Victoria Vasquez", ciudad: "Rosario", provincia: "Santa Fe" },
    { nombre: "Carlos Andrés Medina", ciudad: "Córdoba", provincia: "Córdoba" },
    { nombre: "Florencia López", ciudad: "Mar del Plata", provincia: "Buenos Aires" },
    { nombre: "Javier Quiroga", ciudad: "San Miguel de Tucumán", provincia: "Tucumán" },
    { nombre: "Sofia Elena Fernández", ciudad: "Neuquén", provincia: "Neuquén" },
    { nombre: "Martín José Salazar", ciudad: "Salta", provincia: "Salta" },
    { nombre: "Gisela Rodríguez", ciudad: "Santa Rosa", provincia: "La Pampa" },
    { nombre: "Gabriel Iván Pérez", ciudad: "Mendoza", provincia: "Mendoza" },
    { nombre: "Eliana Duarte", ciudad: "San Juan", provincia: "San Juan" },
    { nombre: "Lucas Herrera", ciudad: "Posadas", provincia: "Misiones" },
    { nombre: "Valeria Mariana Castro", ciudad: "Resistencia", provincia: "Chaco" },
    { nombre: "Fernando Luis Gómez", ciudad: "Rawson", provincia: "Chubut" },
    { nombre: "Andrea Patricia Sosa", ciudad: "San Luis", provincia: "San Luis" },
    { nombre: "Alejandro Martín Núñez", ciudad: "San Salvador de Jujuy", provincia: "Jujuy" },
    { nombre: "Mariana Isabel Torres", ciudad: "Corrientes", provincia: "Corrientes" },
    { nombre: "Pablo Sebastián Álvarez", ciudad: "Viedma", provincia: "Río Negro" },
    { nombre: "Natalia Acosta", ciudad: "Catamarca", provincia: "Catamarca" },
    { nombre: "Ignacio Benítez", ciudad: "Concordia", provincia: "Entre Ríos" },
    { nombre: "Lucía Gabriela Moreno", ciudad: "Formosa", provincia: "Formosa" },
    { nombre: "Matías Romero", ciudad: "Santiago del Estero", provincia: "Santiago del Estero" },
    { nombre: "Agustina Rivas", ciudad: "La Plata", provincia: "Buenos Aires" },
    { nombre: "Facundo Alejandro Delgado", ciudad: "Trelew", provincia: "Chubut" },
    { nombre: "Camila Gómez", ciudad: "San Fernando del Valle de Catamarca", provincia: "Catamarca" },
    { nombre: "Tomás Ezequiel Suárez", ciudad: "Rafaela", provincia: "Santa Fe" },
    { nombre: "Paula Lorena Márquez", ciudad: "General Roca", provincia: "Río Negro" },
    { nombre: "Diego Luna", ciudad: "Villa María", provincia: "Córdoba" },
    { nombre: "Julieta Sofía López", ciudad: "Gualeguaychú", provincia: "Entre Ríos" },
    { nombre: "Federico Esteban Acosta", ciudad: "San Carlos de Bariloche", provincia: "Río Negro" },
    { nombre: "Marcos Andrés Silva", ciudad: "Villa Mercedes", provincia: "San Luis" },
    { nombre: "Daniela Belén Díaz", ciudad: "Comodoro Rivadavia", provincia: "Chubut" },
    { nombre: "Esteban Gabriel Rojas", ciudad: "Ushuaia", provincia: "Tierra del Fuego" },
    { nombre: "Laura Carolina Giménez", ciudad: "San Luis", provincia: "San Luis" },
    { nombre: "Ricardo Ariel Fernández", ciudad: "La Rioja", provincia: "La Rioja" },
    { nombre: "Mercedes Sol Pereyra", ciudad: "Paraná", provincia: "Entre Ríos" },
    { nombre: "Gonzalo Nahuel Castro", ciudad: "Río Gallegos", provincia: "Santa Cruz" },
    { nombre: "Romina Soledad Blanco", ciudad: "Formosa", provincia: "Formosa" },
    { nombre: "Sergio David Romero", ciudad: "Puerto Madryn", provincia: "Chubut" },
    { nombre: "Cecilia Inés Vera", ciudad: "Villa Carlos Paz", provincia: "Córdoba" },
    { nombre: "Juan Cruz Álvarez", ciudad: "Concepción del Uruguay", provincia: "Entre Ríos" },
    { nombre: "Josefina María Herrera", ciudad: "Viedma", provincia: "Río Negro" },
    { nombre: "Martín Alejandro López", ciudad: "Pergamino", provincia: "Buenos Aires" },
    { nombre: "Sofía Valentina Díaz", ciudad: "Tartagal", provincia: "Salta" },
    { nombre: "Franco Nicolás Giménez", ciudad: "Mercedes", provincia: "Corrientes" },
    { nombre: "Emilia Constanza Torres", ciudad: "Villa Gesell", provincia: "Buenos Aires" },
    { nombre: "Hernán Lucas Rojas", ciudad: "Esquel", provincia: "Chubut" },
    { nombre: "Carolina Andrea Pérez", ciudad: "San Rafael", provincia: "Mendoza" },
    { nombre: "Diego Gabriel Sosa", ciudad: "San Francisco", provincia: "Córdoba" },
    { nombre: "Valeria Alejandra Ruiz", ciudad: "Villa Constitución", provincia: "Santa Fe" },
    { nombre: "Maximiliano Agustín Castro", ciudad: "Zapala", provincia: "Neuquén" },
    { nombre: "Brenda Molina", ciudad: "Oberá", provincia: "Misiones" },
    { nombre: "Santiago Ruiz", ciudad: "Goya", provincia: "Corrientes" },
    { nombre: "Laura Beltrán", ciudad: "Cafayate", provincia: "Salta" },
    { nombre: "Esteban Torres", ciudad: "Villa La Angostura", provincia: "Neuquén" },
    { nombre: "Paula Vargas", ciudad: "Caleta Olivia", provincia: "Santa Cruz" },
    { nombre: "Diego Fernández", ciudad: "Chilecito", provincia: "La Rioja" },
    { nombre: "Gabriela Castro", ciudad: "Tinogasta", provincia: "Catamarca" },
    { nombre: "Javier Sánchez", ciudad: "La Quiaca", provincia: "Jujuy" },
    { nombre: "Ana Clara Godoy", ciudad: "Río Grande", provincia: "Tierra del Fuego" },
    { nombre: "Marcelo Damián Vera", ciudad: "Merlo", provincia: "San Luis" }
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
    // Añade el resto del texto como un nodo de texto normal
    line1.appendChild(document.createTextNode(` de ${persona.ciudad} - ${persona.provincia}.`));

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