class allProductsPage{

    elements = {
        listOfItems: () => cy.get('.features_items'),
        viewProduct: () => cy.get('.choose'),
        searchInput: () => cy.get('input[placeholder="Search Product"]'),
        searchBtn: () => cy.get('#submit_search'),
        searchText: () => cy.get('.features_items h2.title'),
        productCardName: () => cy.get('.productinfo p'),
        productCardPrice: () => cy.get('.productinfo h2'),
        addProductFromOverlay: () => cy.get('.overlay-content a'),
        categoryTitle: () => cy.get('.features_items .title')
    }

    clickOnViewProduct(productIndex){
        this.elements.viewProduct().eq(productIndex).click();
    }

    typeSearch(searchText){
        this.elements.searchInput().type(searchText);
    }

    clickSearchBtn(){
        this.elements.searchBtn().click();
    }

    clickAddProductFromOverlay(productIndex){
        this.elements.addProductFromOverlay().eq(productIndex).click({ force: true });
    }
}

module.exports = new allProductsPage();