// Inicialización de AOS (Animate On Scroll)
AOS.init({
  once: true,         // Solo anima una vez al entrar en la vista
  duration: 1000,     // Duración de la animación en milisegundos
  offset: 120         // Distancia antes de activar la animación
});

// Anima las barras de progreso al hacer scroll
document.addEventListener("DOMContentLoaded", function () {
  const bars = document.querySelectorAll(".animated-bar .progress-bar");

  const animateBars = () => {
    bars.forEach(bar => {
      const percentage = bar.getAttribute("data-percentage");
      const barTop = bar.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (barTop < windowHeight) {
        bar.style.width = percentage; // Aplica el porcentaje definido
      }
    });
  };

  window.addEventListener("scroll", animateBars);
  animateBars(); // Ejecutar también al cargar
});

// Animación de aparición para elementos al hacer scroll
const elementos = document.querySelectorAll(
  '.section-title, .card, .form-control, .btn, textarea, label, p, h4'
);

const aparecer = () => {
  const trigger = window.innerHeight * 0.85;

  elementos.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
  });
};

// Configuración inicial de estilo para animación
window.addEventListener('DOMContentLoaded', () => {
  elementos.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
  });

  aparecer(); // Ejecutar al cargar
});

// Activar animación al hacer scroll
window.addEventListener('scroll', aparecer);

// Botón “Ir arriba”
const btnTop = document.getElementById('btn-top');

window.addEventListener('scroll', () => {
  btnTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

btnTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplazamiento suave
});

// Envío del formulario de contacto con fetch y validación
const form = document.getElementById("formulario-contacto");
const mensajeEstado = document.getElementById("mensaje-estado");

form.addEventListener("submit", async function (e) {
  e.preventDefault(); // Previene la recarga de página

  const datos = new FormData(form);

  try {
    const respuesta = await fetch(form.action, {
      method: "POST",
      body: datos,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (respuesta.ok) {
      mensajeEstado.innerHTML = "✅ ¡Mensaje enviado correctamente!";
      mensajeEstado.style.color = "green";
      form.reset(); // Limpia el formulario
    } else {
      mensajeEstado.innerHTML = "❌ Error al enviar. Intenta de nuevo.";
      mensajeEstado.style.color = "red";
    }
  } catch (error) {
    mensajeEstado.innerHTML = "❌ Ocurrió un problema. Inténtalo más tarde.";
    mensajeEstado.style.color = "red";
  }
});

// Cierra el menú responsive al hacer clic en un enlace
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.nav-link');
  const navbarCollapse = document.querySelector('#navbarNavCenter');
  const navbarToggler = document.querySelector('.navbar-toggler');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
        navbarToggler.click(); // Cierra el menú
      }
    });
  });
});
