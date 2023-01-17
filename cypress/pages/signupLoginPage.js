class signupLoginPage{

    elements = {
        loginText: () => cy.get('.login-form h2'),
        loginEmailInput: () => cy.get('input[data-qa="login-email"]'),
        loginPasswordlInput: () => cy.get('input[data-qa="login-password"]'),
        loginBtn: () => cy.get('button[data-qa="login-button"]'),
        loginMessage: () => cy.get('.login-form p'),
        signupText: () => cy.get('.signup-form h2'),
        signupNamelInput: () => cy.get('input[data-qa="signup-name"]'),
        signupEmaillInput: () => cy.get('input[data-qa="signup-email"]'),
        signupBtn: () => cy.get('button[data-qa="signup-button"]'),
        signupMessage: () => cy.get('.signup-form p')
    }

    typeLoginEmail(loginEmail){
        this.elements.loginEmailInput().type(loginEmail);
    }

    typePassword(password){
        this.elements.loginPasswordlInput().type(password);
    }

    clickLoginButton(){
        this.elements.loginBtn().click();
    }

    typeSignupName(name){
        this.elements.signupNamelInput().type(name);
    }

    typeSignupEmail(signupEmail){
        this.elements.signupEmaillInput().type(signupEmail)
    }

    clickSignupButton(){
        this.elements.signupBtn().click();
    }
}

module.exports = new signupLoginPage();