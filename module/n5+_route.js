var Read=require("./n5+_readfile.js"); 
module.exports={
    tongbu:function(require,response){
        Read.READFILESYNC("./views/n5+_testFile",response);
        response.write("同步完成")
    },
    yibu:function(require,response){
        function recall(data){
            response.write("异步读取文件");
            response.write(data.toString());
        }
        Read.READFILE("./views/n5+_testFile",recall)
    }
}