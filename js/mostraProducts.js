import { conectProducts } from "./conectProducts.js";

const containerProducts = document.querySelector("[data-product]");

export function constroiCard (name, price, imagem, id){
    const product = document.createElement("li");
    product.className = `lista_product`;
    product.innerHTML = `  <img class="image_products" src="${imagem}" alt="image_car">
    <h3 class="titulo_products">${name}</h3>
    <div class="container_card_value">
        <p class="price_products">R$ ${price}</p>
        <button class="delete_button" id="button_delete" ><img src="assets/icon_trash.png" alt="icon_trash"></button>
    </div>    
    `

    const btnDelete = product.querySelector("#button_delete");

    btnDelete.addEventListener("click", async() => {
    
       try{
        await conectProducts.deleteCard(id);
        product.remove();
       } catch(e) {
        alert(e);
       }
    })
    
    return product;
}

async function listaProduct(){
    try{
    const lista = await conectProducts.productListApi();
    lista.forEach(elemento => containerProducts.appendChild(constroiCard(elemento.name, elemento.price, elemento.imagem, elemento.id)))
    } catch {
        containerProducts.innerHTML = ` <h2 class="titulo_erro" > Não foi possível fazer o carregamento da lista de produtos.</h2>`
    }
}

listaProduct();