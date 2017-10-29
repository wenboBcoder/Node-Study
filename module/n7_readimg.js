var fs=require("fs");
module.exports={
    readimg:function(url,response){
        fs.readFile(url,'binary',function(error,data){
            if(error){
                console.log(error)
            }else{
               response.write(data,'binary');
               response.end("");
            }
        })
    }
}