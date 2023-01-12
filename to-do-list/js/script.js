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
  mural.style.overflowY = "scroll";
  const lista = document.querySelector(".lista");
  const atividadeAdicionada = document.createElement("li");
  atividadeAdicionada.textContent = atividade;
  lista.appendChild(atividadeAdicionada);
}
const btn = document.querySelector(".btn");
btn.addEventListener("click", recolherAtividades);
