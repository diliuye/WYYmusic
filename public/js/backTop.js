/**
 * Created by wangyue on 2017/7/15.
 */
var backTop = document.getElementById("backTop");
var timerId_top = null;
backTop.onmouseover = function () {
    this.style.backgroundPositionX = "-325px";
}
backTop.onmouseout = function () {
    this.style.backgroundPositionX = "-265px";
}

onscroll = function () {
    var clientWidth = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight
        || 0;
    //console.log(clientWidth);
    if (getScroll().scrollTop > 0 )
    {
        backTop.style.display = "block";
        backTop.style.top = clientWidth-984+340 + getScroll().scrollTop + "px";
    }
    else
    {
        backTop.style.display = "none";
    }
}
backTop.onclick = function () {
    clearInterval(timerId_top);
    timerId_top = setInterval(function () {
        var current = getScroll().scrollTop;
        var step = Math.floor(0-current)/5;
        current += step;
        scrollTo(0,current);
        if (step == 0)
        {
            clearInterval(timerId_top);
        }
    },20)
}