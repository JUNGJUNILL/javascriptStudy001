const http=require('http'); 

const server = http.createServer((req,res)=>{

    res.write('<h1>Hello World</h1>'); 
    res.write('<p>Hello World</p>'); 


}); 

server.listen(8080); //클라이언트에게 공개할 포트 번호 

server.on('error' , (error)=>{

    console.error(error); 
}); 




