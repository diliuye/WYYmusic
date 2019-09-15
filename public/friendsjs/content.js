/**
 * Created by wangyue on 2017/7/21.
 */

$(function () {
    $("#login").click(function () {
        $("#login-block").show();
    })
    $("#closeContent").click(function () {
        $("#login-block").hide();
    })
    var flag = false;
    var x,y;
    $("#login-block .header").mousedown(function (e) {
        flag = true;
        console.log(flag);
        x = e.pageX-$("#login-block").offset().left;
        y = e.pageY-$("#login-block").offset().top;
    })
    $("#login-block .header").mouseup(function () {
        flag = false;
        console.log(flag);
    })
    $("body").mousemove(function (e) {
        if (flag)
        {
            $("#login-block").offset(
                {
                    left : e.pageX-x,
                    top : e.pageY-y
                }
            )
        }
    })
})
