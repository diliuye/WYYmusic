/**
 * Created by Bobby on 2017/7/22.
 */
$(function(){
        var flag = true;
    $('.music-choese').click(function(e){
        e.stopPropagation();
        if(flag){
            $('.n-sltlyr-show').slideDown();

            flag = false;
        }
        else{
            $('.n-sltlyr-show').slideUp();
            flag = true;
        }
    })

    $('.n-sltlyr-show').click(function (e) {
        e.stopPropagation();
    })
    $('body').click(function(){


            $('.n-sltlyr-show').slideUp();

    })



    $(".music-number2").click(function () {
        $(".music-number2").removeClass("showCurrent")
        $(this).addClass("music-number2 showCurrent")
    })

    $('.music-fr').click(function(){
        if(flag){
            $(this).removeClass('music-fr')
            $(this).addClass("music-fr1")
            $(this).children().first().css(
                'color','black'
            )
            $(this).children().last().css(
                'color','white'
            )
            flag = false;
        }else {
            $(this).removeClass('music-fr1')
            $(this).addClass("music-fr")
            $(this).children().first().css(
                'color','white'
            )
            $(this).children().last().css(
                'color','black'
            )
            flag=true;
        }

        })


    //    //music-selected
    //    $('.music-u-pager').click(function(){
    //        $('.music-u-pager').children("a").removeClass("music-number")
    //        $(this).addClass('showCurrent')
    //    },"a")
    //})

})


