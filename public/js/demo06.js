/**
 * Created by Walker on 2017/7/15.
 */
window.onload = function () {
  var smallnav = $$("smallnav");
  var imgShow = $$("imgShow");

  //console.log(smallnav);
  var navIndex = smallnav.getElementsByTagName("a");
  //console.log(navIndex);
  var contentIndex = imgShow.getElementsByTagName("li");

  for (var i = 0; i < navIndex.length; i++) {
    navIndex[i].onmouseover = function () {
      this.style.textDecoration = "underline";
    }
    navIndex[i].onmouseout = function () {
      this.style.textDecoration = "none"
    }
  }
  for (var i = 0; i < contentIndex.length; i++) {
    contentIndex[i].children[1].onmouseover = function () {
      this.style.textDecoration = "underline";
    }
    contentIndex[i].children[1].onmouseout = function () {
      this.style.textDecoration = "none";
    }
  }



}