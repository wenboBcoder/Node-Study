module.exports={
    findException:function(callbackNumber){
        /* 下面的代码是当返回值为0时，手动抛出异常，下面的代码在不执行，
        如果不是0，则执行下面的代码 ，返回到主程序可以看到当手动抛出这个异常，
        就会在主程序中，进入catch模块，执行异常的处理操作*/
        if(callbackNumber==0){
            throw('发现错误')
        }
        return "success"
    }
}