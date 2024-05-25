import { conectProducts } from "./conectProducts.js";

const containerProducts = document.querySelector("[data-product]");

function constroiCard (name, price, imagem){
    const product = document.createElement("li");
    product.className = "lista_product";
    product.innerHTML = `  <img class="image_products" src="${imagem}" alt="image_car">
    <h3 class="titulo_products">${name}</h3>
    <div class="container_card_value">
        <p class="price_products">${price}</p>
        <button class="delete_button" ><img src="assets/icon_trash.png" alt="icon_trash"></button>
    </div>    
    `
    
    return product;
}

async function listaProduct(){
    const lista = await conectProducts.productListApi();
    lista.forEach(elemento => containerProducts.appendChild(constroiCard(elemento.name, elemento.price, elemento.imagem)))

}

listaProduct();