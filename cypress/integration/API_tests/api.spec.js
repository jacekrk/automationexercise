import navbar from "../../pages/navbar";

describe('API tests', () => {
    
    it('Should Get All Products List', () => {
        cy.request('https://automationexercise.com/api/productsList').as('allProducts')
        .its('status')
        .should('equal', 200)

        cy.get('@allProducts')
        .its('headers')
        .its('content-type')
        .should('include', 'text/html')
        .and('include', 'charset=utf-8')

    })
})