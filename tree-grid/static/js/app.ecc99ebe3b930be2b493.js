webpackJsonp([1],{0:function(t,e){},"6VpE":function(t,e){},"7UNn":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tree-wrap"},[i("div",{staticClass:"tree"},[i("ul",{staticClass:"table-header"},t._l(t.column,function(e,a){return i("li",{key:a,staticClass:"nowrap",style:[{width:e.width?e.width+"px":1==e.delete||1==e.operate?"50px":"",flex:e.width?"none":1==e.delete||1==e.operate?"none":1,padding:1==e.operate||1==e.delete?"0px":"0px 10px","min-width":1==e.operate||1==e.delete?"40px":"100px"}]},[1==e.operate?[i("i",{staticClass:"fa fa-cogs",staticStyle:{transform:"translateX(-12px)"},attrs:{"aria-hidden":"true"}})]:1==e.delete?i("span",[i("button",{staticClass:"btn-delete",attrs:{title:"删除所选项",disabled:t.deleteBtnDisable},on:{click:t.removeLine}},[t.deleteBtnDisable?i("i",{staticClass:"fa fa-spin fa-spinner",attrs:{"aria-hidden":"true"}}):t._e(),t._v(" "),t.deleteBtnDisable?t._e():i("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}})])]):i("span",[e.isTree?i("span",[i("button",{staticClass:"btn-refresh",attrs:{title:"刷新",disabled:t.refreshBtnDisable},on:{click:t.refreshTable}},[i("i",{staticClass:"fa fa-refresh",class:{"fa-spin":!!t.refreshBtnDisable},attrs:{"aria-hidden":"true"}})]),t._v("\r\n                     \r\n                ")]):t._e(),t._v("\r\n                "+t._s(e.name)+"\r\n            ")]),t._v(" "),i("span",{staticClass:"w-resize",on:{mousedown:function(i){t.willDragStart(e,i)}}})],2)})),t._v(" "),i("ul",{staticClass:"table-body"},t._l(t.data,function(e,a){return i("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"rowItem.show"}],key:e.id,staticClass:"table-body-li-wrap",on:{mouseleave:function(i){t.rowMouseLeave(e.id)},mouseenter:function(i){t.rowMouseEnter(e.id)}}},[1==t.uploading["uploading"+e.id]?i("div",{staticClass:"uploading"},[i("i",{staticClass:"fa fa-spin fa-spinner",attrs:{"aria-hidden":"true"}})]):t._e(),t._v(" "),i("div",{staticStyle:{display:"flex"}},t._l(t.column,function(a,n){return i("li",{key:n,staticClass:"table-body-li nowrap",class:{modify:1==e.modify},style:[{width:a.width?a.width+"px":1==a.delete||1==a.operate?"50px":"",flex:a.width?"none":1==a.delete||1==a.operate?"none":1,padding:1==a.operate?"0px":"0px 10px","padding-left":a.isTree?24*e.level+14+"px":1==a.operate?"0px":"14px",overflow:1==a.operate?"visible":"","min-width":1==a.operate||1==a.delete?"40px":"100px"}]},[a.isTree&&0!=e.children.length?[i("span",{directives:[{name:"show",rawName:"v-show",value:0==e.icon,expression:"rowItem.icon == false"}],on:{click:function(i){t.expand(e,!0)}}},[i("i",{staticClass:"fa fa-plus-square",attrs:{"aria-hidden":"true"}})]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:1==e.icon,expression:"rowItem.icon == true"}],on:{click:function(i){t.expand(e,!1)}}},[i("i",{staticClass:"fa fa-minus-square",attrs:{"aria-hidden":"true"}})])]:t._e(),t._v(" "),a.edit||a.isTree||a.operate||a.delete||"id"==a.prop?t._e():i("span",[t._v(" "+t._s(e[a.prop])+" ")]),t._v(" "),a.edit||a.isTree||a.operate||a.delete||"id"!=a.prop?t._e():i("span",[t._v(" "+t._s(t._f("timestamp__")(e[a.prop]))+" ")]),t._v(" "),a.edit?[i("span",{directives:[{name:"show",rawName:"v-show",value:!t.operateStatus["status"+e.id],expression:"!operateStatus['status'+rowItem.id]"}],staticClass:"no-wrap",staticStyle:{"text-align":"left"},attrs:{title:e[a.prop]}},[t._v("\r\n                            "+t._s(e[a.prop])+"\r\n                        ")]),t._v(" "),i("input",{directives:[{name:"show",rawName:"v-show",value:t.operateStatus["status"+e.id],expression:"operateStatus['status'+rowItem.id]"}],style:{width:a.isTree?"auto":"100%"},attrs:{type:"text"},domProps:{value:t.lineValue["lineValue"+a.prop+e.id]},on:{input:function(i){t.inputEdit(e.id,a.prop,i)}}})]:t._e(),t._v(" "),a.operate?[i("span",{staticClass:"hover-btn",on:{mouseover:function(i){t.mouseHover(e.id,1)},mouseout:function(i){t.mouseHover(e.id,2)}}},[t._m(0,!0),t._v(" "),i("transition",{attrs:{name:"as"}},[i("span",{directives:[{name:"show",rawName:"v-show",value:t.hoverBtn["hoverBtn"+e.id],expression:"hoverBtn['hoverBtn'+rowItem.id]"}],staticClass:"col-btn-group"},[i("span",{directives:[{name:"show",rawName:"v-show",value:!t.operateStatus["status"+e.id],expression:"!operateStatus['status'+rowItem.id]"}]},[i("button",{staticClass:"btn-edit",on:{click:function(i){t.operateBtn(e.id)}}},[i("i",{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}}),t._v(" 编辑\r\n                                        ")]),t._v(" "),i("button",{staticClass:"btn-add",on:{click:function(i){t.addLine(e.id,1)}}},[i("i",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}}),t._v(" 增加同级\r\n                                        ")]),t._v(" "),i("button",{staticClass:"btn-add",on:{click:function(i){t.addLine(e.id,2)}}},[i("i",{staticClass:"fa fa-plus-circle",attrs:{"aria-hidden":"true"}}),t._v(" 增加下级\r\n                                        ")]),t._v(" "),e.modify?i("button",{staticClass:"btn-upload",on:{click:function(i){t.upload(e.id)}}},[i("i",{staticClass:"fa fa-cloud-upload",attrs:{"aria-hidden":"true"}}),t._v(" 上传\r\n                                        ")]):t._e()]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:!!t.operateStatus["status"+e.id],expression:"!!operateStatus['status'+rowItem.id]"}]},[i("button",{staticClass:"btn-confirm",on:{click:function(i){t.saveBtn(e.id)}}},[i("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}}),t._v(" 确认\r\n                                        ")]),t._v(" "),i("button",{staticClass:"btn-cancel",on:{click:function(i){t.cancel(e.id)}}},[i("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}}),t._v(" 撤销\r\n                                        ")])])])])],1)]:t._e(),t._v(" "),a.delete?[i("span",{staticClass:"checkbox-span",class:{active:t.checkboxControl["active"+e.id]},on:{click:function(i){t.checkbox_change(e.id)}}},[t.checkboxControl["active"+e.id]?i("i",{staticClass:"fa fa-check-circle",attrs:{"aria-hidden":"true"}}):t._e(),t._v(" "),t.checkboxControl["active"+e.id]?t._e():i("i",{staticClass:"fa fa-circle-o",attrs:{"aria-hidden":"true"}})])]:t._e(),t._v(" "),e.modify&&0==n?[t._m(1,!0)]:t._e()],2)}))])})),t._v(" "),0==t.data.length?i("div",{staticClass:"no-data"},[i("i",{staticClass:"fa fa-file-o",attrs:{"aria-hidden":"true"}}),t._v("  数据为空\r\n    ")]):t._e()]),t._v(" "),t.treeLoading&&0!=t.data.length?i("div",{staticClass:"tree-loading"},[i("i",{staticClass:"fa fa-spinner fa-spin",attrs:{"aria-hidden":"true"}})]):t._e()])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"hover-btn-span"},[t._v("\r\n                                 "),i("i",{staticClass:"fa fa-pencil-square",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"modify-pin"},[i("span",{staticClass:"modify-pin-title"},[t._v("记得上传")]),t._v(" "),i("i",{staticClass:"fa fa-exclamation",attrs:{"aria-hidden":"true"}})])}],s={render:a,staticRenderFns:n};e.a=s},"84Yf":function(t,e){},EXDq:function(t,e,i){"use strict";var a=i("fDRT"),n=i("Up5l"),s=i("mPyB"),r=s(a.a,n.a,!1,null,null,null);e.a=r.exports},LV8r:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("test")],1)},n=[],s={render:a,staticRenderFns:n};e.a=s},M93x:function(t,e,i){"use strict";function a(t){i("84Yf")}var n=i("dYPY"),s=i("LV8r"),r=i("mPyB"),o=a,l=r(n.a,s.a,!1,o,null,null);e.a=l.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("f0wq"),n=i("M93x"),s=i("/oTv"),r=i("6VpE"),o=(i.n(r),i("iOHE"));i.n(o);a.a.use(s.a),a.a.config.productionTip=!1,new a.a({el:"#app",template:"<App/>",components:{App:n.a}})},Sz5k:function(t,e,i){"use strict";function a(t){i("YooD")}var n=i("kq5j"),s=i("7UNn"),r=i("mPyB"),o=a,l=r(n.a,s.a,!1,o,"data-v-250d2370",null);e.a=l.exports},Up5l:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("tree-grid",{attrs:{columns:t.columns,rowdata:t.data,needUpdate:t.needUpdate,treeLoading:t.treeLoading},on:{refreshTable:t.refreshTable,uploadmodify:t.uploadmodify,uploaddelete:t.uploaddelete}})],1)},n=[],s={render:a,staticRenderFns:n};e.a=s},YooD:function(t,e){},dYPY:function(t,e,i){"use strict";var a=i("EXDq");e.a={name:"app",components:{test:a.a}}},fDRT:function(t,e,i){"use strict";var a=i("fjjs"),n=i.n(a),s=i("Sz5k");e.a={data:function(){return{columns:[{name:"ID",prop:"id",width:120},{name:"删除",delete:!0},{name:"name字段",prop:"name",width:260,isTree:!0,edit:!0},{name:"操作",operate:!0},{name:"level",prop:"level",width:120},{name:"url",prop:"url",edit:!0}],data:[],needUpdate:Date.now(),treeLoading:!1}},created:function(){var t=this;this.treeLoading=!0,this.$http.get("static/menu.json").then(function(e){setTimeout(function(){t.treeLoading=!1,t.data=e.data,t.needUpdate=Date.now()},1400)})},methods:{refreshTable:function(){var t=this;this.treeLoading=!0,this.$http.get("static/menu.json").then(function(e){setTimeout(function(){t.treeLoading=!1,t.data=e.data,t.needUpdate=Date.now()},1400)})},uploadmodify:function(t){var e=n()(t,3),i=e[0],a=e[1],s=e[2];console.log(i),setTimeout(function(){Math.random()>.4?a():s()},1100)},uploaddelete:function(t){var e=n()(t,3),i=e[0],a=e[1],s=e[2];console.log(i),setTimeout(function(){Math.random()>.1?a():s()},1100)}},components:{treeGrid:s.a}}},iOHE:function(t,e){},kq5j:function(t,e,i){"use strict";function a(t){var e=[].concat(_()(t)),i=0,a=[];if(0==e.length)return[];e.forEach(function(t){t.level>i&&(i=t.level)}),e=e.map(function(t){return t.children=[],t.show=!0,t});for(var n=0;n<=i;n++)!function(t){a[t]=[],e.forEach(function(e){e.level==t&&a[t].push(e)})}(n);for(var n=a.length-1;n>=0;n--)for(var s=0;s<a[n].length;s++)!function(t,e){if(0!=e)for(var i=e-1,n=0;n<a[i].length;n++)a[i][n].id==t.parentid&&(a[i][n].icon=!0,a[i][n].children.push(t))}(a[n][s],n);return a[0]}function n(t){function e(t){if(0!=t.children.length)for(var i=0;i<t.children.length;i++)a.push(t.children[i]),e(t.children[i])}for(var i=[].concat(_()(t)),a=[],n=0;n<i.length;n++)a.push(i[n]),e(i[n]);return a}var s=i("9PQg"),r=i.n(s),o=i("u6qr"),l=i.n(o),d=i("SUjy"),c=i.n(d),u=i("fjjs"),h=i.n(u),f=i("07sj"),p=i.n(f),v=i("34v0"),m=i.n(v),w=i("Sxqw"),_=i.n(w);e.a={name:"treeGrid",props:{columns:{require:!0,type:Array},rowdata:{require:!0,type:Array},needUpdate:{require:!0},treeLoading:{default:!1}},data:function(){return{column:[],data:[],data_format:null,operate:{},hoverBtn:{},operateStatus:{},uploading:{},lineValue:{},checkboxControl:{},deleteIdArr:[],deleteBtnDisable:!1,refreshBtnDisable:!1}},filters:{timestamp__:function(t){return-1!=(t+"").indexOf("__timestamp__")?" - ":t}},created:function(){this.column=[].concat(_()(this.columns))},watch:{needUpdate:function(){this.init()}},methods:{refreshTable:function(){this.refreshBtnDisable=!0,this.$emit("refreshTable")},init:function(){if(0!=this.rowdata.length){this.refreshBtnDisable=!1,this.data=n(a([].concat(_()(this.rowdata))));var t=m()({},this.data[0]);for(var e in t)t.hasOwnProperty(e)&&(t[e]="");this.data_format=t,this.initValue()}},initValue:function(){for(var t=[].concat(_()(this.data)),e=[].concat(_()(this.column)),i=0;i<t.length;i++){this.$set(this.checkboxControl,"active"+t[i].id,!1);for(var a=0;a<e.length;a++)1==e[a].edit&&this.$set(this.lineValue,"lineValue"+e[a].prop+t[i].id,t[i][e[a].prop])}},rowMouseEnter:function(t){this.$set(this.operate,"operate"+t,!0)},rowMouseLeave:function(t){this.$set(this.operate,"operate"+t,!1)},mouseHover:function(t,e){1==e?this.$set(this.hoverBtn,"hoverBtn"+t,!0):2==e&&this.$set(this.hoverBtn,"hoverBtn"+t,!1)},willDragStart:function(t,e){function i(e){n.moveClientX=e.clientX;for(var i=n.moveClientX-n.startClientX,a=[].concat(_()(n.column)),r=0;r<a.length;r++)if(a[r].prop==t.prop){a[r].width=1*s+1*i;break}n.column=a}function a(){window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",a)}if(void 0!=t.prop&&void 0!=t.width){this.startClientX=e.clientX,this.colItem=m()({},t);var n=this,s=t.width;window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",a),window.addEventListener("mousemove",i),window.addEventListener("mouseup",a)}},expand:function(t,e){for(var i=[].concat(_()(this.data)),a=null,n=0;n<i.length;n++)if(i[n].id==t.id){i[n].icon=e;for(var s=p.a,r=n,o=i[n].level;;){if(r++,a=r,void 0==i[r])break;if(0==e){if(!(i[r].level>o))break;i[r].show=!1}else{if(!(i[r].level>o))break;if(i[r].level>s)continue;i[r].level==s&&(s=p.a),0==i[r].icon&&(s=i[r].level),i[r].show=!0}}}return this.data=i,[a,i]},inputEdit:function(t,e,i){for(var a=[].concat(_()(this.data)),n=([].concat(_()(this.column)),0);n<a.length;n++)if(a[n].id==t){a[n].editing=!0;break}this.data=a,this.$set(this.lineValue,"lineValue"+e+t,i.target.value)},operateBtn:function(t){this.$set(this.operateStatus,"status"+t,!0)},saveBtn:function(t){for(var e=[].concat(_()(this.data)),i=[].concat(_()(this.column)),a=0;a<e.length;a++)if(e[a].id==t){1==e[a].editing&&(e[a].modify=!0);for(var n=0;n<i.length;n++)1==i[n].edit&&(e[a][i[n].prop]=this.lineValue["lineValue"+i[n].prop+t]);break}this.data=e,this.$set(this.operateStatus,"status"+t,!1)},cancel:function(t){for(var e=[].concat(_()(this.data)),i=[].concat(_()(this.column)),a=0;a<e.length;a++)if(e[a].id==t){for(var n=0;n<i.length;n++)1==i[n].edit&&(this.lineValue["lineValue"+i[n].prop+t]=e[a][i[n].prop]);break}this.$set(this.operateStatus,"status"+t,!1)},upload:function(t){function e(){for(var e=[].concat(_()(this.data)),i=([].concat(_()(this.column)),0);i<e.length;i++)if(e[i].id==t){e[i].modify=!1,e[i].editing=!1;break}this.data=e,this.$set(this.uploading,"uploading"+t,!1)}function i(){console.log("上传失败！"),this.$set(this.uploading,"uploading"+t,!1)}for(var a=[].concat(_()(this.data)),n=0;n<a.length;n++)a[n].id==t&&(this.$set(this.uploading,"uploading"+t,!0),this.$emit("uploadmodify",[a[n],e.bind(this),i.bind(this)]))},addLine:function(t,e){if(1==e){for(var i=[].concat(_()(this.data)),a=null,n=0;n<i.length;n++)i[n].id==t&&(a=i[n]);var s=this.expand(a,!1),r=h()(s,2),o=r[0],l=r[1],d=Date.now()+"__timestamp__",u=m()({},this.data_format,{id:d,level:a.level,parentid:a.parentid,modify:!0,show:!0,children:[]}),f=i.filter(function(t){return t.id==u.parentid})[0];void 0!=f&&(this.$set(this.checkboxControl,"active"+u.id,this.checkboxControl["active"+f.id]),this.checkboxControl["active"+u.id]&&this.deleteIdArr.push(u.id)),l.splice(o,0,u),this.$set(this.operateStatus,"status"+d,!0),this.data=l}else if(2==e){for(var p=[].concat(_()(this.data)),v=null,w=null,b=0;b<p.length;b++)p[b].id==t&&(p[b].children=[!0],v=p[b],v.icon=!0,w=b);var g=Date.now()+"__timestamp__;",C=this.expand(v,!0),x=h()(C,2),k=(x[0],x[1]),y=m()({},this.data_format,{id:g,level:c()(v.level)+1,parentid:v.id,modify:!0,show:!0,children:[]}),$=p.filter(function(t){return t.id==y.parentid})[0];this.$set(this.checkboxControl,"active"+y.id,this.checkboxControl["active"+$.id]),this.checkboxControl["active"+y.id]&&this.deleteIdArr.push(y.id),k.splice(c()(w)+1,0,y),this.$set(this.operateStatus,"status"+g,!0),this.data=k}},checkbox_change:function(t){var e=this,i=this.checkboxControl["active"+t];if(this.$set(this.checkboxControl,"active"+t,!i),i)!function(){for(var i=[].concat(_()(e.data)),a=0;a<i.length;a++)if(i[a].id==t){var n=function(){var t=function t(e){if(this.$set(this.checkboxControl,"active"+e.parentid,!1),e.parentid!=e.id)for(var a=0;a<i.length;a++)i[a].id==e.parentid&&t.call(this,i[a])},n=a,s=i[a].level;for(e.$set(e.checkboxControl,"active"+i[a].parentid,!1);(n++,void 0!=i[n])&&i[n].level>s;)e.$set(e.checkboxControl,"active"+i[n].id,!1);return t.call(e,i[a]),"break"}();if("break"===n)break}}();else for(var a=[].concat(_()(this.data)),n=0;n<a.length;n++)if(a[n].id==t){for(var s=n,r=a[n].level;(s++,void 0!=a[s])&&a[s].level>r;)this.$set(this.checkboxControl,"active"+a[s].id,!0);break}this.deleteIdArr=[];for(var o in this.checkboxControl)this.checkboxControl.hasOwnProperty(o)&&1==this.checkboxControl[o]&&this.deleteIdArr.push(o.split("active")[1])},removeLine:function(){function t(){var t=this,e=[].concat(_()(this.data)),i=[].concat(_()(this.deleteIdArr));i.map(function(t){return t+=""});for(var a=0;a<i.length;a++)this.$set(this.uploading,"uploading"+i[a],!1);var n=!0,s=!1,o=void 0;try{for(var d,c=l()(r()(this.checkboxControl));!(n=(d=c.next()).done);n=!0){var u=d.value,f=h()(u,2),p=f[0];f[1];!function(e,a){i.forEach(function(i){e.split("active")[1]==i&&delete t.checkboxControl[e]})}(p)}}catch(t){s=!0,o=t}finally{try{!n&&c.return&&c.return()}finally{if(s)throw o}}for(var v=e.filter(function(t){for(var e=0;e<i.length;e++)if(i[e]+""==t.id+"")return!1;return!0}),m=0;m<v.length;m++)void 0!=v[m+1]?v[m+1].level<=v[m].level&&(delete v[m].icon,v[m].children=[]):void 0==v[m+1]&&(delete v[m].icon,v[m].children=[]);this.deleteIdArr=[],this.deleteBtnDisable=!1,this.data=v}function e(){for(var t=0;t<this.deleteIdArr.length;t++)this.$set(this.uploading,"uploading"+this.deleteIdArr[t],!1);this.deleteBtnDisable=!1,alert("删除失败！")}var i=[].concat(_()(this.deleteIdArr));if(0!=i.length){this.deleteBtnDisable=!0;for(var a=0;a<i.length;a++)this.$set(this.uploading,"uploading"+i[a],!0);this.$emit("uploaddelete",[i,t.bind(this),e.bind(this)])}}}}}},["NHnr"]);
//# sourceMappingURL=app.ecc99ebe3b930be2b493.js.map