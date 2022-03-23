// Automation of 10 folders with readme file with content
let path = require("path");
// for(let i =1; i<=10 ; i++){
//     let dirPathToMake= `Lecture-${i}`;
//     fs.mkdirSync(dirPathToMake);
//     fs.writeFileSync(path.join(dirPathToMake+ "\\"+ "readme.md",`#readme for ${dirPathToMake}`);
// }
let ext = path.extname(path.join(__dirname));
console.log("ext",ext);
// base name
let name = path.basename(__dirname);
console.log(name);
name  = path.extname(path.join(__dirname),"abc.js");
console.log(name);