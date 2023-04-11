var validacion1 = new FormValidator(
  "selfreg1",
  [
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
      errorString = "No hay errores";
      displayErrors.innerHTML = errorString;
    }

  }
);
var validacion2 = new FormValidator(
  "selfreg2",
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
  ],

  function (errors, event) {
    var displayErrors = document.getElementById("selfRegMessage");
    var errorString = "";
    console.log("validacion2");
    if (errors.length > 0) {
      for (var i = 0; i < errors.length; i++) {
        errorString += errors[i].message + "<br />";
      }
      displayErrors.innerHTML = errorString;
    } else {
      errorString = "No hay errores";
      displayErrors.innerHTML = errorString;
    }
    $("#modalErrores").modal("show");
  }
);
var validacion3 = new FormValidator(
  "selfreg3",
  [
    {
      name: "cotizacion",
      display: "Contanos que necesitas",
      rules: "required",
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
      errorString = "No hay errores";
      displayErrors.innerHTML = errorString;
      infoFinal();
      $("#final").modal("show");
    }
  }
);
validacion1.setMessage("required", "Este campo es obligatorio");
validacion2.setMessage("required", "Este campo es obligatorio");
validacion3.setMessage("required", "Este campo es obligatorio");
validacion1.setMessage("valid_email", "Es necesario un email válido");
validacion2.setMessage(
  "numeric",
  "Es necesario un teléfono válido. Utilizar sólo números"
);
validacion2.setMessage(
  "exact_length",
  "Es necesario un código postal válido. Utilizar sólo 4 números"
);
var numero;
var errorString = "No hay errores";
function siguiente(num) {
  numero = num;
  console.log("siguiente");
  setTimeout(cambiar, 2000);
}

function cambiar() {
  console.log("CAMBIAR");
  if (document.getElementById("modalErrores").innerHTML != errorString) {
    console.log("SALE");
    return;
  } else {
    console.log("cambiar");
    let panelviejo = document.getElementById("panel" + numero);
    let panelnuevo = document.getElementById("panel" + (numero + 1));
    panelviejo.classList.add("oculto");
    panelnuevo.classList.remove("oculto");
  }
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
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;
  let empresa = document.getElementById("empresa").value;
  let ciudad = document.getElementById("ciudad").value;
  let provincia = document.getElementById("provincia").value;
  let telefono = document.getElementById("telefono").value;
  let codPos = document.getElementById("codPos").value;
  let mensaje = document.getElementById("cotizacion").value;
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

  var doc = new jsPDF();

  // Source HTMLElement or a string containing HTML.
  var elementHTML = document.querySelector("#final");

  doc.html(elementHTML, {
    callback: function (doc) {
      // Save the PDF
      doc.save("sample-document.pdf");
    },
    x: 15,
    y: 15,
    width: 170, //target width in the PDF document
    windowWidth: 650, //window width in CSS pixels
  });
}
