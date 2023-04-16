var validacion = new FormValidator(
  "selfreg",
  [
    {
      name: "telefono",
      display: "Teléfono",
      rules: "required|numeric",
    },
    {
      name: "codPos",
      display: "Código Postal",
      rules: "required|exact_length[4]|numeric",
    },
    {
      name: "email",
      display: "Email address",
      rules: "required|valid_email",
    },
  ],

  function (errors, event) {
    var displayErrors = document.getElementById("selfRegMessage");
    var errorString = "";
    if (errors.length > 0) {
      for (var i = 0; i < errors.length; i++) {
        errorString += errors[i].message + "<br />";
      }
      displayErrors.innerHTML = errorString;
      $("#modalErrores").modal("show");
    } else {
      event.preventDefault();
      infoFinal();
      $("#modalFinal").modal("show");
    }
  }
);
validacion.setMessage("required", "Este campo es obligatorio");
validacion.setMessage("valid_email", "Es necesario un email válido");
validacion.setMessage(
  "numeric",
  "Es necesario un teléfono válido. Utilizar sólo números"
);
validacion.setMessage(
  "exact_length",
  "Es necesario un código postal válido. Utilizar sólo 4 números"
);

function siguiente(num) {
  if (num == 1) {
    campo = document.getElementById("nombreCompleto").value;
    if (esVacio(campo)) {
      mostrarAlerta("El nombre no puede estar vacío");
    } else if (verificarLetrasEspacios(campo)) {
      let panelviejo = document.getElementById("panel" + num);
      let panelnuevo = document.getElementById("panel" + (num + 1));
      panelviejo.classList.add("oculto");
      panelnuevo.classList.remove("oculto");
    } else {
      mostrarAlerta("El nombre solo puede contener letras y espacios");
    }
  } else if (num == 2) {
    campo = document.getElementById("mensaje").value;
    if (esVacio(campo)) {
      mostrarAlerta("El mensaje no puede estar vacío");
    } else {
      let panelviejo = document.getElementById("panel" + num);
      let panelnuevo = document.getElementById("panel" + (num + 1));
      panelviejo.classList.add("oculto");
      panelnuevo.classList.remove("oculto");
    }
  }
}
function mostrarAlerta(frase) {
  let alerta = document.getElementById("alerta");
  alerta.innerHTML = frase;
  alerta.classList.remove("oculto");
  setTimeout(function () {
    alerta.classList.add("oculto");
  }, 3000);
}
function mostrarConfirmacion() {
  let confirmacion = document.getElementById("confirmacion");
  confirmacion.innerHTML =
    "¡Gracias por contactarte con nosotros! Te responderemos a la brevedad.";
  confirmacion.classList.remove("oculto");
}
function esVacio(palabra) {
  if (palabra == "") {
    return true;
  } else {
    return false;
  }
}

function verificarLetrasEspacios(palabra) {
  return /^[A-Za-z\s]*$/.test(palabra);
}

function infoFinal() {
  let nombreFinal = document.getElementById("nombreFinal");
  let emailFinal = document.getElementById("emailFinal");
  let empresaFinal = document.getElementById("empresaFinal");
  let ciudadFinal = document.getElementById("ciudadFinal");
  let provinciaFinal = document.getElementById("provinciaFinal");
  let telefonoFinal = document.getElementById("telefonoFinal");
  let codPosFinal = document.getElementById("codPosFinal");
  let mensajeFinal = document.getElementById("mensajeFinal");
  let nombre = document.getElementById("nombreCompleto").value;
  let email = document.getElementById("email").value;
  let empresa = document.getElementById("empresa").value;
  let ciudad = document.getElementById("ciudad").value;
  let provincia = document.getElementById("provincia").value;
  let telefono = document.getElementById("telefono").value;
  let codPos = document.getElementById("codPos").value;
  let mensaje = document.getElementById("mensaje").value;
  nombreFinal.innerHTML = nombre;
  emailFinal.innerHTML = email;
  empresaFinal.innerHTML = empresa;
  ciudadFinal.innerHTML = ciudad;
  provinciaFinal.innerHTML = provincia;
  telefonoFinal.innerHTML = telefono;
  codPosFinal.innerHTML = codPos;
  mensajeFinal.innerHTML = mensaje;
}
function descargarPDF() {
  window.jsPDF = window.jspdf.jsPDF;
  var doc = new jsPDF("l", "pt", "a4");
  var elementHTML = document.querySelector("#final");
  doc.html(elementHTML, {
    callback: function (doc) {
      doc.save("confirmacion_pedido_cotizacion.pdf");
    },
    x: 15,
    y: 15,
  });
  mostrarConfirmacion();
}
