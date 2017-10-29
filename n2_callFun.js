var http=require("http");
var otherFun=require("./module/n2_otherFun")
http.createServer(function(request,response){
    response.writeHead(200,{"content-type":"text/html;charset=utf-8"});
    if(request.url!=="/favicon.ico"){
        fun1(response);
        response.write("<br/>");
        otherFun.fun2(require,response)
        response.end("");
    }
}).listen(8000);
console.log("主干程序结束");

function fun1(response){
    response.write("本地fun1调用成功")
}