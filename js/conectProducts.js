const exclusionModal = document.querySelector('[data-exclusion-modal]');
const exclusionButton = document.querySelector('[data-exclusion-button]');

async function productListApi(){
    const conexao = await fetch("https://my-json-server.typicode.com/SarahLuthien/valinor-geek-store-api/produtcs"); //fazer a conexao com a API
    const conexaoConvertida = await conexao.json(); //Converte em um objeto JSON

    return conexaoConvertida

}

async function criarElementoCard(name, price, imagem, id){
    const conexao = await fetch("https://my-json-server.typicode.com/SarahLuthien/valinor-geek-store-api/produtcs", {
        method: "POST", 
        headers: {
                "Content-type": "application/json"
        },
        body: JSON.stringify ({
            name: name,
            price: price,
            imagem: imagem,
            id: id,

        })
    });
    if (!conexao.ok){
        throw new Error ("Não foi possível cadastrar o produto.");
    }
    const conexaoConvertida = await conexao.json();

        return conexaoConvertida;

}


async function deleteCard(id){
    const conexao = await fetch("https://my-json-server.typicode.com/SarahLuthien/valinor-geek-store-api/produtcs/"+id,{ 
        method: "DELETE",
        headers: {
                "Content-type": "application/json"
        }
     }) 
        try {            
        if(conexao.ok){
            this.constroiCard(id);
            const conexaoConvertida = conexao.json();
            handleShowExclusionModal();
            return conexaoConvertida;
            
           
        }} catch{ 
        if(!conexao.ok){
            throw new Error("Não foi possível deletar o produto.")
        }}
    
}




export const conectProducts = { //exporta para outros modulos 
    productListApi, 
    criarElementoCard, 
    deleteCard
    
}


