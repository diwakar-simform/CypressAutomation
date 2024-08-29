import FileUpload from "../../support/pom/file-upload/fileUpload"
import 'cypress-file-upload';
import Utility from "../../support/pom/utility";

describe('File Upload', function() {

    const fileUpload = new FileUpload();
    const utility = new Utility();
    it('Single File Upload', function() {
        const file = "Fin.pdf";
        const fileUploadMsg = "File Uploaded!";
        fileUpload.visitFileUploadHomePage();
        fileUpload.getChooseFileButton().attachFile(file);
        fileUpload.getSubmitButton().click();
        utility.validateText(fileUpload.getFileUploadMsg(), fileUploadMsg);
    })

    it('File Upload - rename', function() {
        const file = "Fin.pdf";
        const fileRename = "FinRename.pdf";
        const fileUploadMsg = "File Uploaded!";
        fileUpload.visitFileUploadHomePage();
        fileUpload.getChooseFileButton().attachFile({filePath:file, fileName:fileRename});
        fileUpload.getSubmitButton().click();
        utility.validateText(fileUpload.getFileUploadMsg(), fileUploadMsg);
    })

    it('File Upload - Drag and Drop', function() {
        const file = "Fin.pdf";
        const fileUploadMsg = "File Uploaded!";
        fileUpload.visitFileUploadHomePage();
        fileUpload.getDragDropArea().attachFile(file,{subjectType: 'drag-n-drop'});
        fileUpload.getDroppedFile().should('have.text', file);
        // fileUpload.getSubmitButton().click();
        // utility.validateText(fileUpload.getFileUploadMsg(), fileUploadMsg);
    })

    it('File Upload - mulitple files', function() {
        const file1 = "Fin.pdf";
        const fileSelectedHeading = 'Files You Selected:';
        const noFileSelectedText = 'No Files Selected';

        fileUpload.visitMultipleFileUploadHomePage();
        // fileUpload.getFileList().should('contain.text','No Files Selected');
        utility.validateText(fileUpload.getFileList(), noFileSelectedText);
        
        // fileUpload.validateText()
        fileUpload.getChooseMultipleFileButton().attachFile([file1, file1]);
        // fileUpload.getFileYouSelectedText().should('contain.text',fileSelectedHeading);
        utility.validateText(fileUpload.getFileYouSelectedText(),fileSelectedHeading);
    })

    it.only('File Upload - shadow dom', function() {
        const fileName = 'Fin.pdf';
        fileUpload.visitUploadFileShadowDomHomePage();
        fileUpload.getShadowDomFileUploadInput().attachFile(fileName);
        fileUpload.getShadowDomUploadedFileName().should('contain.text',fileName);
    })


})