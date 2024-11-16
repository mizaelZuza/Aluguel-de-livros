let total = 0;
function alterarStatus(id) {
    const gameClicado = document.getElementById(`game-${id}`);
    const cardImagem = gameClicado.getElementsByTagName("div")[0];
    const botao = gameClicado.getElementsByTagName("a")[0];

    if (botao.classList.contains("dashboard__item__button--return")) {


        let confirmacao = window.confirm("Tem certeza que deseja devolver?");
        if (confirmacao) {
            total--;
            cardImagem.classList.remove("dashboard__item__img--rented");
            botao.classList.remove("dashboard__item__button--return");
            botao.innerHTML = "Alugar";

        }

    } else {
        total++;
        botao.classList.add("dashboard__item__button--return");
        cardImagem.classList.add("dashboard__item__img--rented");
        botao.innerHTML = "Devolver";

    }

    console.log("Total de livros alugados:  " + total);

}

