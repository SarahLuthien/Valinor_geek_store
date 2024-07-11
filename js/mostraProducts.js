import { conectProducts } from "./conectProducts.js";

const containerProducts = document.querySelector("[data-product]");

export function constroiCard (name, price, imagem, id){
    const product = document.createElement("li");
    product.className = `lista_product`;
    product.innerHTML = `  
    <div class="card-image">
        <img class="image-product" src="${imagem}" alt="imagem do produto">
    </div>
    <div class="container_card_data">
        <h3 class="titulo_products">${name}</h3>
        <p class="price_products">R$ ${price}</p>
        <div class="container_button_delete">
            <button class="delete_button" id="button_delete">  Delete  </button>
        </div>
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