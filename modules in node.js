//built in modules in node.js
const fs= require('fs'); 
const text = fs.readFileSync('file.txt',"utf-8"); 
console.log(text);

//read and replace content of a file 
const fs= require('fs');
let text = fs.readFileSync('file.txt',"utf-8");  
text = text.replace("this", "rohan");
console.log(text);
fs.writeFileSync("C:\Users\HP\Documents\node.js\file.txt",text);

//blocking and non blocking code, it is a example of blocking code
const fs =require("fs");
fs.readFile("file.txt","utf-8",(a,b)=> {
    console.log(a,b);
});
console.log("this is aq message")

//SERVING A HTML FILLE wITH HELP OF  BACKEND
const http = require('http')
const fs = require('fs')
const fileContent = fs.readFileSync('celebro login.html')
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end(fileContent)
})
server.listen(80,'127.0.0.1',()=>{
    console,log('listining on port 80')
})
