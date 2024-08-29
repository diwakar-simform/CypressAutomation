class MouseOperations {
    handleUncaughtException() {
        cy.on('uncaught:exception', (err, runnable)=>{
            // returning false here to prevents cypress from failing the test
            return false;
        })
    }
    visitMouseOverHomePage() {
        cy.visit('https://demo.opencart.com/');
        this.handleUncaughtException();
    }

    getDesktopHover() {
        return cy.get('.nav > .nav-item:first-child > a:first-child');
    }

    getMacElement() {
        return cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link');
    }

    validateElementVisibility(element) {
        element.should('be.visible');
    }

    visitRightClickHomePage() {
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html');
    }

    getRightClickMeButton() {
        return cy.get('.context-menu-one.btn.btn-neutral');
    }

    getCopyOption() {
        return cy.get('.context-menu-icon-copy');
    }

    visitDoubleClickHomePage() {
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3');
        // this.handleUncaughtException();
    }

    visitScrollingHomePage() {
        cy.visit('https://docs.cypress.io/api/commands/trigger');
    }

    getChangeEvent() {
        this.handleUncaughtException();
        return cy.get("#Change-Event");
    }

    getTriggerElement() {
        return cy.get('h1');
    }
}

export default MouseOperations;