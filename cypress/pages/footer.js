class footer{

    elements = {
        subscribtionEmailInput: () => cy.get('input[placeholder="Your email address"]'),
        subscribeBtn: () => cy.get('#subscribe'),
        subscribeText: () => cy.get('#success-subscribe .alert-success') 
    }

    typesubscribtionEmail(email){
        this.elements.subscribtionEmailInput().type(email);
    }

    clickSubscribeBtn(){
        this.elements.subscribeBtn().click();
    }
}

module.exports = new footer();