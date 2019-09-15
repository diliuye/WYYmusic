/**
 * Created by 彭林 on 2017/5/10.
 */
function id(id){
  return document.getElementById(id);
}


//兼容 写一个函数
//获取某一个元素里面的文本的。
function getText(ele){
//    ele.textContent
//    ele.innerText
  //a.能力检测 （检测当前运行这个js代码的浏览器有没有这个功能）
  //如果当前这个浏览器支持textContent，那么ele.textContent就会有返回值， 不可能是undefined。
  if(typeof ele.textContent  == "string"){
    return ele.textContent;
  }else {
    return ele.innerText;
  }
}


//设置某一个元素里面的文本  //兼容 写一个函数
function setText(ele,text){
  //能力检测
  if(typeof ele.textContent  == "string"){
    ele.textContent = text;
  }else {
    ele.innerText = text;
  }
}


//要得到下一个元素节点，做兼容。
function getNextElement(ele){
  //能力检测
  if(ele.nextElementSibling){
    return ele.nextElementSibling;
  }else{
    var node = ele.nextSibling;
    while(node.nodeType != 1){
      node = node.nextSibling;
    }
    return node;
  }
}

//求上一个元素节点，做兼容
function getPreviousElement(ele){
  //能力检测
  if(ele.previousElementSibling){
    return ele.previousElementSibling;
  }else {
    var node = ele.previousSibling;
    while(node.nodeType != 1){
      node = node.previousSibling;
    }
    return node;
  }
}


//找第一个子元素节点，做兼容
function getFirstChildElement(ele){
  //能力检测
  if(ele.firstElementChild){
    return ele.firstElementChild;
  }else {
    var node = ele.firstChild;
    while(node.nodeType != 1){
      node= node.nextSibling;
    }
    return node;
  }
}


//得到最后一个子元素节点   兼容
function getLastChildElement(ele){
  //能力检测
  if(ele.lastElementChild){
    return ele.lastElementChild;
  }else {
    var node = ele.lastChild;
    while(node.nodeType != 1){
      node = node.previousSibling;
    }
    return node;
  }
}



//得到一个animateY 动画特效(匀速运动)
function animateY(obj,target){
  clearInterval(obj.timerId);
  obj.timerId = setInterval(function(){
    var current = obj.offsetLeft;
    var step = current < target ? 10 : -10;
    current += step;
    if(Math.abs(target - current) < Math.abs(step)){
      clearInterval(obj.timerId);
      obj.style.left = target + "px";
    }else {
      obj.style.left = current + "px";
    }
  },30);
}

//得到一个animateH 动画特效(缓速运动)
function animateH(obj,target){
  clearInterval(obj.timerId);
  obj.timerId = setInterval(function(){
    var current = obj.offsetLeft;
    var step = (target - current) / 10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    current += step;
    obj.style.left = current + "px";
    if(current == target){
      clearInterval(obj.timerId);
    }
  },30);
}


//-----------------缓动动画animate函数封装-属性中有透明度和层级-----------------

//  获取元素的样式的值-兼容测试
function getStyle(obj,attr){
  if(obj.currentStyle){
    return obj.currentStyle[attr];
  }else {
    return window.getComputedStyle(obj,null)[attr];
  }
}

function animate(obj,json,fn){
  clearInterval(obj.timerId);
  obj.timerId = setInterval(function(){
    //  假设计时器的所有使用者都已经到达目的地
    var flag = true;
    for(var key in json){
      //  透明度
      if(key == "opacity"){
        var current = getStyle(obj,key) * 100;
        var step = (json[key] * 100 - current) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        current += step;
        obj.style[key] = current / 100;
        if(current != json[key]){
          flag = false;
        }
        //  层级
      }else if(key == "zIndex"){
        var current = parseInt(getStyle(obj,key));
        obj.style[key] = current;
        if(current != json[key]){
          flag = false;
        }
        //  属性值
      }else {
        var current = parseInt(getStyle(obj,key));
        var step = (json[key] - current) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        current += step;
        obj.style[key] = current + "px";
        if(current != json[key]){
          flag = false;
        }
      }
    }
    //  假设成立,说明所有计时器使用者都到达目的地
    if(flag == true){
      //  计时器清除,所有元素都停止动作
      clearInterval(obj.timerId);
      //  判断 回调函数 参数 是否是一个 函数
      if(typeof fn == "function"){
        fn();
      }
    }
  },50);


  //获取页面的scrollTop和页面的scrollLeft
  function getScroll(){
    return {
      scrollLeft : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
      scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    };
  }

  //封装一个函数，用来获取页面的clientWidth和页面的clientHeight
  function getClient(){
    return {
      clientWidth : window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth|| 0,
      clientHeight : window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight|| 0
    }
  }
}

//  封装一个函数做兼容，获取pageX和pageY的值
  function getPage(e){
    e = e || window.event;
    return {
      //如果你的浏览器支持e.pageX，直接获取就好了。
      //如果你的浏览器不支持e.pageX，那就计算出这个值（当前可视区的距离加上滚出去的距离。）
      pageX: e.pageX || e.clientX + document.documentElement.scrollLeft,
      pageY: e.pageY || e.clientY + document.documentElement.scrollTop
    };
}
