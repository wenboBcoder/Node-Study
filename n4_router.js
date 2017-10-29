var http=require("http");
var url=require("url");
var router=require("./module/n4_route");
http.createServer(function(request,response){
    response.writeHead(200,{"content-type":"text/html;charset=utf-8"});
    if(request.url!=="/favicon.ico"){
        var pathname=url.parse(request.url).pathname;//url.parse是把request.url转换成一个对象，在提取pathname属性
        pathname=pathname.replace(/\//,"");
        console.log(pathname);    response.write(pathname);    response.write("<br/>");
        router[pathname](request,response);
        response.end("")
    }
}).listen(8000);
console.log("请访问127.0.0.1")