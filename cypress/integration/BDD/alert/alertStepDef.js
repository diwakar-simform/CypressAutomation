// import { Given, } from "cypress-cucumber-preprocessor/steps";
import { Given,  When, Then} from "@badeball/cypress-cucumber-preprocessor";
import Alert from "../../../support/pom/alert/alerts";

const alert = new Alert();

Given('I open javascript-alerts page', function() {
    alert.visitHomepage();
})

When('Locate the alert button and click on it', function() {
    alert.getJsAlertButton().click();
})

Then('Validate the text present inside the alert box', function() {
    alert.validateAlertWindow();
})