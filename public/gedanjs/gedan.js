$('.M-box3').pagination({
    pageCount: 50,
    jump: true,
    coping: true,
    homePage: '首页',
    endPage: '末页',
    prevContent: '上页',
    nextContent: '下页',
    callback: function (api) {
        console.log(api.getCurrent())
    }
});