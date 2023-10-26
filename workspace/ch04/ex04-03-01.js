function log(target, level, message) {
  const now = new Date();
  console.log(
    `[${now.getHours()}:${now.getMinutes()}] [${target}] [${level}] ${message}`
  );
}
log("console", "DEBUG", "debug message...");
log("console", "DEBUG", "debug message2...");
log("console", "DEBUG", "some Error...");

var logger = _.curry(log);

logger("console")("DEBUG")("hello");

// var myLog = logger("console");
var myLog = logger("network");

myLog.debug = myLog("DEBUG");
myLog.info = myLog("INFO");

myLog.debug("debug message");
myLog.info("server started on port 1234");
myLog.debug("server test ... OK");
