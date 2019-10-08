
//封装animate函数
//把timerId作为对象的属性，那个div要移动，那个div的计时器id就保存在自己的属性里。
    function animate(obj,target){
      clearInterval(obj.timerId);
      obj.timerId = setInterval(function () {
        //var currentLeft = obj.offsetLeft;
        var currentLeft = parseInt(obj.style.left);
        var step = currentLeft < target?15:-15;
        currentLeft += step;
        //如果目标位置和当前位置之间的距离，小于一个步长，就直接赋目标值。
    //如果目标位置和当前位置之间的距离，大于等于一个步长，就走一步。
    if(Math.abs(target-currentLeft) < Math.abs(step)){
      clearInterval(obj.timerId);
      obj.style.left = target+"px";
    }else {
      obj.style.left = currentLeft+"px";
    }
  },20);
}

//封装animate函数
//把timerId作为对象的属性，那个div要移动，那个div的计时器id就保存在自己的属性里。
function animate2(obj,target){
    clearInterval(obj.timerId);
    obj.timerId = setInterval(function () {
        //var currentLeft = obj.offsetLeft;
        var currentTop = parseInt(obj.style.top);
        var step = currentTop < target?15:-15;
        currentTop += step;
        //如果目标位置和当前位置之间的距离，小于一个步长，就直接赋目标值。
        //如果目标位置和当前位置之间的距离，大于等于一个步长，就走一步。
        if(Math.abs(target-currentTop) < Math.abs(step)){
            clearInterval(obj.timerId);
            obj.style.top = target+"px";
        }else {
            obj.style.top = currentTop+"px";
        }
    },20);
}