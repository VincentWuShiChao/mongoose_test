var mongoose=require("mongoose");
var db=mongoose.createConnection("mongodb://localhost/shuoshuo");
db.once("open", function () {
    console.log("数据库成功连接");
});
db.on('error', console.error.bind(console, 'connection error:'));

module.exports=db;