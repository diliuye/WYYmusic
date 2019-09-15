// 搜索栏的功能
$(function () {
    var dataColor = ['#fee7c8', '#e1bbb0', '#ff7300', '#040404', '#e0e0e0', '#e2ab75']
    //鼠标聚焦在搜索框时将ul显示出来
    $('#searchbox').focus(function () {
        // console.log('haha')
        $('#search').show();
    });

    $('#search').on('mouseover', 'li', function () {
        $('#search').children('li').removeClass('scolor');
        $(this).addClass('scolor')
    });
    $('#search').on('click', 'li', function () {
        // console.log('hah')
        var flag = true;
        //将内容显示到搜索框
        $('#searchbox').val($(this).html());
        $('#search>span[class="recentSearch"]').show();
        var liRec = $('#search>li[class="rec"]');
        for (var i = 0; i < liRec.length; i++) {
            if (liRec.eq(i).html() == $(this).html()) {
                flag = false
            }
        }
        if (flag) {
            var $newLi = $($("#template1").html()).html($(this).html());
            // console.log($newLi)
            $('#search').append($newLi);
        }
        $('#search>li[class="rec"]').show()
        $('#search').hide()
    });
    // var isCheck = true;
    $('#searchbox').blur(function () {
        // console.log('haha')
        $('#search').hide();
    });
    //轮播图
    var timerId = setInterval(moveTORight, 2000);
    $('div[class="carousel"]').mouseover(function () {
        clearInterval(timerId);
        $('div[class="arr"]').show();
    });
    $('div[class="carousel"]').mouseout(function () {
        $('div[class="arr"]').hide();
        timerId = setInterval(moveTORight, 1500);
    });

    var index = 0;
    $('div[class="left iconfont"]').click(function () {
        $('div[class="carousel"]>.w>ul>li').removeClass('current');
        $('div[class="point"]>span').removeClass('nowColor');
        if (index == 0) {
            index = 6;
        }
        index--;
        $('div[class="carousel"]>.w>ul>li').eq(index).addClass('current');
        $('div[class="point"]>span').eq(index).addClass('nowColor');
        $('div[class="carousel"]').css('backgroundColor', dataColor[index]);
    });
    $('div[class="right iconfont"]').click(function () {
        moveTORight();
    });
    function moveTORight() {
        $('div[class="carousel"]>.w>ul>li').removeClass('current');
        $('div[class="point"]>span').removeClass('nowColor');
        if (index == 5) {
            index = -1;
        }
        index++;
        $('div[class="carousel"]>.w>ul>li').eq(index).addClass('current');
        $('div[class="point"]>span').eq(index).addClass('nowColor');
        $('div[class="carousel"]').css('backgroundColor', dataColor[index]);
    }
    $('div[class="point"]>span').mouseover(function () {
        $('div[class="point"]>span').removeClass('nowColor');
        $('div[class="carousel"]>.w>ul>li').removeClass('current');
        $(this).addClass('nowColor');
        index = $(this).index();
        $('div[class="carousel"]>.w>ul>li').eq(index).addClass('current');
        $('div[class="carousel"]').css('backgroundColor', dataColor[index]);
    })
    //导航火箭
    var timer = null;
    window.onscroll = function () {
        //屏幕不断滚动  ， leader 不断最新值
        document.body.scrollTop > 250 ? show() : hide();
        leader = document.body.scrollTop;
        var target = 670 - leader;
        target < 320 ? target = 320 : target;
        // console.log(target)
        $('#help').css('top', target);
        $('#last').click(function () {
            target = 0;
            clearInterval(timer);
            timer = setInterval(function () {

                leader = leader + (target - leader) / 10;
                window.scrollTo(0, leader);
                if (leader == target) {
                    clearInterval(timer);
                }
            }, 10);
        })

    }
    function show() {
        // console.log($('#help'))
        $('#last').show();
    }
    function hide() {
        $('#last').hide();
    }
    //登陆
    $('#loginn').children('li').mouseover(function () {
        // console.log("haha")
        $('#loginn').children('li').css('backgroundColor', '#fff');
        $(this).css('backgroundColor', '#e5e5e5');
    });
    $('#box').mouseover(function () {
        $('#arrtop').show();
        $('#loginn').show();
    })
    $('#box').mouseout(function () {
        // console.log('hah')
        $('#arrtop').hide();
        $('#loginn').hide();
    })
})