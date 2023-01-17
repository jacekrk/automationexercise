class navbar{

    elements = {
        fullNavbar: () => cy.get('.navbar-nav'),
        logo: () => cy.get('.logo'),
        home: () => cy.get('.navbar-nav li').contains('Customer'),
        products: () => cy.get('.navbar-nav li').contains('Products'),
        cart: () => cy.get('.navbar-nav li').contains('Cart'),
        signupLogin: () => cy.get('.navbar-nav li').contains('Signup / Login'),
        logout: () => cy.get('.navbar-nav li').contains('Logout'),
        deleteAccount: () => cy.get('.navbar-nav li').contains('Delete Account'),
        testCases: () => cy.get('.navbar-nav li').contains('Test Cases'),
        APItesting: () => cy.get('.navbar-nav li').contains('API Testing'),
        videoTutorials: () => cy.get('.navbar-nav li').contains('Video Tutorials'),
        contactUs: () => cy.get('.navbar-nav li').contains('Contact us'),
        loggedInAs: () => cy.get('.navbar-nav li').contains('Logged in as')
    }

    clickLogo(){
        this.elements.logo().click();
    }

    clickHome(){
        this.elements.home().click();
    }

    clickProducts(){
        this.elements.products().click();
    }

    clickCart(){
        this.elements.cart().click();
    }

    clickSignupLogin(){
        this.elements.signupLogin().click();
    }

    clickLogout(){
        this.elements.logout().click();
    }

    clickDeleteAccount(){
        this.elements.deleteAccount().click();
    }

    clickTestCases(){
        this.elements.testCases().click();
    }

    clickAPItesting(){
        this.elements.APItesting().click();
    }

    clickVideoTutorials(){
        this.elements.videoTutorials().click();
    }

    clickContactUs(){
        this.elements.contactUs().click();
    }
}

module.exports = new navbar();