/**
 * Created by Bobby on 2017/7/15.
 */
var link = document.getElementById("link");
var loginVip = document.getElementById("loginVip");
//var loginPic = document.getElementById("loginPic")
//var login = document.getElementById("login"); //��¼��
var closeBtn = document.getElementById("closeBtn"); //�رհ�ť
//var title = document.getElementById("title"); //��¼��ͷ��
var loginTitle = document.getElementById("loginTitle");

//��linkһ����������Ƴ��¼�
link.onmousemove = function(){
    link.style.opacity = "1";
}
link.onmouseout = function(){
    link.style.opacity = "0";
}
//��link�����¼�
link.onclick = function(){
    loginVip.style.display = "block";
}
//���رհ�ť�����¼�
closeBtn.onclick = function(){
    loginVip.style.display = "none";
}

//����¼��ͷ��һ����갴���¼�
loginTitle.onmousedown = function(e){
    e = e || window.event;
    //��ȡ��ǰ�����title�е�����λ��
    var x = getPage(e).pageX - loginVip.offsetLeft ;
    var y = getPage(e).pageY - loginVip.offsetTop;

    //����ƶ��¼�
    document.onmousemove = function(e){
        e = e|| window.event;
        //��ȡ��ǰ����pagex��pagey
        var pagex = getPage(e).pageX;
        var pagey = getPage(e).pageY;
        //��login��style��left��top��ֵ
        loginVip.style.left = pagex - x +265 +"px";
        loginVip.style.top = pagey - y  +571 +"px";
    }
}
//��굯���¼�
    loginTitle.onmouseup = function(){
        document.onmousemove = null;
}