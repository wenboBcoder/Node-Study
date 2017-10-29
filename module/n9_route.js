var readfile=require("./n9_readfile")
module.exports={
    login:function(request,response){
        response.writeHead(200,{"content-type":"text/html;charset=utf-8"})
        function recall(data){
            response.write(data);
            response.end("");
        }
        //这里会出现第二个异常，称为异步异常，合为异步异常，就是在下面的代码块中，万一路径名错误也会出现异常
        //这时在那个文件中就得处理这个异步执行错误路径的异常
        readfile.readHtml("./views/n9_html.html",recall)

    },
    showImg:function(request,response){
        
        function picRecall(data){
            response.writeHead(200,{"content-type":"image/jpg"});
            response.write(data,"binary");
            response.end("");
        }
        function textRecall(data){
            response.writeHead(200,{"content-type":"text/html;charset=utf-8"})
            response.write(data);
            response.end("");
        }
        
        readfile.readPic("./img/fish.png",picRecall,textRecall)
    }
}