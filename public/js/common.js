/**
 * Created by Walker on 2017/7/13.
 */
/**
 * 阻止事件冒泡的兼容函数
 * @param e
 */
function stopPropagetion(e) {
  if(e&& e.stopPropagation){
    e.stopPropagation();
  }else{
    e.cancelBubble= true;
  }
}
/**
 * 移除事件兼容
 * @param obj
 * @param type
 * @param listener
 */
function removeEventListener(obj,type,listener) {
  if(obj.removeEventListener){
    obj.removeEventListener(type,listener,false)
  } else if (obj.detachEvent){
    obj.detachEvent("on"+type,listener)
  }else {
    obj["on"+type] = null;
  }
}
/**
 * 注册事件兼容
 * @param obj
 * @param type
 * @param listener
 */
function addEventListener(obj,type,listener) {
  if(obj.addEventListener){
    obj.addEventListener(type,listener,false);
  } else if(obj.attachEvent) {
    obj.attachEvent("on" + type,listener);
  } else {
    obj["on"+type] = listener;
  }
}
/**
 * 封装了一个获取页面被卷去的高度或是左侧距离的函数
 * @returns {{scrollTop: (Number|number), scrollLeft: (Number|number)}}
 */
function getScroll() {
  return {
    scrollTop: window.pageYOffset || document.documentElement.scrollTop||document.body.scrollTop||0,
    scrollLeft: window.pageXOffset || document.documentElement.scrollLeft||document.documentElement.scrollLeft||0
  }
}

function getClient(){
  return {
    clientWidth : document.documentElement.clientWidth||window.innerWidth||  document.body.clientWidth|| 0,
    clientHeight :document.documentElement.clientHeight||window.innerHeight|| document.body.clientHeight|| 0
  }
}

function getPage(e){
  e = e||window.event;
  return {
    pageX: e.pageX|| e.clientX + document.documentElement.scrollLeft,
    pageY: e.pageY|| e.clientY + document.documentElement.scrollTop
  }
}

/**
 * 封装了一个兼容版本的获取标签间内容的函数
 * @param ele
 * @returns {*}
 */
function getText(ele) {
  // 能力检测    就是要看当前的浏览器是否支持此对象的属性或是方法
  if (ele.innerText) {
    return ele.innerText;
//      return 2;
  } else {
    return ele.textContent;
//      return 20;
  }
}

/**
 * 封装了一个兼容版本的设置标签间内容的函数
 * @param ele
 * @param value
 */
function setText(ele, value) {
  if (typeof ele.innerText == "string") {
    ele.innerText = value;
  } else {
    ele.textContent = value;
  }
}

/**
 * 封装了一个兼容版本的获取下一个标签节点的函数
 * @param ele
 * @returns {*}
 */
function getNextElement(ele) { // undefined
                               //能力检测  就是要看当前的浏览器是否支持此对象的属性或是方法
  if (ele && ele.nextElementSibling) { // 逻辑   短路运算
    return ele.nextElementSibling;
  } else { // IE8
    if (ele) {
      ele = ele.nextSibling; // 因为下一个节点，有可能是文本、注释、或是标签，所以需要判断节点类型，而且需要用while来判断
      while (ele.nodeType != 1) {
        ele = ele.nextSibling;
      }
      return ele;
    }
  }
}
/**
 * 封装了一个兼容版本的获得上一个标签节点的函数
 * @param ele
 * @returns {*}
 */
function getPreviousElement(ele) {
  // 能力检测
  if (ele) {
    if (ele.previousElementSibling) { // 高级浏览器支持的方式
      return ele.previousElementSibling;
    } else {
      ele = ele.previousSibling;
      while (ele.nodeType != 1) {
        ele = ele.previousSibling;
      }
      return ele;
    }
  }
}


/**
 * 封装了一个兼容版本的获得第一个子标签节点的函数
 * @param ele
 * @returns {*}
 */
function getFirstElement(ele) {
  // 能力检测
  if (ele) {
    if (ele.firstElementChild) {
      return ele.firstElementChild;
    } else {
      ele = ele.firstChild;//先用各浏览器支持的这个属性获得一下第一个子节点
      while (ele.nodeType != 1) {
        ele = ele.nextSibling;
      }
      return ele;
    }
  }
}
/**
 * 封装了一个兼容版本的获得最后一个子标签节点的函数
 * @param ele
 * @returns {*}
 */
function getLastElement(ele) {
  // 能力检测
  if (ele) {
    if (ele.lastElementChild) {
      return ele.lastElementChild;
    } else {
      ele = ele.lastChild;//先用各浏览器支持的这个属性获得一下第一个子节点
      while (ele.nodeType != 1) {
        ele = ele.previousSibling;
      }
      return ele;
    }
  }
}

function $$(id){
  return  document.getElementById(id);
}


