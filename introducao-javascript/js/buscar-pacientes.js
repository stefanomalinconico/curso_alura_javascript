var btnBuscarPacientes = document.querySelector("#buscar-pacientes");

btnBuscarPacientes.addEventListener("click", buscarPacientes);

function buscarPacientes() {
  var xhr = new XMLHttpRequest();

  //Configura a URL a ser requisitada.
  xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");

  //Cria um CallBack pra quando retornar da requisição.
  xhr.addEventListener("load", function() {
    var spanErro = document.querySelector("#erro-ajax");
    spanErro.classList.add("invisivel");
    if(xhr.status == 200) {
      //JSON = Javascript Object Notation.
      var pacientes = JSON.parse(this.responseText);
      pacientes.forEach(function(paciente) {
          adicionaPaciente(paciente);
      });
    } else {
      console.log("status: "+xhr.status);

      spanErro.classList.remove("invisivel");
    }


  });

  //Manda a requisição
  xhr.send();

}
