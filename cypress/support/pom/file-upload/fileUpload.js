class FileUpload{
    visitFileUploadHomePage() {
        cy.visit('https://the-internet.herokuapp.com/upload');
    }

    getChooseFileButton() {
        return cy.get('#file-upload');
    }

    getSubmitButton() {
        return cy.get('#file-submit');
    }

    getFileUploadMsg() {
        return cy.get('h3');
    }
}

export default FileUpload;