// 同步读取文件
/* var http=require("http");
var readfile=require("./module/n5_readfile")
http.createServer(function(request,response){
    response.writeHead(200,{"content-type":"text/html;charset=utf-8"});
    if(request.url!=="/favicon.ico"){
        readfile.readfilesync("./views/testFile.txt",response)
        response.write("<br/>")
        response.write("--------------")
        response.write("<br/>")
        response.end("页面打印结束");
    }
}).listen(8000);
console.log("请访问127") */


//异步读取文件
 var http=require("http");
var readfile=require("./module/n5_readfile")
http.createServer(function(request,response){
    response.writeHead(200,{"content-type":"text/html;charset=utf-8"});
    if(request.url!=="/favicon.ico"){
        function recall(data){
            response.write("异步开始读取文件");
            response.write("<br/>")
            response.write(data);
            response.write("<br/>")
            response.write("--------------")
            response.write("<br/>")
            response.end("页面打印结束");
        }
        readfile.readfile("./views/testFile.txt",recall);//闭包,之所以使用闭包是因为异步执行，如果想在页面打印的话，还没等打印函数就执行完毕，而response是函数内的参数；详细的原理见下面的注释
    }
}).listen(8000);
console.log("请访问127") 

//错误的异步读取文件方式
var http=require("http");
var readfile=require("./module/n5_readfile")
http.createServer(function(request,response){
    response.writeHead(200,{"content-type":"text/html;charset=utf-8"});
    if(request.url!=="/favicon.ico"){
        
        readfile.cuowu("./views/testFile.txt");//闭包,之所以使用闭包是因为异步执行，如果想在页面打印的话，还没等打印函数就执行完毕，而response是函数内的参数；详细的原理见下面的注释
        response.end("")
    }
}).listen(8000);
console.log("请访问127") 

