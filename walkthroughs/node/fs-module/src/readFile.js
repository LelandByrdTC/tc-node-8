const { readFile } = require("fs");

readFile("./HelloWorld.txt", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    let contents = data.toString();
    console.log(contents.replace(/l/g, "1"));
  }
});
