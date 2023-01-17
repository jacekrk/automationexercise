import navbar from "../../pages/navbar";
import signupLoginPage from "../../pages/signupLoginPage";
import registerPage from "../../pages/registerPage";
import accountCreatedPage from "../../pages/accountCreatedPage";
import accountDeletedPage from "../../pages/accountDeletedPage";
import cartPage from "../../pages/cartPage";
import homePage from "../../pages/homePage";
import checkoutPage from "../../pages/checkoutPage";
import paymentPage from "../../pages/paymentPage";
import modalsPage from "../../pages/modalsPage";

describe('E2E Place Order tests', () => {
    
    beforeEach(() => {
        cy.visit('/')

        cy.fixture('automationexercise_fixture').then(function (data) {
            this.data = data
        })
    })

    it('Test Case 14. Should Place Order: Register while Checkout', function() {
        homePage.clickOnAddToCartBtn(0);
        modalsPage.clickViewCartAfterAddToCart();
        cy.url().should('include', 'view_cart');
        cartPage.clickOnProceedToCheckoutBtn();
        modalsPage.clickregisterLoginBtn();

        signupLoginPage.typeSignupName(this.data.name);
        signupLoginPage.typeSignupEmail(this.data.email);
        signupLoginPage.clickSignupButton();
        registerPage.fillRegisterPage(this.data.password, this.data.day, this.data.month, this.data.year, this.data.name, this.data.lastname, this.data.company, this.data.address1, this.data.address2, this.data.country, this.data.state, this.data.city, this.data.zipcode, this.data.mobilenumber);

        registerPage.clickCreateAccountBtn();
        accountCreatedPage.elements.mainMessage().should('contain', 'Account Created!');
        accountCreatedPage.clickContinueButton();
        navbar.elements.loggedInAs().should('contain', this.data.name);

        navbar.clickCart();
        cartPage.clickOnProceedToCheckoutBtn();

        checkoutPage.elements.deliveryName().should('contain', this.data.name);
        checkoutPage.elements.deliveryAddress1().should('contain', this.data.company);
        checkoutPage.elements.deliveryAddress2().should('contain', this.data.address1);
        checkoutPage.elements.deliveryAddress3().should('contain', this.data.address2);
        checkoutPage.elements.deliveryCity().should('contain', this.data.city);
        checkoutPage.elements.deliveryStateName().should('contain', this.data.state);
        checkoutPage.elements.deliveryPostcode().should('contain', this.data.zipcode);
        checkoutPage.elements.deliveryCountryname().should('contain', this.data.country);
        checkoutPage.elements.deliveryPhone().should('contain', this.data.mobilenumber);
        checkoutPage.elements.productName().should('contain', 'Blue Top');

        checkoutPage.typeDescriptionTextarea('descr description lorem');
        checkoutPage.clickPlaceOrderBtn();

        const paymentName = this.data.name + " " + this.data.lastname;
        paymentPage.fillPaymentPage(paymentName, this.data.card_number, this.data.cvc, this.data.expiryMM, this.data.expiryYYYY);
        paymentPage.clickPayAndConfirmOrderBtn();
        paymentPage.elements.message().should('contain', 'Congratulations! Your order has been confirmed!');


        navbar.clickDeleteAccount();
        accountDeletedPage.elements.mainMessage().should('contain', 'Account Deleted!');
        accountDeletedPage.clickContinueButton(); 
    });

    it('Test Case 15. Should Place Order: Register before Checkout', function() {
        navbar.clickSignupLogin();
        signupLoginPage.elements.signupText().should('be.visible');
        signupLoginPage.typeSignupName(this.data.name);
        signupLoginPage.typeSignupEmail(this.data.email);
        signupLoginPage.clickSignupButton();
        registerPage.fillRegisterPage(this.data.password, this.data.day, this.data.month, this.data.year, this.data.name, this.data.lastname, this.data.company, this.data.address1, this.data.address2, this.data.country, this.data.state, this.data.city, this.data.zipcode, this.data.mobilenumber);
        registerPage.clickCreateAccountBtn();
        accountCreatedPage.clickContinueButton();
        navbar.elements.loggedInAs().should('contain', this.data.name);

        homePage.clickOnAddToCartBtn(0);
        modalsPage.clickViewCartAfterAddToCart();
        cy.url().should('include', 'view_cart');
        cartPage.clickOnProceedToCheckoutBtn();

        checkoutPage.elements.deliveryName().should('contain', this.data.name);
        checkoutPage.elements.deliveryAddress1().should('contain', this.data.company);
        checkoutPage.elements.deliveryAddress2().should('contain', this.data.address1);
        checkoutPage.elements.deliveryAddress3().should('contain', this.data.address2);
        checkoutPage.elements.deliveryCity().should('contain', this.data.city);
        checkoutPage.elements.deliveryStateName().should('contain', this.data.state);
        checkoutPage.elements.deliveryPostcode().should('contain', this.data.zipcode);
        checkoutPage.elements.deliveryCountryname().should('contain', this.data.country);
        checkoutPage.elements.deliveryPhone().should('contain', this.data.mobilenumber);
        checkoutPage.elements.productName().should('contain', 'Blue Top');

        checkoutPage.typeDescriptionTextarea('descr description lorem');
        checkoutPage.clickPlaceOrderBtn();

        const paymentName = this.data.name + " " + this.data.lastname;
        paymentPage.fillPaymentPage(paymentName, this.data.card_number, this.data.cvc, this.data.expiryMM, this.data.expiryYYYY);
        paymentPage.clickPayAndConfirmOrderBtn();

        paymentPage.elements.message().should('contain', 'Congratulations! Your order has been confirmed!');


        navbar.clickLogout();
        cy.url().should('include', '/login')
    });

    it('Test Case 16. Should Place Order: Login before Checkout', function() {
        navbar.clickSignupLogin();
        signupLoginPage.typeLoginEmail(this.data.email);
        signupLoginPage.typePassword(this.data.password);
        signupLoginPage.clickLoginButton();
        navbar.elements.loggedInAs().should('contain', this.data.name);

        homePage.clickOnAddToCartBtn(0);
        modalsPage.clickViewCartAfterAddToCart();
        cy.url().should('include', 'view_cart');
        cartPage.clickOnProceedToCheckoutBtn();

        checkoutPage.elements.deliveryName().should('contain', this.data.name);
        checkoutPage.elements.deliveryAddress1().should('contain', this.data.company);
        checkoutPage.elements.deliveryAddress2().should('contain', this.data.address1);
        checkoutPage.elements.deliveryAddress3().should('contain', this.data.address2);
        checkoutPage.elements.deliveryCity().should('contain', this.data.city);
        checkoutPage.elements.deliveryStateName().should('contain', this.data.state);
        checkoutPage.elements.deliveryPostcode().should('contain', this.data.zipcode);
        checkoutPage.elements.deliveryCountryname().should('contain', this.data.country);
        checkoutPage.elements.deliveryPhone().should('contain', this.data.mobilenumber);
        checkoutPage.elements.productName().should('contain', 'Blue Top');

        checkoutPage.typeDescriptionTextarea('descr description lorem');
        checkoutPage.clickPlaceOrderBtn();

        const paymentName = this.data.name + " " + this.data.lastname;
        paymentPage.fillPaymentPage(paymentName, this.data.card_number, this.data.cvc, this.data.expiryMM, this.data.expiryYYYY);
        paymentPage.clickPayAndConfirmOrderBtn();

        paymentPage.elements.message().should('contain', 'Congratulations! Your order has been confirmed!');


        navbar.clickDeleteAccount();
        accountDeletedPage.elements.mainMessage().should('contain', 'Account Deleted!');
        accountDeletedPage.clickContinueButton();
    });

})