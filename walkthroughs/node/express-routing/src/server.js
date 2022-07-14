const express = require("express");
const morgan = require("morgan");
const path = require("path");
const fs = require("fs");
const { users } = require("../public/users.json");

let port = 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  } catch (err) {
    next(err);
  }
});

app.get("/about", (req, res, next) => {
  try {
    res.json({ name: "Ben", city: "Birmingham" });
  } catch (err) {
    next(err);
  }
});

app.post("/echo", (req, res, next) => {
  try {
    const { url, method, body } = req;

    res.json({ url, method, body });
  } catch (err) {
    next(err);
  }
});

app.post("/newsletter", (req, res, next) => {
  try {
    const { name, email } = req.body;

    fs.appendFile(
      path.join(__dirname, "../public/newsletter.csv"),
      `${name},${email}\n`,
      (err) => {
        if (err) next(err);

        res.send("Thank You!");
      }
    );
  } catch (err) {
    next(err);
  }
});

// Using a query parameter
app.get("/user", (req, res, next) => {
  try {
    let { username } = req.query;

    if (!username) {
      res.status(400).json({
        msg: `You are missing the following required query parameters: 'username'`,
      });
    } else {
      let user = users.find(
        (u) => u.username.toLowerCase() == username.toLowerCase()
      );
      res.json(user || { msg: `No user exists with '${username}' username.` });
    }
  } catch (err) {
    next(err);
  }
});

// 404 Handler
app.use((req, res, next) => {
  try {
    res.status(404).sendFile(path.join(__dirname, "../public/notFound.html"));
  } catch (err) {
    next(err);
  }
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(e.status || 500).json({
    error: err.name,
    message: err.message,
    date: new Date().toString(),
  });
});

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
