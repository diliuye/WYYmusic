
/**
 * ��ֹ�¼�ð�ݵļ��ݺ���
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
 * �Ƴ��¼�����
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
 * ע���¼�����
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
 * ��װ��һ����ȡҳ�汻��ȥ�ĸ߶Ȼ���������ĺ���
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
 * ��װ��һ�����ݰ汾�Ļ�ȡ��ǩ�����ݵĺ���
 * @param ele
 * @returns {*}
 */
function getText(ele) {
  // �������    ����Ҫ����ǰ��������Ƿ�֧�ִ˶�������Ի��Ƿ���
  if (ele.innerText) {
    return ele.innerText;
//      return 2;
  } else {
    return ele.textContent;
//      return 20;
  }
}

/**
* ��װ��һ�����ݰ汾�����ñ�ǩ�����ݵĺ���
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
 * ��װ��һ�����ݰ汾�Ļ�ȡ��һ����ǩ�ڵ�ĺ���
 * @param ele
 * @returns {*}
 */
function getNextElement(ele) { // undefined
  //�������  ����Ҫ����ǰ��������Ƿ�֧�ִ˶�������Ի��Ƿ���
  if (ele && ele.nextElementSibling) { // �߼�   ��·����
    return ele.nextElementSibling;
  } else { // IE8
    if (ele) {
      ele = ele.nextSibling; // ��Ϊ��һ���ڵ㣬�п������ı���ע�͡����Ǳ�ǩ��������Ҫ�жϽڵ����ͣ�������Ҫ��while���ж�
      while (ele.nodeType != 1) {
        ele = ele.nextSibling;
      }
      return ele;
    }
  }
}
/**
 * ��װ��һ�����ݰ汾�Ļ����һ����ǩ�ڵ�ĺ���
 * @param ele
 * @returns {*}
 */
function getPreviousElement(ele) {
  // �������
  if (ele) {
    if (ele.previousElementSibling) { // �߼������֧�ֵķ�ʽ
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
 * ��װ��һ�����ݰ汾�Ļ�õ�һ���ӱ�ǩ�ڵ�ĺ���
 * @param ele
 * @returns {*}
 */
function getFirstElement(ele) {
  // �������
  if (ele) {
    if (ele.firstElementChild) {
      return ele.firstElementChild;
    } else {
      ele = ele.firstChild;//���ø������֧�ֵ�������Ի��һ�µ�һ���ӽڵ�
      while (ele.nodeType != 1) {
        ele = ele.nextSibling;
      }
      return ele;
    }
  }
}
/**
 * ��װ��һ�����ݰ汾�Ļ�����һ���ӱ�ǩ�ڵ�ĺ���
 * @param ele
 * @returns {*}
 */
function getLastElement(ele) {
  // �������
  if (ele) {
    if (ele.lastElementChild) {
      return ele.lastElementChild;
    } else {
      ele = ele.lastChild;//���ø������֧�ֵ�������Ի��һ�µ�һ���ӽڵ�
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


