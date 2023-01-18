function recolherAtividades() {
  const inAtividade = document.querySelector(".atividade");
  const mural = document.querySelector(".resultado");
  let atividade = inAtividade.value;

  if (atividade == "") {
    alert("Favor informar uma atividade que deseja adicionar");
    inAtividade.focus();
    return;
  }
  mural.style.display = "flex";
  mural.style.flexDirection = "column";
  mural.style.overflowY = "scroll";
  mural.style.justifyContent = "space-between";
  mural.style.alignItems = "center";

  const tarefaAdicionada = document.createElement("p");
  tarefaAdicionada.style.flex;
  tarefaAdicionada.textContent = atividade;
  tarefaAdicionada.classList.add("tarefaAdicionada");

  const botaoDeConcluir = document.createElement("button");
  const botaoDeRemover = document.createElement("button");

  botaoDeConcluir.textContent = "Concluir";
  botaoDeConcluir.classList.add("concluir");
  tarefaAdicionada.appendChild(botaoDeConcluir);
  botaoDeRemover.textContent = "Remover";
  botaoDeRemover.classList.add("remover");
  tarefaAdicionada.appendChild(botaoDeRemover);

  botaoDeConcluir.addEventListener("click", concluirTarefa);
  botaoDeRemover.addEventListener("click", removerTarefa);

  mural.appendChild(tarefaAdicionada);
}
const btn = document.querySelector(".btn");
btn.addEventListener("click", recolherAtividades);

function concluirTarefa(btn) {
  btn.target.parentNode.classList.toggle("concluido");
  return;
}
function removerTarefa(btn) {
  btn.target.parentNode.parentNode.removeChild(btn.target.parentNode);
  alert("Sua atividade foi excluída com sucesso");
  return;
}
