const { appendFile } = require("fs");

let appendContents = "\nHello World!".repeat(1000);

appendFile("./HelloWorld.txt", appendContents, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Success updated file.");
  }
});
