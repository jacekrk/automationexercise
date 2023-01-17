import navbar from "../../pages/navbar";
import allProductsPage from "../../pages/allProductsPage";
import cartPage from "../../pages/cartPage";
import modalsPage from "../../pages/modalsPage";
import homePage from "../../pages/homePage";
import productPage from "../../pages/productPage";
import signupLoginPage from "../../pages/signupLoginPage";
import registerPage from "../../pages/registerPage";
import accountCreatedPage from "../../pages/accountCreatedPage";
import accountDeletedPage from "../../pages/accountDeletedPage";


describe('E2E Cart tests', () => {
    
    beforeEach(() => {
        cy.visit('/')

        cy.fixture('automationexercise_fixture').then(function (data) {
            this.data = data
        })
    })

    it('Test Case 12. Should Add Products in Cart', () => {
        navbar.clickProducts();

        allProductsPage.elements.productCardName().eq(0).then($firstProductName => {
            const firstProductName = $firstProductName.text();
            allProductsPage.elements.productCardPrice().eq(0).then($firstProductPrice => {
                const firstProductPrice = $firstProductPrice.text();
                allProductsPage.elements.productCardName().eq(1).then($secondProductName => {
                    const secondProductName = $secondProductName.text();
                    allProductsPage.elements.productCardPrice().eq(1).then($secondProductPrice => {
                        const secondProductPrice = $secondProductPrice.text();

                        allProductsPage.clickAddProductFromOverlay(0);
                        modalsPage.clickCloseModal();
                        allProductsPage.clickAddProductFromOverlay(1);
                        modalsPage.clickViewCartAfterAddToCart();
                        cartPage.elements.productList().should('have.length', 2),
                        cartPage.elements.productName().eq(0).should('contain', firstProductName);
                        cartPage.elements.productPrice().eq(0).should('contain', firstProductPrice);
                        cartPage.elements.productQuantity().eq(0).should('have.text', '1');
                        cartPage.elements.productName().eq(1).should('contain', secondProductName);
                        cartPage.elements.productPrice().eq(1).should('contain', secondProductPrice);
                        cartPage.elements.productQuantity().eq(1).should('have.text', '1');
                    })
                })
            })
        })
    });

    it('Test Case 13. Should Verify Product quantity in Cart', () => {
        const productquantity = "4"
        
        homePage.clickOnViewProduct(0);
        
        cy.url().should('include', '/product_details/');
        productPage.productQuantityClear();
        productPage.changeProductQuantity(productquantity);
        productPage.clickAddToCartBtn();
        modalsPage.clickViewCartAfterAddToCart();
        cartPage.elements.productQuantity().eq(0).should('have.text', productquantity);
    });

    it('Test Case 17. Should Remove Products From Cart', () => {
        homePage.clickOnAddToCartBtn(0);
        modalsPage.clickViewCartAfterAddToCart();
        cy.url().should('include', 'view_cart');
        cartPage.clickDeleteItem(0);
        cartPage.elements.emptyCartMsg().should('contain', 'Cart is empty!');
    });

    it('Test Case 20. Should Search Products and Verify Cart After Login', function() {
        navbar.clickProducts();
        cy.url().should('include', '/products');
        allProductsPage.typeSearch('Blue Top');
        allProductsPage.clickSearchBtn();
        allProductsPage.elements.searchText().should('contain', 'Searched Products');
        allProductsPage.elements.productCardName().should('contain', 'Blue Top');
        productPage.clickAddToCartBtn();
        modalsPage.clickViewCartAfterAddToCart();
        cartPage.elements.productList().should('be.visible');

        navbar.clickSignupLogin();
        signupLoginPage.elements.signupText().should('be.visible');
        signupLoginPage.typeSignupName(this.data.name);
        signupLoginPage.typeSignupEmail(this.data.email);
        signupLoginPage.clickSignupButton();
        registerPage.elements.enterAccountInfoText().should('be.visible');
        registerPage.fillRegisterPage(this.data.password, this.data.day, this.data.month, this.data.year, this.data.name, this.data.lastname, this.data.company, this.data.address1, this.data.address2, this.data.country, this.data.state, this.data.city, this.data.zipcode, this.data.mobilenumber);
        registerPage.clickCreateAccountBtn();
        accountCreatedPage.elements.mainMessage().should('contain', 'Account Created!');
        accountCreatedPage.clickContinueButton();
        navbar.elements.loggedInAs().should('contain', this.data.name);

        navbar.clickCart();
        cartPage.elements.productList().should('be.visible');

        navbar.clickDeleteAccount();
        accountDeletedPage.elements.mainMessage().should('contain', 'Account Deleted!');
        accountDeletedPage.clickContinueButton();

    });

    it('Test Case 22. Should Add to cart from Recommended items', () => {
        cy.scrollTo('bottom', {ensureScrollable: false});
        homePage.elements.recommendedList().should('be.visible');
        homePage.clickAddToCartFromRecommended(0);
        modalsPage.clickViewCartAfterAddToCart();
        cartPage.elements.productList().should('be.visible');
    });
    
})