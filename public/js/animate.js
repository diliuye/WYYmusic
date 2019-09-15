/**
 * Created by 徐黎 on 2017/7/11.
 */

//animate函数封装（属性中有透明度和层级）：
function animate(obj,json,fn){
    clearInterval(obj.timerId);
    obj.timerId = setInterval(function () {
        //假设这一次所有的属性都已经到达了目的位置。
        var flag = true;
        for(var key in json){
            if(key == "opacity"){
                var current = getStyle(obj,key) * 100;
                //如果你的目标位置比当前位置要大，步长就要向上取整，
                //如果你的目标位置比当前位置要小，步长就要想下取值。
                var step = (json[key]*100 - current)/10;
                step = step > 0? Math.ceil(step):Math.floor(step);
                current += step;
                obj.style[key] = current/100;
                if(current/100 != json[key]){//如果这个属性的值不等于目的位置，所以此次假设失败。（current要除以100）
                    flag = false;
                }
            }else if(key == "zIndex"){
                var current = parseInt(getStyle(obj, key)) || 0;
                var target = json[key];//这个就是要达到的目标位置
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current = current + step;
                obj.style[key] = current;
//                    console.log(step+":"+current);
                if(current != json[key]){
                    flag = false;
                }
            }else{
                var current = parseInt(getStyle(obj,key));
                var step = (json[key] - current)/10;
                step = step > 0? Math.ceil(step):Math.floor(step);
                current += step;
                obj.style[key] = current +"px";
                if(current != json[key]){
                    flag = false;
                }
            }
        }
        //所有的属性都到达了目的位置，才可以清空计时器。
        if(flag == true){
            clearInterval(obj.timerId);
            //此时动画停下来了，停下来了继续做事情
            if(typeof fn == "function"){
                fn();
            }
        }
    },100);
}




//获取元素样式的值——兼容：
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return window.getComputedStyle(obj,null)[attr];
    }
}


function animate2(obj,target){
    clearInterval(obj.timerId);
    obj.timerId = setInterval(function () {
        var currentLeft = obj.offsetLeft;
        var step = currentLeft < target?10:-10;
        currentLeft += step;
        //??????±ê???????±?°???????????à???????????????¤?????±??????±ê????
        //??????±ê???????±?°???????????à?????ó?????????????¤????×???????
        if(Math.abs(target-currentLeft) < Math.abs(step)){
            clearInterval(obj.timerId);
            obj.style.left = target+"px";
        }else {
            obj.style.left = currentLeft+"px";
        }
        //console.log("1");
    },30);
}