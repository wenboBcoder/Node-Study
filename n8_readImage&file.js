var http=require("http");
var route=require("./module/n8_route");
var url=require("url")
http.createServer(function(request,response){
    if(request.url!=="/favicon.ico"){
        var pathname=url.parse(request.url).pathname;
        pathname=pathname.replace(/\//,"");
        route[pathname](request,response)
    }
}).listen(8000);
console.log("请访问127")