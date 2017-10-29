function User(name,age){
        this.name=name;
        this.age=age;
        this.enterIn=function(){
            console.log(this.name+"进入图书馆")
        }
}
module.exports=User;