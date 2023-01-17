import navbar from "../../pages/navbar";
import footer from "../../pages/footer";

describe('E2E Subscription tests', () => {
    
    beforeEach(() => {
        cy.visit('/')

        cy.fixture('automationexercise_fixture').then(function (data) {
            this.data = data
        })
    })

    it('Test Case 10. Should Verify Subscription in home page', function() {
        cy.scrollTo('bottom', {ensureScrollable: false});
        footer.typesubscribtionEmail(this.data.email);
        footer.clickSubscribeBtn();
        footer.elements.subscribeText().should('contain', 'You have been successfully subscribed!');
    });
    
    it('Test Case 11. Should Verify Subscription in Cart page', function() {
        navbar.clickCart();
        cy.scrollTo('bottom', {ensureScrollable: false});
        footer.typesubscribtionEmail(this.data.email);
        footer.clickSubscribeBtn();
        footer.elements.subscribeText().should('contain', 'You have been successfully subscribed!');
    });

    
})

