/// <reference types = "Cypress"/>

// const loginPage = require('../e2e/loginPage');
import loginPage, { createUser } from "./loginPage";

describe("Login test suite", function() {
    const email = "dk@gmail.com";
    const password = "Diwakar@123";
    const name = "email";

    it("Create user test case", function() {
        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/register");
        loginPage.createUser("firstname", "Diwakar", "lastname", "Kumar", "email", "diwakar@gmail.com", "telephone", "1234567890", "password", "12345", "confirm", "12345", "input-agree");
        cy.get("input[value='Continue'").click();
    })


    it("Login test cases", function() {
        loginPage.navigateToLogin();
        // cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
        loginPage.login(name,email,password);
        cy.get('#account-login > .alert').should('have.text', " Warning: No match for E-Mail Address and/or Password.");
    })

    it.only("intercept",function(){
        cy.visit("https://reqres.in/");

        cy.intercept("/api/users?page=2").as("getData");
        cy.get('[data-id="users"]').click();
        cy.wait("@getData").its("response.body.data").should('have.length',6);
    
        // Mocking API
        cy.intercept("/api/users?page=2", {
            statusCode: 200,
            body:[
                {
                    id: 1,
                    name: 'Diwakar',
                    email: 'diwakar@gmail.com'
                },
                {
                    id: 2,
                    name: 'Nimit',
                    email: 'nimit@gmail.com'
                }
            ],
        }).as('getData');

        cy.get('[data-id = "users"]').click();
        cy.wait('@getData').its('response.body').should('have.length',2);
    })
})