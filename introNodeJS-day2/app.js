// http vs https 
// https is secure version of http
// https uses ssl certificate to encrypt data
// ssl (socket secure layer) certificate is issued by certificate authority (CA)
// https is used for secure communication over the internet
// https is used for online banking, shopping, etc.

// DNS (domain name system) give alias to ip address
// DNS translates domain name to ip address


// DHCP (dynamic host configuration protocol) is used to assign ip address to devices on a network
// DHCP is used in home networks, office networks, etc.


// websockets
// websockets is a protocol that allows for full-duplex communication between client and server
// websockets is used for real-time applications like chat applications, online gaming, etc.


// frontend can access api's (or endpoint) using routers do some logic and send response to frontend
// backend can access database and perform CRUD operations
// methods: GET, POST, PUT, PATCH, DELETE



// https status codes
// 1xx: informational
// 2xx: success
// 3xx: redirection
// 4xx: client error
// 5xx: server error


// nodeJs javascript runtime environment
// nodeJs is used to build server-side applications
// nodeJs is built on chrome's v8 javascript engine
// nodeJs uses event-driven, non-blocking I/O model
// nodeJs is single-threaded but can handle multiple requests using event loop and callback functions
// nodeJs has built-in modules like http, fs, path, os, etc.
// nodeJs has package manager called npm (node package manager) to install third-party modules


// LIBUV make nodejs support multi-threading
// libuv is a multi-platform support library with a focus on asynchronous I/O
// libuv is used by nodejs to handle asynchronous operations like file system operations, network operations, etc.
// libuv uses thread pool to handle multiple requests


// libuv in event loop support multi-threading
// event loop is a loop that runs continuously to check for events and execute callback functions
// event loop has multiple phases like timers, I/O callbacks, idle, poll, check, close callbacks
// event loop uses callback queue to store callback functions and execute them in order
// to support multi-threading libuv uses thread pool to handle multiple requests


// threads return callback to event loop only when task is completed
// this is called non-blocking I/O
// non-blocking I/O allows nodejs to handle multiple requests without blocking the main thread
console.log("Start");
//node --watch app.js equals nodemon app.js

// if you install nodemon globally use this command then it not work open powershall as admin and run this command
// Set-ExecutionPolicy unrestricted -Scope CurrentUser
// then you can use this command
// nodemon app.js
// if you install nodemon locally use this command
// npx nodemon app.js


/**
 * http
 * express
 * nestJs
 */

// steps to use module
//1. install module using npm
// npm install express
//2. import module
//3. use module

// ES5 => require
// ES6 => import



const http = require('http');
 

const users = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Bob", age: 35 }
];
http.createServer((req,res)=>{

    if(req.url === '/'&& req.method === 'GET'){
        res.write(JSON.stringify(users));
        res.end();
    }
    else if(req.url=='/'&& req.method === 'POST'){
          let newArr='';
          req.on('data',(chunk)=>{
            newArr=JSON.parse(chunk);
            console.log(newArr);
          });
          req.on('end',()=>{
            const fnd= users.find((user)=>user.id===newArr.id);
            if(fnd){
                res.write("User with this id already exists");
                return res.end();
            }
            users.push( newArr);
            res.write("User added successfully");
            res.write(JSON.stringify(users));
            res.end();
          });
    }
    else if(req.url === '/about' && req.method === 'GET'){
        res.write("This is about page");
        res.end();
    }

}).listen(3000, () => {
    console.log("Server is running on port 3000");
});