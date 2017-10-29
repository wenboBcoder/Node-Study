var fs=require("./backFS")
module.exports={
    yiburead:function(request,response){
        function recall(data){
            response.write(data)
        }
        fs.readfile('./views/testFile.txt',recall);
        console.log("异步流程完成")
    },
    tongburead:function(request,response){
        var data=fs.readfilesync('./views/testFile.txt',"utf-8");
        response.write(data);
        console.log("同步读取完成")
    }
}