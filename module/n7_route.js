var readimg=require('./n7_readimg.js');
module.exports={
    readfile:function(request,response){
        // response.write("进入路由，准备读取图片文件");
        function recall(data){
            // response.write("<br/>");
            response.write(data,'binary');
            // response.write("<br/>");
            // response.write("读取完成");
            response.end("")
        }
        readimg.readimg('./img/cat.jpg',response);
    }
}