var http=require("http");
var route=require("./module/n6_route");
var url=require("url")
http.createServer(function(request,response){
    response.writeHead(200,{"content-type":"text/html;charset=utf-8"});
    if(request.url!=="/favicon.ico"){
        var pathname=url.parse(request.url).pathname;
        pathname=pathname.replace(/\//,'');
        route[pathname](request,response)
        response.write("主程序执行完毕")
        //response.end("");异步不能写，详细的解释在n5中
    }
}).listen(8000);
console.log("请访问127")