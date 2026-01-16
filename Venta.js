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

const callOpt1 = document.getElementById("tab1");
const messageOpt2 = document.getElementById("tab2");
const whatsappOpt3 = document.getElementById("tab3");

const show1 = document.getElementById("idCall");
const show2 = document.getElementById("idCorreo");
const show3 = document.getElementById("idWhatsapp");

function toggleChecks(event) {
  var InputEvent = event.target;
  if (callOpt1.checked) {
    // OPCION 1 SELECCIONADA
    // ENTONCES
    // OPCIONES 2 Y 3 OCULTAS
    // OPCION 1 VISIBLE
    show1.classList.remove("hide");
    show1.classList.add("show");
    show2.classList.add("hide");
    show3.classList.add("hide");
    console.log(show2);
  } else if (messageOpt2.checked) {
    // OPCION 2 SELECCIONADA
    // ENTONCES
    // OPCIONES 1 Y 3 OCULTAS
    // OPCION 2 VISIBLE

    show2.classList.remove("hide");
    show2.classList.add("show");
    show1.classList.add("hide");
    show3.classList.add("hide");
  } else if (whatsappOpt3.checked) {
    // OPCION 3 SELECCIONADA
    // ENTONCES
    // OPCIONES 1 Y 2 OCULTAS
    // OPCION 3 VISIBLE

    show3.classList.remove("hide");
    show3.classList.add("show");
    show1.classList.add("hide");
    show2.classList.add("hide");
  } else if (opt3.checked) {
    alert("Option 3 selected");
  }
  console.log(InputEvent);
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
