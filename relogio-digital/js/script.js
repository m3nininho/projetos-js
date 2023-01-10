function atualizarTempo() {
  const display = document.querySelector(".display");

  const agora = new Date();
  let horas = agora.getHours();
  let minutos = agora.getMinutes();
  let segundos = agora.getSeconds();

  const horario =
    corrigirHorario(horas) +
    ":" +
    corrigirHorario(minutos) +
    ":" +
    corrigirHorario(segundos);

  display.textContent = horario;
}

function corrigirHorario(numero) {
  if (numero < 10) {
    numero = "0" + numero;
  }
  return numero;
}
atualizarTempo();
setInterval(atualizarTempo, 1000);
