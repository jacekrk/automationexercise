
class checkoutPage{

    elements = {
        deliveryName: () => cy.get('#address_delivery .address_firstname'),
        deliveryAddress1: () => cy.get('#address_delivery .address_address1').eq(0),
        deliveryAddress2: () => cy.get('#address_delivery .address_address1').eq(1),
        deliveryAddress3: () => cy.get('#address_delivery .address_address1').eq(2),
        deliveryCity: () => cy.get('#address_delivery .address_city'),
        deliveryStateName: () => cy.get('#address_delivery .address_state_name'),
        deliveryPostcode: () => cy.get('#address_delivery .address_postcode'),
        deliveryCountryname: () => cy.get('#address_delivery .address_country_name'),
        deliveryPhone: () => cy.get('#address_delivery .address_phone'),
        productName: () => cy.get('.cart_description a'),
        descriptionTextarea: () => cy.get('.form-control'),
        placeOrederBtn: () => cy.get('.check_out')
    }

    typeDescriptionTextarea(description){
        this.elements.descriptionTextarea().type(description);
    }
  
    clickPlaceOrderBtn(){
        this.elements.placeOrederBtn().click();
    }
}

module.exports = new checkoutPage();