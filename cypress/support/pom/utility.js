class Utility {
    validateText(element, text) {
        element.should('have.text', text);
    }
}

export default Utility;