class signupPage{

    elements = {
        enterAccountInfoText: () => cy.get('.login-form').children('h2'),
        titleRadioMr: () => cy.get('#id_gender1'),
        titleRadioMrs: () => cy.get('#id_gender2'),
        nameInput: () => cy.get('input[data-qa="name"]'),
        emailInput: () => cy.get('input[data-qa="email"]'),
        passwordInput: () => cy.get('input[data-qa="password"]'),
        dayInput: () => cy.get('select[data-qa="days"]'),
        monthInput: () => cy.get('select[data-qa="months"]'),
        yearInput: () => cy.get('select[data-qa="years"]'),
        newsletterRadio: () => cy.get('#newsletter'),
        specialOffersRadio: () => cy.get('#optin'),
        addressInfoText: () => cy.get('.login-form form').children('h2'),
        firstNameInput: () => cy.get('input[data-qa="first_name"]'),
        lastNameInput: () => cy.get('input[data-qa="last_name"]'),
        companyInput: () => cy.get('input[data-qa="company"]'),
        addressInput: () => cy.get('input[data-qa="address"]'),
        address2Input: () => cy.get('input[data-qa="address2"]'),
        countrySelect: () => cy.get('select[data-qa="country"]'),
        stateInput: () => cy.get('input[data-qa="state"]'),
        cityInput: () => cy.get('input[data-qa="city"]'),
        zipcodeInput: () => cy.get('input[data-qa="zipcode"]'),
        mobileNumberInput: () => cy.get('input[data-qa="mobile_number"]'),
        createAccountBtn: () => cy.get('button[data-qa="create-account"]')
    }

    clickTitleRadioMr(){
        this.elements.titleRadioMr().click();
    }

    clickTitleRadioMrs(){
        this.elements.titleRadioMrs().click();
    }

    typePassword(password){
        this.elements.passwordInput().type(password);
    }

    fillRegisterPage(password,day,month,year,firstname,lastname,company,address1,address2,country,state,city,zipcode,mobilenumber){
        this.elements.titleRadioMr().click();
        this.elements.passwordInput().type(password);
        this.elements.dayInput().select(day);
        this.elements.monthInput().select(month);
        this.elements.yearInput().select(year);
        this.elements.newsletterRadio().click();
        this.elements.specialOffersRadio().click();
        this.elements.firstNameInput().type(firstname);
        this.elements.lastNameInput().type(lastname);
        this.elements.companyInput().type(company);
        this.elements.addressInput().type(address1);
        this.elements.address2Input().type(address2);
        this.elements.countrySelect().select(country);
        this.elements.stateInput().type(state);
        this.elements.cityInput().type(city);
        this.elements.zipcodeInput().type(zipcode);
        this.elements.mobileNumberInput().type(mobilenumber);
    }

    clickCreateAccountBtn(){
        this.elements. createAccountBtn().click();
    }
}

module.exports = new signupPage();