import Alert from "../../support/pom/alert/alerts"

describe('alert practice', function() {

    const alert = new Alert();

    it('js alert', function() {
        alert.visitHomepage();
        alert.getJsAlertButton().click();
        alert.validateAlertWindow();
    })
})