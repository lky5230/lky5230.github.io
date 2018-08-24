/**
 * Created by xqing
 * uis投票基础功能
 * 调用接口：1，登陆验证 2，投票 3，排行 4，搜索 5，批量查询
 */

;(function (w, $) {
    function uisVote(opts) {

        var defaultOpts = {
            node: null
        };

        /**
         * 参数合并
         */
        this.opts = $.extend(defaultOpts, opts);

        /**
         * 请求URL
         */
        this.url = {
            // 测试服host指向 192.168.60.113 xqtest.sctv.com

            //登陆login:'http://xqtest.sctv.com:9080/api/transmitRequest/user/loginByToken',
            //login:'http://uistest.sctv.com:8080/api/transmitRequest/user/loginByToken',
            login:'http://uisact.sctv.com:28080/api/transmitRequest/user/loginByToken',
            //投票
            // vote:'http://xqtest.sctv.com:9080/api/vote/add',
            //vote:'http://uistest.sctv.com:8080/api/vote/add',
            vote:'http://uisact.sctv.com:28080/api/vote/add',
            //排行
            // top:'http://xqtest.sctv.com:9080/api/vote/total_top_n',
            //top:'http://uistest.sctv.com:8080/api/vote/total_top_n',
            top:'http://uisact.sctv.com:28080/api/vote/total_top_n',
            //搜索
            // search:'http://xqtest.sctv.com:9080/api/vote/seed_list_mobile',
            //search:'http://uistest.sctv.com:8080/api/vote/seed_list_mobile',
            search:'http://uisact.sctv.com:28080/api/vote/seed_list_mobile',
            //当前票数（批量查询）
            // batch:'http://xqtest.sctv.com:9080/api/vote/seed_mobile',
            //batch:'http://uistest.sctv.com:8080/api/vote/seed_mobile',
            batch:'http://uisact.sctv.com:28080/api/vote/seed_mobile',
            // 用户状态/剩余票数
            // userInfo:'http://xqtest.sctv.com:9080/api/vote/user_status_by_token'
            //userInfo:'http://uistest.sctv.com:8080/api/vote/user_status_by_token'
            userInfo:'http://uisact.sctv.com:28080/api/vote/user_status_by_token'
            

        };

        /**
         * tag参数
         */
        this.platform={
            pandaVideo:"392861C427FE30420D959D043CD32FFD",
            scfocus:"FAF092CD57FCF2F335AA0BD2658E817B",
            pc:"41357B790F3A7A90B2A529BEEF629C43",
        };

        /**
         * 是否已登陆
         */
        this.login = true;

        /**
         * 是否使用mock数据
         */
        this.mock = false;

        /**
         * 用户token
         */
        this.token = '';
        this.uId = '';
        this.actId = '';
        this.count=20;


        this.jsonSource = $(this.opts.node).data('json')+'';
        this.person_json = '';

        this._init();

    }
    $.extend(uisVote.prototype, {
        /**
         * 初始化入口
         * @private
         */
        _init: function () {
            var self = this;
            self._uaCheck();
            self._uiBind();
            self._getInfo();
            self._getBatch();
            self._getUserCountAjax();


            // 设置json数据
            try {
                if(typeof(this.jsonSource)=="string"){
                    var that = this;
                    $.getJSON(this.jsonSource,function(json){
                        that.person_json=json;
                    });
                }else{
                    this.person_json=self.jsonSource;
                }
            }
            catch(err) {
                //在此处理错误
            }



        },
        /**
         * 检查ua，如果不在app内部则呼出蒙层
         * @private
         */
        _uaCheck: function () {
            var self = this;
            var windowHeight = window.screen.height;
            var unAppPopup = $('body').find('#j-to-download');
            var ua = navigator.userAgent;
            //给高度赋值
            unAppPopup.css('min-height',windowHeight);

            if($(self.opts.node).hasClass('index')){
                $('.index').css('min-height',windowHeight)
            }

            // alert(ua);
            if(ua.indexOf('pandavideo') > -1){

            }else {
                unAppPopup.removeClass('hide');
                $('.index').addClass('hide');
            }
        },
        /**
         * 从url中获取token，mid
         * 从dom中获取acid
         * @private
         */
        _getInfo: function () {
            var self = this,
                thisUrl = window.location.href,
                urlParaString = window.location.href.split("?")[1],
                paraArr = urlParaString.split("&"),
                len = paraArr.length;
            paraToken = null;
            function getCookie(name) {
                var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
                if(arr=document.cookie.match(reg))
                    return unescape(arr[2]);
                else
                    return null;
            }
            //从url中获取token
            if(thisUrl.indexOf('token') > -1){

                if (typeof(urlParaString)!='undefined'){
                    //url中取token
                    for (var i=0; i<len; i++) {
                        // document.write(cars[i] + "<br>");
                        if(typeof(paraArr[i].split("token=")[1])!= 'undefined'){
                            paraToken = paraArr[i].split("token=")[1];
                        }
                    }
                }

                self.token = paraToken;
            }


            //从dom中获取actid
            self.actId = $(self.opts.node).data('actid');



        },

        /**
         * 交互事件绑定
         * @private
         */
        _uiBind: function () {
            var self = this;
            var wrapper = $(self.opts.node);

            //点击投票按钮判定登录状态
            wrapper.delegate('.j_vote_btn','click',function () {
                var $this = $(this);
                self._loginCheck($this);
            });

            //点击搜索
            wrapper.delegate('.j_search','click',function () {
                var val = $(this).siblings('.j_search_input').val();
                self._search(val);
            });

            //人气排行
            wrapper.delegate('.j_rank','click',function () {
                // var val = $(this).siblings('.j_search_input').val();
                $('.j_rank').addClass('current');
                $('.j_reload').removeClass('current');
                self._topAjax();
            });

            //所有通过data-href的跳转带上token
            wrapper.delegate('[data-href]','click',function(){
                var $this = $(this);
                var $thisHref = $this.data('href');
                if($thisHref != ''){

                    var urlWithToken = $thisHref+ '?token=' + self.token;
                    // var urlWithToken = $thisHref;
                    window.location = urlWithToken;
                }
            });


        },


        /**
         * 批量查询（每个选手的票数）
         * @private
         */
        _getBatch: function () {
            var self = this;
            $.ajax({
                type: "get",
                url: self.url.batch,
                // data: JSON.stringify(self._voteJson(optionId)),
                data: self._getBatchJson(),
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function(data){
                    //批量查询成功回调
                    self._getBatchSucc(data);
                },
                error: function (data) {
                    var res = JSON.parse(data.responseText);
                    alert(res.err);
                }
            });

        },
        /**
         * 批量查询json
         * @returns {{}}
         * @private
         */
        _getBatchJson: function () {
            var self= this;
            var getBatchJson = {};
            getBatchJson.id = $(self.opts.node).data('list');
            getBatchJson.actId = self.actId;

            return getBatchJson
        },
        /**
         * 批量查询回调
         * @param returnJson
         * @private
         */
        _getBatchSucc:function(returnJson){
            var self = this;
            if(returnJson.code == 200){
                var teamArr = returnJson.List;
                for(var i=0, teamLen = teamArr.length; i<teamLen; i++){
                    var eachVote = teamArr[i].votes;
                    var eachId = teamArr[i].exId;

                    $('[data-batch]').find('.j_acitvity').find('.item').each(function(j){
                        var thisItem = $('[data-batch]').find('.j_acitvity').find('.item').eq(j);
                        if(thisItem.find('.j_vote_btn').attr('data-option-id') == eachId){
                            thisItem.find('.ticket .now-ticket').html(eachVote);
                        }
                    })
                }
            }else{
                alert(returnJson.Comment);
            }

        },


        /**
         * 查询已捐赠次数
         * @private
         */
        _getUserCountAjax:function () {
            var self = this;

            $.ajax({
                type: "get",
                url: self.url.userInfo,
                // data: JSON.stringify(self._getCountJson()),
                data: self._getCountJson(),
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function(data){
                    if(data.code == 200){
                        // console.log(data.userStatus.voteLeft);
                        $('#j_vote_left').html(data.userStatus.voteLeft);
						self.count = data.userStatus.voteOneClickCount

                    }
                    // console.log(data.voteCount);
                },
                error: function (data) {
                    //认证失败为-4 则不做处理
                    var res = JSON.parse(data.responseText);
                    if(res.code != -4){
                        // alert(res.err);
                    }
                }
            });
        },
        /**
         * token 用户手机号
         * actId  活动编号
         * platform 平台id
         * @returns {*}
         * @private
         */
        _getCountJson:function () {
            var self= this;
            var getCountJson = {};
            getCountJson.token = self.token;
            getCountJson.actId = self.actId;
            getCountJson.platform = self.platform.pandaVideo;

            return getCountJson
        },




        /**
         * 验证登陆状态：1，无有效token；2，token无效 即无有效登录token则呼起app登陆
         * 检查cookie中是否已有userToken 有的话拼接到url中重载页面
         * 检查url中是否有token 有的话进行token验证
         * @private
         */
        _loginCheck: function (node) {
            var self = this,
                thisUrl = window.location.href,
                urlParaString = window.location.href.split("?")[1],
                paraArr = null,
                paraToken = null,
                loginJson = {};
            //读取cookie
            function getCookie(name) {
                var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
                if(arr=document.cookie.match(reg))
                    return unescape(arr[2]);
                else
                    return null;
            }
            if(thisUrl.indexOf('token') > -1){
                if (typeof(urlParaString)!='undefined'){
                    paraArr = urlParaString.split("&");
                    //url中取token
                    for (var i=0,len=paraArr.length; i<len; i++) {
                        // document.write(cars[i] + "<br>");
                        if(typeof(paraArr[i].split("token=")[1])!= 'undefined'){
                            paraToken = paraArr[i].split("token=")[1];
                        }
                    }
                }

                loginJson.Token = paraToken;
                self.token = paraToken;
                loginUrl = self.url.login + '?token='+self.token;
                if(self.mock){
                    self._loginSucc(self.loginMock);
                }else {
                    $.ajax({
                        type: "post",
                        url: loginUrl,
                        data: JSON.stringify(loginJson),
                        contentType: "application/json;charset=utf-8",
                        dataType: "json",
                        success: function(data){
                            if(data.code == 200){
                                self._loginSucc(data,node);
                            }else {
                                alert(data.comment);
                                // $('#j-login').trigger('click');
                            }
                        },
                        error: function (data) {
                            var res = JSON.parse(data.responseText);
                            alert(res.comment);
                        }
                    });
                }

            }else {
                if(getCookie('userToken')){
                    window.location.href = thisUrl + '?token=' + getCookie('userToken');
                }else {
                    //未登录呼起app登录
                    console.log('未登录');
                    $('#j-login').trigger('click');
                }
            }

        },
        /**
         * 验证登陆成功后的逻辑
         * @private
         */
        _loginSucc: function(data,node){
            var self = this;
            self.uId = data.rslt.phone;
            self._voteAjax(node);
        },

        /**
         * 投票请求
         * @param node
         * @private
         */
        _voteAjax:function (node) {
            var self = this;
            var optionId = node.data('option-id');
            var thisNow = node.siblings('.ticket').find('.j_now');
			if(node.siblings('.ticket').get(0) == undefined){
				thisNow = node.siblings('.txt-area').find('.j_now');
			}
            var userNow = $('#j_vote_left');
			
            $.ajax({
                type: "get",
                url: self.url.vote,
                // data: JSON.stringify(self._voteJson(optionId)),
                data: self._voteJson(optionId),
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function(){
                    //投票成功回调
                    // $('#j_done').removeClass('hide');
                    alert('投票成功');
                    thisNow.html(parseInt($(thisNow).html()) + self.count);
                    userNow.html(parseInt($(userNow).html()) - self.count);

                },
                error: function (data) {
                    var res = JSON.parse(data.responseText);
                    // if(res.code == -5){
                    //     $('#j_more').removeClass('hide');
                    // }else if(res.code == -6){
                    //     $('#j_tips').removeClass('hide');
                    // }else{
                        alert(res.err);

                    // }
                }
            });
        },
        /**
         * 投票json
         * @param optionId
         * @returns {{}}
         * @private
         */
        _voteJson:function (optionId) {
            var self= this;
            var voteJson = {};
            voteJson.token = self.token;
            voteJson.actId = self.actId;
            voteJson.platform = self.platform.pandaVideo;
            voteJson.optionId  = optionId ;
            voteJson.count  = self.count ;

            return voteJson
        },

        /**
         * 搜索请求
         * @param val
         * @private
         */
        _search: function (val) {
            var self = this;
            $.ajax({
                type: "get",
                url: self.url.search,
                // data: JSON.stringify(self._voteJson(optionId)),
                data: self._searchJson(val),
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function(data){

                    //查询成功回调
                    if(data.code == 200){
                        self._searchSucc(data.page.content);

                    }
                },
                error: function (data) {
                    var res = JSON.parse(data.responseText);
                    alert(res.err);
                }
            });

        },
        /**
         * 搜索json
         * @param val
         * @returns {{}}
         * @private
         */
        _searchJson:function (val) {
            var self= this;
            var searchJson = {};
            searchJson.sortBy = 'time';
            searchJson.actId = self.actId;
            searchJson.keyword = val;

            return searchJson
        },
        /**
         * 搜索回调
         * @param data
         * @private
         */
        _searchSucc:function (data) {
            var self = this;
                var tempHtml = '';
                var uisArr= data;
                var personArry = self.person_json.data;

                for (var i = 0, teamLen = uisArr.length; i < teamLen; i++) {
                    var eachUis = uisArr[i];
                    for (var j = 0, personLen = personArry.length; j < personLen; j++) {
                        var eachTrs = personArry[j];
                        if (eachUis.id == eachTrs.id) {
                            tempHtml += '<div class="item"> ' +
                                '<div class="bg-gray"> ' +
                                '<a data-href="'+eachTrs.url +'"> ' +
                                '<div class="img-area"> ' +
                                '<img src="'+eachTrs.img+'"> ' +
                                '</div> ' +
                                '</a> ' +
                                '<div class="txt-area clear"> ' +
                                '<p class="name"> ' +
                                '<a>'+eachTrs.name+'</a> ' +
                                '</p> ' +
                                '</div> ' +
                                '</div> ' +
                                '<p class="ticket">票数:<span class="now-ticket j_now">'+eachUis.votes+'</span></p> ' +
                                '<div class="vote-btn j_vote_btn" data-option-id="'+ eachTrs.id+'">投票</div>'+
                                '</div>'
                        }
                    }

                }

                $('.j_acitvity').html(tempHtml);

        },


        /**
         * 排行榜请求
         * @private
         */
        _topAjax:function () {
            var self = this;
            $.ajax({
                type: "get",
                url: self.url.top,
                // data: JSON.stringify(self._voteJson(optionId)),
                data: self._topJson(),
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function(data){

                    //查询成功回调
                    if(data.code == 200){
                        // console.log(data)
                        self._topSucc(data.List);

                    }
                },
                error: function (data) {
                    var res = JSON.parse(data.responseText);
                    alert(res.err);
                }
            });
        },
        /**
         * 排行榜json
         * @returns {{}}
         * @private
         */
        _topJson:function () {
            var self= this;
            var topJson = {};
            topJson.actId = self.actId;
            topJson.n = 50;//前多少名

            return topJson

        },
        /**
         * 排行榜回调
         * @param data
         * @private
         */
        _topSucc:function(data){
            var self = this;
            var tempHtml = '';
            var uisArr= data;
            var personArry = self.person_json.data;

            for (var i = 0, teamLen = uisArr.length; i < teamLen; i++) {
                var eachUis = uisArr[i];
                for (var j = 0, personLen = personArry.length; j < personLen; j++) {
                    var eachTrs = personArry[j];
                    if (eachUis.optionId == eachTrs.id) {
                        tempHtml += '<div class="item"> ' +
                            '<span class="item-order">TOP'+eachUis.rank+'</span>'+
                            '<div class="bg-gray"> ' +
                            '<a TARGET="_blank" data-href="'+eachTrs.url +'"> ' +
                            '<div class="img-area"> ' +
                            '<img alt="-" src="'+eachTrs.img+'"> ' +
                            '</div> ' +
                            '</a> ' +
                            '<div class="txt-area clear"> ' +
                            '<p class="name"> ' +
                            '<a TARGET="_blank" href="'+eachTrs.url +'"> '+eachTrs.name+'</a> ' +
                            '</p> ' +
                            '</div> ' +
                            '</div> ' +
                            '<p class="ticket">票数:<span class="now-ticket j_now">'+eachUis.votes+'</span></p> ' +
                            '<div class="vote-btn j_vote_btn" data-option-id="'+ eachTrs.id+'">投票</div>'+
                            '</div>'
                    }
                }

            }

            $('.j_acitvity').html(tempHtml);
        },











        /**
         * 重新加载
         */
        reload: function () {
            this._init();
        }
    });

    /**
     * 暴露全局变量
     */
    if (!w.uisVote) {
        w.uisVote = function () {
            $('.j_vote').each(function () {
                new uisVote({
                    node: this
                });

            });
        };
    }

    /**
     * banner入口
     */
    $(function () {
        w.uisVote();
    });

})(window, jQuery);