class productPage{

    elements = {
        productName: () => cy.get('.product-information h2'),
        productCategory: () => cy.get('.product-information p').eq(0),
        productPrice: () => cy.get('.product-information span span'),
        productAvailability: () => cy.get('.product-information p').eq(1),
        productCondition: () => cy.get('.product-information p').eq(2),
        productBrand: () => cy.get('.product-information p').eq(3),
        productQuantity: () => cy.get('#quantity'),
        addToCartBtn: () => cy.contains('Add to cart'),
        writeReviewTxt: () => cy.get('a[data-toggle="tab"]'),
        reviewName: () => cy.get('#name'),
        reviewEmail: () => cy.get('#email'),
        reviewText: () => cy.get('#review'),
        reviewBtn: () => cy.get('#button-review'),
        reviewSuccessAlert: () => cy.get('.alert-success')
    }

    productQuantityClear(){
        this.elements.productQuantity().clear();
    }

    changeProductQuantity(quantity){
        this.elements.productQuantity().type(quantity);
    }

    clickAddToCartBtn(){
        this.elements.addToCartBtn().click();
    }

    typeReviewName(reviewName){
        this.elements.reviewName().type(reviewName);
    }

    typeReviewEmail(reviewEmail){
        this.elements.reviewEmail().type(reviewEmail);
    }

    typeReview(review){
        this.elements.reviewText().type(review);
    }

    clickReviewBtn(){
        this.elements.reviewBtn().click();
    }
}

module.exports = new productPage();