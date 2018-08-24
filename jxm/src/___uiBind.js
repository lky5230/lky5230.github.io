/**
 * Created by xqing on 2017/3/22.
 */
;(function (w, $) {
    function zxShow(opts) {
        var defaultOpts = {
            node: null
        };
        /**
         * 参数合并
         */
        this.opts = $.extend(defaultOpts, opts);
        this._init();
    }
    $.extend(zxShow.prototype, {
        /**
         * 初始化入口
         * @private
         */
        _init: function () {
            var self = this;

            self._uiBind();

        },

        /**
         * 交互事件绑定
         * @private
         */
        _uiBind: function(){
            var self = this;
            var wrapper = $(self.opts.node);

            //呼出活动规则弹窗
            wrapper.delegate('#j-call-rules','click',function () {
               $('#j-rules').removeClass('hide');
            });
            
            //关闭弹窗
            $('body').delegate('.j-pclose','click',function () {
                var $this = $(this);
                $this.parents('.popup').addClass('hide');
            });

            // //人气排行
            // wrapper.delegate('.j_rank','click',function () {
            //     var $this = $(this);
            //     $this.parents('.tab').find('.current').removeClass('current');
            //     $this.addClass('current');
            //     self._popularFun();
            // });

            //重载页面
            wrapper.delegate('.j_reload','click',function () {
                window.location.href = location.href+'?time='+((new Date()).getTime());
            });





        },
        /**
         * 人气前端排序
         * @private
         */
        _popularFun: function () {
            var temArr =[];
            var popularArr =[];
            var temHtml = '';
            function sortNumber(a,b){
                return b - a
            }
            for(var i = 0,dl = D.length ; i < dl ; i++){
                temArr[i] = D[i]+'.'+I[i];
            }
            popularArr = temArr.sort(sortNumber);
            for(var j = 0,pl = popularArr.length ; j < pl ; j++){
                //按照降序排序下来的id
                var thisIndex = popularArr[j].split('.')[1];
                if($('[data-num='+thisIndex+']').length > 0){
                    temHtml += '<div class="item">' +
                        '<span class="item-order"></span>' + $('[data-num='+thisIndex+']').parents('.item').html()+'</div>';
                }
            }
            $('.j_acitvity').html(temHtml);
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
    if (!w.zxShow) {
        w.zxShow = function () {
            $('.wrapper').each(function () {
                new zxShow({
                    node: this
                });
            });
        };
    }

    /**
     * banner入口
     */
    $(function () {
        w.zxShow();
    });

})(window, jQuery);