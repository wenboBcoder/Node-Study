var http=require("http");
var url=require("url");
var router=require("./module/backRouter")
http.createServer(function(request,response){
   response.writeHead(200,{"content-type":"text/html;charset=utf-8"});
   if(request.url!=="./favicon.ico"){
       var pathname=url.parse(request.url).pathname;
       pathname=pathname.replace(/\//,"");
       router[pathname](request,response);
   }
}).listen(8000);
console.log("请访问127.0.0.1");