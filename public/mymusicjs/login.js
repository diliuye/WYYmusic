/**
 * Created by Bobby on 2017/7/15.
 */
var link = document.getElementById("link");
var loginVip = document.getElementById("loginVip");
//var loginPic = document.getElementById("loginPic")
//var login = document.getElementById("login"); //登录框
var closeBtn = document.getElementById("closeBtn"); //关闭按钮
//var title = document.getElementById("title"); //登录框头部
var loginTitle = document.getElementById("loginTitle");

//给link一个鼠标移入移出事件
link.onmousemove = function(){
    link.style.opacity = "1";
}
link.onmouseout = function(){
    link.style.opacity = "0";
}
//给link单机事件
link.onclick = function(){
    loginVip.style.display = "block";
}
//给关闭按钮单击事件
closeBtn.onclick = function(){
    loginVip.style.display = "none";
}

//给登录框头部一个鼠标按下事件
loginTitle.onmousedown = function(e){
    e = e || window.event;
    //获取当前鼠标在title中的坐标位置
    var x = getPage(e).pageX - loginVip.offsetLeft ;
    var y = getPage(e).pageY - loginVip.offsetTop;

    //鼠标移动事件
    document.onmousemove = function(e){
        e = e|| window.event;
        //获取当前鼠标的pagex和pagey
        var pagex = getPage(e).pageX;
        var pagey = getPage(e).pageY;
        //给login的style的left和top赋值
        loginVip.style.left = pagex - x +265 +"px";
        loginVip.style.top = pagey - y  +571 +"px";
    }
}
//鼠标弹起事件
    loginTitle.onmouseup = function(){
        document.onmousemove = null;
}