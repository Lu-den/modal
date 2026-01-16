//MENU OF DATE
const dateSelect = document.querySelector(".btn-menu1");
dateSelect.addEventListener("click", function () {
  if (document.getElementById("ListDateContact1").classList.contains("hide")) {
    document.getElementById("ListDateContact1").classList.remove("hide");
    document.getElementById("ListDateContact1").classList.add("show");
  }
});
const dateSelectClose = document.querySelector(".btn-menu1Close");
dateSelectClose.addEventListener("click", function () {
  if (document.getElementById("ListDateClosed").classList.contains("show")) {
    document.getElementById("ListDateClosed").classList.remove("show");
    document.getElementById("ListDateClosed").classList.add("hide");
  }
});

const timeSelect = document.querySelector(".btn-menu2");
timeSelect.addEventListener("click", function () {
  if (document.getElementById("ListTimeContact2").classList.contains("hide")) {
    document.getElementById("ListTimeContact2").classList.remove("hide");
    document.getElementById("ListTimeContact2").classList.add("show");
  }
});

/*function togglebtns(target) {
  const dateSelect = document.getElementById("ListDateContact1");
  const timeSelect = document.getElementById("ListTimeContact2");

  if (target === 1) {
    if (dateSelect.classList.contains("hide")) {
      dateSelect.classList.remove("hide");
      dateSelect.classList.add("show");
    }
    if (!dateSelect.classList.contains("hide")) {
      dateSelectclassList.remove("show");
      dateSelectclassList.add("hide");
    }
    console.log(target);
  }
  if (target === 2) {
    if (timeSelect.classList.contains("hide")) {
      timeSelect.classList.remove("hide");
      timeSelect.classList.add("show");
    }
    if (!timeSelect.classList.contains("hide")) {
      dateSelectclassList.remove("show");
      dateSelectclassList.add("hide");
    }
    console.log(target);
  }
}*/

//TARGETS OF CALL, EMAIL, WHATSAPP
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
      labelCall.style.borderBottom = "3px solid #0f143a";
      document.querySelector(".fa-envelope").style.color = "#292929b7";
      labelEmail.style.borderBottom = "none";
      labelEmail.style.color = "#292929b7";
      document.querySelector(".fa-comment-dots").style.color = "#292929b7";
      labelWhatsApp.style.borderBottom = "none";
      labelWhatsApp.style.color = "#292929b7";
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

    document.querySelector(".fa-phone").style.color = "#292929b7";
    labelCall.style.borderBottom = "none";
    labelCall.style.color = "#292929b7";
    document.querySelector(".fa-envelope").style.color = "#0f143a";
    labelEmail.style.borderBottom = "3px solid #0f143a";
    labelEmail.style.color = "#0f143a";
    document.querySelector(".fa-comment-dots").style.color = "#292929b7";
    labelWhatsApp.style.borderBottom = "none";
    labelWhatsApp.style.color = "#292929b7";

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

    document.querySelector(".fa-envelope").style.color = "#292929b7";
    labelEmail.style.borderBottom = "none";
    labelEmail.style.color = "#292929b7";
    document.querySelector(".fa-comment-dots").style.color = "#0f143a";
    labelWhatsApp.style.borderBottom = "3px solid #0f143a";
    labelWhatsApp.style.color = "#0f143a";

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
//MENU OPTIONS
document.querySelectorAll(".services .menu div label").forEach((item) => {
  item.addEventListener("click", () => {
    // quitar selección previa
    document
      .querySelectorAll(".services .menu div label")
      .forEach((label) => label.classList.remove("selected"));
    // marcar el clicado
    item.classList.add("selected");
  });
});

//ICONS TRANSPARENTS
function toggleIcon(input) {
  const iconInput = input.parentElement.querySelector(".fa-phone-volume");
  iconInput.style.opacity = input.value ? "0" : "1";
}

function toggleIcon1(input) {
  const iconInput1 = input.parentElement.querySelector(".fa-envelope");
  iconInput1.style.opacity = input.value ? "0" : "1";
}
