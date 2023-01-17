import navbar from "../../pages/navbar";
import signupLoginPage from "../../pages/signupLoginPage";
import registerPage from "../../pages/registerPage";
import accountCreatedPage from "../../pages/accountCreatedPage";
import accountDeletedPage from "../../pages/accountDeletedPage";

describe('E2E Register tests', () => {
    
    beforeEach(() => {
        cy.visit('/')

        cy.fixture('automationexercise_fixture').then(function (data) {
            this.data = data
        })
    })

    it('Test Case 1. Should Register User', function() {
        //test
        navbar.clickSignupLogin();
        signupLoginPage.elements.signupText().should('be.visible');
        signupLoginPage.typeSignupName(this.data.name);
        signupLoginPage.typeSignupEmail(this.data.email);
        signupLoginPage.clickSignupButton();

        registerPage.elements.enterAccountInfoText().should('be.visible');
        registerPage.elements.nameInput().should('have.value', this.data.name);
        registerPage.elements.emailInput().should('have.value', this.data.email);
        
        registerPage.fillRegisterPage(this.data.password, this.data.day, this.data.month, this.data.year, this.data.name, this.data.lastname, this.data.company, this.data.address1, this.data.address2, this.data.country, this.data.state, this.data.city, this.data.zipcode, this.data.mobilenumber);

        registerPage.clickCreateAccountBtn();

        accountCreatedPage.elements.mainMessage().should('contain', 'Account Created!');
        accountCreatedPage.clickContinueButton();
        navbar.elements.loggedInAs().should('contain', this.data.name);
        navbar.clickLogout();
        cy.url().should('include', '/login');

        //clean account
        navbar.clickSignupLogin();
        signupLoginPage.typeLoginEmail(this.data.email);
        signupLoginPage.typePassword(this.data.password);
        signupLoginPage.clickLoginButton();
        navbar.clickDeleteAccount();
        accountDeletedPage.clickContinueButton();
    })

    it('Test Case 2. Should Login User with correct email and password', function() {
        //create account
        navbar.clickSignupLogin();
        signupLoginPage.typeSignupName(this.data.name);
        signupLoginPage.typeSignupEmail(this.data.email);
        signupLoginPage.clickSignupButton();
        registerPage.fillRegisterPage(this.data.password, this.data.day, this.data.month, this.data.year, this.data.name, this.data.lastname, this.data.company, this.data.address1, this.data.address2, this.data.country, this.data.state, this.data.city, this.data.zipcode, this.data.mobilenumber);
        registerPage.clickCreateAccountBtn();
        accountCreatedPage.clickContinueButton();
        navbar.clickLogout();

        //test
        navbar.clickSignupLogin();
        signupLoginPage.typeLoginEmail(this.data.email);
        signupLoginPage.typePassword(this.data.password);
        signupLoginPage.clickLoginButton();
        navbar.elements.loggedInAs().should('contain', this.data.name);

        //clean account
        navbar.clickDeleteAccount();
        accountDeletedPage.clickContinueButton();
    })

    it('Test Case 3. Should Login User with incorrect email and password', () => {
        //test
        navbar.clickSignupLogin();
        signupLoginPage.typeLoginEmail('dummy@incorrect.com');
        signupLoginPage.typePassword('dummy-incorrect-password');
        signupLoginPage.clickLoginButton();
        signupLoginPage.elements.loginMessage().should('contain', 'Your email or password is incorrect!');
    });

    it('Test Case 4. Should Logout User', function() {
        //create account
        navbar.clickSignupLogin();
        signupLoginPage.typeSignupName(this.data.name);
        signupLoginPage.typeSignupEmail(this.data.email);
        signupLoginPage.clickSignupButton();
        registerPage.fillRegisterPage(this.data.password, this.data.day, this.data.month, this.data.year, this.data.name, this.data.lastname, this.data.company, this.data.address1, this.data.address2, this.data.country, this.data.state, this.data.city, this.data.zipcode, this.data.mobilenumber);
        registerPage.clickCreateAccountBtn();
        accountCreatedPage.clickContinueButton();
        navbar.clickLogout();

        //test
        navbar.clickSignupLogin();
        signupLoginPage.typeLoginEmail(this.data.email);
        signupLoginPage.typePassword(this.data.password);
        signupLoginPage.clickLoginButton();
        navbar.elements.loggedInAs().should('contain', this.data.name);
        navbar.clickLogout();
        cy.url().should('include', '/login');

        //clean account
        navbar.clickSignupLogin();
        signupLoginPage.typeLoginEmail(this.data.email);
        signupLoginPage.typePassword(this.data.password);
        signupLoginPage.clickLoginButton();
        navbar.clickDeleteAccount();
        accountDeletedPage.clickContinueButton();
    });

    it('Test Case 5. Should Register User with existing email', function() {
        //create account
        navbar.clickSignupLogin();
        signupLoginPage.typeSignupName(this.data.name);
        signupLoginPage.typeSignupEmail(this.data.email);
        signupLoginPage.clickSignupButton();
        registerPage.fillRegisterPage(this.data.password, this.data.day, this.data.month, this.data.year, this.data.name, this.data.lastname, this.data.company, this.data.address1, this.data.address2, this.data.country, this.data.state, this.data.city, this.data.zipcode, this.data.mobilenumber);
        registerPage.clickCreateAccountBtn();
        accountCreatedPage.clickContinueButton();
        navbar.clickLogout();

        //test
        navbar.clickSignupLogin();
        signupLoginPage.typeSignupName(this.data.name);
        signupLoginPage.typeSignupEmail(this.data.email);
        signupLoginPage.clickSignupButton();
        signupLoginPage.elements.signupMessage().should('contain', 'Email Address already exist!');

        //clean account
        navbar.clickSignupLogin();
        signupLoginPage.typeLoginEmail(this.data.email);
        signupLoginPage.typePassword(this.data.password);
        signupLoginPage.clickLoginButton();
        navbar.clickDeleteAccount();
        accountDeletedPage.clickContinueButton();
    });

    
})