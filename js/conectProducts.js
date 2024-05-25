async function productListApi(){
    const conexao = await fetch("http://localhost:3000/produtcs"); //fazer a conexao com a API
    const conexaoConvertida = await conexao.json(); //Converte em um objeto JSON

    return conexaoConvertida

}

async function criarElementoCard(name, price, imagem){
    const conexao = await fetch("http://localhost:3000/produtcs", {
        method: "POST", 
        headers: {
                "Content-type": "application/json"
        },
        body: JSON.stringify ({
            name: name,
            price: price,
            imagem: imagem

        })
    });
    const conexaoConvertida = await conexao.json();

        return conexaoConvertida

}

export const conectProducts = { //exporta para outros modulos 
    productListApi, 
    criarElementoCard, 
    
}


