const { unlink } = require("fs");

unlink("./HelloWorld.txt", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Successfully deleted that awesome file that you made 🥲");
  }
});
