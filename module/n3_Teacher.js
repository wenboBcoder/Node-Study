var User=require("./n3_User");
function Teacher(name,age){
    User.apply(this,[name,age]);
    this.teach=function(){
        console.log(this.name+"去上课")
    }
}
module.exports=Teacher;