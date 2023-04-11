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
      infoFinal();
      $("#final").modal("show");
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
  let panelviejo = document.getElementById("panel" + num);
  let panelnuevo = document.getElementById("panel" + (num + 1));
  panelviejo.classList.add("oculto");
  panelnuevo.classList.remove("oculto");
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
