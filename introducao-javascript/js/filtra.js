var campoFiltro = document.querySelector("#filtrar-tabela");
campoFiltro.addEventListener("input", filtrarTabela);

function filtrarTabela(evento) {
  // várias formas de referencias o campoFiltro
  //console.log(evento.target.value);
  //console.log(campoFiltro.value);
  //console.log(this.value);

  var pacientes = document.querySelectorAll(".paciente");
  pacientes.forEach(function(paciente) {

    if (campoFiltro.value.length == 0) {
      // Se tá vazio, mostra todo mundo.
      paciente.classList.remove("invisivel");
    } else {
      // Cria uma expressão regular com o conteúdo presente
      // no campo filtro. o "i" é de case insensitive.
      var expressao = RegExp(campoFiltro.value, "i");
      var nomePaciente = paciente.querySelector(".info-nome");
      if (!expressao.test(nomePaciente.textContent)) {
        paciente.classList.add("invisivel");
      } else {
        paciente.classList.remove("invisivel");
      }
    }

  });
}
