/// <reference types="cypress" />

import MouseOperations from "../../support/pom/mouse-operations/mouseOperations"

describe('Mouse Operations', function() {

    const mouseOperations = new MouseOperations();
    

    it.only('Mouse Hover', function() {
    // need to fix the issue
        mouseOperations.visitMouseOverHomePage();
        mouseOperations.getDesktopHover().click();
        const macElement = mouseOperations.getMacElement();
        mouseOperations.validateElementVisibility(macElement);
        macElement.click();
    })
    
    it('Right Click', function() {
        mouseOperations.visitRightClickHomePage();
        
        // Approach 1: using contextmenu
        // mouseOperations.getRightClickMeButton().trigger('contextmenu');

        // Approach 2: using rightclick() method
        mouseOperations.getRightClickMeButton().rightclick();

        const copyElement = mouseOperations.getCopyOption();
        mouseOperations.validateElementVisibility(copyElement);
    })  

    it('Double Click', function() {
        mouseOperations.visitDoubleClickHomePage();
        // cy.frameloaded('#iframeResult');
        // cy.frameLoaded('#iframeResult');
    })

    it('Drag & Drop using plugin', function() {

    })

    it('Scrolling Page', function() {
        mouseOperations.visitScrollingHomePage();
        mouseOperations.getChangeEvent().scrollIntoView({duration:5000});  
        mouseOperations.validateElementVisibility(mouseOperations.getChangeEvent());
        mouseOperations.getTriggerElement().scrollIntoView({duration:5000});
        mouseOperations.validateElementVisibility(mouseOperations.getTriggerElement());
    })
})