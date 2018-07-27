var mongoose=require("mongoose");
var db=require('./db.js');

var bookSchema=new mongoose.Schema({
    name:{type:String},
    author:{type:String},
    price:{type:Number},
});
bookSchema.statics.showBooks= function (callback) {
    this.model("Book").find({},callback);
};
bookSchema.statics.showBookByID= function (id,callback) {
    this.model("Book").find({"_id":id},callback);
};
var bookModel=db.model("Book",bookSchema);
module.exports=bookModel;