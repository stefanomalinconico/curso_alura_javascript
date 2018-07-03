var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){

    //Como estamos submetendo um <form> ,por padrão a página
    //é recarregada, logo devemos impedir que isto ocorra. 
    //Adicione o parâmetro event na função anônima e
    //dentro dela chame o event.preventDefault()
    event.preventDefault();

    var formulario = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(formulario);

    var retornoValidacao = validaPaciente(paciente);
    if (retornoValidacao.length > 0) {
      exibeMensagensDeErros(retornoValidacao);
      return;
    }

    adicionaPaciente(paciente);

    //limpa os campos do formulário.
    formulario.reset();


    limpaMensagensErro();
});

function adicionaPaciente(paciente){
  var pacienteTr = montaTr(paciente);

  var tabelaPacientes = document.querySelector("#tabela-pacientes");

  tabelaPacientes.appendChild(pacienteTr);
}

function exibeMensagensDeErros(retornoValidacao) {
  var mensagensErroUl = document.querySelector("#mensagens-erro");

  //LImpa as mensagens de erro que já tinha ocorrido em
  // um click prévio.
  limpaMensagensErro();

  retornoValidacao.forEach(function(erro) {
    var li = document.createElement("li");
    li.classList.add("mensagem-erro");
    li.textContent = erro;
    mensagensErroUl.appendChild(li);
  });
}

function limpaMensagensErro() {
  //LImpa as mensagens de erro que já tinha ocorrido em
  // um click prévio
  document.querySelector("#mensagens-erro").innerHTML = "";
}

function validaPaciente(paciente) {

  var erros = [];

  if (!validaAltura(paciente.altura)) {
    erros.push("A altura é inválida");
  }
  if (!validaPeso(paciente.peso)) {
    erros.push("O peso é inválido");
  }
  if (paciente.nome.length === 0) {
    erros.push("O nome não pode ser em branco");
  }
  if (paciente.gordura.length === 0) {
    erros.push("A gordura não pode ser em branco");
  }
  if (paciente.peso.length === 0) {
    erros.push("O peso não pode ser em branco");
  }
  if (paciente.altura.length === 0) {
    erros.push("A altura não pode ser em branco");
  }

  return erros;
}

function obtemPacienteDoFormulario(formulario) {

  var paciente = {
    nome: formulario.nome.value,
    peso: formulario.peso.value,
    altura: formulario.altura.value,
    gordura: formulario.gordura.value,
    imc: calculaImc(formulario.peso.value,formulario.altura.value)
  }
  console.log(paciente);

  return paciente;
}

function montaTr(paciente) {

  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.classList.add(classe);
  td.textContent = dado;

  return td;
}
