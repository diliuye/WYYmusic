function load() {
    var pageIndex = Number.parseInt(document.getElementById("page_index").value);

    pageIndex = pageIndex + 10;
    document.getElementById("page_index").value = pageIndex;

    var obj = {pageIndex:pageIndex};
    console.log(obj);

    $.post(
        '/hometwo',
        obj,
        function (result) {
            console.log(result);
            var show_again = "";
            for(var i = 0 ; i < result.length ; i++){
                // show_again = show_again + "";
                show_again +=
                    `
            <div>
                <li>
                    <div class="u-cover">
                         <img src=${result[i].home_img}>
                         <a class="msk" href="#" title=" "></a>
                         <div class="music-bottom7">
                            <a class="icon-play" href="#"></a>
                            <span class="icon-headset"></span>
                            <span class="nb">82万</span>
                         </div>
                    <p class="music-dec">
                    <a class="f-thide" href="#">${result[i].home_text}</a>                
                    </p>
                    <p>
                    <span class="music-fc4">by</span>
                    <a class="music-nm" href="#">${result[i].home_text1}</a>
                    <i class="u-icn-84"></i>
                    </p>               
                       
                    </div>
                 </li>
             </div>
                    `
            }

            var ul_show = document.getElementsByClassName("ul_active")[0];
            ul_show.innerHTML = ul_show.innerHTML + show_again;


        },
        'json'
    );
}