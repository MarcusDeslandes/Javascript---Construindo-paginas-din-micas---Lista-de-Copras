import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";
const listadeCompras = document.getElementById('lista-de-compras');
const botaoAdicionar = document.getElementById('adicionar-item');

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const itemDaLista = criarItemDaLista()
    listadeCompras.appendChild(itemDaLista);
    verificarListaVazia(listadeCompras);
})

verificarListaVazia(listadeCompras);