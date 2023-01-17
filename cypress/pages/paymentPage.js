class paymentPage{

    elements = {
        nameOnCard: () => cy.get('input[data-qa="name-on-card"]'),
        cardNumber: () => cy.get('input[data-qa="card-number"]'),
        cvc: () => cy.get('input[data-qa="cvc"]'),
        expiryMonth: () => cy.get('input[data-qa="expiry-month"]'),
        expiryYear: () => cy.get('input[data-qa="expiry-year"]'),
        payAndConfirmOrderBtn: () => cy.get('button[data-qa="pay-button"]'),
        message: () => cy.get('p'),
        downloadInvoiceBtn: () => cy.contains('Download Invoice')
    }

    fillPaymentPage(nameOnCard, cardNumber, cvc, expiryMonth, expiryYear){
        this.elements.nameOnCard().type(nameOnCard);
        this.elements.cardNumber().type(cardNumber);
        this.elements.cvc().type(cvc);
        this.elements.expiryMonth().type(expiryMonth);
        this.elements.expiryYear().type(expiryYear);
    }

    clickPayAndConfirmOrderBtn(){
        this.elements.payAndConfirmOrderBtn().click();
    }

    clickDownloadInvoiceBtn(){
        this.elements.downloadInvoiceBtn().click();
    }
}

module.exports = new paymentPage();