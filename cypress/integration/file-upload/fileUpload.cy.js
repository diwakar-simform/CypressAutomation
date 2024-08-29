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

    it.only('File Upload - rename', function() {
        const file = "Fin.pdf";
        const fileRename = "FinRename.pdf";
        const fileUploadMsg = "File Uploaded!";
        fileUpload.visitFileUploadHomePage();
        fileUpload.getChooseFileButton().attachFile({filePath:file, fileName:fileRename});
        fileUpload.getSubmitButton().click();
        utility.validateText(fileUpload.getFileUploadMsg(), fileUploadMsg);
    })
})