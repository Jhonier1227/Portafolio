function copiarCorreo() {
    const inputCorreo = document.getElementById("correo");
    inputCorreo.select();
    inputCorreo.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand("copy");

    // Confirmación visual
    alert("Correo copiado: " + inputCorreo.value);
  }

  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  });
  