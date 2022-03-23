let fs = require("fs");
// files- create read update .delete 
// create - open in w mode 
//writefile Sync = hai to append krega ne to bana dega
// append - uodate ke liye
// let buffer= fs.readFileSync("acb.js");//read file comes in
// console.log("bin data "+  buffer );
// // file- create ,delete update ,read
// // update
// fs.openSync("acb.text","w");

// // write
// fs.writeFileSync("acb.txt","hum aaj kush hai");


// fs.appendFileSync("acb.txt","kya hua kyu kush ho");



// folder creation 
// fs.mkdirSync("meriDirectory");
// fs.writeFileSync("meriDirectory/merifile.txt","mera content ");
// remove all files under meriDirectory
// let content = fs.readdirSync("meriDirectory");
// console.log(content);
// for(let i =0;i<content.length;i++) {
//     // console.log("file",content[i] ,"is removed ");
//     fs.unlinkSync("meriDirectory/" + content[i]); //remove file under folder

// }
// remove folder 
// fs.rmdirSync("meriDirectory");
// fs.existSync()->if a file exist or not 
// let doesPathExist = fs.existsSync("abc.txt");
// console.log(doesPathExist);
// // fs.IstatSYnc
// let detailsObj = fs.lstatSync(__dirname + "\\ fs.js");
// let ans = detailsObj.isFile();
// console.log(ans);
// ans = detailsObj.isDirectory();
// console.log(ans);




// Automation of 10 folders with readme file with content
for(let i =1; i<=10 ; i++){
    let dirPathToMake= `Lecture-${i}`;
    fs.mkdirSync(dirPathToMake);
    fs.writeFileSync(dirPathToMake+ "\\"+ "readme.md",`#readme for ${dirPathToMake}`);
}




