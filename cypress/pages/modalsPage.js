class modalsPage{

    elements = {
        viewCartAfterAddToCart: () => cy.contains('View Cart'),
        registerLoginBtn: () => cy.get('.modal-content p a'),
        closeModal: () => cy.get('.close-modal')
    }

    clickViewCartAfterAddToCart(){
        this.elements.viewCartAfterAddToCart().click();
    }

    clickregisterLoginBtn(){
        this.elements.registerLoginBtn().click();
    }

    clickCloseModal(){
        this.elements.closeModal().click();
    }
}

module.exports = new modalsPage();