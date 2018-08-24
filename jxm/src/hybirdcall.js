/**
 * Created by xqing on 2018/2/28.
 */
(function(win) {
    var ua = navigator.userAgent;
    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r !== null) return unescape(r[2]);
        return null;
    }
    function isAndroid() {
        return ua.indexOf('Android') > 0;
    }
    function isIOS() {
        return /(iPhone|iPad|iPod)/i.test(ua);
    }
    var mobile = {
        /**
         *通过bridge调用app端的方法
         * @param method
         * @param params
         * @param callback
         */
        callAppRouter: function(method, params, callback) {
            var req = {
                'Method': method,
                'Data': params
            };
            if (isIOS()) {
                win.bridge.callRouter(req, function(err, result) {
                    var resultObj = null;
                    var errorMsg = null;
                    if (typeof(result) !== 'undefined' && result !== 'null' && result !== null) {
                        resultObj = JSON.parse(result);
                        if (resultObj) {
                            resultObj = resultObj['result'];
                        }
                    }
                    if (err !== 'null' && typeof(err) !== 'undefined' && err !== null) {
                        errorMsg = err;
                    }
                    callback(err, resultObj);
                });
            } else if (isAndroid()) {
                //生成回调函数方法名称
                var cbName = 'CB_' + Date.now() + '_' + Math.ceil(Math.random() * 10);
                //挂载一个临时函数到window变量上，方便app回调
                win[cbName] = function(err, result) {
                    var resultObj;
                    if (typeof(result) !== 'undefined' && result !== null) {
                        resultObj = JSON.parse(result)['result'];
                    }
                    callback(err, resultObj);
                    //回调成功之后删除挂载到window上的临时函数
                    delete win[cbName];
                };
                win.bridge.callRouter(JSON.stringify(req), cbName);
            }
        },
        login: function() {
            // body...
//                window.webkit.messageHandlers.login.postMessage(null);//ios
            this.callAppRouter('Login', null, function(errMsg, res) {
                // body...

                if (errMsg !== null && errMsg !== 'undefined' && errMsg !== 'null') {

                } else {
                    alert(res);
                    var name = res['phone'];
                    if (name !== 'undefined' && name !== 'null') {
//                            var button = document.getElementById('loginButton');
//                            button.innerHTML = name;
                        console.log(name);
                    }
                }
            });
        },
        reg: function() {
            // body...
//                window.webkit.messageHandlers.reg.postMessage(null);//ios
            this.callAppRouter('Reg', null, function(errMsg, res) {
                // body...

                if (errMsg !== null && errMsg !== 'undefined' && errMsg !== 'null') {

                } else {
                    alert(res);

                }
            });
        },
        pay: function() {
            // body...
//                window.webkit.messageHandlers.pay.postMessage(null);//ios
            this.callAppRouter('Pay', null, function(errMsg, res) {
                // body...

                if (errMsg !== null && errMsg !== 'undefined' && errMsg !== 'null') {

                } else {
                    alert(res);

                }
            });
        }
    };

    //将mobile对象挂载到window全局
    win.webBridge = mobile;
})(window);