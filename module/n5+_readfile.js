var fs=require("fs");
module.exports={
    READFILESYNC:function(url,response){
        var data=fs.readFileSync(url,"utf-8");
        response.write(data);
    },
    READFILE:function(url,recall){
        fs.readFile(url,function(error,data){
            if(error){
                response.write(error)
            }else{
                recall(data);
            }
        });
        
    }
}