$("#left").mouseover(function () {
    $("#left").css("opacity", "1");
}).mouseout(function () {
    $("#left").css("opacity", "0.08");
})
$("#right").mouseover(function () {
    $("#right").css("opacity", "1");
}).mouseout(function () {
    $("#right").css("opacity", "0.08");
})
$("#right").click(function () {
    $("#ul2").css("display", "block");
    $("#ul1").css("display", "none");
    $("#round2").css("backgroundColor", "#b92300");
    $("#round1").css("backgroundColor", "#ddd");
})
$("#left").click(function () {
    $("#ul1").css("display", "block");
    $("#ul2").css("display", "none");
    $("#round2").css("backgroundColor", "#ddd");
    $("#round1").css("backgroundColor", "#b92300");
})
$("#round2").click(function () {
    $("#ul2").css("display", "block");
    $("#ul1").css("display", "none");
    $("#round2").css("backgroundColor", "#b92300");
    $("#round1").css("backgroundColor", "#ddd");
})
$("#round1").click(function () {
    $("#ul1").css("display", "block");
    $("#ul2").css("display", "none");
    $("#round1").css("backgroundColor", "#b92300");
    $("#round2").css("backgroundColor", "#ddd");
})
$("#lb2>ul>li").mouseover(function () {
    $(this).css("backgroundColor", "#f6f7f7");
})
$("#lb2>ul>li").mouseout(function () {
    $(this).css("backgroundColor", "white");
})
$("a").mouseover(function () {
    $(this).css("textDecoration", "underline");
}).mouseout(function () {
    $(this).css("textDecoration", "none");
})
$(".recommend-main-zmx>ul>li:even").css("backgroundColor", "#fff");
$(".recommend-main-zmx>ul>li:odd").css("backgroundColor", "#eee");
$(".recommend-main-zmx>ul>li").mouseover(function () {
    $(this).children(".pt1-zmx").children().eq(1).css("display", "block");
}).mouseout(function () {
    $(this).children(".pt1-zmx").children().eq(1).css("display", "none");

})
$(".recommend-main-zmx>ul>li").children(".last-zmx").children().mouseover(function () {
    $(".recommend-main-zmx>ul>li").children(".last-zmx").children().css("textDecoration", "none");
})
$(".recommend-main-zmx>ul>li").children(".last1-zmx").children().mouseover(function () {
    $(".recommend-main-zmx>ul>li").children(".last1-zmx").children().css("textDecoration", "none");
})
$(".recommend-main-zmx>ul>li").mouseover(function () {
    $(this).children(".pt2-zmx").children().eq(1).css("display", "block");
}).mouseout(function () {
    $(this).children(".pt2-zmx").children().eq(1).css("display", "none");
})
$("#gotop").mouseover(function () {
    $(this).children("a").css("textDecoration", "none");
})
var goTop = document.getElementById('gotop');
window.onscroll = function () {
    var scrollTop = getScroll().scrollTop;
    if (scrollTop > 5) {
        goTop.style.display = "block";
    } else {
        goTop.style.display = "none";
    }
}
function getScroll() {
    return {
        scrollLeft: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
        scrollTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    };
}