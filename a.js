let name = "Alice";
console.log(`Hello, ${name}!`);

// import {createServer} from 'node:http';

// const server = createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end("Hello, World!");
// })
// server.listen(4500, () => {
//     console.log('Server is listening on port 3000');
// });

                          //ONLY READING A FILE//

// const fs =require('fs');
// fs.readFile('data.txt', "utf8", (err, data) =>{
//     if(err){
//         console.log('Error in reading file',err);
//     }
//     else{
//         console.log('File data:',data)
//     }
// } )



import { createServer } from 'node:http';
import fs from 'fs';
import path from 'path';


const server = createServer((req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/html'});
      res.end('Internal Server Error');
    }else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    }
  });
});

server.listen(4500, () => {
  console.log('Server is listening on port 4500');
});
