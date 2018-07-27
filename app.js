var Student=require('./models/Student.js');

//非静态
/*var student=new Student({"name":"wushichao","age":12,"sex":"男"});
student.save(function () {
    console.log("保存完成");
});*/
//插入
/*Student.create({"name":"小绿","age":13,"sex":"女"}, function (error) {
    console.log("保存成功");
});*/

//静态
//查询
/*Student.zhaoren("wushichao",function (err,result) {
    console.log(result);
});*/

//分页查询
/*var page=2;//第几页
var pageSize=4;//每页最大数
Student.pageFind(page,pageSize,function (err,result) {
    console.log(result);
    console.log(result.length);
});*/

/*
//修改
var conditions = {name : 'wushichao'};
var update     = {$set : {age : 27, sex : '女'}};
var options    = {upsert : true};
Student.change(conditions,update,options, function (result) {
    console.log(result);
});*/

/*//删除
var conditions={name:"小红"};
Student.delete(conditions, function (result) {
    console.log(result);
});*/

var express=require('express');
var router=require("./router/router.js")
var app=express();
app.set("view engine","ejs");

app.get("/addbook",router.addbook);
app.get("/",router.showIndex);
app.get("/doadd",router.doadd);
app.get("/edit",router.showEidt);
app.get("/doedit",router.doEidt);
app.listen(3000);