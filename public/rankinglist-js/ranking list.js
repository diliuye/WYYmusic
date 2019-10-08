/**
 * Created by xusheng on 2017/7/18.
 */
//  顶部导航的开始

$('.m-top>.m-bottom-nav>.m-bottom-nav-list>ul>li').mouseover(function () {
    $('.m-top>.m-bottom-nav>.m-bottom-nav-list>ul>li').children().eq(this).removeClass('background');
})

//  顶部导航的结束

//  主体部分的开始

//  侧边栏的开始
//  侧边栏上  云音乐飙升榜  鼠标移入事件
var index1 = 0;
$('.m-main-side>.m-main-side-top>ul>li').mouseover(function () {
    $(this).children().css('backgroundColor', '#e6e6e6');
    $('.m-main-side>.m-main-side-top>ul>li').eq(index1).children().css('backgroundColor', '#ccc')

})
//  鼠标移出事件
$('.m-main-side>.m-main-side-top>ul>li').mouseout(function () {
    $(this).children().css('backgroundColor', '#F7F7F7');
    $('.m-main-side>.m-main-side-top>ul>li').eq(index1).children().css('backgroundColor', '#ccc')

})
$('.m-main-side>.m-main-side-top>ul>li').click(function () {
    $('.m-main-side>.m-main-side-top>ul>li').eq(index1).children().css('backgroundColor', '#F7F7F7')
    $('.m-main-content').children().hide();
    $('.m-main-content').children().eq($(this).index()).show();
    $(this).children().css('backgroundColor', '#ccc');
    // flag = true;
    index1 = $(this).index();
})

//  侧边栏  全球音乐榜  鼠标移入事件

var index2 = 0;
$('.m-main-side>.m-main-side-bottom>ul>li').mouseover(function () {
    $(this).children().css('backgroundColor', '#e6e6e6');
    //$('.m-main-side>.m-main-side-bottom>ul>li').eq(index2).children().css('backgroundColor', '#ccc')

})
//  鼠标移出事件
$('.m-main-side>.m-main-side-bottom>ul>li').mouseout(function () {
    $(this).children().css('backgroundColor', '#F7F7F7');
    //$('.m-main-side>.m-main-side-bottom>ul>li').eq(index2).children().css('backgroundColor', '#ccc')

})
$('.m-main-side>.m-main-side-bottom>ul>li').click(function () {
    $('.m-main-side>.m-main-side-bottom>ul>li').eq(index2).children().css('backgroundColor', '#F7F7F7')
    $('.m-main-content').children().hide();
    $('.m-main-content').children().eq($(this).index()).show();
    //$(this).children().css('backgroundColor', '#ccc');
    // flag = true;
    index2 = $(this).index();
})


//  侧边栏的结束


//  飙升榜上部的开始-----------------------

$

//  飙升榜上部的结束-----------------------

//  飙升榜中部的开始----------------

$('#center-content-list>li:odd').css('backgroundColor','#fff');
$('#center-content-list>li>ul>').eq(2).css({
    cursor: 'pointer',
    textDecoration: 'underline'
});

//  飙升榜中部的结束----------------





























//  主体部分的结束


