class Alert {
    visitHomepage() {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    }

    getJsAlertButton(){
       return cy.get('button[onclick="jsAlert()"]');
    }

    validateAlertWindow() {
        cy.on('window:alert', (t)=>{
            expect(t).to.contains('I am a JS Alert');
        })
    }
}

export default Alert;