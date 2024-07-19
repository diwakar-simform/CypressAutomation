class loginPage {
    elements = {
        input: (name)=> cy.get(`[name="${name}"]`),
        inputId: (id)=> cy.get(`[id="${id}"]`),
        emailInput: ()=> cy.get("#input-email"),
        passwordInput: ()=> cy.get("#input-password"),
        clickLoginBtn: ()=> cy.get("input[value='Login']")
    }

    navigateToLogin() {
        return cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
    }

    login(name, email, password) {
        this.elements.input(name).type(email);
        // this.elements.emailInput().type(email);
        this.elements.passwordInput().type(password);
        this.elements.clickLoginBtn().click();
    }

    createUser(attrName, fName, attrLastName, lname, attrEmail, email, attrNo, mobNo, attrPw, password, attrConfPw, confirmPwd, agree) {
        this.elements.input(attrName).type(fName);
        this.elements.input(attrLastName).type(lname);
        this.elements.input(attrEmail).type(email);
        this.elements.input(attrNo).type(mobNo);
        this.elements.input(attrPw).type(password);
        this.elements.input(attrConfPw).type(confirmPwd);
        this.elements.inputId(agree).check({force: true});
    }


}

module.exports = new loginPage();