/// <reference types = "cypress" />

describe('Our first suite', () => {

    it('first test', () => {
        //visit the website we provided
        cy.visit('/')

        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        //then cypress will search all the elements we have provided

        //by TAG name
        cy.get('input')

        //by ID
        cy.get('#inputEmail1')

        //by Class name
        cy.get('.input-full-width')

        //by attribute name
        cy.get('[placeholder]')

        //by attribute name and value
        cy.get('[placeholder="Email"]')

        //by class value
        //need to provide the entire string where class name, you can use just one
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        //by TAG name and Atrribute with Value
        cy.get('input[placeholder="Email"]')

        //find by two different attributes
        //can add as many attributes you want
        cy.get('[placeholder="Email"][fullwidth]')

        //find element by tag name, Attribute with vlalue, ID, and class name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')
        
        //the most recommended way by cypress
        cy.get('[data-cy="imputEmail1"]')
    })
})