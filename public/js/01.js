/**
 * Created by wangyue on 2017/7/19.
 */
var text=document.getElementById("text");
var nr= document.getElementById("nr")
var ul1=nr.children[0];
text.onfocus = function(){
    if(text.value=="单曲/歌手/专辑/歌单/MV/用户"){
        text.value="";
    }

}
text.onblur = function(){
    if(text.value==""){
        text.value="单曲/歌手/专辑/歌单/MV/用户";
    }
}
for(var i=0;i<ul1.children.length;i++){
    ul1.children[i].onclick= function(){
        for(var j=0;j<ul1.children.length;j++){
            ul1.children[j].style.background=" url(../img/topbar.png) 0 -80px";

        }
        this.style.background="url(../img/topbar.png) -0 -160px";
    }

}



var deng = document.getElementById("deng");
var loginBlock = document.getElementById("loginBlock");
deng.onmouseover = function () {
    loginBlock.style.display = "block";
}
deng.onmouseout = function () {
    loginBlock.style.display = "none";
}
loginBlock.onmouseover = function () {
    loginBlock.style.display = "block";
}
loginBlock.onmouseout = function () {
    loginBlock.style.display = "none";
}
