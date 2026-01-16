const dateSelect = document.querySelector(".pDate");
dateSelect.addEventListener("click", function () {
  if ("") {
    document.getElementById("ListDateContact1").classList.remove("hide");
    document.getElementById("ListDateContact1").classList.add("show");
  }
});

function toggleChecks(target) {
  const targetCall = document.getElementById("idcall");
  const targetEmail = document.getElementById("idCorreo");
  const targetWhatsApp = document.getElementById("idWhatsApp");

  const labelCall = document.querySelector(".optionLabel1");
  const labelEmail = document.querySelector(".optionLabel2");
  const labelWhatsApp = document.querySelector(".optionLabel3");

  const iconCall = document.querySelector(".fa-phone");
  const iconEmail = document.querySelector(".fa-envelope");
  const iconWhatsApp = document.querySelector(".fa-comment-dots");

  if (target === 1) {
    // MOSTRAR OPCION 1
    if (targetCall.classList.contains("hide")) {
      targetCall.classList.remove("hide");
      targetCall.classList.add("show");
    }
    // CAMBIO DE ESTADO / LABEL E ICONO
    if (targetCall.classList.contains("show")) {
      labelCall.style.color = "#0f143a";
      document.querySelector(".fa-phone").style.color = "#0f143a";
      labelCall.style.borderBottom = "2px solid #0f143a";
      labelEmail.style.borderBottom = "none";
    }

    // OCULTAR OPCIONES 2 Y 3
    if (!targetEmail.classList.contains("hide")) {
      targetEmail.classList.remove("show");
      targetEmail.classList.add("hide");
    }
    if (!targetWhatsApp.classList.contains("hide")) {
      targetWhatsApp.classList.remove("show");
      targetWhatsApp.classList.add("hide");
    }
  }

  if (target === 2) {
    // MOSTRAR OPCION 2
    if (targetEmail.classList.contains("hide")) {
      targetEmail.classList.remove("hide");
      targetEmail.classList.add("show");
    }

    labelCall.style.color = "#0f143a";
    document.querySelector(".fa-phone").style.color = "#0f143a";
    labelCall.style.borderBottom = "none";
    labelEmail.style.borderBottom = "2px solid #0f143a";

    // OCULTAR OPCIONES 1 Y 3
    if (targetCall.classList.contains("show")) {
      targetCall.classList.remove("show");
      targetCall.classList.add("hide");
    }
    if (!targetWhatsApp.classList.contains("hide")) {
      targetWhatsApp.classList.remove("show");
      targetWhatsApp.classList.add("hide");
    }
  }

  if (target === 3) {
    // MOSTRAR OPCION 3
    if (targetWhatsApp.classList.contains("hide")) {
      targetWhatsApp.classList.remove("hide");
      targetWhatsApp.classList.add("show");
    }
    // OCULTAR OPCIONES 1 Y 2
    if (target === 3) {
      // MOSTRAR OPCION 3
      if (targetWhatsApp.classList.contains("hide")) {
        targetWhatsApp.classList.remove("hide");
        targetWhatsApp.classList.addd("show");
      }
      // OCULTAR OPCIONES 1 Y 2
      if (!targetCall.classList.contains("hide")) {
        targetCall.classList.remove("show");
        targetCall.classList.add("hide");
      }
      if (!targetEmail.classList.contains("hide")) {
        targetEmail.classList.remove("show");
        targetEmail.classList.add("hide");
      }
      if (target === 3) {
        // MOSTRAR OPCION 3
        if (targetWhatsApp.classList.contains("hide")) {
          targetWhatsApp.classList.remove("hide");
          targetWhatsApp.classList.add("show");
        }
        // OCULTAR OPCIONES 1 Y 2
        if (!targetCall.classList.contains("hide")) {
          targetCall.classList.remove("show");
          targetCall.classList.add("hide");
        }
        if (!targetEmail.classList.contains("hide")) {
          targetEmail.classList.remove("show");
          targetEmail.classList.add("hide");
        }
      }
    }
  }
}
