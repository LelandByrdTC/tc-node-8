const { createServer } = require("http");
const { requestHandler } = require("./router");

let port = 8080;
let server = createServer(requestHandler);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
