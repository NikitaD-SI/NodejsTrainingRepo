const os = require("node:os")

console.log("Architecture",os.arch());
console.log("Total memory in Bytes",os.totalmem());
console.log("Free Memory in Bytes", os.freemem());
console.log("Numbers of cpu", os.cpus().length);
console.log("Your name on this machine",os.userInfo().username);
console.log("Number of parallelism",os.availableParallelism());

