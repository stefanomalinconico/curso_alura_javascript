var tabelaPacientes = document.querySelector("#tabela-pacientes");
console.log(tabelaPacientes);

tabelaPacientes.addEventListener("dblclick", removerPaciente);


function removerPaciente(evento) {
  evento.target.parentNode.classList.add("fadeOut");

  //É como se fosse um Thread.sleep(500);
  setTimeout(function(){
      evento.target.parentNode.remove();
  }, 500);


  // Da forma abaixo remove apenas o Td, e não o Tr completo.
  //evento.target.remove();

  // Faz o mesmo que o this.remove();
  //evento.currentTarget.remove();
}
