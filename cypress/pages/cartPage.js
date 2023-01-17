class cartPage{

    elements = {
        productList: () => cy.get('tbody').find('tr'), 
        productName: () => cy.get('.cart_description h4'),
        productPrice: () => cy.get('.cart_total_price'),
        productQuantity: () => cy.get('.cart_quantity button'),
        proceedToCheckoutBtn: () => cy.get('#do_action .check_out'),
        deleteItemBtn: () => cy.get('.cart_delete a'),
        emptyCartMsg: () => cy.get('#empty_cart')
    }

    clickOnProceedToCheckoutBtn(){
        this.elements.proceedToCheckoutBtn().click();
    }

    clickDeleteItem(itemIndex){
        this.elements.deleteItemBtn().eq(itemIndex).click();
    }
}

module.exports = new cartPage();