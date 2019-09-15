/**
 * Created by Administrator on 2017/7/15.
 */
/*
广告
 */
var banner = document.getElementById("banner");
var ul = banner.children[0];
var ulLis = ul.children;
var imgWidth = banner.offsetWidth;
var timer = null;
var index = 0;
ul.appendChild(ulLis[0].cloneNode(true));
timer=setInterval(getNextPic,5000);
/*
封装函数
 */
function getNextPic(){
    if(index==ulLis.length-1){
        index=0;
        ul.style.left=0+"px";
    }
    index ++;
    var target = -index*imgWidth;
    animate2(ul,target);
}

banner.onmouseover = function(){
    clearInterval(timer);
}
banner.onmouseout = function(){
    timer=setInterval(getNextPic,5000);
}

/*
新品上架
 */
var titles = document.getElementById("titles");
var span1 = titles.children[2];
var more = span1.children[0];

more.onmouseover=function(){
    more.style.textDecoration="underline";
}
more.onmouseout=function(){
    more.style.textDecoration="none";
}

/*
列表轮播
 */
var newCd2 = document.getElementById("newCd2");
var newCd3 = document.getElementById("newCd3");
var ul1 = newCd3.children[0];
var ulLis1 = ul1.children;
var arr = document.getElementById("arr");
var left = document.getElementById("left");
var right = document.getElementById("right");
var imgWid = newCd3.offsetWidth;
var span1 = ulLis1[0].children;
var span2 = ulLis1[1].children;
var span3 = ulLis1[2].children;


ulLis1[1].style.marginLeft="5px";
ulLis1[2].style.marginLeft="4px";
newCd2.onmouseover=function(){
    arr.style.display="block";
}
newCd2.onmouseout=function(){
    arr.style.display="none";
}

var picIndex=0;
right.onclick=function(){
    if(picIndex==ulLis1.length-1){
        picIndex=0;
        ul1.style.left=0+"px";
    }
    picIndex++;
    var target = -picIndex*imgWid;
    animate2(ul1,target);
}
left.onclick=function(){
    if(picIndex==0){
        picIndex=ulLis1.length-1;
        ul1.style.left=-(ulLis1.length-1)*imgWid+"px";
    }
    picIndex--;
    var target = -picIndex*imgWid;
    animate2(ul1,target);
}
for(var i=0;i<span1.length;i++){
    span1[i].onmouseover=function(){
        this.children[0].children[1].style.display="block";
    }
    span1[i].onmouseout=function(){
        this.children[0].children[1].style.display="none";
    }
}
for(var i=0;i<span2.length;i++){
    span2[i].onmouseover=function(){
        this.children[0].children[1].style.display="block";
    }
    span2[i].onmouseout=function(){
        this.children[0].children[1].style.display="none";
    }
}
for(var i=0;i<span3.length;i++){
    span3[i].onmouseover=function(){
        this.children[0].children[1].style.display="block";
    }
    span3[i].onmouseout=function(){
        this.children[0].children[1].style.display="none";
    }
}
