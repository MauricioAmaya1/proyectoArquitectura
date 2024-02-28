const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const correo = document.getElementById("correo");
const numero = document.getElementById("numero");
const provincia = document.getElementById("provincia");
const ciudad = document.getElementById("ciudad");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");
const ok = document.getElementById("ok");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let warnings = "";
  let entrar = false;
  parrafo.innerHTML = "";
  ok.innerHTML = "";
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (nombre.value.length < 3) {
    warnings += "El nombre no es válido";
    entrar = true;
  }

  if (apellido.value.length < 3) {
    warnings += "El apellido no es válido";
    entrar = true;
  }

  if (!regexEmail.test(correo.value)) {
    warnings += "El correo no es válido";
    entrar = true;
  }

  if (numero.value.length < 10) {
    warnings += "El número no es válido, recuerde agregar la característica";
    entrar = true;
  }

  if (provincia.value.length < 3) {
    warnings += "La provincia no es válida";
    entrar = true;
  }

  if (ciudad.value.length < 3) {
    warnings += "La ciudad no es válida";
    entrar = true;
  }

  if (mensaje.value.length < 30) {
    warnings += "El mensaje debe tener como mínimo 30 caracteres";
    entrar = true;
  }

  if (entrar) {
    parrafo.innerHTML = warnings;
  } else {
    // Hacer una solicitud AJAX al archivo PHP
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "enviar_formulario.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // Muestra la respuesta del servidor en el elemento 'ok'
        ok.innerHTML = xhr.responseText;
      }
    };

    // Envía los datos del formulario al servidor
    xhr.send(
      "nombre=" +
        encodeURIComponent(nombre.value) +
        "&apellido=" +
        encodeURIComponent(apellido.value) +
        "&correo=" +
        encodeURIComponent(correo.value) +
        "&numero-celular=" +
        encodeURIComponent(numero.value) +
        "&provincia=" +
        encodeURIComponent(provincia.value) +
        "&ciudad=" +
        encodeURIComponent(ciudad.value) +
        "&mensaje=" +
        encodeURIComponent(mensaje.value)
    );

    // También puedes limpiar los campos después de enviar el formulario
    nombre.value = "";
    apellido.value = "";
    correo.value = "";
    numero.value = "";
    provincia.value = "";
    ciudad.value = "";
    mensaje.value = "";
  }
});
