const logService = require("./logService");

logService.emit("log", "Regular test");

logService.emit("error", "Bad test");

logService.emit("warn", "Shakey test");
