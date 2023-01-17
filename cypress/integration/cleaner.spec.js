import navbar from "../pages/navbar";
import signupLoginPage from "../pages/signupLoginPage";

describe('Cleaner (if account remained)', () => {
    
    beforeEach(() => {
        cy.visit('/')

        cy.fixture('automationexercise_fixture').then(function (data) {
            this.data = data
        })
    })

    it('cleaning', function() {
        //clean account
        navbar.clickSignupLogin();
        signupLoginPage.typeLoginEmail(this.data.email);
        signupLoginPage.typePassword(this.data.password);
        signupLoginPage.clickLoginButton();
        navbar.clickDeleteAccount();
    });
})