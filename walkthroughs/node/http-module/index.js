"use strict";

// import http from "http";
const http = require("http"); // CommonJS
// import { reqHandler } from "./helpers"
const { reqHandler } = require("./helpers");

const matchRoute = (endpoint) => {
  let data = {
    statusCode: 200,
    content: null,
  };

  switch (endpoint) {
    case "/":
      data.content = "<h1>Home</h1>";
      break;
    case "/about":
      data.content = "<h1>About</h1>";
      break;
    case "/projects":
      data.content = "<h1>Projects</h1>";
      break;
    default:
      data.content = "<h1>Page not found</h1><a href='/'>Try Home</a>";
      data.statusCode = 404;
  }

  return data;
};

const server = http.createServer((req, res) => {
  req.on("error", (err) => {
    console.error(err);
    res.writeHead(400, { "content-type": "application/json" });
    res.write(JSON.stringify({ msg: "Invalid request", err }));
    res.end();
  });
  res.on("error", (err) => {
    console.error(err);
    res.writeHead(500, { "content-type": "application/json" });
    res.write(JSON.stringify({ msg: "Server error", err }));
    res.end();
  });

  if (req.method != "GET") {
    const chunks = [];
    // Same as: req.addEventListener()
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => {
      let reqBody = JSON.parse(Buffer.concat(chunks).toString());

      res.writeHead(200, { "content-type": "text/html" });
      res.write(`success: ${reqBody.test}`);
      res.end();
    });
  } else {
    let { statusCode, content } = matchRoute(req.url);
    res.writeHead(statusCode, { "Content-Type": "text/html" });
    res.write(content);
    res.end();
  }
});

server.listen(8080, () => console.log("Server running at port 8080..."));
