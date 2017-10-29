var fs=require("fs");
module.exports={
    readHtml:function(url,recall){
        fs.readFile(url,function(error,data){
            if(error){
                console.log(error);
                recall("html文件读取有错误")
            }else{
                recall(data)
            }
        })
    }
}