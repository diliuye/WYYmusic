/**
 * Created by xusheng on 2017/7/15.
 */
//网易云音乐 底部 js 开始

//  显示播放器

var bbp = document.getElementById(".g-btmbar-p");
var footBar = document.getElementById("g-btmbar");
var fixBtn1 = document.getElementById("fixBtn1");
var fixBtn2 = document.getElementById("fixBtn2");
var footBox = document.getElementById("auto-id-fpboJHu88h3Feay2");
var ply01 = document.getElementById("ply01");
var ply02 = document.getElementById("ply02");
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
ply01.onclick = function  () {
    ply02.style.display = "block";
    ply01.style.display = "none";
}