function copiarCorreo() {
    const inputCorreo = document.getElementById("correo");
    inputCorreo.select();
    inputCorreo.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand("copy");

    // Confirmación visual
    alert("Correo copiado: " + inputCorreo.value);
  }