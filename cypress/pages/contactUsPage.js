class contactUsPage{

    elements = {
        mainText: () => cy.get('.contact-form h2'),
        nameInput: () => cy.get('input[data-qa="name"]'),
        emailInput: () => cy.get('input[data-qa="email"]'),
        subjectInput: () => cy.get('input[data-qa="subject"]'),
        messageTextarea: () => cy.get('textarea[data-qa="message"]'),
        fileInput: () => cy.get('input[type="file"]'),
        submitBtn: () => cy.get('input[data-qa="submit-button"]'), 
        resultText: () => cy.get('.contact-form .status'),
        homeBtn: () => cy.get('.btn-success')
    }

    typeName(name){
        this.elements.nameInput().type(name);
    }

    typeEmail(email){
        this.elements.emailInput().type(email);
    }

    typeSubject(subject){
        this.elements.subjectInput().type(subject);
    }

    typeMessageInTextarea(message){
        this.elements.messageTextarea().type(message);
    }

    selectFileToUpload(file){
        this.elements.fileInput().selectFile(file);
    }
   
    clickSubmit(){
        this.elements.submitBtn().click();
    }

    clickHomeBtn(){
        this.elements.homeBtn().click();
    }
}

module.exports = new contactUsPage();