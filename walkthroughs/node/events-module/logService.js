const { EventEmitter } = require("events");

const logService = new EventEmitter();

logService.on("log", (msg) => {
  console.log(`˃ LOG: ${msg}`);
});

logService.on("warn", (msg) => {
  console.warn(`⚠️ WARNING: ${msg}`);
});

logService.on("error", (msg) => {
  console.error(`x ERROR: ${msg}`);
});

module.exports = logService;
