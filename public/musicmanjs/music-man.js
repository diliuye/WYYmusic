/**
 * Created by Bobby on 2017/7/24.
 */

$(function () {
    //������li��ӵ���¼�
    $('.music-switch li').mouseenter(function () {
        //�ڵ���¼������������li��current��
        $('.music-switch li').removeClass('music-8');
        // ���ñ����li���current
        $(this).addClass('music-8');

        //��ȡ�����li��������������*�߶�(��ʵ������ʾ����ĸ߶�)�õ�ƫ��ֵ����ȡ����
        var offsetY = -($(this).index() * $('.home').height());

        // �ѸոյĽ�����ݸ�ͼƬ������top
        $('.home').animate({
            'top': offsetY
        }, 1000)


    })
})


//�����¼�
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
    //�ڵ���¼������������li��current��
    $('.music-switch li').removeClass('music-8');
    // ���ñ����li���current
    $('.music-switch li').eq(num).addClass('music-8');
}


//�����������ҵ���ֲ�ͼ
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