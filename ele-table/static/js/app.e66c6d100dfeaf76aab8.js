webpackJsonp([1],{0:function(e,t){},K5er:function(e,t){},NHnr:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o("7+uW"),r=o("5dBV"),n=o.n(r),l=o("mvHQ"),s=o.n(l),a=o("pFYg"),c=o.n(a),u=o("W3Iv"),d=o.n(u),p=o("BO1k"),w=o.n(p),f=o("d7EF"),h=o.n(f),m=(o("b5CR"),{props:{rowData:{},columnData:{},entry:{default:!1},height:{},maxHeight:{},doLayout:{}},data:function(){return{row:[],column:[],loading:{},option:{},mutiple:{},number:{},ixc:{},isfocus:{},btnCol:!1}},watch:{doLayout:function(){this.doLayoutFn()}},created:function(){this.init()},mounted:function(){},methods:{console:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){console.log(e)}),isNaN2:function(e){return""===e||""===(e+"").trim()||isNaN(e)},isUnexpect:function(e){return null==e||void 0==e||""==(e+"").trim()},init:function(){this.row=this.clone(this.rowData);for(var e=0;e<this.row.length;e++)this.row[e]._rowid=e,this.row[e]._edit=!1,this.row[e]._highlight=!1;this.column=this.clone(this.columnData),this.btnCol=this.column.filter(function(e){return e.btnName&&0!=e.btnName.length})[0];for(var t=0;t<this.column.length;t++)this.column[t]._colid=t;for(var o=0;o<this.row.length;o++){var i=!0,r=!1,n=void 0;try{for(var l,s=w()(d()(this.row[o]));!(i=(l=s.next()).done);i=!0){var a=l.value,c=h()(a,2),u=c[0],p=c[1];if("multiple-select"==p.type)for(var f=0;f<this.column.length;f++)this.column[f].props==u&&this.$set(this.mutiple,"mutiple-"+this.row[o]._rowid+"-"+this.column[f]._colid,p.value);if("number"==p.type)for(var m=0;m<this.column.length;m++)this.column[m].props==u&&this.$set(this.number,"number-"+this.row[o]._rowid+"-"+this.column[m]._colid,p.value)}}catch(e){r=!0,n=e}finally{try{!i&&s.return&&s.return()}finally{if(r)throw n}}}},tableRowClassName:function(e){var t=e.row;e.rowIndex;return 1==t._edit&&1!=t._highlight?"edit-row":1==t._highlight?"highlight-row":""},sortFn:function(e,t,o){return(e=e[o].value)==(t=t[o].value)?0:1*e==e&&1*t==t?e-t<0?-1:1:(void 0===e?"undefined":c()(e))==(void 0===t?"undefined":c()(t))?e<t?-1:1:(void 0===e?"undefined":c()(e))<(void 0===t?"undefined":c()(t))?-1:1},renderStatus:function(e,t){t.column,t.$index;var o={display:"block",fontSize:"18px",color:"#24c876",textAlign:"center",cursor:"pointer",outline:"none",border:"none"},i=(this.row.length,this);return"{}"==s()(this.entry)||0==this.entry?(o.fontSize="13px",o.color="#17d8ee",e("i",{style:o,class:"el-icon-info"})):e("el-tooltip",{attrs:{effect:"dark",content:"增加一行",placement:"top"}},[e("i",{on:{click:function(){var e=i.deepClone(i.entry);e._rowid=Date.now(),e._add=!0,e._edit=!0,e._highlight=!1;var t=!0,o=!1,r=void 0;try{for(var n,l=w()(d()(e));!(t=(n=l.next()).done);t=!0){var s=n.value,a=h()(s,2),c=a[0],u=a[1];"function"==typeof u.value&&(e[c].value=u.value()),"function"==typeof u.id&&(e[c].id=u.id())}}catch(e){o=!0,r=e}finally{try{!t&&l.return&&l.return()}finally{if(o)throw r}}i.row.push(e),i.$nextTick(function(){var e=i.$refs.elTable.$el,t=e.querySelector(".el-table__body-wrapper"),o=e.querySelector(".el-table__row:nth-last-of-type(1)");t&&o&&(t.scrollTop=o.offsetTop)})}},style:o,class:"el-icon-circle-plus"})])},editBlur:function(e,t,o,i){this.modifyByRowCol(t,o,i,e.target.value)},validNumber:function(e,t,o,i){for(var r=0;r<this.row.length;r++)if(this.row[r]._rowid==t._rowid){var n=e.target.value;return""==(n+"").trim()||isNaN(n)?(this.$set(this.number,"number-"+t._rowid+"-"+o,n),this.row[r][i].value=n,this.row[r]._edit=!0,void(this.row[r]._highlight=!1)):(void 0!=this.row[r][i].min&&n<this.row[r][i].min&&(n=this.row[r][i].min),void 0!=this.row[r][i].max&&n>this.row[r][i].max&&(n=this.row[r][i].max),void 0!=this.row[r][i].floatLength&&(n=(1*n).toFixed(this.row[r][i].floatLength)),this.$set(this.number,"number-"+t._rowid+"-"+o,n),this.row[r][i].value=n,this.row[r]._edit=!0,void(this.row[r]._highlight=!1))}},editMouseLeave:function(e,t){1!=this.isfocus["isfocus-"+e+"-"+t]&&this.$set(this.ixc,"ixc-"+e+"-"+t,!1)},modifyByRowCol:function(e,t,o,i,r){for(var n=0;n<this.row.length;n++)if(this.row[n]._rowid==e){this.row[n][o].value=i,this.row[n]._edit=!0,this.row[n]._highlight=!1,void 0!=r&&(this.row[n][o].id=r);break}},remoteMethod:function(e,t,o){var i=this;e=(e?e+"":"").trim(),this.$set(this.loading,"loading-"+t._rowid+"-"+o._colid,!0),this.$http.get(t[o.props].url+"?q="+e).then(function(e){i.$set(i.loading,"loading-"+t._rowid+"-"+o._colid,!1);var r="data.result",n=e.data;t[o.props].dataPos&&(r=t[o.props].dataPos);for(var l=r.split("."),s=0;s<l.length;s++){if(void 0==n[l[s]])return void console.warn("dataPos中有不存在的字段！请检查dataPos字段或者请求是否成功！");n=n[l[s]]}n=n.map(function(e){return e.id=e.id+"",e}),i.$set(i.option,"option-"+t._rowid+"-"+o._colid,n),"multiple-select"==t[o.props].type&&i.$nextTick(function(){for(var e=0;e<i.row.length;e++)for(var r=0;r<i.column.length;r++)if(i.column[r]._colid==o._colid&&i.row[e]._rowid==t._rowid){i.$set(i.mutiple,"mutiple-"+i.row[e]._rowid+"-"+i.column[r]._colid,t[o.props].id.map(function(e){return e+=""}));break}})}).catch(function(e){i.$set(i.loading,"loading-"+t._rowid+"-"+o._colid,!1),console.error(e)})},selectClear:function(e,t,o){this.modifyByRowCol(e,t,o,"","")},selectFocus:function(e,t,o){this.remoteMethod(" ",t,o)},selectChange:function(e,t,o,i){var r=this.option["option-"+t+"-"+o];if(r)for(var n=0;n<r.length;n++)if(r[n].id==e){this.modifyByRowCol(t,o,i,r[n].name,e);break}},multipleChange:function(e,t,o,i){var r=this.option["option-"+t+"-"+o];if(void 0!=r){for(var n=[],l=0;l<e.length;l++)for(var s=0;s<r.length;s++)e[l]==r[s].id&&n.push(r[s].name);this.modifyByRowCol(t,o,i,n,e)}else for(var a=0;a<this.row.length;a++)if(this.row[a]._rowid==t){for(var c=this.row[a][i].value.map(function(){return!1}),u=0;u<this.row[a][i].value.length;u++)for(var d=0;d<e.length;d++)this.row[a][i].value[u]!=e[d]||(c[u]=!0);for(var p=0;p<c.length;p++)if(0==c[p]){this.row[a][i].value.splice(p,1),this.row[a][i].id.splice(p,1),this.row[a]._edit=!0,this.row[a]._highlight=!1;break}break}},dateChange:function(e,t,o,i){this.modifyByRowCol(t,o,i,e),this.$forceUpdate()},doLayoutFn:function(){this.$refs.elTable.doLayout()},validate:function(){for(var e=this,t=0;t<this.row.length;t++)for(var o=0;o<this.column.length;o++)if(this.column[o].props&&1==this.row[t][this.column[o].props].require&&(""==this.row[t][this.column[o].props].value||void 0==this.row[t][this.column[o].props].value||null==this.row[t][this.column[o].props].value||""==(this.row[t][this.column[o].props].value+"").trim()))return this.row[t]._highlight=!0,this.$message.warning("第"+(1*t+1)+"行，"+this.column[o].title+"：必填！"),this.$nextTick(function(){e.$forceUpdate()}),!1;return!0},getTableData:function(){return{column:this.column,row:column}},clone:function(e){return JSON.parse(s()(e))},deepClone:function(e){var t,o=(t=e,{"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regExp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object"}[Object.prototype.toString.call(t)]),i=void 0,r=void 0,n=void 0;if("array"===o)i=[];else{if("object"!==o)return e;i={}}if("array"===o){for(r=0,n=e.length;r<n;r++)i.push(this.deepClone(e[r]));return i}if("object"===o){for(r in e)i[r]=this.deepClone(e[r]);return i}}},filters:{toPercent:function(e,t){return 1==t?e?n()(100*e).toFixed(2)+"%":"":e}}}),v={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-table",{ref:"elTable",staticStyle:{width:"100%"},attrs:{border:"",data:e.row,"row-key":function(e){return e._rowid},"row-class-name":e.tableRowClassName,height:e.height,"max-height":e.maxHeight,size:"mini"},on:{"selection-change":function(t){e.$emit("selectionChange",t)}}},[o("el-table-column",{attrs:{type:"selection",fixed:"left",width:"40"}}),e._v(" "),o("el-table-column",{attrs:{fixed:"left","render-header":e.renderStatus,width:36},scopedSlots:e._u([{key:"default",fn:function(e){return[o("span",{staticStyle:{position:"relative",display:"flex","align-items":"center","justify-content":"space-between"}},[1==e.row._highlight?[o("i",{staticClass:"el-icon-circle-close-outline",staticStyle:{color:"#f00","font-size":"14px"}})]:1==e.row._add?[o("i",{staticClass:"el-icon-upload2",staticStyle:{color:"#bb6dff",position:"relative","font-size":"14px"}})]:1==e.row._edit?[o("i",{staticClass:"el-icon-edit-outline",staticStyle:{color:"#e38c09",position:"relative","font-size":"12px"}})]:[o("i",{staticClass:"el-icon-circle-check-outline",staticStyle:{color:"#0fd50f","font-size":"14px"}})]],2)]}}])}),e._v(" "),0!=e.btnCol?[o("el-table-column",{attrs:{label:e.btnCol.title,fixed:!!e.btnCol.fixed&&e.btnCol.fixed,width:e.btnCol.width?e.btnCol.width:150},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(e.btnCol.btnName,function(i,r){return o("span",{key:r,staticStyle:{display:"inline-block","margin-right":"4px"}},[i.name?o("el-tooltip",{attrs:{effect:"dark",content:i.name,placement:"top"}},[o("el-button",{key:r,attrs:{plain:"",type:i.style||"info",round:"",size:"mini",icon:i.icon},on:{click:function(o){e.$emit("btnClick",{btn:i,row:t.row})}}})],1):o("el-button",{key:r,attrs:{plain:"",type:i.style||"info",round:"",size:"mini",icon:i.icon},on:{click:function(o){e.$emit("btnClick",{btn:i,row:t.row})}}})],1)})}}])})]:e._e(),e._v(" "),e._l(e.column.filter(function(e){return!e.btnName}),function(t,i){return o("el-table-column",{key:t._colid+i,attrs:{label:t.title,width:t.width||"auto","min-width":i==e.column.length-1?200:90,sortable:t.sortable||!1,"sort-method":function(o,i){return e.sortFn(o,i,t.props)},fixed:t.fixed||!1},scopedSlots:e._u([{key:"default",fn:function(i){return["normal"===i.row[t.props].type?o("div",[o("span",{style:{color:i.row[t.props].color||""}},[e._v(e._s(i.row[t.props].value))])]):e._e(),e._v(" "),"edit"===i.row[t.props].type?o("div",{staticStyle:{position:"relative"},on:{mouseleave:function(o){e.editMouseLeave(i.row._rowid,t._colid)},mouseenter:function(o){e.$set(e.ixc,"ixc-"+i.row._rowid+"-"+t._colid,!0)}}},[o("span",{directives:[{name:"show",rawName:"v-show",value:1!=e.ixc["ixc-"+i.row._rowid+"-"+t._colid],expression:"ixc['ixc-'+scope.row._rowid+'-'+columnItem._colid] != true"}],staticClass:"edit-span"},[e._v("\n          "+e._s(i.row[t.props].value)+"\n        ")]),e._v(" "),o("el-input",{style:{position:1==e.ixc["ixc-"+i.row._rowid+"-"+t._colid]?"static":"absolute","z-index":1==e.ixc["ixc-"+i.row._rowid+"-"+t._colid]?99:-1},attrs:{type:"textarea",size:"mini",autosize:{maxRow:80},resize:"none",value:i.row[t.props].value},on:{focus:function(o){e.$set(e.isfocus,"isfocus-"+i.row._rowid+"-"+t._colid,!0),e.$set(e.ixc,"ixc-"+i.row._rowid+"-"+t._colid,!0)},blur:function(o){e.editBlur(o,i.row._rowid,t._colid,t.props),e.$set(e.ixc,"ixc-"+i.row._rowid+"-"+t._colid,!1),e.$set(e.isfocus,"isfocus-"+i.row._rowid+"-"+t._colid,!1)}}}),e._v(" "),1!=i.row[t.props].require||void 0!=i.row[t.props].value&&null!=i.row[t.props].value&&""!=i.row[t.props].value.trim()?o("i",{staticClass:"edit-icon el-icon-edit-outline"}):o("i",{staticClass:"edit-icon el-icon-question",staticStyle:{color:"#ff8495"}})],1):e._e(),e._v(" "),"number"===i.row[t.props].type?o("div",{staticStyle:{position:"relative",overflow:"hidden"},on:{mouseleave:function(o){e.editMouseLeave(i.row._rowid,t._colid)},mouseenter:function(o){e.$set(e.ixc,"ixc-"+i.row._rowid+"-"+t._colid,!0)}}},[o("span",{directives:[{name:"show",rawName:"v-show",value:1!=e.ixc["ixc-"+i.row._rowid+"-"+t._colid],expression:"ixc['ixc-'+scope.row._rowid+'-'+columnItem._colid] != true"}],staticClass:"edit-span"},[e._v("\n          "+e._s(e._f("toPercent")(i.row[t.props].value,i.row[t.props].is_percent))+"\n        ")]),e._v(" "),o("el-input",{style:{position:1==e.ixc["ixc-"+i.row._rowid+"-"+t._colid]?"static":"absolute","z-index":1==e.ixc["ixc-"+i.row._rowid+"-"+t._colid]?99:-1},attrs:{size:"mini",type:"number"},on:{focus:function(o){e.$set(e.isfocus,"isfocus-"+i.row._rowid+"-"+t._colid,!0),e.$set(e.ixc,"ixc-"+i.row._rowid+"-"+t._colid,!0)},blur:function(o){e.validNumber(o,i.row,t._colid,t.props),e.$set(e.ixc,"ixc-"+i.row._rowid+"-"+t._colid,!1),e.$set(e.isfocus,"isfocus-"+i.row._rowid+"-"+t._colid,!1)}},model:{value:e.number["number-"+i.row._rowid+"-"+t._colid],callback:function(o){e.$set(e.number,"number-"+i.row._rowid+"-"+t._colid,o)},expression:"number['number-'+scope.row._rowid+'-'+columnItem._colid]"}}),e._v(" "),1==i.row[t.props].require&&e.isNaN2(i.row[t.props].value)?o("i",{staticClass:"edit-icon el-icon-question",staticStyle:{color:"#ff8495"}}):[o("i",{directives:[{name:"show",rawName:"v-show",value:!e.ixc["ixc-"+i.row._rowid+"-"+t._colid],expression:"!ixc['ixc-'+scope.row._rowid+'-'+columnItem._colid]"}],staticClass:"edit-icon el-icon-d-caret"})]],2):e._e(),e._v(" "),"single-select"===i.row[t.props].type?o("div",{staticStyle:{position:"relative"}},[o("el-select",{attrs:{size:"mini",clearable:"",placeholder:"",value:i.row[t.props].value,filterable:"",remote:"","remote-method":function(o){return e.remoteMethod(o,i.row,t)},loading:e.loading["loading-"+i.row._rowid+"-"+t._colid]},on:{clear:function(o){e.selectClear(i.row._rowid,t._colid,t.props)},focus:function(o){e.selectFocus(o,i.row,t)},change:function(o){e.selectChange(o,i.row._rowid,t._colid,t.props),e.$emit("selectChange",{col:t,id:o,row:i.row})}}},e._l(e.option["option-"+i.row._rowid+"-"+t._colid],function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v(" "),1==i.row[t.props].require&&e.isUnexpect(i.row[t.props].value)?o("i",{staticClass:"edit-icon el-icon-question",staticStyle:{color:"#ff8495"}}):o("i",{staticClass:"edit-icon el-icon-arrow-down",staticStyle:{right:"-6px"}})],1):e._e(),e._v(" "),"multiple-select"===i.row[t.props].type?o("div",[o("el-select",{attrs:{size:"mini",multiple:"",placeholder:"",remote:"","remote-method":function(o){return e.remoteMethod(o,i.row,t)},loading:e.loading["loading-"+i.row._rowid+"-"+t._colid]},on:{focus:function(o){e.selectFocus(o,i.row,t)},change:function(o){return e.multipleChange(o,i.row._rowid,t._colid,t.props)}},model:{value:e.mutiple["mutiple-"+i.row._rowid+"-"+t._colid],callback:function(o){e.$set(e.mutiple,"mutiple-"+i.row._rowid+"-"+t._colid,o)},expression:"mutiple['mutiple-' + scope.row._rowid + '-' + columnItem._colid]"}},e._l(e.option["option-"+i.row._rowid+"-"+t._colid],function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v(" "),1==i.row[t.props].require&&e.isUnexpect(i.row[t.props].value)?o("i",{staticClass:"edit-icon el-icon-question",staticStyle:{color:"#ff8495",right:"21px","font-size":"12px"}}):e._e()],1):e._e(),e._v(" "),"year"===i.row[t.props].type||"month"===i.row[t.props].type||"date"===i.row[t.props].type||"datetime"===i.row[t.props].type||"datetimerange"===i.row[t.props].type||"daterange"===i.row[t.props].type?o("div",{staticStyle:{position:"relative"}},[o("el-date-picker",{attrs:{placeholder:"",align:"center",size:"mini",type:i.row[t.props].type,editable:!1,"prefix-icon":"none","value-format":i.row[t.props].format||"",format:i.row[t.props].format||""},on:{change:function(o){e.dateChange(o,i.row._rowid,t._colid,t.props)}},model:{value:i.row[t.props].value,callback:function(o){e.$set(i.row[t.props],"value",o)},expression:"scope.row[columnItem.props].value"}}),e._v(" "),1==i.row[t.props].require&&e.isUnexpect(i.row[t.props].value)?o("i",{staticClass:"edit-icon el-icon-question",staticStyle:{color:"#ff8495",right:"0px"}}):o("i",{staticClass:"edit-icon el-icon-date",staticStyle:{right:"-4px"}})],1):e._e()]}}])})})],2)},staticRenderFns:[]};var _={name:"App",data:function(){return{rowData:[{date:{type:"normal",value:"2017-测试1",color:"#0ff"},name:{type:"edit",value:"王小虎",require:!0},number:{type:"number",value:12,min:0,max:10,floatLength:2,is_percent:!0,require:!0},singleSelect:{type:"single-select",url:"./static/select.json",dataPos:"data.result",id:1,value:"选中",require:!0},mulSelect:{type:"multiple-select",url:"./static/select.json",id:[1,2],value:["小何","啊啊"],require:!0},d:{type:"date",value:"2012-03-22 12:53:53",format:"yyyy-MM-dd",require:!0}},{date:{type:"normal",value:"测试2",color:"#00f"},name:{type:"edit",value:"mr wangwangwang",require:!0},number:{type:"number",value:6,min:0,max:10,floatLength:2,is_percent:!0,require:!0},singleSelect:{type:"single-select",url:"./static/select.json",dataPos:"data.result",id:2,value:"xxx",require:!0},mulSelect:{type:"multiple-select",url:"./static/select.json",id:[2],value:["啊啊"],require:!0},d:{type:"date",value:"2016-11-12 12:53:53",format:"yyyy-MM-dd",require:!0}}],columnData:[{title:"普通的",width:240,props:"date"},{title:"姓名",width:120,props:"name",sortable:!0},{title:"数字输入",width:140,props:"number"},{title:"单选下拉",width:140,props:"singleSelect"},{title:"多选下拉",width:180,props:"mulSelect"},{title:"日期选择",props:"d"},{title:"操作",btnName:[{style:"success",icon:"el-icon-upload2"},{name:"删除",style:"danger",icon:"el-icon-delete"}],width:150,fixed:"right"}],entry:{date:{type:"normal",value:0},name:{type:"edit",value:"",require:!0},number:{type:"number",value:"",min:0,floatLength:2,require:!0},singleSelect:{type:"single-select",url:"./static/select.json",dataPos:"data.result",id:"",value:"",require:!0},mulSelect:{type:"multiple-select",url:"./static/select.json",id:function(){return[]},value:function(){return[]},require:!0},d:{type:"date",value:function(){return"2012-01-21"},require:!0}},doLayout:0}},created:function(){},mounted:function(){var e=this;window.addEventListener("resize",function(){e.doLayout=Date.now()})},methods:{btnClick:function(e){console.log(e)},selectChange:function(e){console.log(e)},selectionChange:function(e){console.log(e)},vvv:function(){this.$refs.database.validate()},vvv2:function(){var e=this.$refs.database.getTableData();console.log(e)}},components:{database:o("VU/8")(m,v,!1,function(e){o("wOM8")},"data-v-5be89043",null).exports}},y={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("database",{ref:"database",attrs:{rowData:e.rowData,columnData:e.columnData,entry:e.entry,doLayout:e.doLayout},on:{btnClick:e.btnClick,selectChange:e.selectChange,selectionChange:e.selectionChange}}),e._v(" "),o("el-button",{on:{click:e.vvv}},[e._v("验证")]),e._v(" "),o("el-button",{on:{click:e.vvv2}},[e._v("获取表格信息")])],1)},staticRenderFns:[]};var g=o("VU/8")(_,y,!1,function(e){o("K5er")},null,null).exports,b=o("8+8L"),x=o("zL8q"),C=o.n(x);o("tvR6");i.default.config.productionTip=!1,i.default.use(b.a),i.default.use(C.a),new i.default({el:"#app",components:{App:g},template:"<App/>"})},b5CR:function(e,t){},tvR6:function(e,t){},wOM8:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.e66c6d100dfeaf76aab8.js.map