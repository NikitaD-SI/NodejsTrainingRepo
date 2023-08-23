const fs =  require("node:fs");

//write file
// fs.writeFileSync("temp.txt","Welcome to your life"); //writefilesync is a synchronous file
// console.log("Log from line7"); //writefilesync is a asynchronous file
// fs.writeFile("temp.txt","welcome to your life", function(error){
//     if(error){
//         console.log("Error",error)
//     }else{
//         console.log("log from line 12");
//         console.log("File is ready")
//     }
// });
// console.log("log from line 16");

//Read File
//console.log(fs.readFileSync("temp.txt","utf-8")); //readfilesync is a synchronous file
// fs.readFile("temp.txt","utf-8",function(error,data){ //readfile is a asynchronous file
//     if(error){
//         console.log("Error",error);
//     }
//     else{
//         console.log(data)
//     }
// })