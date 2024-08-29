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

    getDragDropArea() {
        return cy.get('#drag-drop-upload');
    }

    getDroppedFile() {
        return cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename');
    }

    visitMultipleFileUploadHomePage() {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
    }
    getChooseMultipleFileButton() {
        return cy.get('#filesToUpload');
    }

    getFileYouSelectedText() {
        return cy.get(':nth-child(6) > strong');
    }

    getFileList() {
        return cy.get('#fileList > li');
    }

    visitUploadFileShadowDomHomePage() {
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm');
    }

    getShadowDomFileUploadInput() {
        return cy.get('.smart-browse-input', {includeShadowDom:true});
    }

    getShadowDomUploadedFileName() {
        return cy.get('.smart-item-name', {includeShadowDom:true});
    }
}

export default FileUpload;