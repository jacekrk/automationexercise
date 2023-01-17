import navbar from "../../pages/navbar";
import allProductsPage from "../../pages/allProductsPage";
import productPage from "../../pages/productPage";

describe('E2E Products tests', () => {
    
    beforeEach(() => {
        cy.visit('/')

        cy.fixture('automationexercise_fixture').then(function (data) {
            this.data = data
        })
    })

    it('Test Case 8. Should Verify All Products and product detail page', () => {
        navbar.clickProducts();
        cy.url().should('include', '/products');
        allProductsPage.elements.listOfItems().should('be.visible');

        allProductsPage.clickOnViewProduct(0);
        cy.url().should('include', '/product_details/');

        productPage.elements.productName().should('be.visible');
        productPage.elements.productCategory().should('be.visible');
        productPage.elements.productPrice().should('be.visible');
        productPage.elements.productAvailability().should('be.visible');
        productPage.elements.productCondition().should('be.visible');
        productPage.elements.productBrand().should('be.visible');
    });

    it('Test Case 9. Should search for the product', () => {
        navbar.clickProducts();
        cy.url().should('include', '/products');

        allProductsPage.typeSearch('Blue Top');
        allProductsPage.clickSearchBtn();
        allProductsPage.elements.searchText().should('contain', 'Searched Products');
        allProductsPage.elements.productCardName().should('contain', 'Blue Top');
    });

    it('Test Case 21. Should Add review on product', function() {
        navbar.clickProducts();
        cy.url().should('include', '/products');
        allProductsPage.clickOnViewProduct(0);
        productPage.elements.writeReviewTxt().should('contain', 'Write Your Review');
        productPage.typeReviewName(this.data.name);
        productPage.typeReviewEmail(this.data.email);
        productPage.typeReview('lorem review ipsum');
        productPage.clickReviewBtn();
        productPage.elements.reviewSuccessAlert().should('contain', 'Thank you for your review.')
    });

    
})