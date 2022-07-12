const reqHandler = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello World From the Server</h1>");
  res.end();
};

// export reqHandler
module.exports = {
  reqHandler,
};
