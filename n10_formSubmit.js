var http=require("http");
var route=require("./module/n10_route");
var url =require("url");
http.createServer(function(request,response){
    if(request.url!=="/favicon.ico"){
        var pathname=url.parse(request.url).pathname;
        pathname=pathname.replace(/\//,'');
        try{
            route[pathname](request,response)
        }catch(error){
            console.log(error)
        }
    }
}).listen(8000);
console.log("请访问127")