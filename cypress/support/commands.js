Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('Checkout', (nome, sobrenome, empresa, país, endereço, cidade, estado, CEP, telefone, email)  => {

    cy.get('#billing_first_name_field > label').type(nome)
    cy.get('#billing_last_name_field > label').type(sobrenome)
    cy.get('#billing_company_field > label').type(empresa)
    cy.get('#select2-billing_country-container').click()
    cy.get('#select2-billing_country-container').type(país)
    cy.get('#select2-billing_country-container').click()
    cy.get('#billing_address_1_field > label').type(endereço)
    cy.get('#billing_city_field > label').type(cidade)
    cy.get('#billing_state_field > label').click()
    cy.get('#select2-billing_country-container').type(estado)
    cy.get('#billing_state_field > label').click()
    cy.get('#billing_postcode_field > label').type(CEP)
    cy.get('#billing_phone_field > label').type(telefone)
    cy.get('#billing_email_field > label').type(email)
    cy.get('#terms').click()
    cy.get('#place_order').click()

});