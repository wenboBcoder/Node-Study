var http=require("http");
var route=require("./module/n5+_route")
var url=require("url")
http.createServer(function(request,response){
    response.writeHead(200,{"content-type":"text/html;charset=utf-8"});
    if(request.url!=="/favicon.ico"){
        var pathname=url.parse(request.url).pathname;
        pathname=pathname.replace(/\//,"");
        // route[pathname](require,response);
        // response.end("")
        //以上是同步执行的代码
        route[pathname](require,response);
    }
}).listen(8000);
console.log("请访问127")