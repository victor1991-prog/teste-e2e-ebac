class ProdutosPage{

    visitarUrl() {
cy.visit('produtos')
    }

    buscarProduto(nomeProduto){
cy.get('[name="s"]').eq(1).type(nomeProduto) //eq é a posição do elemento da web, exemplo: posição de um produto na página da loja ebac)
cy.get('.button-search').eq(1).click() //por ser class tem que incluir o ponto no cy.get
    }

    buscarProdutoLista(nomeProduto){
        cy.get('.product-block')
            .contains(nomeProduto)
            .click()
    }

    visitarProduto(nomeProduto){
        //cy.visit(`produtos/${nomeProduto}`)
        const urlFormatada = nomeProduto.replace(/ /g, '-') //método replace do java script para substituir os espaços em branco na Url por ífen 
        cy.visit(`produtos/${urlFormatada}`)

    }
     addProdutoCarrinho(tamanho, cor, quantidade){
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
     }

}

export default new ProdutosPage()