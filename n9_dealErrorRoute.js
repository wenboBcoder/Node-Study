var http=require("http");
var url=require("url");
var route=require("./module/n9_route");
var exception=require("./module/n9_exception");//异常处理模块
http.createServer(function(request,response){
    
    if(request.url!=="/favicon.ico"){
        var pathname=url.parse(request.url).pathname;
        pathname=pathname.replace(/\//,'');
        console.log(pathname)
        try{
            route[pathname](request,response);
            //exception.findException()参数如果是0，就抛出异常，接下来的语句不执行
            //直接进入catch语句，如果不是0，则继续执行下面的语句
            /* 
                注意这段总结很重要
                这时候就会发现，其实exception.findException()中的参数可以通过发送请求来获取
                从而判定有没有异常，这个请求可能会有多个返回值，这就做成了一个廉价的消息机制，
                在异常调用模块中，通过返回值来确定是不是异常，从而来决定是否手动的抛出异常，
                然后在主文件的调用中增加catch代码快来处理异常
            
            var data=exception.findException(10);
            response.write(data);
            response.end("")
            */
        }catch(error){//这里是为了捕获错误的路径名而导致的异常程序，catch里的代码时对发现异常的处理
            //这是这个程序中的第一个异常,称为同步异常
            console.log(error);
            response.write(error.toString());
            response.end("")
        }
        console.log("_________")
    }
}).listen(8000);
console.log("请访问127")