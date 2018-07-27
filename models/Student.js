var mongoose=require("mongoose");
var db=require('./db.js');
var studentSchema=new mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    sex:{type:String}
});
//创建静态方法
//查询
studentSchema.statics.zhaoren= function (name,callback) {
    this.model('Student').find({name:name},callback);
};
//分页查询
studentSchema.statics.pageFind=function(page,pageSize,callback){
    let skip_size=(page-1)*pageSize;
    this.model("Student").find({}).limit(pageSize).sort({"age":-1}).skip(skip_size).exec(callback);
}

//修改
studentSchema.statics.change= function (conditions,update,options,callback) {
    this.model("Student").update(conditions, update, options, function(error){
        if(error) {
            console.log(error);
        } else {
            console.log('update ok!');
            callback("update ok");
        }
        //关闭数据库链接
        db.close();
    });
};
//删除
studentSchema.statics.delete= function (conditions,callback) {
    this.model('Student').remove(conditions, function(error){
        if(error) {
            console.log(error);
        } else {
            console.log('delete ok!');
            callback("delete ok");
        }

        //关闭数据库链接
        db.close();
    });
};


var studentModel=db.model("Student",studentSchema);
module.exports=studentModel;