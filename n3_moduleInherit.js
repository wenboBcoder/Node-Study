var http=require("http");
var Teacher=require("./module/n3_Teacher");
http.createServer(function(request,response){
    response.writeHead(200,{"content-type":"text/html;charset=utf-8"});
    if(request.url!="/favicon.ico"){
        var zhangsan=new Teacher('张三',20);
        zhangsan.enterIn();//apply也继承了父类的方法；
        zhangsan.teach();
        response.end("")
    }
}).listen(8000);
console.log("127.0.0.1")