const http=require("http");
const server=http.createServer((req,res)=>{
    res.write("Hello from Node Server!");
    res.end();
});
server.listen(2000,()=>{
    console.log("Server running on http://localhost:2000");
});
const myserver=http.createServer((req,res)=>{
    res.write("Hello from Node Server!");
    res.end();
});
myserver.listen(4000,()=>{
    console.log("Server running on http://localhost:4000");
});
const myserver1=http.createServer((req,res)=>{
    res.write("Hello from Node Server!");
    res.end();
});
myserver1.listen(5000,()=>{
    console.log("Server running on http://localhost:5000");
});
const myserver2=http.createServer((req,res)=>{
    res.write("Hello from Node Server!");
    res.end();
});
myserver2.listen(6000,()=>{
    console.log("Server running on http://localhost:6000");
});
const myserver3=http.createServer((req,res)=>{
    res.write("Hello from Node Server!");
    res.end();
});
myserver3.listen(7000,()=>{
    console.log("Server running on http://localhost:7000");
});
const myserver4=http.createServer((req,res)=>{
    res.write("Hello from Node Server!");
    res.end();
});
myserver4.listen(8000,()=>{
    console.log("Server running on http://localhost:8000");
});