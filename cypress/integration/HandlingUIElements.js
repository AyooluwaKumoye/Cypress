/// <reference types = "cypress" />

describe('UI Elements', () => 
{
    it('Verify check boxes', () => 
    {
      cy.visit("https://itera-qa.azurewebsites.net/home/automation")
      cy.get('#monday.form-check-input').check().should('be.checked')
      cy.get('#tuesday.form-check-input').check().should('be.checked')

      cy.get('#monday.form-check-input').uncheck().should('not.be.checked')
      cy.get('#tuesday.form-check-input').uncheck().should('not.be.checked')

      
    })
    it ('Verify Drop down', ()=>
    {
      cy.get('.custom-select').select('1').should('have.value', '1')
    })
  })