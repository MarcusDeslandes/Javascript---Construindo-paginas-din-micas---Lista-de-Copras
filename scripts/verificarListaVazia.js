const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia (listadeCompras) {
    const itensDaLista = listadeCompras.querySelectorAll("li");
    if (itensDaLista.length === 0) {
        mensagemListaVazia.style.display = "block"
    } else {
        mensagemListaVazia.style.display = "none"
    }
}

export default verificarListaVazia;