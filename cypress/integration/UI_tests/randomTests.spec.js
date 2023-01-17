import navbar from "../../pages/navbar";
import contactUsPage from "../../pages/contactUsPage";
import homePage from "../../pages/homePage";
import allProductsPage from "../../pages/allProductsPage";

describe('E2E Random tests', () => {
    
    beforeEach(() => {
        cy.visit('/')

        cy.fixture('automationexercise_fixture').then(function (data) {
            this.data = data
        })
    })

    it('Test Case 6. Should Send Contact Us Form', function() {
        navbar.clickContactUs();
        contactUsPage.elements.mainText().should('contain', 'Get In Touch');
        contactUsPage.typeName(this.data.name);
        contactUsPage.typeEmail(this.data.email);
        contactUsPage.typeSubject('Dog picture');
        contactUsPage.typeMessageInTextarea('You should see dog picture in the attachment');
        contactUsPage.selectFileToUpload(this.data.file);
        contactUsPage.clickSubmit();
        contactUsPage.elements.resultText().should('contain', 'Success! Your details have been submitted successfully.');
        contactUsPage.clickHomeBtn();
        cy.url().should('eq', 'https://automationexercise.com/')
    });

    it('Test Case 7. Should Verify Test Cases Page', () => {
        navbar.clickTestCases();
        cy.url().should('include', '/test_cases')
    });

    it('Test Case 18. Should View Category Products', () => {
        homePage.elements.categoryH2().should('be.visible');
        homePage.clickOnWomenCategory();
        
        homePage.elements.subcatInWomen().eq(0).then($firstCatInWomen => {
            const firstCatInWomen = $firstCatInWomen.text();
            homePage.clickOnCatInWomen(0);
            cy.url().should('include', '/category_products');
            allProductsPage.elements.categoryTitle().should('contain', 'Women - '+ firstCatInWomen +'Products');
            
            homePage.clickOnMenCategory();
            homePage.elements.subcatInMen().eq(0).then($firstCatInMen => {
                const firstCatInMen = $firstCatInMen.text();
                homePage.clickOnCatInMen(0);
                cy.url().should('include', '/category_products');
                allProductsPage.elements.categoryTitle().should('contain', 'Men - '+ firstCatInMen +'Products');
            });
        });
    });

    it('Test Case 19. Should View & Cart Brand Products', () => {
        navbar.clickProducts();
        homePage.elements.brandsH2().should('be.visible');
        homePage.clickOnBrand(0);
        allProductsPage.elements.listOfItems().should('be.visible');
        allProductsPage.elements.categoryTitle().should('contain', 'Brand - Polo Products');
    });

    it('Test Case 25. Should Verify Scroll Up using "Arrow" button and Scroll Down functionality', () => {
        cy.isNotInViewport('.single-widget h2');
        cy.scrollTo('bottom', {ensureScrollable: false});
        cy.isInViewport('.single-widget h2');
        homePage.clickScrollUpBtn();
        cy.isNotInViewport('.single-widget h2');
        cy.isInViewport('.carousel-inner .active h2');
    });

    it('Test Case 26. Should Verify Scroll Up without "Arrow" button and Scroll Down functionality', () => {
        cy.isNotInViewport('.single-widget h2');
        cy.scrollTo('bottom', {ensureScrollable: false});
        cy.isInViewport('.single-widget h2');
        cy.scrollTo('top', {ensureScrollable: false});
        cy.isNotInViewport('.single-widget h2');
        cy.isInViewport('.carousel-inner .active h2');
    });
})