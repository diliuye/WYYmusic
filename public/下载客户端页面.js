/**
 * Created by 徐黎 on 2017/7/18.
 */

var searchmusic=document.getElementById("searchmusic");
//给searchmusic注册单击事件：
searchmusic.onclick=function(){
    this.value=null;
}
//给searchmusic注册鼠标移出事件：
searchmusic.onmouseout=function(){
    this.value='单曲/歌手/专辑/歌单/MV/用户';
}
//给顶部登录按钮旁边的小三角注册鼠标移入事件：
$('#triangle').mouseover(function(){
    $(this).removeClass('triangle');
    $(this).addClass('triangle1');
    $(this).siblings('ul').slideDown(200);
});
//给顶部登录按钮旁边的小三角注册鼠标移出事件：
$('#triangle').mouseout(function(){
    $(this).removeClass('triangle1');
    $(this).addClass('triangle');
    $(this).siblings('ul').slideUp(200);
});

//给导航栏下面轮播图右边的li标签注册鼠标移入、移出事件：
$('#rightSprite>ul>li').mouseover(function(){
    $(this).css('backgroundColor','#40495B');
});

$('#rightSprite>ul>li').mouseout(function(){
    $(this).css('backgroundColor','#5C6577');
});

//给导航栏下面轮播图左边ol中的li标签注册鼠标移入事件：
var ol1=document.getElementById("ol1");
var ol1lis=ol1.children;
ol1lis[0].style.backgroundColor="white";
var images=document.getElementById("images");
for(var i=0;i<ol1lis.length;i++){
    ol1lis[i].setAttribute("index",i);
    ol1lis[i].onmouseover=function(){
        var str="img/banner";
        var x=this.getAttribute("index");
        images.src=str+x+".png";
        for(var j=0;j<ol1lis.length;j++){
            ol1lis[j].style.backgroundColor='#8695AC';
        }
        this.style.backgroundColor='white';
    }
}
//实现自动轮播的函数封装：
var pic=0;
function nextImg(){
    if(pic==2){
        pic=0;
    }else{
        pic++;
    }
    var str="img/banner";
    images.src=str+pic+".png";
    for(var j=0;j<ol1lis.length;j++){
        ol1lis[j].style.backgroundColor='#8695AC';
    }
    ol1lis[pic].style.backgroundColor='white';

}
//设置计时器：
setInterval(nextImg,3000);

//给底部红色li标签注册鼠标移入事件——封装成函数：
function liStyle(a,x1,x2){
    $('li[class='+a+']').on({
        'mouseover':function(){
            $(this).css('background','url("img/sprite.png") no-repeat 0px '+x1+'px');
        },
        'mouseout':function(){
            $(this).css('background','url("img/sprite.png") no-repeat 0px '+x2+'px');
        }
    });
}
liStyle('a1',-464,-495);
liStyle('a2',-526,-558);
liStyle('a3',-526,-558);
liStyle('a4',-589,-620);
liStyle('a5',-404,-434);


//底部播放器部分开始：
var bbp = document.getElementById(".g-btmbar-p");
var footBar = document.getElementById("g-btmbar");
var fixBtn1 = document.getElementById("fixBtn1");
var fixBtn2 = document.getElementById("fixBtn2");
var footBox = document.getElementById("auto-id-fpboJHu88h3Feay2");


bbp.onmouseover = function  () {
    animate(footBar,{
        "bottom": 0
    })
}
bbp.onmouseout = function  () {
    animate(footBar,{
        "bottom": -48
    })
}
fixBtn1.onclick = function  () {
    bbp.onmouseout = null;
    fixBtn2.style.display = "block";
    fixBtn1.style.display = "none";
}
fixBtn2.onclick = function  () {
    bbp.onmouseout = function  () {
        animate(footBar,{
            "bottom": -48
        })
    }
    fixBtn1.style.display = "block";
    fixBtn2.style.display = "none";
}

var play=true;
var ply02 = document.getElementById("ply02");
var ply01=document.getElementById("ply01");
var songs1=document.getElementById("songs1");
ply01.onclick = function  () {
    ply02.style.display = "block";
    ply01.style.display = "none";
}


//给中间播放按钮注册单击事件：

ply01.onclick=function(){
    if(play){
        songs1.play();
        play=false;
    }else{
        songs1.pause();
        play=true;
    }
}

var play=true;
var ply01=document.getElementById("ply01");
var songs1=document.getElementById("songs1");
var prv=document.getElementById("prv");
var next=document.getElementById("next");
//给中间播放按钮注册单击事件：

ply01.onclick=function(){
    if(play){
        songs1.play();
        play=false;
    }else{
        songs1.pause();
        play=true;
    }
}
//给下一曲按钮注册单击事件：
var playTime=songs1.currentTime;
var musics=1;
next.onclick=function(){
    if(musics==9) {
        musics = 0;
    }else if(musics==1){
        songs1.play();
        musics++;
    }else{
        musics++;
    }

    var str="audios/0";
    songs1.src=str+musics+".mp3";
    songs1.play();
}
//给上一曲按钮注册单击事件：
prv.onclick=function(){
    if(musics==0) {
        musics = 9;
    }else{
        musics--;
    }
    var str="audios/0";
    songs1.src=str+musics+".mp3";
    songs1.play();
    console.log(playTime);
}

