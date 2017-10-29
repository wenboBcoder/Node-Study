var writeFile=require("./n6_write.js")
module.exports={
    writeYiBu:function(request,response){
        writeFile.writefile('./views/n6_writefile.txt',"异步文件写入");
        response.write("异步写入文件完成")
        response.write("<br/>")
        response.write("路由调用完毕")
    },
    writeTongBu:function(request,response){
        writeFile.writefileSync('./views/n6_writefile.txt',"同步文件写入");
        response.write("同步写入文件完成")
        response.write("<br/>")
        response.write("路由调用完毕")
    }
}
