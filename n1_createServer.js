/* 入门简单的打印一行代码，关键是有一个操作要知道，
在所在文件夹下，按shift+鼠标右键，快速打开dos窗口，
在命令行窗口下执行命令的方式:node +“空格”+文件名（可以有文件名后缀js，也可以没有） */
//console.log("hello,world");



/* 入门第二个内容： */
    
var http=require("http");
/* 导入核心模块，node中都是以模块的方式导入，node中自己的核心模块就这么导入，
自己写的模块则导入路径例如 var aaa=require("./aaa.js") */
http.createServer(function(request,response){
    response.writeHead(200,{"content-type":"text/html;charset=utf-8"});//返回的协议头，这意味着访问localhost:8000
    if(request.url!=="/favicon.ico"){//如果不加这个if控制台打印会每次打印两次，有了这个就只会打印一次                                      
        console.log("页面访问开始");
        response.write("hello,world");//页面打印内容
        response.write("<br/>")
        response.end("end")//页面加载结束，必须有这句，同时里面的内容也会打印在页面上，也可以内容为空
                            //这个判断语句是避免在访问浏览器时浏览器不停的转，好像一直没有加载结束
    }
}).listen(8000);//监听8000端口，如果放在公网上端口改成80；
console.log("程序主干结束")
/* 注意：在执行第二段内容时，会发现在dos窗口中先答应最后一行代码，然后在访问页面后才能打印if语句中的代码；
这是因为node是异步执行，所有需要访问的请求都会直接加载到内存中，然后继续执行下面的代码 */

