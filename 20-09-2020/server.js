const http =require('http')
const port =3000
const fs=require('fs')
const server =http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'})
    fs.readFile('index.html',function(error,data){

    })
    res.write('hello charitha')
    res.end()
})
//.listen(8080);
server.listen(port,function(error){
    if(error){
        console.log('something went wrong ',error)
    }
    else{
        console.log('server is working:' + port)
    }
})