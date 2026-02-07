const fs =require('fs');
const http=require('http');
const url = require('url');

//read json data

const data = fs.readFileSync(`${__dirname}/book-list/data.json`,`utf-8`);
const dataObj = JSON.parse(data);
console.log(dataObj);

const server = http.createServer((req,res)=>{
// console.log(req.url);
   const {query,pathname} = url.parse(req.url,true);
if(pathname==='/books'){

    res.writeHead(200,{'Content-Type':'JSON/application'});
    // on single request the server send only one response
    // res.end("home page");
    res.end(JSON.stringify(dataObj));//to convert JSON file into string
    // res.end(dataObj);
    
}
else if(pathname==`/books/2`){
     res.end(JSON.stringify(dataObj[2]));
}

else {
    res.end("404 not found page");
}
});


server.listen (8000,'127.1.1.0');
console.log("listening the server ....")

