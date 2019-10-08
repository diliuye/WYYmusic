
var enterSingerMiddle = document.getElementById("enterSingerMiddle")
var ifo =  enterSingerMiddle.children;


for(var i =0;i<ifo.length;i++){
    ifo[i].onmousemove = function(){
        this.style.backgroundColor = "#f4f4f4";
}
}
for(var i =0;i<ifo.length;i++){
    ifo[i].onmouseout = function(){
        this.style.backgroundColor = "#fafafa";
    }
}
