class accountDeletedPage{

    elements = {
        continueBtn: () => cy.get('a[data-qa="continue-button"]'), 
        mainMessage: () => cy.get('h2[data-qa="account-deleted"]')
    }

    clickContinueButton(){
        this.elements.continueBtn().click();
    }
}

module.exports = new accountDeletedPage();