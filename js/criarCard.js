import { conectProducts } from "./conectProducts.js";

const formulario = document.querySelector("[data-form]");


async function criarCard(evento) {
    evento.preventDefault();

    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    await conectProducts.criarElementoCard(name, price, imagem);

    window.location.href = "./envio.concluido.html"

}

formulario.addEventListener("submit", evento => criarCard(evento))