document.addEventListener("DOMContentLoaded", function () {
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

  function toggleIcon(input) {
    const iconInput = input.parentElement.querySelector(".fa-phone-volume");
    iconInput.style.opacity = input.value ? "0" : "1";
  }

  function toggleIcon1(input) {
    const iconInput1 = input.parentElement.querySelector(".fa-envelope");
    iconInput1.style.opacity = input.value ? "0" : "1";
  }

  const toggleBtn1 = document.getElementById("toggleBtn1");
  const chevronIcon1 = document.getElementById("chevronIcon1");

  function toggleMenu(btnId, listId, iconId) {
    const button = document.getElementById(btnId);
    const list = document.getElementById(listId);
    const icon = document.getElementById(iconId);

    button.addEventListener("click", (event) => {
      event.preventDefault();
      list.classList.toggle("hidden");
      icon.classList.toggle("fa-chevron-up");
      icon.classList.toggle("fa-chevron-down");
    });
    console.log(`Función toggleMenu ejecutada para ${toggleBtn1}`);
  }

  toggleMenu("toggleBtn1", "ListDateContact1", "chevronIcon1");
  toggleMenu("toggleBtn2", "ListTimeContact2", "chevronIcon2");
});

function toggleChecks(target) {
  console.log("target:", target);

  // const callOpt1 = document.getElementById("tab1");
  // const messageOpt2 = document.getElementById("tab2");
  // const whatsappOpt3 = document.getElementById("tab3");

  if (target === 1) {
    // MOSTRAR OPCION 1
    let show1 = document.getElementById("idCall");
    if (show1.classList.contains("hide")) {
      show1.classList.remove("hide");
      show1.classList.add("show");
    }

    // OCULTAR OPCIONES 2 Y 3
    let show2 = document.getElementById("idCorreo");
    let show3 = document.getElementById("idWhatsapp");

    if (!show2.classList.contains("hide")) {
      show2.classList.remove("show");
      show2.classList.add("hide");
    }
    if (!show3.classList.contains("hide")) {
      show3.classList.remove("show");
      show3.classList.add("hide");
    }
  } else if (target === 2) {
    // MOSTRAR OPCION 2
    let show2 = document.getElementById("idCorreo");
    if (show2.classList.contains("hide")) {
      show2.classList.remove("hide");
      show2.classList.add("show");
    }
    // OCULTAR OPCIONES 1 Y 3
    let show3 = document.getElementById("idWhatsapp");
    if (document.getElementById("idCall").classList.contains("show")) {
      document.getElementById("idCall").classList.remove("show");
      document.getElementById("idCall").classList.add("hide");
    }
    if (!show3.classList.contains("hide")) {
      show3.classList.remove("show");
      show3.classList.add("hide");
    }
  } else if (target === 3) {
    // MOSTRAR OPCION 3
    let show3 = document.getElementById("idWhatsapp");
    if (show3.classList.contains("hide")) {
      show3.classList.remove("hide");
      show3.classList.addd("show");
    }
    // OCULTAR OPCIONES 1 Y 2
    let show1 = document.getElementById("idCall");
    let show2 = document.getElementById("idCorreo");
    if (!show1.classList.contains("hide")) {
      show1.classList.remove("show");
      show1.classList.add("hide");
    }
    if (!show2.classList.contains("hide")) {
      show2.classList.remove("show");
      show2.classList.add("hide");
    }
  }
}
