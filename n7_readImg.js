var http=require("http");
var url=require("url");
var route=require("./module/n7_route");
http.createServer(function(request,response){
    //response.writeHead(200,{"content-type":"text/html;charset=utf-8"});
    //这一行必须类型必须改成image/jpg格式，另外，这个程序只允许输出一张图片，其他文字不能输出，想要输出看下一节
    response.writeHead(200,{"content-type":"image/jpg"})
    if(request.url!=="./favicon.ico"){
        var pathname=url.parse(request.url).pathname;
        pathname=pathname.replace(/\//,'');
        route[pathname](request,response);
    }
}).listen(8000);
console.log("请访问127")