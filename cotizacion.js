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
        console.log(errors[i]);
      }
      displayErrors.innerHTML = errorString;
    } else {
      //TODO - Crear función que muestre los datos ingresados en el modal y botón de confirmación
      //TODO - Crear función que arme PDF ????
      errorString = "No hay errores";
      displayErrors.innerHTML = errorString;
    }
    $("#modalErrores").modal("show");
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
    if (errors.length > 0) {
      for (var i = 0; i < errors.length; i++) {
        errorString += errors[i].message + "<br />";
        console.log(errors[i]);
      }
      displayErrors.innerHTML = errorString;
    } else {
      //TODO - Crear función que muestre los datos ingresados en el modal y botón de confirmación
      //TODO - Crear función que arme PDF ????
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
        console.log(errors[i]);
      }
      displayErrors.innerHTML = errorString;
    } else {
      //TODO - Crear función que muestre los datos ingresados en el modal y botón de confirmación
      //TODO - Crear función que arme PDF ????
      errorString = "No hay errores";
      displayErrors.innerHTML = errorString;
    }
    $("#modalErrores").modal("show");
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
function siguiente (num) {
  numero = num;
  setTimeout(cambiar, 1000);
}

function cambiar () {
  if (document.getElementById("modalErrores").innerHTML != errorString) {
    return;
  }else{
  let panelviejo = document.getElementById("panel" + numero);
  let panelnuevo = document.getElementById("panel" + (numero + 1));
  panelviejo.classList.add("oculto");
  panelnuevo.classList.remove("oculto");}
}