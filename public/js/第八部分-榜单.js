/**
 * Created by Administrator on 2017-07-15.
 */
//1.获取左边榜单大的播放精灵图标
var bf=document.getElementById("bf");
//1.1 播放精灵图移入事件
bf.onmouseover=function(){
    bf.style.backgroundPosition="-267px -235px";
}
//1.2 播放精灵图移出事件
bf.onmouseout=function(){
    bf.style.backgroundPosition="-267px -205px";
}



//2.获取中间榜单大的播放精灵图标
var bf2=document.getElementById("bf2");
//2.1 播放精灵图移入事件
bf2.onmouseover=function(){
    bf2.style.backgroundPosition="-267px -235px";
}
//2.2 播放精灵图移出事件
bf2.onmouseout=function(){
    bf2.style.backgroundPosition="-267px -205px";
}



//3.获取中间榜单大的播放精灵图标
var bf3=document.getElementById("bf3");
//3.1 播放精灵图移入事件
bf3.onmouseover=function(){
    bf3.style.backgroundPosition="-267px -235px";
}
//3.2 播放精灵图移出事件
bf3.onmouseout=function(){
    bf3.style.backgroundPosition="-267px -205px";
}


//4.获取左边榜单大的添加经络图标
var sc=document.getElementById("sc");
//4.1 添加精灵图移入事件
sc.onmouseover=function(){
    sc.style.backgroundPosition="-300px -235px";
}
//4.2 添加精灵图移出事件
sc.onmouseout=function(){
    sc.style.backgroundPosition="-300px -205px";
}


//5.获取中间榜单大的添加经络图标
var sc2=document.getElementById("sc2");
//5.1 添加精灵图移入事件
sc2.onmouseover=function(){
    sc2.style.backgroundPosition="-300px -235px";
}
//5.2 添加精灵图移出事件
sc2.onmouseout=function(){
    sc2.style.backgroundPosition="-300px -205px";
}


//6.获取右边榜单大的添加经络图标
var sc3=document.getElementById("sc3");
//6.1 添加精灵图移入事件
sc3.onmouseover=function(){
    sc3.style.backgroundPosition="-300px -235px";
}
//6.2 添加精灵图移出事件
sc3.onmouseout=function(){
    sc3.style.backgroundPosition="-300px -205px";
}

//小的播放精灵图
var sBf =document.getElementsByClassName("s-bf");
var sTj =document.getElementsByClassName("s-tj");
var sSc =document.getElementsByClassName("s-sc");

for(var i=0;i<sBf.length;i++){
    sBf[i].onmouseover=function(){
        this.style.backgroundPosition="-267px -288px"
    }
    sBf[i].onmouseout = function () {
        this.style.backgroundPosition="-267px -268px"
    }

}

//小的添加歌曲精灵图

for(var i=0;i<sTj.length;i++){
    sTj[i].onmouseover=function(){
        this.style.backgroundPosition="-22px -700px"
    }
    sTj[i].onmouseout=function(){
        this.style.backgroundPosition="0px -700px"
    }

}



//小的收藏歌曲精灵案例


for(var i=0;i<sSc.length;i++){

    sSc[i].onmouseover=function(){
        this.style.backgroundPosition="-297px -288px"
    }
    sSc[i].onmouseout=function(){
        this.style.backgroundPosition="-297px -268px"
    }
}


//给云音乐飙升榜的li标签设置 移入移出事件
var catalogLeft=document.getElementById("catalog-left");
var leftlis=catalogLeft.children[0].children;

//给li标签设置颜色
for(var i=0;i<leftlis.length;i++){
    if(i%2!=0){
        leftlis[i].style.backgroundColor="#e8e8e8";
    }else{
        leftlis[i].style.backgroundColor="#f4f4f4";
    }
}

for(var i=1; i<leftlis.length-1;i++){

    leftlis[i].onmouseover=function(){
        this.children[1].removeAttribute("class");
        this.children[1].setAttribute("class","gm2")
        this.children[2].style.display="inline-block";
    }


}

for(var i=1; i<leftlis.length-1;i++){

    leftlis[i].onmouseout=function(){
        this.children[1].removeAttribute("class");
        this.children[1].setAttribute("class","gm");
        this.children[2].style.display="none";
    }
}

////给云音乐新歌榜的li标签设置 移入移出事件
var catalogMiddle=document.getElementById("catalog-middle");
var middlelis=catalogMiddle.children[0].children;

//给li标签设置颜色
for(var i=0;i<middlelis.length;i++){
    if(i%2!=0){
        middlelis[i].style.backgroundColor="#e8e8e8";
    }else{
        middlelis[i].style.backgroundColor="#f4f4f4";
    }
}

for(var i=1; i<middlelis.length-1;i++){

    middlelis[i].onmouseover=function(){
        this.children[1].removeAttribute("class");
        this.children[1].setAttribute("class","gm2")
        this.children[2].style.display="inline-block";
    }


}

for(var i=1; i<middlelis.length-1;i++){

    middlelis[i].onmouseout=function(){
        this.children[1].removeAttribute("class");
        this.children[1].setAttribute("class","gm");
        this.children[2].style.display="none";
    }
}

////给云音乐原创歌的li标签设置 移入移出事件
var catalogRight=document.getElementById("catalog-right");
var rightlis=catalogRight.children[0].children;


//给li标签设置颜色
for(var i=0;i<rightlis.length;i++){
    if(i%2!=0){
        rightlis[i].style.backgroundColor="#e8e8e8";
    }else{
        rightlis[i].style.backgroundColor="#f4f4f4";
    }
}


for(var i=1; i<rightlis.length-1;i++){

    rightlis[i].onmouseover=function(){
        this.children[1].removeAttribute("class");
        this.children[1].setAttribute("class","gm2")
        this.children[2].style.display="inline-block";

    }


}

for(var i=1; i<rightlis.length-1;i++){

    rightlis[i].onmouseout=function(){
        this.children[1].removeAttribute("class");
        this.children[1].setAttribute("class","gm");
        this.children[2].style.display="none";
    }
}