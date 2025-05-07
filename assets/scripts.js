AOS.init({
    once: true,
    duration: 1000,
    offset: 120,
  });

  document.addEventListener("DOMContentLoaded", function () {
    const bars = document.querySelectorAll(".animated-bar .progress-bar");

    const animateBars = () => {
      bars.forEach(bar => {
        const percentage = bar.getAttribute("data-percentage");
        const barTop = bar.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (barTop < windowHeight) {
          bar.style.width = percentage;
        }
      });
    };

    window.addEventListener("scroll", animateBars);
    animateBars(); // Ejecutar también al cargar
  });

  const elementos = document.querySelectorAll('.section-title, .card, .form-control, .btn, textarea, label, p, h4');

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

  // Estilo inicial
  window.addEventListener('DOMContentLoaded', () => {
    elementos.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.6s ease';
    });

    aparecer(); // en carga
  });

  // En scroll
  window.addEventListener('scroll', aparecer);



  const btnTop = document.getElementById('btn-top');

  window.addEventListener('scroll', () => {
    btnTop.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  btnTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


  const form = document.getElementById("formulario-contacto");
  const mensajeEstado = document.getElementById("mensaje-estado");

  form.addEventListener("submit", async function (e) {
    e.preventDefault(); // Evita recargar la página
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
        form.reset(); // Limpiar formulario después de enviar
      } else {
        mensajeEstado.innerHTML = "❌ Error al enviar. Intenta de nuevo.";
        mensajeEstado.style.color = "red";
      }
    } catch (error) {
      mensajeEstado.innerHTML = "❌ Ocurrió un problema. Inténtalo más tarde.";
      mensajeEstado.style.color = "red";
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('#navbarNavCenter'); // Corregido aquí
    const navbarToggler = document.querySelector('.navbar-toggler');

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
          navbarToggler.click(); // Cierra el menú al hacer clic en una opción
        }
      });
    });
  });

  console.log("Ancho del body:", document.body.scrollWidth);
  console.log("Ancho de la ventana:", window.innerWidth);