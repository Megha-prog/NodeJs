let cp = require("child_process");
// console.log("trying to open calculator");
// cp.execSync("calc");
// //open file through nodejs
let output= cp.execSync("node acb.js");
console.log(output);