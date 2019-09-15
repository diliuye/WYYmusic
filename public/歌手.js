
        //给左侧歌手类目设移入移出事件
        $('.move').mouseover(function(){
            $('.move').css('border','none')
            $(this).css('border','1px solid #d3d3d3')
            $('.move a').css('color','#333'); 
            $(this).children().eq(1).css('color','#980808');
            $('.singer-dot').css('backgroundColor','#333');
            $(this).children().eq(0).css('backgroundColor','#980808');     
        })

        $('.move').mouseout(function(){
            $('.move').css('border','none')
            $('.move a').css('color','#333'); 
            $('.singer-dot').css('backgroundColor','#333');
 
        })
        // 给入驻歌手设置移入移出事件
        $('.rz-singer li').mouseover(function(){
            $('.rz-singer li').css('opacity','.7')
            $(this).css('opacity','1');
        })

        $('.rz-singer li').mouseout(function(){
            $('.rz-singer li').css('opacity','.7')
        })

        // 给热门歌手设置移入移出事件
        $('.rm-singer li').mouseover(function(){
            $('.rm-singer li').css('opacity','.7')
            $(this).css('opacity','1');
        })

        $('.rm-singer li').mouseout(function(){
            $('.rm-singer li').css('opacity','.7')
        })