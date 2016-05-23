/**
 * Created by admin on 2016/5/23.
 */
var express=require("express");
var app=express();
app.set("views","./views");
app.set("view engine","jade");
app.listen(8080);
app.use(express.static("public"));
app.get("/",function(req,res){
res.render("index",{"title":"首页"})
})
app.get("/list/",function(req,res){
    res.render("list",{"title":"列表页面"})
})
app.get("/detail/",function(req,res){
    res.render("detail",{"title":"内容页面"})
})
app.get("/*",function(req,res){
    res.render("index",{"title":"首页"})
})
console.log("启动成功");

