let pontos = 0;

function atualizarPontos() {
    const pontosClick = document.getElementById("score");
    pontosClick.innerText = pontos;
}

function contarPontos() {
    pontos++;
    atualizarPontos();
}

document.addEventListener("DOMContentLoaded", atualizarPontos);
