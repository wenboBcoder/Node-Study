var fs=require("fs");
module.exports={
    readhtml:function(url,recall){
        fs.readFile(url,function(error,data){
            if(error){
                console.log(error)
            }else{
                recall(data)
            }
        })
    },
    readimgs:function(url,recall){
        fs.readFile(url,'binary',function(error,data){
            if(error){
                console.log(error)
            }else{
                recall(data);
                // console.log("222")
                // response.write(data,"binary");
                // response.end("")
            }
        })
    }
}