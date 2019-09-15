/**
 * Created by wangyue on 2017/7/22.
 */

var deng = document.getElementById("deng");
var loginBlock = document.getElementById("loginBlock");
deng.onmouseover = function () {
    loginBlock.style.display = "block";
}
deng.onmouseout = function () {
    loginBlock.style.display = "none";
}
loginBlock.onmouseover = function () {
    loginBlock.style.display = "block";
}
loginBlock.onmouseout = function () {
    loginBlock.style.display = "none";
}
