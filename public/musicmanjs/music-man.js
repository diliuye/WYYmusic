/**
 * Created by Bobby on 2017/7/24.
 */

$(function () {
    //给所有li添加点击事件
    $('.music-switch li').mouseenter(function () {
        //在点击事件里先清除所有li的current类
        $('.music-switch li').removeClass('music-8');
        // 再让被点的li添加current
        $(this).addClass('music-8');

        //获取被点的li的索引，用索引*高度(其实就是显示区域的高度)得到偏移值，再取负数
        var offsetY = -($(this).index() * $('.home').height());

        // 把刚刚的结果传递给图片容器的top
        $('.home').animate({
            'top': offsetY
        }, 1000)


    })
})


//滑轮事件
var home = document.getElementById('home');
var imgHeight = home.offsetHeight;
var num = 0;

window.onmousewheel = function (e) {

    var e = e || window.event;
    var target = -num * (imgHeight);
    var down = true;
    down = e.wheelDelta ? e.wheelDelta < 0 : e.detail > 0;
    if (down) {
        num++;
        if (num > 6) {
            num = 6;
        }
    } else {
        num--;
        if (num < 0) {
            num = 0;
        }
    }
    target = -num * (imgHeight);
    animate2(home, target)
    console.log(num);
    //在点击事件里先清除所有li的current类
    $('.music-switch li').removeClass('music-8');
    // 再让被点的li添加current
    $('.music-switch li').eq(num).addClass('music-8');
}


//第三部分左右点击轮播图
var musicBanners =document.getElementById("musicBanners");
var ad = document.getElementById("musicSlide");
var ul1 = document.getElementById("musicUl");
var imgWidth = ul1.children[0].offsetWidth;
var arrLeft = document.getElementById("poseLeft");
var arrRight = document.getElementById("poseRight");
var home = document.getElementById("home");

var index = 0;
arrRight.onclick=function(){
    if(index<ul1.children.length-4) {
        index++;
        var target = -index * (imgWidth + 20);
        console.log(target);
        animate(ul1, target);
    }
}

arrLeft.onclick=function(){
    if(index>0){
        index --;
        var target = - index * (imgWidth+20);
        animate(ul1,target);
    }
}

    $(function(){
    $('.footer-cb li').mouseover(function(){
        $("li[class='mask']").css('display','none');
        $(this).children('a').children('.pic').children('.mask').css(
            'display','block');
})
        $('.footer-cb li').mouseout(function(){
            $('.mask').css(
                'display','none');
        })
    })