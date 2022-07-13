const fs = require("fs");
const path = require("path");

function errorHandler(req, res) {
  console.error(err);

  res.writeHead(err.status || 500, { "content-type": "text/html" });
  res.write("Error loading page.");
  res.end();

  requestLogger(req, res);
}

function requestHandler(req, res) {
  const { url, method } = req;

  let pagePath = "./public/notFound.html";
  let statusCode = 404;
  let contentType;
  let fileExt = path.extname(url);

  switch (fileExt) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".jpg":
    case ".jpeg":
      contentType = "image/jpeg";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".css":
      contentType = "text/css";
      break;
    default:
      contentType = "text/html";
  }

  if (fileExt && method == "GET") {
    pagePath = `./public/${path.basename(url)}`;
    statusCode = 200;
  } else if (url == "/" && method == "GET") {
    pagePath = "./public/index.html";
    statusCode = 200;
  }

  fs.readFile(pagePath, (err, data) => {
    if (err) return errorHandler(err, req, res);

    res.writeHead(statusCode, { "content-type": contentType });
    res.write(data);
    res.end();

    requestLogger(req, res);
  });
}

function requestLogger(req, res) {
  console.log(
    `${req.method}\t${req.url}\t${
      res.statusCode
    }\t${new Date().toLocaleTimeString()}`
  );
}

module.exports = {
  requestHandler,
};
