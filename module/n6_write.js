var fs=require("fs");
module.exports={
    writefileSync:function(url,data){
        fs.writeFileSync(url,data);
        console.log("同步写文件完成");
        
    },
    writefile:function(url,data){
        fs.writeFile(url,data,function(error){
            if(error){
                console.log(error)
            }
            console.log("异步写文件完成");
        })
    }   
} 