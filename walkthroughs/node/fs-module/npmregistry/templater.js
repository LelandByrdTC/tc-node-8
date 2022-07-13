const fs = require("fs");
const path = require("path");

let fileNames = ["createFile", "readFile", "updateFile", "deleteFile"];
let fileExt = ".js";
let fileTemplate = `const fs = require("fs");

`;
let targetFolder = "src";

if (fs.existsSync(targetFolder)) {
  generateFiles();
} else {
  fs.mkdir(path.join(__dirname, targetFolder), (err) => {
    if (err) {
      console.error(err);
      console.log(`Failed to create ${targetFolder} x`);
    } else {
      console.log(`Successfully created ${targetFolder} ✅`);
      generateFiles();
    }
  });
}

function generateFiles() {
  fileNames.forEach((name) => {
    fs.writeFile(
      path.join(__dirname, targetFolder, `${name}${fileExt}`),
      fileTemplate,
      (err) => {
        if (err) {
          console.error(err);
          console.log(`Failed to write to ${name}${fileExt} x`);
        } else {
          console.log(`Successfully to write to ${name}${fileExt} ✅`);
        }
      }
    );
  });
}
