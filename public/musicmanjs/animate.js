
//��װanimate����
//��timerId��Ϊ��������ԣ��Ǹ�divҪ�ƶ����Ǹ�div�ļ�ʱ��id�ͱ������Լ��������
    function animate(obj,target){
      clearInterval(obj.timerId);
      obj.timerId = setInterval(function () {
        //var currentLeft = obj.offsetLeft;
        var currentLeft = parseInt(obj.style.left);
        var step = currentLeft < target?15:-15;
        currentLeft += step;
        //���Ŀ��λ�ú͵�ǰλ��֮��ľ��룬С��һ����������ֱ�Ӹ�Ŀ��ֵ��
    //���Ŀ��λ�ú͵�ǰλ��֮��ľ��룬���ڵ���һ������������һ����
    if(Math.abs(target-currentLeft) < Math.abs(step)){
      clearInterval(obj.timerId);
      obj.style.left = target+"px";
    }else {
      obj.style.left = currentLeft+"px";
    }
  },20);
}

//��װanimate����
//��timerId��Ϊ��������ԣ��Ǹ�divҪ�ƶ����Ǹ�div�ļ�ʱ��id�ͱ������Լ��������
function animate2(obj,target){
    clearInterval(obj.timerId);
    obj.timerId = setInterval(function () {
        //var currentLeft = obj.offsetLeft;
        var currentTop = parseInt(obj.style.top);
        var step = currentTop < target?15:-15;
        currentTop += step;
        //���Ŀ��λ�ú͵�ǰλ��֮��ľ��룬С��һ����������ֱ�Ӹ�Ŀ��ֵ��
        //���Ŀ��λ�ú͵�ǰλ��֮��ľ��룬���ڵ���һ������������һ����
        if(Math.abs(target-currentTop) < Math.abs(step)){
            clearInterval(obj.timerId);
            obj.style.top = target+"px";
        }else {
            obj.style.top = currentTop+"px";
        }
    },20);
}