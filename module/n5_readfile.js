var fs=require("fs");//node中操作文件的核心模块
module.exports={
    readfilesync:function(url,response){
        var data=fs.readFileSync(url,'utf-8');
        response.write(data);
    },
    readfile:function(url,recall){
        fs.readFile(url,function(error,data){//这里注意写法也和同步的不一样
            if(error){
                console.log(error);//考虑这里在页面打印用response,怎么打印
            }else{
                console.log(data.toString())
                recall(data.toString());   
            }
        });
        
    },
    fanli:function(url,recall){//这是错误的实例用来明确异步执行不用闭包的错误会处在哪里
        fs.readFile(url,function(error,data){//这里注意写法也和同步的不一样
            if(error){
                console.log(error);//考虑这里在页面打印用response,怎么打印
            }else{
                console.log(data.toString())
                response.write(data.toString())
                /* 
                    这里不用闭包传过来的方法会报错，因为读取文件会是一个费时的操作，用异步方法会
                    先将这一段读取文件的操作放进内存，然后在回到主文件45行代码，继续执行，会发现
                    45行执行完end操作后是不会再到页面上写程序的，而此时读文件内容还没有运行完，这时
                    在执行response操作就会报错，所以这才是错误的关键点，为避免这个问题就只能用闭包

                 */
            }
        });
        
    },
}