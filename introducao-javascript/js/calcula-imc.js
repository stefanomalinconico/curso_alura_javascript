//console.log("carregado de arquivo externo");

var titulo = document.querySelector(".titulo");
//console.log(titulo);
//console.log(titulo.textContent);

var trsPacientes = document.querySelectorAll(".paciente");
for (var i=0; i<trsPacientes.length; i++) {

  var isPesoValido = true;
  var isAlturaValida = true;

  var peso = trsPacientes[i].querySelector(".info-peso").textContent;
  if (!validaPeso(peso)) {
    console.log("peso inválido");
    isPesoValido = false;
    trsPacientes[i].querySelector(".info-imc").textContent = "peso inválido";
    trsPacientes[i].classList.add("paciente-invalido");
  }
  var altura = trsPacientes[i].querySelector(".info-altura").textContent;
  if (!validaAltura(altura)) {
    console.log("altura inválida");
    isAlturaValida = false;
    trsPacientes[i].querySelector(".info-imc").textContent = "altura inválida";
    trsPacientes[i].classList.add("paciente-invalido");
  }

  if (isPesoValido && isAlturaValida) {
      var imc = calculaImc(peso,altura);
      trsPacientes[i].querySelector(".info-imc").textContent = imc;

  }

}

function validaAltura(altura) {
  if (altura > 0 && altura <= 3.0) {
    return true;
  } else {
    return false;
  }
}

function validaPeso(peso) {
  if(peso > 0 && peso <= 1000) {
    return true;
  } else {
    return false;
  }
}

function calculaImc(peso, altura) {
  return (peso/(altura*altura)).toFixed(2);
}
