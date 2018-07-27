
var Book=require('../models/Book.js');

//显示首页
exports.showIndex= function (req,res,next) {
    Book.showBooks(function (err,result) {
        res.render("index",{
            "tushu":result
        })
    })
};

//添加界面
exports.addbook= function (req,res,next) {
    res.render("addbook");
};
//修改界面
exports.showEidt= function (req,res,next) {
    console.log(req.query);
    let id=req.query.id;
    Book.showBookByID(id, function (err,result) {
        res.render("edit",{
            id:id,
            book:result[0]
        });
    })

};
//修改
exports.doEidt= function (req,res,next) {
   console.log(req.query);


};
//保存图书
exports.doadd= function (req,res,next) {
    let data=req.query;
    Book.create(data, function (err) {
        if(err){
            res.send("失败");
            return;
        }
        res.send("保存成功");
    })
};

//