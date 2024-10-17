/// <reference types="cypress" />
import produtosPage from "../support/produtos.paje";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('minha-conta')
  });

  it('Fluxo desde o login e a inclusão de compras no carrinho utilizando fixture e preenchimento e validação do Checkout utilizando commands', () => {
    cy.fixture('perfil').then((dados) => {
    cy.login(dados.usuario, dados.senha)
    })
    cy.get('.page-title').should('contain', 'Minha conta')
});

it.only('Adicionado o primeiro produto buscando da massa de dados', () => {
    cy.fixture('produtos').then(dados => {
      
      produtosPage.buscarProduto(dados[1].nomeProduto)
      produtosPage.addProdutoCarrinho(
         dados[1].tamanho,
         dados[1].cor,
         dados[1].quantidade)
      cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
    })
    cy.get('.woocommerce-message > .button').click()
    cy.get('.checkout-button').click()
    
   cy.Checkout ('Victor', 'Vinicius Machado', 'Zup', 'Brasil', 'Rua Equador 10', 'Uberlandia', 'Minas Gerais', 38000000, 990000000, 'teste@test.com.br')
   cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')

   });

})
