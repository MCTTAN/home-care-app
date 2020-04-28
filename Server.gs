// Server.gs
function doGet() {
  return HtmlService
  .createTemplateFromFile("picker")
  .evaluate()
  .addMetaTag("viewport", "width=device-width, initial-scale=1")
  .setTitle("Google Drive Picker")
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(fileName) {
  return HtmlService
  .createHtmlOutputFromFile(fileName)
  .getContent();
}

function initPicker() {
  return {
    locale: 'en',
    token: ScriptApp.getOAuthToken(),
    origin: "https://script.google.com",
    parentFolder: "xyz",
    developerKey: "AIzaSyAHkFjZk2JFtXVIOGZIXXx5noPz1XQaNbo",
    dialogDimensions: {
      width: 600,
      height: 425
    },
    picker: {
      viewMode: "LIST",
      mineOnly: true,
      //mimeTypes: "image/png,image/jpeg,image/jpg",
      multiselectEnabled: true,
      allowFolderSelect: true,
      navhidden: true,
      hideTitle: true,
      includeFolders: true,
    }
  };
}

// For Scope
// DriveApp.getStorageUsed()
// DriveApp.getFilesByName("ctrlq.org")