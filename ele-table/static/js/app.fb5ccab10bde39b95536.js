webpackJsonp([1],{0:function(t,e){},KVJB:function(t,e){},MtKc:function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o("7+uW"),a=o("pFYg"),l=o.n(a),s=o("W3Iv"),r=o.n(s),n=o("BO1k"),c=o.n(n),h=o("d7EF"),p=o.n(h),d=o("mvHQ"),u=o.n(d),f=o("//Fk"),v=o.n(f),w={props:{colData:{required:!0},rowData:{required:!0},colRelation:{default:function(){return[]}},entry:{default:!1},scrollSpeed:{default:10},showCheckBox:{default:!0},showPrompt:{default:!0}},data:function(){return{width:0,height:0,cellHeight:40,scrollLeft:0,scrollTop:0,lineHover:{},col:[],row:[],colRel:[],option_data:[],option_info:{},option_loading:!1,option_width:0,option_hide_arrow:!1,option_left:0,option_top:0,option_show:!1,dragLeft:0,dragLineShow:!1,hover_show:!1,hover_info:{},hover_width:0,hover_bottom:0,hover_left:0}},computed:{fullWidth:function(){for(var t=0,e=0;e<this.col.length;e++)t+=this.col[e].width;return this.showCheckBox&&(t+=40),t},fullHeight:function(){var t=this.colRelMaxLevel||1;return this.cellHeight*(this.row.length+t)},geScrollLeftArea:{get:function(){var t=this.width*this.width/this.fullWidth;return(this.scrollLeft+t)/this.width*this.fullWidth-this.width},set:function(t){var e=this.width*this.width/this.fullWidth;this.scrollLeft=(t+this.width)/this.fullWidth*this.width-e}},geScrollTopArea:{get:function(){var t=this.height*this.height/this.fullHeight;return(this.scrollTop+t)/this.height*this.fullHeight-this.height},set:function(t){var e=this.height*this.height/this.fullHeight;this.scrollTop=(t+this.height)/this.fullHeight*this.height-e}},colFixHeader:function(){return this.col.filter(function(t){return t.fixed})},colActiveHeader:function(){return this.col.filter(function(t){return!t.fixed})},colFixHeaderWidth:function(){for(var t=0,e=0;e<this.colFixHeader.length;e++)t+=this.colFixHeader[e].width;return t},headerCheckStatus:{get:function(){var t=this.row.length,e=this.row.filter(function(t){return t.checked}).length;return 0!=t&&(t==e?"all":e>0?"some":0==e?"none":void 0)},set:function(t){if("none"==t){var e=this.deepClone(this.row);e.forEach(function(t){t.checked=!1}),this.row=e}if("all"==t){var o=this.deepClone(this.row);o.forEach(function(t){t.checked=!0}),this.row=o}}},checkedRows:function(){return this.row.filter(function(t){return t.checked})},getTable:function(){return{row:this.row,col:this.col}},hover_text:function(){var t=this;if("mul_select"!=this.hover_info.type)return this.hover_info.value;var e=this.row.filter(function(e){return e._rowid==t.hover_info.rowid});return 0==e.length?"":""+e[0][this.hover_info.props].value.map(function(t){return' <span style="display: inline-block; margin: 2px; background: #e7f3ff; color: #009fff; padding: 2px 6px; border: 1px solid #98def2;">'+t+"</span> "}).join("")},colRelMaxLevel:function(){for(var t=1,e=0;e<this.colRel.length;e++)this.colRel[e].level&&this.colRel[e].level>t&&(t=this.colRel[e].level);return t},realCol:function(){for(var t=[],e=this.colRelMaxLevel,o=this.col.length,i=0;i<this.colRel.length;i++){void 0==t[this.colRel[i].level-1]&&(t[this.colRel[i].level-1]=[]);var a={_colid:"level-"+this.colRel[i].level+"-"+i,_top:(e-this.colRel[i].level)*this.cellHeight,title:this.colRel[i].title,_isLevel:!0,_left:0,width:0},l=this.colRel[i].indexStart,s=this.colRel[i].indexEnd||this.col.length;a._left=this.col[l]._left;for(var r=0,n=l;n<s;n++)r+=this.col[n].width;a.width=r,t[this.colRel[i].level-1].push(a)}t[0]=this.deepClone(this.col);for(var c=0;c<this.colRel.length;c++)for(var h=this.colRel[c].indexStart,p=this.colRel[c].indexEnd||o,d=0;d<t[0].length;d++)(d<h||d>=p)&&(void 0==t[0][d]._verticalSpace?t[0][d]._verticalSpace=0:t[0][d]._verticalSpace+=1);return t}},created:function(){this.init()},watch:{},mounted:function(){this.fixedWidthHeight(),window.addEventListener("resize",this.fixedWidthHeight),document.addEventListener("click",this.hideOption)},methods:{console:function(t){window.console.log(t)},init:function(){this.row=this.deepClone(this.rowData),this.col=this.deepClone(this.colData),this.colRel=this.deepClone(this.colRelation);for(var t=0,e=0,o=0;o<this.row.length;o++)this.row[o]._rowid=t,this.row[o]._error=!1,this.row[o]._modify=!1,t++;for(var i=0;i<this.col.length;i++)this.col[i]._colid="level-1-"+e,this.col[i]._sort="",e++;for(var a=0;a<this.col.length;a++){var l=0;this.showCheckBox&&(l=40);for(var s=0;s<a;s++)l+=this.col[s].width;this.col[a]._left=l,this.col[a]._top=(this.colRelMaxLevel-1)*this.cellHeight}},fixedWidthHeight:function(){var t=this.$refs.wrap;t instanceof Array&&(t=t[0]),this.width=t.offsetWidth,this.height=t.offsetHeight},placeholder_date:function(t){return"date"==t?"yyyy-MM-dd":"time"==t?"hh:mm:ss":"datetime"==t?"yyyy-MM-dd hh:mm:ss":"month"==t?"输入月份":"year"==t?"输入年份":void 0},checkBox:function(t){for(var e=0;e<this.row.length;e++)if(this.row[e]._rowid==t._rowid)return void(this.row[e].checked=!this.row[e].checked)},scrollMouseDown:function(t,e){t.preventDefault(),this.option_show=!1;var o=this,i=void 0,a=void 0,l=void 0,s=void 0;if("x"==e)i=this.scrollLeft,a=t.clientX;else{if("y"!=e)return console.warn("请传入参数type"),!1;l=this.scrollTop,s=t.clientY}function r(t){if("x"==e){var r=i+(t.clientX-a);r<0&&(r=0);var n=o.width*o.width/o.fullWidth;r+n>o.width&&(r=o.width-n),o.scrollLeft=r}else{var c=l+(t.clientY-s);c<0&&(c=0);var h=o.height*o.height/o.fullHeight;c+h>o.height&&(c=o.height-h),o.scrollTop=c}}window.addEventListener("mousemove",r),window.addEventListener("mouseup",function t(e){window.removeEventListener("mousemove",r);window.removeEventListener("mouseup",t)})},mousewheel:function(t){this.option_show=!1;var e=this.height-this.height*this.height/this.fullHeight,o=this.scrollTop,i=this.scrollSpeed;t.wheelDelta?(t.wheelDelta>0&&(o-=i),t.wheelDelta<0&&(o+=i)):t.detail&&(t.detail>0&&(o-=i),t.detail<0&&(o+=i)),o<0&&(o=0),o>e&&(o=e),this.scrollTop=o},touchstart:function(t){t.preventDefault();var e=this.$refs.container,o=t.touches[0];this._geScrollLeftArea=this.geScrollLeftArea,this._geScrollTopArea=this.geScrollTopArea,this._startx=Math.floor(o.pageX),this._starty=Math.floor(o.pageY),e.addEventListener("touchmove",this.touchmove),e.addEventListener("touchend",this.touchend)},touchmove:function(t){t.preventDefault();var e=Math.floor(t.changedTouches[0].pageX),o=Math.floor(t.changedTouches[0].pageY),i=e-this._startx,a=o-this._starty,l=180*Math.atan2(a,i)/Math.PI,s=0,r=0;if(Math.abs(i)<=1||Math.abs(a)<=1)return!1;l<45&&l>=-45?((r=this._geScrollLeftArea-Math.abs(i))<0&&(r=0),this.geScrollLeftArea=r):l<135&&l>=45?((s=this._geScrollTopArea-Math.abs(a))<0&&(s=0),this.geScrollTopArea=s):l<=180&&l>=135||l>=-180&&l<-135?((r=this._geScrollLeftArea+Math.abs(i))>this.fullWidth-this.width&&(r=this.fullWidth-this.width),this.geScrollLeftArea=r):l<=-45&&l>=-135&&((s=this._geScrollTopArea+Math.abs(a))>this.fullHeight-this.height&&(s=this.fullHeight-this.height),this.geScrollTopArea=s)},touchend:function(t){t.preventDefault();var e=this.$refs.container;e.removeEventListener("touchmove",this.touchmove),e.removeEventListener("touchup",this.touchup)},modifyByRowCol:function(t,e,o,i){for(var a=0;a<this.row.length;a++)if(this.row[a]._rowid==t){if(this.row[a][e].value=o,void 0!=i){this.row[a][e].id=i;for(var l=null,s=0;s<this.col.length;s++)if(this.col[s].props==e){l=this.col[s];break}this.$emit("selectChange",{value:o,id:i,rowid:t,col:l})}return this.row[a]._modify=!0,void(this.row[a]._error=!1)}},checkNumber:function(t,e,o){o*=1,void 0!=t[e.props].min&&o<t[e.props].min&&(o=t[e.props].min),void 0!=t[e.props].max&&o>t[e.props].max&&(o=t[e.props].max),void 0!=t[e.props].floatLength&&(o=(1*o).toFixed(t[e.props].floatLength)),this.modifyByRowCol(t._rowid,e.props,o)},checkDate:function(t,e,o,i){if(""!=(o+"").trim()){if("date"==i)if(!new RegExp(/^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/).test(o))return void this.modifyByRowCol(t._rowid,e.props,"");if("time"==i)if(!new RegExp(/^(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/).test(o))return void this.modifyByRowCol(t._rowid,e.props,"");if("datetime"==i)if(!new RegExp(/^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])\s+(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/).test(o))return void this.modifyByRowCol(t._rowid,e.props,"");if("month"==i)if(!new RegExp(/^0?[1-9]$|^1[0-2]$/).test(o))return void this.modifyByRowCol(t._rowid,e.props,"");if("year"==i)if(!new RegExp(/^(1849|18[5-9]\d|20\d{2}|2200)$/).test(o))return void this.modifyByRowCol(t._rowid,e.props,"");this.modifyByRowCol(t._rowid,e.props,o)}else this.modifyByRowCol(t._rowid,e.props,"")},selectClose:function(t,e,o){"mul_select"==o?this.modifyByRowCol(t._rowid,e.props,[],[]):"select"==o&&this.modifyByRowCol(t._rowid,e.props,"",""),this.hideOption()},searchFocus:function(t,e,o){var i=this,a=this.$refs["cell-"+t._rowid+"-"+e._colid];a instanceof Array&&(a=a[0]),a.querySelector("input").select();var l=a.getBoundingClientRect(),s=this.$refs.container.getBoundingClientRect();this.option_info={row:t,col:e},this.option_left=l.left-s.left-5,this.option_top=l.top-s.top+l.height+8,this.option_hide_arrow=!1,this.option_width=Math.max(l.width,166),this.option_loading=!0,this.option_show=!0,this._wheelStop=function(t){t.stopPropagation()},this.$refs.optionDOM.removeEventListener("DOMMouseScroll",this._wheelStop),this.$refs.optionDOM.addEventListener("DOMMouseScroll",this._wheelStop),this.$nextTick(function(){var a=t[e.props].dataPos||"data.result";a=a.split("."),i.searchRemote(t[e.props]).then(function(l){for(var s=l.data,r=0;r<a.length;r++)s=s[a[r]];if(i.option_loading=!1,i.cellOver(t,e,!0),o)for(var n=0;n<s.length;n++)for(var c=0;c<t[e.props].id.length;c++)s[n].id==t[e.props].id[c]&&(s[n].select=!0);else for(var h=0;h<s.length;h++)if(s[h].id==t[e.props].id){s[h].select=!0;break}i.option_data=s}).catch(function(t){i.option_loading=!1,i.option_data=[],console.error(t)})})},optionItemClick:function(t){var e=this;if("mul_select"==this.option_info.row[this.option_info.col.props].type){for(var o=this.jsonClone(this.option_info.row[this.option_info.col.props].id),i=this.jsonClone(this.option_info.row[this.option_info.col.props].value),a=this.jsonClone(this.option_data).map(function(t){return t.select=!1,t}),l=!1,s=0;s<o.length;s++)if(o[s]==t.id){o.splice(s,1),l=!0;break}l||o.push(t.id);for(var r=!1,n=0;n<i.length;n++)if(i[n]==t.name){i.splice(n,1),r=!0;break}r||i.push(t.name);for(var c=0;c<a.length;c++)for(var h=0;h<o.length;h++)a[c].id==o[h]&&(a[c].select=!0);this.option_data=a,this.$nextTick(function(){e.modifyByRowCol(e.option_info.row._rowid,e.option_info.col.props,i,o)})}else this.modifyByRowCol(this.option_info.row._rowid,this.option_info.col.props,t.name,t.id),this.option_show=!1},searchRemote:function(t){return t.url?this.$http.get(t.url):v.a.reject("缺失url！")},hideOption:function(){this.hover_show=!1,this.option_show=!1},addLine:function(){var t=this;if(0!=this.entry&&"{}"!=u()(this.entry)){var e=this.deepClone(this.entry);e.checked=!1,e._error=!1,e._modify=!0,e._rowid=Date.now();var o=!0,i=!1,a=void 0;try{for(var l,s=c()(r()(e));!(o=(l=s.next()).done);o=!0){var n=l.value,h=p()(n,2),d=h[0],f=h[1];"function"==typeof f.value&&(e[d].value=f.value()),"function"==typeof f.id&&(e[d].id=f.id())}}catch(t){i=!0,a=t}finally{try{!o&&s.return&&s.return()}finally{if(i)throw a}}this.row.push(e),this.$nextTick(function(){t.geScrollTopArea=t.fullHeight-t.height})}},doLayout:function(){this.fixedWidthHeight()},cellOver:function(t,e,o){var i=this;if(!o){if(this.option_show)return;this.hover_show=!1}var a=t[e.props].value;if(""!=(a+"").trim()){var l=this.$refs.textLengtn;if(l.innerText=a,1*l.offsetWidth+20<e.width&&"mul_select"!=t[e.props].type)this.hover_show=!1;else{var s=this.$refs["cell-"+t._rowid+"-"+e._colid],r=this.$refs.container;s instanceof Array&&(s=s[0]),this.hover_info={props:e.props,rowid:t._rowid,type:t[e.props].type,value:t[e.props].value};var n=s.getBoundingClientRect(),c=r.getBoundingClientRect(),h=0,p=(h="mul_select"==t[e.props].type?Math.max(e.width,214):Math.max(e.width,134))-e.width;this.hover_width=h,this.hover_left=n.left-c.left-p/2,this.hover_bottom=this.height-(n.top-c.top)+10,this.$nextTick(function(){i.hover_show=!0})}}else this.hover_show=!1},cellOut:function(t,e){this.option_show||(this.hover_show=!1)},checkRequired:function(){for(var t=this,e=0;e<this.row.length;e++){var o=!0,i=!1,a=void 0;try{for(var l,s=c()(r()(this.row[e]));!(o=(l=s.next()).done);o=!0){var n=l.value,h=p()(n,2),d=h[0],u=h[1];if(1==u.required)if("number"==u.type){if(isNaN(u.value)){var f=w(d);return this.row[e]._error=!0,this.$forceUpdate(),"第"+(1*e+1)+"行，"+f+"列 不能为空！"}}else if(""==(u.value+"").trim()){var v=w(d);return this.row[e]._error=!0,this.$forceUpdate(),"第"+(1*e+1)+"行，"+v+"列 不能为空！"}}}catch(t){i=!0,a=t}finally{try{!o&&s.return&&s.return()}finally{if(i)throw a}}}return!0;function w(e){for(var o=0;o<t.col.length;o++)if(t.col[o].props==e)return t.col[o].title}},dragDown:function(t,e){var o=this;window.addEventListener("mousemove",l),window.addEventListener("mouseup",function e(){o._willWidth<90&&(o._willWidth=90);for(var i=0;i<o.col.length;i++)if(o.col[i]._colid==t._colid){o.col[i].width=o._willWidth;for(var a=0;a<o.col.length;a++){var s=0;o.showCheckBox&&(s=40);for(var r=0;r<a;r++)s+=o.col[r].width;o.col[a]._left=s}break}o.dragLineShow=!1;window.removeEventListener("mousemove",l);window.removeEventListener("mouseup",e)});var i=0;i=t.fixed?t._left+t.width:t._left+t.width-this.geScrollLeftArea,this.dragLeft=i,this.dragLineShow=!0;var a=e.clientX;function l(e){var l=e.clientX-a;o._willWidth=t.width+l,o.dragLeft=i+l}},colSort:function(t){var e=this,o=this;t=this.deepClone(t);for(var i=this.deepClone(this.row),a=0;a<o.col.length;a++)t._colid!=o.col._colid&&(o.col[a]._sort="");function s(t,e){return t==e?0:1*t==t&&1*e==e?t-e<0?-1:1:(void 0===t?"undefined":l()(t))==(void 0===e?"undefined":l()(e))?t<e?-1:1:(void 0===t?"undefined":l()(t))<(void 0===e?"undefined":l()(e))?-1:1}function r(t,e){for(var i=0;i<o.col.length;i++)if(o.col[i]._colid==t)return void(o.col[i]._sort=e)}this.$nextTick(function(){if(""==t._sort){var o=i.sort(function(e,o){return s(o[t.props].value,e[t.props].value)});r(t._colid,"desc"),e.$nextTick(function(){e.row=o})}else if("desc"==t._sort){var a=i.sort(function(e,o){return s(e[t.props].value,o[t.props].value)});r(t._colid,"asc"),e.$nextTick(function(){e.row=a})}else"asc"==t._sort&&(r(t._colid,""),e.$forceUpdate(),i=i.sort(function(t,e){return t._rowid-e._rowid}),e.$nextTick(function(){e.row=i}))})},jsonClone:function(t){return JSON.parse(u()(t))},deepClone:function(t){var e,o=(e=t,{"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regExp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object"}[Object.prototype.toString.call(e)]),i=void 0,a=void 0,l=void 0;if("array"===o)i=[];else{if("object"!==o)return t;i={}}if("array"===o){for(a=0,l=t.length;a<l;a++)i.push(this.deepClone(t[a]));return i}if("object"===o){for(a in t)i[a]=this.deepClone(t[a]);return i}}},beforeDestroy:function(){document.removeEventListener("click",this.hideOption),window.removeEventListener("resize",this.fixedWidthHeight)},destroyed:function(){}},_={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"wrap",staticClass:"tbl-wrap tbl-wrap-id-2018-03-26"},[o("span",{ref:"textLengtn",staticStyle:{display:"inline-block",position:"absolute","z-index":"-99","font-size":"13px",background:"transparent",opacity:"0"}}),t._v(" "),o("div",{ref:"container",staticClass:"container",style:{width:t.width+"px",height:t.height+"px"},on:{mousewheel:t.mousewheel,touchstart:t.touchstart}},[o("div",{staticClass:"body"},[o("div",{staticClass:"expand",style:{width:t.fullWidth+"px",height:t.fullHeight+"px"}}),t._v(" "),o("div",{staticClass:"sheet-header"},[o("div",{staticClass:"sheet-header-left"},[t.showCheckBox?o("div",{staticClass:"tbl-cell check-cell",style:{height:t.colRelMaxLevel*t.cellHeight+"px",left:"0px",width:"40px"}},[o("i",{directives:[{name:"show",rawName:"v-show",value:0==t.headerCheckStatus,expression:"headerCheckStatus == false"}],key:"1",staticClass:"fa fa-square-o",staticStyle:{color:"#999"}}),t._v(" "),o("i",{directives:[{name:"show",rawName:"v-show",value:"all"==t.headerCheckStatus,expression:"headerCheckStatus == 'all'"}],key:"2",staticClass:"fa fa-check-square",on:{click:function(e){t.headerCheckStatus="none"}}}),t._v(" "),o("i",{directives:[{name:"show",rawName:"v-show",value:"none"==t.headerCheckStatus,expression:"headerCheckStatus == 'none'"}],key:"3",staticClass:"fa fa-square-o",on:{click:function(e){t.headerCheckStatus="all"}}}),t._v(" "),o("i",{directives:[{name:"show",rawName:"v-show",value:"some"==t.headerCheckStatus,expression:"headerCheckStatus == 'some'"}],key:"4",staticClass:"fa fa-square",on:{click:function(e){t.headerCheckStatus="all"}}})]):t._e(),t._v(" "),t._l(t.colFixHeader,function(e){return o("div",{key:e._colid,staticClass:"tbl-cell nowrap",class:[t.geScrollLeftArea>20?"needShadow":""],style:{height:t.colRelMaxLevel*t.cellHeight+"px","line-height":t.colRelMaxLevel*t.cellHeight+"px",left:e._left+"px",width:e.width+"px","border-right":"1px solid #d8d8d8"}},[e.icon?["mul_select"==e.icon?o("i",{staticClass:"icon fa fa-chevron-circle-down"}):"select"==e.icon?o("i",{staticClass:"icon fa fa-angle-down"}):"normal"==e.icon?o("i",{staticClass:"icon fa fa-info-circle"}):"edit"==e.icon?o("i",{staticClass:"icon fa fa-pencil-square-o"}):"number"==e.icon?o("i",{staticClass:"icon",staticStyle:{"font-size":"9px"}},[t._v("num")]):"date"==e.icon?o("i",{staticClass:"icon fa fa-calendar-o"}):"time"==e.icon?o("i",{staticClass:"icon fa fa-clock-o"}):o("i",{class:[e.icon,"icon"]})]:t._e(),t._v(" \n                "+t._s(e.title)+"\n\n                "),o("span",{staticClass:"drag-pad",on:{mousedown:function(o){o.preventDefault(),o.stopPropagation(),t.dragDown(e,o)}}},[t._v(" ")]),t._v(" "),e.sort?o("span",{staticClass:"sort-wrap",on:{click:function(o){o.stopPropagation(),t.colSort(e)}}},[o("i",{staticClass:"fa fa-sort-desc",class:{active:"desc"==e._sort}}),t._v(" "),o("i",{staticClass:"fa fa-sort-asc",class:{active:"asc"==e._sort}})]):t._e()],2)})],2),t._v(" "),o("div",{staticClass:"sheet-header-right",style:{left:t.colFixHeaderWidth+"px",transform:"translate("+-1*t.geScrollLeftArea+"px, 0px)"}},[t._l(t.realCol,function(e){return t._l(e,function(e){return o("div",{key:e._colid,staticClass:"tbl-cell nowrap",class:[e._isLevel?"text-center":""],style:{height:(e._verticalSpace+1||1)*t.cellHeight+"px",left:e._left-t.colFixHeaderWidth+"px",top:e._verticalSpace?e._top-e._verticalSpace*t.cellHeight+"px":e._top+"px",width:e.width+"px","line-height":(e._verticalSpace+1||1)*t.cellHeight+"px"}},[e.icon?["mul_select"==e.icon?o("i",{staticClass:"icon fa fa-chevron-circle-down"}):"select"==e.icon?o("i",{staticClass:"icon fa fa-angle-down"}):"normal"==e.icon?o("i",{staticClass:"icon fa fa-info-circle"}):"edit"==e.icon?o("i",{staticClass:"icon fa fa-pencil-square-o"}):"number"==e.icon?o("i",{staticClass:"icon",staticStyle:{"font-size":"9px"}},[t._v("num")]):"date"==e.icon?o("i",{staticClass:"icon fa fa-calendar-o"}):"time"==e.icon?o("i",{staticClass:"icon fa fa-clock-o"}):o("i",{class:[e.icon,"icon"]})]:t._e(),t._v(" \n                  "+t._s(e.title)+"\n\n                  "),o("span",{staticClass:"drag-pad",on:{mousedown:function(o){o.preventDefault(),o.stopPropagation(),t.dragDown(e,o)}}},[t._v(" ")]),t._v(" "),e.sort?o("span",{staticClass:"sort-wrap",on:{click:function(o){o.stopPropagation(),t.colSort(e)}}},[o("i",{staticClass:"fa fa-sort-desc",class:{active:"desc"==e._sort}}),t._v(" "),o("i",{staticClass:"fa fa-sort-asc",class:{active:"asc"==e._sort}})]):t._e()],2)})})],2)]),t._v(" "),o("div",{staticClass:"sheet-body",style:{transform:"translate(0px, "+-1*t.geScrollTopArea+"px)"}},t._l(t.row,function(e,i){return(i+1)*t.cellHeight-t.geScrollTopArea>-t.cellHeight&&(i+1)*t.cellHeight-t.geScrollTopArea<t.height+t.cellHeight?o("div",{key:e._rowid+"-row",staticClass:"sheet-line",style:{top:(i+t.colRelMaxLevel)*t.cellHeight+"px"}},[o("div",{staticClass:"sheet-body-left"},[t.showCheckBox?o("div",{key:e._rowid,staticClass:"tbl-cell check-cell",class:[e._modify?e._error?"error":"modify":""],style:{height:t.cellHeight+"px",left:"0px",width:"40px"},on:{mouseover:function(o){o.stopPropagation(),t.$set(t.lineHover,"lineHover-"+e._rowid,!0)},mouseout:function(o){o.stopPropagation(),t.$set(t.lineHover,"lineHover-"+e._rowid,!1)}}},[t.lineHover["lineHover-"+e._rowid]||e.checked?[o("i",{directives:[{name:"show",rawName:"v-show",value:e.checked,expression:"rowItem.checked"}],staticClass:"fa fa-check-square",on:{click:function(o){t.checkBox(e)}}}),t._v(" "),o("i",{directives:[{name:"show",rawName:"v-show",value:!e.checked,expression:"!rowItem.checked"}],staticClass:"fa fa-square-o",on:{click:function(o){t.checkBox(e)}}})]:[o("span",{staticClass:"nowrap",staticStyle:{"font-size":"10px"}},[t._v(t._s(1*i+1))])]],2):t._e(),t._v(" "),t._l(t.colFixHeader,function(i){return o("div",{key:e._rowid+"-"+i._colid,ref:"cell-"+e._rowid+"-"+i._colid,refInFor:!0,staticClass:"tbl-cell",class:[t.geScrollLeftArea>20?"needShadow":""],style:{left:i._left+"px",width:i.width+"px",height:t.cellHeight+"px"},on:{mouseover:function(o){o.stopPropagation(),t.cellOver(e,i)},mouseout:function(o){t.cellOut(e,i)}}},["normal"==e[i.props].type?o("div",{ref:"cell-"+e._rowid+"-"+i._colid,refInFor:!0,staticClass:"cell"},[o("div",{staticClass:"text nowrap"},[t._v("\n                          "+t._s(e[i.props].value)+"\n                      ")])]):t._e(),t._v(" "),"edit"==e[i.props].type?o("div",{ref:"cell-"+e._rowid+"-"+i._colid,refInFor:!0,staticClass:"cell"},[o("input",{staticClass:"edit-inp nowrap",attrs:{type:"text"},domProps:{value:e[i.props].value},on:{focus:function(e){t.option_show=!1},input:function(o){t.modifyByRowCol(e._rowid,i.props,o.target.value)}}}),t._v(" "),o("i",{staticClass:"fa fa-pencil-square-o edit-close"})]):t._e(),t._v(" "),"number"==e[i.props].type?o("div",{ref:"cell-"+e._rowid+"-"+i._colid,refInFor:!0,staticClass:"cell"},[o("input",{staticClass:"edit-inp nowrap",attrs:{type:"number"},domProps:{value:e[i.props].value},on:{focus:function(e){t.option_show=!1},input:function(o){t.modifyByRowCol(e._rowid,i.props,o.target.value)},blur:function(o){t.checkNumber(e,i,o.target.value)}}})]):t._e(),t._v(" "),"select"==e[i.props].type?o("div",{ref:"cell-"+e._rowid+"-"+i._colid,refInFor:!0,staticClass:"cell",on:{click:function(t){t.stopPropagation()}}},[o("input",{staticClass:"edit-inp nowrap",attrs:{type:"search",readonly:""},domProps:{value:e[i.props].value},on:{focus:function(o){t.searchFocus(e,i)},blur:function(t){t.stopPropagation()}}}),t._v(" "),o("i",{directives:[{name:"show",rawName:"v-show",value:""!=(e[i.props].id+"").trim(),expression:"(rowItem[col.props].id+'').trim() != ''"}],staticClass:"fa fa-times-circle edit-close",on:{click:function(o){t.selectClose(e,i,"select")}}})]):t._e(),t._v(" "),"mul_select"==e[i.props].type?o("div",{ref:"cell-"+e._rowid+"-"+i._colid,refInFor:!0,staticClass:"cell",on:{click:function(t){t.stopPropagation()}}},[o("input",{staticClass:"edit-inp nowrap",attrs:{type:"search",readonly:""},domProps:{value:e[i.props].value.join("， ")},on:{focus:function(o){t.searchFocus(e,i,!0)},blur:function(t){t.stopPropagation()}}}),t._v(" "),o("i",{directives:[{name:"show",rawName:"v-show",value:0!=e[i.props].id.length,expression:"rowItem[col.props].id.length != 0"}],staticClass:"fa fa-times-circle edit-close",on:{click:function(o){t.selectClose(e,i,"mul_select")}}})]):t._e(),t._v(" "),"date"==e[i.props].type||"time"==e[i.props].type||"datetime"==e[i.props].type||"month"==e[i.props].type||"year"==e[i.props].type?o("div",{ref:"cell-"+e._rowid+"-"+i._colid,refInFor:!0,staticClass:"cell"},[o("input",{staticClass:"edit-inp nowrap",attrs:{type:"text",placeholder:t.placeholder_date(e[i.props].type)},domProps:{value:e[i.props].value},on:{focus:function(e){t.option_show=!1},input:function(o){t.modifyByRowCol(e._rowid,i.props,o.target.value)},blur:function(o){t.checkDate(e,i,o.target.value,e[i.props].type)}}}),t._v(" "),o("i",{staticClass:"fa edit-close",class:["time"==e[i.props].type?"fa-clock-o":"fa-calendar-o"]})]):t._e()])})],2),t._v(" "),o("div",{staticClass:"sheet-body-right",style:{left:t.colFixHeaderWidth+"px",transform:"translate("+-1*t.geScrollLeftArea+"px, 0px)"}},t._l(t.colActiveHeader,function(i){return t.geScrollLeftArea-i._left<i.width&&i._left-t.geScrollLeftArea-t.width<i.width?o("div",{key:e._rowid+"-"+i._colid,ref:"cell-"+e._rowid+"-"+i._colid,refInFor:!0,staticClass:"tbl-cell",style:{left:i._left-t.colFixHeaderWidth+"px",width:i.width+"px",height:t.cellHeight+"px"},on:{mouseover:function(o){o.stopPropagation(),t.cellOver(e,i)},mouseout:function(o){t.cellOut(e,i)}}},["normal"==e[i.props].type?o("div",{ref:"cell-"+e._rowid+"-"+i._colid,refInFor:!0,staticClass:"cell"},[o("div",{staticClass:"text nowrap"},[t._v("\n                          "+t._s(e[i.props].value)+"\n                      ")])]):t._e(),t._v(" "),"edit"==e[i.props].type?o("div",{ref:"cell-"+e._rowid+"-"+i._colid,refInFor:!0,staticClass:"cell"},[o("input",{staticClass:"edit-inp nowrap",attrs:{type:"text"},domProps:{value:e[i.props].value},on:{focus:function(e){t.option_show=!1},input:function(o){t.modifyByRowCol(e._rowid,i.props,o.target.value)}}}),t._v(" "),o("i",{staticClass:"fa fa-pencil-square-o edit-close"})]):t._e(),t._v(" "),"number"==e[i.props].type?o("div",{ref:"cell-"+e._rowid+"-"+i._colid,refInFor:!0,staticClass:"cell"},[o("input",{staticClass:"edit-inp nowrap",attrs:{type:"number"},domProps:{value:e[i.props].value},on:{focus:function(e){t.option_show=!1},input:function(o){t.modifyByRowCol(e._rowid,i.props,o.target.value)},blur:function(o){t.checkNumber(e,i,o.target.value)}}})]):t._e(),t._v(" "),"select"==e[i.props].type?o("div",{ref:"cell-"+e._rowid+"-"+i._colid,refInFor:!0,staticClass:"cell",on:{click:function(t){t.stopPropagation()}}},[o("input",{staticClass:"edit-inp nowrap",attrs:{type:"search",readonly:""},domProps:{value:e[i.props].value},on:{focus:function(o){t.searchFocus(e,i)},blur:function(t){t.stopPropagation()}}}),t._v(" "),o("i",{directives:[{name:"show",rawName:"v-show",value:""!=(e[i.props].id+"").trim(),expression:"(rowItem[col.props].id+'').trim() != ''"}],staticClass:"fa fa-times-circle edit-close",on:{click:function(o){t.selectClose(e,i,"select")}}})]):t._e(),t._v(" "),"mul_select"==e[i.props].type?o("div",{ref:"cell-"+e._rowid+"-"+i._colid,refInFor:!0,staticClass:"cell",on:{click:function(t){t.stopPropagation()}}},[o("input",{staticClass:"edit-inp nowrap",attrs:{type:"search",readonly:""},domProps:{value:e[i.props].value.join("， ")},on:{focus:function(o){t.searchFocus(e,i,!0)},blur:function(t){t.stopPropagation()}}}),t._v(" "),o("i",{directives:[{name:"show",rawName:"v-show",value:0!=e[i.props].id.length,expression:"rowItem[col.props].id.length != 0"}],staticClass:"fa fa-times-circle edit-close",on:{click:function(o){t.selectClose(e,i,"mul_select")}}})]):t._e(),t._v(" "),"date"==e[i.props].type||"time"==e[i.props].type||"datetime"==e[i.props].type||"month"==e[i.props].type||"year"==e[i.props].type?o("div",{ref:"cell-"+e._rowid+"-"+i._colid,refInFor:!0,staticClass:"cell"},[o("input",{staticClass:"edit-inp nowrap",attrs:{type:"text",placeholder:t.placeholder_date(e[i.props].type)},domProps:{value:e[i.props].value},on:{focus:function(e){t.option_show=!1},input:function(o){t.modifyByRowCol(e._rowid,i.props,o.target.value)},blur:function(o){t.checkDate(e,i,o.target.value,e[i.props].type)}}}),t._v(" "),o("i",{staticClass:"fa edit-close",class:["time"==e[i.props].type?"fa-clock-o":"fa-calendar-o"]})]):t._e()]):t._e()}))]):t._e()}))]),t._v(" "),o("div",{staticClass:"scrollbar-x",style:{width:t.width+"px"}},[o("div",{staticClass:"scrollbar-x-drag",style:{width:t.width*t.width/t.fullWidth+"px",left:t.scrollLeft+"px"},on:{mousedown:function(e){e.preventDefault(),e.stopPropagation(),t.scrollMouseDown(e,"x")}}})]),t._v(" "),o("div",{staticClass:"scrollbar-y",style:{height:t.height+"px"}},[o("div",{staticClass:"scrollbar-y-drag",style:{height:t.height*t.height/t.fullHeight+"px",top:t.scrollTop+"px"},on:{mousedown:function(e){e.preventDefault(),e.stopPropagation(),t.scrollMouseDown(e,"y")}}})]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.dragLineShow,expression:"dragLineShow"}],staticClass:"drag_line",style:{left:t.dragLeft+"px"}})]),t._v(" "),o("transition",{attrs:{name:"option"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.option_show,expression:"option_show"}],ref:"optionDOM",staticClass:"option",style:{left:t.option_left+"px",top:t.option_top+"px",width:t.option_width+"px"},on:{click:function(t){t.stopPropagation()},mousewheel:function(t){t.stopPropagation()},mouseover:function(t){t.stopPropagation()}}},[o("div",{directives:[{name:"show",rawName:"v-show",value:!t.option_hide_arrow,expression:"!option_hide_arrow"}],staticClass:"arrow"}),t._v(" "),o("div",{staticClass:"opp"},[t.option_loading?o("div",{staticStyle:{"text-align":"center"}},[t._v("加载中...")]):o("div",t._l(t.option_data,function(e){return o("div",{key:e.id,staticClass:"option-item",class:[e.select?"select":""],on:{click:function(o){t.optionItemClick(e)}}},[t._v("\n            "+t._s(e.name)+"\n          ")])}))])])]),t._v(" "),t.showPrompt?o("div",{directives:[{name:"show",rawName:"v-show",value:t.hover_show,expression:"hover_show"}],staticClass:"hover-show",style:{left:t.hover_left-6+"px",bottom:t.hover_bottom+"px",width:t.hover_width+12+"px"}},[o("span",{domProps:{innerHTML:t._s(t.hover_text)}})]):t._e()],1)},staticRenderFns:[]};var m={data:function(){return{scrollSpeed:18,colData:[{title:"时间",props:"a1",width:120,icon:"time",sort:!0,fixed:!0},{title:"数字编辑",width:120,props:"a2",icon:"number",fixed:!0},{title:"单选",width:130,props:"a3",icon:"select"},{title:"多选",width:140,props:"a4",icon:"mul_select"},{title:"日期",width:140,icon:"date",props:"a5"},{title:"日期时间",width:140,icon:"date",props:"a6"},{title:"编辑",width:140,icon:"edit",sort:!0,props:"a7"},{title:"普通->",width:140,props:"a8"},{title:"标题9",width:140,props:"a9"},{title:"标题10",width:140,props:"a10"},{title:"标题11",width:140,props:"a11"},{title:"标题12",width:140,props:"a12"},{title:"标题13",width:140,props:"a13"},{title:"标题14",width:140,props:"a14"},{title:"标题15",width:140,props:"a15"},{title:"标题16",width:140,props:"a16"},{title:"标题17",width:140,props:"a17"},{title:"标题18",width:140,props:"a18"},{title:"标题19",width:140,props:"a19"},{title:"标题20",width:140,props:"a20"},{title:"标题21",width:140,props:"a21"},{title:"标题22",width:140,props:"a22"},{title:"标题23",width:140,props:"a23"},{title:"标题24",width:140,props:"a24"},{title:"标题25",width:140,props:"a25"},{title:"标题26",width:140,props:"a26"},{title:"标题27",width:140,props:"a27"},{title:"标题28",width:140,props:"a28"},{title:"标题29",width:140,props:"a29"},{title:"标题30",width:140,props:"a30"},{title:"标题31",width:140,props:"a31"},{title:"标题32",width:140,props:"a32"},{title:"标题33",width:140,props:"a33"},{title:"标题34",width:140,props:"a34"},{title:"标题35",width:140,props:"a35"},{title:"标题36",width:140,props:"a36"},{title:"标题37",width:140,props:"a37"},{title:"标题38",width:140,props:"a38"},{title:"标题39",width:140,props:"a39"},{title:"标题40",width:140,props:"a40"}],colRelation:[{title:"层级2-1",level:2,indexStart:2,indexEnd:6},{title:"层级2-2",level:2,indexStart:6,indexEnd:15},{title:"层级3",level:3,indexStart:2,indexEnd:18}],entry:!1,rowData:[],showCheckBox:!0,showPrompt:!0}},created:function(){for(var t=[],e=0;e<500;e++)t.push({checked:0==e||1==e||2==e,a1:{type:"time",value:"2012-03-15",required:!0},a2:{type:"number",min:0,max:20,floatLength:2,value:.2*e},a3:{type:"select",url:"/static/select.json",dataPos:"data.result",value:"name-3",id:3},a4:{type:"mul_select",url:"/static/select.json",dataPos:"data.result",value:["name-2","name-3","name-4"],id:[2,3,4]},a5:{type:"date",value:"2011-11-11"},a6:{type:"datetime",value:"2012-02-02 12:53:04"},a7:{type:"edit",value:e+"-7"},a8:{type:"normal",value:e+"-8",id:e},a9:{type:"normal",value:e+"-9",id:e},a10:{type:"normal",value:e+"-10",id:e},a11:{type:"normal",value:e+"-11",id:e},a12:{type:"normal",value:e+"-12",id:e},a13:{type:"normal",value:e+"-13",id:e},a14:{type:"normal",value:e+"-14",id:e},a15:{type:"normal",value:e+"-15",id:e},a16:{type:"normal",value:e+"-16",id:e},a17:{type:"normal",value:e+"-17",id:e},a18:{type:"normal",value:e+"-18",id:e},a19:{type:"normal",value:e+"-19",id:e},a20:{type:"normal",value:e+"-20",id:e},a21:{type:"normal",value:e+"-21",id:e},a22:{type:"normal",value:e+"-22",id:e},a23:{type:"normal",value:e+"-23",id:e},a24:{type:"normal",value:e+"-24",id:e},a25:{type:"normal",value:e+"-25",id:e},a26:{type:"normal",value:e+"-26",id:e},a27:{type:"normal",value:e+"-27",id:e},a28:{type:"normal",value:e+"-28",id:e},a29:{type:"normal",value:e+"-29",id:e},a30:{type:"normal",value:e+"-30",id:e},a31:{type:"normal",value:e+"-31",id:e},a32:{type:"normal",value:e+"-32",id:e},a33:{type:"normal",value:e+"-33",id:e},a34:{type:"normal",value:e+"-34",id:e},a35:{type:"normal",value:e+"-35",id:e},a36:{type:"normal",value:e+"-36",id:e},a37:{type:"normal",value:e+"-37",id:e},a38:{type:"normal",value:e+"-38",id:e},a39:{type:"normal",value:e+"-39",id:e},a40:{type:"normal",value:e+"-40",id:e}});this.rowData=t,this.entry={a1:{type:"time",required:!0,value:function(){return Date.now()}},a2:{type:"number",min:0,max:20,floatLength:2,value:13123},a3:{type:"select",url:"/static/select.json",dataPos:"data.result",value:"",id:""},a4:{type:"mul_select",url:"/static/select.json",dataPos:"data.result",value:function(){return[]},id:function(){return[]}},a5:{type:"date",value:""},a6:{type:"datetime",value:""},a7:{type:"edit",value:""},a8:{type:"normal",value:""},a9:{type:"normal",value:""},a10:{type:"normal",value:""},a11:{type:"normal",value:""},a12:{type:"normal",value:""},a13:{type:"normal",value:""},a14:{type:"normal",value:""},a15:{type:"normal",value:""},a16:{type:"normal",value:""},a17:{type:"normal",value:""},a18:{type:"normal",value:""},a19:{type:"normal",value:""},a20:{type:"normal",value:""},a21:{type:"normal",value:""},a22:{type:"normal",value:""},a23:{type:"normal",value:""},a24:{type:"normal",value:""},a25:{type:"normal",value:""},a26:{type:"normal",value:""},a27:{type:"normal",value:""},a28:{type:"normal",value:""},a29:{type:"normal",value:""},a30:{type:"normal",value:""},a31:{type:"normal",value:""},a32:{type:"normal",value:""},a33:{type:"normal",value:""},a34:{type:"normal",value:""},a35:{type:"normal",value:""},a36:{type:"normal",value:""},a37:{type:"normal",value:""},a38:{type:"normal",value:""},a39:{type:"normal",value:""},a40:{type:"normal",value:""}}},watch:{"$store.state.isExpand":function(){var t=this;this.$nextTick(function(){t.doLayout()})}},methods:{selectChange:function(t){console.log(t)},getTable:function(){var t=this.$refs.database.getTable;console.log(t)},checkedRows:function(){var t=this.$refs.database.checkedRows;console.log(t)},add:function(){this.$refs.database.addLine()},doLayout:function(){this.$refs.database.doLayout()},checkRequired:function(){var t=this.$refs.database.checkRequired();console.log(t)}},components:{database:o("VU/8")(w,_,!1,function(t){o("WnT3")},"data-v-63a8e27e",null).exports}},y={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{width:"100%",height:"600px"}},[o("button",{staticStyle:{padding:"6px",border:"1px solid #666"},on:{click:t.getTable}},[t._v("获取表格信息")]),t._v(" "),o("button",{staticStyle:{padding:"6px",border:"1px solid #666"},on:{click:t.checkedRows}},[t._v("获取选中的行")]),t._v(" "),o("button",{staticStyle:{padding:"6px",border:"1px solid #666"},on:{click:t.add}},[t._v("增加一行")]),t._v(" "),o("button",{staticStyle:{padding:"6px",border:"1px solid #666"},attrs:{title:"第一列设置了required=true"},on:{click:t.checkRequired}},[t._v("对required=true检查")]),t._v("\n    注意：表格宽高是撑满父容器的\n    "),o("div",{staticStyle:{width:"100%",height:"calc(100% - 60px)"}},[o("database",{ref:"database",attrs:{scrollSpeed:t.scrollSpeed,colData:t.colData,rowData:t.rowData,colRelation:t.colRelation,entry:t.entry,showCheckBox:t.showCheckBox,showPrompt:t.showPrompt},on:{selectChange:t.selectChange}})],1)])},staticRenderFns:[]};var g=o("VU/8")(m,y,!1,function(t){o("KVJB")},"data-v-e3ccbf1c",null).exports,x=o("8+8L");o("MtKc");i.a.config.productionTip=!1,i.a.use(x.a),new i.a({el:"#app",components:{App:g},template:"<App/>"})},WnT3:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.fb5ccab10bde39b95536.js.map