var readfile=require("./n10_readfile");
var url=require("url");
var querystring=require("querystring")
module.exports={
    login:function(request,response){
        response.writeHead(200,{"content-type":"text/html;charset=utf-8"})
        function recall(data){
            response.write(data);
            response.end("")
        }
        readfile.readHtml("./views/n10_html.html",recall)
    },
    submitsGET:function(request,response){
       var urlData=url.parse(request.url,true).query;
       if(urlData['username']!=undefined){
           response.writeHead(200,{"content-type":"text/html;charset=utf-8"})
           response.write(urlData['username']);
           response.write(urlData['userpwd']);
           console.log(urlData)
           //接下来可以再次访问某个文件，来显示提交后的提示页面，
           //因为get方式是同步的，所以可以这么写
           //function recall(){}
           //readfile.readHtml('xxxx.html',recall)
        }
        
    },
    submitPOST:function(request,response){
        var postData='';
        request.on('data',function(chunk){
            postData+=chunk
        });
        request.on("end",function(){
            postData=querystring.parse(postData);
            console.log(postData)
            console.log(postData['username'])
            // response.write(post['username']);
            // response.write("<br/>");
            // response.write(post['userpwd'])
            // response.end("")
            //这里不能用response，因为是异步，下面的访问页面的回掉函数会先执行，执行完了之后
            //在执行这段代码，在回掉函数里已经response.end()了，所以不能在这里用response.write
            //下面两句放到这里面是对的，这是和get方式不同的地方
            //function recall(){}
            //readfile.readHtml('xxxx.html',recall)
        })
        //function recall(){}
        //readfile.readHtml('xxxx.html',recall)
        //以上两句代码不能在这里放只能放到request.on('end',function(){})中
        //因为post是异步，所有的操作都是在拿到数据后才能操作，所以就必须放到end里
        //否则异步执行会报错
    }
}