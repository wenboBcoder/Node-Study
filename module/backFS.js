var fs=require("fs");
module.exports={
    readfilesync:function(url,type){
        var data=fs.readFileSync(url,type)
        return data;
    },
    readfile:function(url,recall){
        fs.readFile(url,function(error,data){
            if(error){
                response.write(error)
            }else{
                recall(data.toString());
            }
        });
        
        console.log("回掉完成")
    }
}