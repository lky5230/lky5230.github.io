
//呼出活动规则弹窗
wrapper.delegate('#j-call-rules', 'click', function () {
    $('#j-rules').removeClass('hide');
});

//关闭弹窗
$('body').delegate('.j-pclose', 'click', function () {
    $(this).parents('.popup').addClass('hide');
});

//重载页面
wrapper.delegate('.j_reload', 'click', function () {
    window.location.href = location.href + '?time=' + ((new Date()).getTime());
});

//tag参数
this.platform={
    pandaVideo:"392861C427FE30420D959D043CD32FFD",
    scfocus:"FAF092CD57FCF2F335AA0BD2658E817B",
    pc:"41357B790F3A7A90B2A529BEEF629C43",
};

//是否已登陆（单独判断token是否为登录的接口）
login = false;

//用户token
token = '';

//检查ua
if(ua.indexOf('pandavideo') == -1){
    //$('#j-to-download') 显示去下载
}

/*
    !!! 点击投票按钮时，要先判定是否登录态 !!!
    1、thisUrl.indexOf('token') > -1  url有token，请求login判定token是否正确，正确才请求投票数据

    2、getCookie('userToken')有值，就url带token刷新浏览器
    //读取该cookie
    function getCookie(name) {
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    }

    3、均无token则呼起app登录
    $('#j-login').trigger('click');
    <div id="j-login" onclick="webBridge.login()"></div>

*/
//大多数跳转或请求需要带上token





















