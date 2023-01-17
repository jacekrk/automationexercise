class homePage{

    elements = {
       viewProductBtn: () => cy.get('.choose a'),
       addToCartBtn: () => cy.get('.features_items .productinfo  [data-product-id="1"]'),
       categoryH2: () => cy.get('.left-sidebar h2').contains('Category'),
       brandsH2: () => cy.get('.left-sidebar h2').contains('Brands'),
       womenCategory: () => cy.get('.category-products h4 a').contains('Women'),
       menCategory: () => cy.get('.category-products h4 a').contains('Men'),
       subcatInWomen: () => cy.get('#Women .panel-body li a'),
       subcatInMen: () => cy.get('#Men .panel-body li a'),
       brand: () => cy.get('.brands-name li'),
       recommendedList: () => cy.get('.recommended_items'),
       addToCartFromRecommended: () => cy.get('.recommended_items a'),
       subscriptionTitle: () => cy.get('.single-widget h2'),
       scrollUpBtn: () => cy.get('#scrollUp')
    }

    clickOnViewProduct(productIndex){
        this.elements.viewProductBtn().eq(productIndex).click();
    }

    clickOnAddToCartBtn(productIndex){
        this.elements.addToCartBtn().eq(productIndex).click();
    }

    clickOnWomenCategory(){
        this.elements.womenCategory().click();
    }

    clickOnMenCategory(){
        this.elements.menCategory().click();
    }

    clickOnCatInWomen(catIndex){
        this.elements.subcatInWomen().eq(catIndex).click();
    }

    clickOnCatInMen(catIndex){
        this.elements.subcatInMen().eq(catIndex).click();
    }

    clickOnBrand(brandIndex){
        this.elements.brand().eq(brandIndex).click();
    }

    clickAddToCartFromRecommended(productIndex){
        this.elements.addToCartFromRecommended().eq(productIndex).click({force: true});
    }

    clickScrollUpBtn(){
        this.elements.scrollUpBtn().click();
    }
}

module.exports = new homePage();