(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d185caec"],{"041d":function(t,e,n){},"07bd":function(t,e,n){},"0873":function(t,e,n){},"09d7":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mybutton"},[n("el-button",{class:{disabled:t.disabled},style:t.btnStyle,attrs:{disabled:t.disabled,type:"primary",icon:t.icon},on:{click:t.clickFn}},[t._t("lastIcon"),t._t("default"),t._t("rightIcon")],2)],1)},o=[],s={name:"MyButton",data:function(){return{}},props:{icon:{type:String},btnStyle:{type:Object},disabled:{type:Boolean,default:!1}},created:function(){},methods:{clickFn:function(){this.$emit("click")}},computed:{}},l=s,i=(n("95a8"),n("2877")),r=Object(i["a"])(l,a,o,!1,null,"40b17dc2",null);e["a"]=r.exports},"0eb5":function(t,e,n){"use strict";n("0ecc")},"0ecc":function(t,e,n){},"15d8":function(t,e,n){},"1f99":function(t,e,n){},"298c":function(t,e,n){"use strict";n("0873")},"3d7a":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.listIsShow?t._e():n("div",{staticClass:"total"},[!1===t.lastDisabled||!1===t.rightDisabled?[n("span",[t._v("共"+t._s(t.taskList.totalCount)+"条数据 第"+t._s(t.taskList.pageIndex)+"/ "+t._s(Math.ceil(t.taskList.totalCount/10))+"页")]),n("div",{staticClass:"page-button"},[n("MyButton",{attrs:{btnStyle:t.pageBtnStyle,disabled:t.lastDisabled},on:{click:t.lastPage}},[t._v("上一页 ")]),n("MyButton",{attrs:{btnStyle:t.pageBtnStyle,disabled:t.rightDisabled},on:{click:t.nextPage}},[t._v("下一页 ")])],1)]:t._e()],2)},o=[],s=n("09d7"),l={name:"FooterPage",data:function(){return{pageBtnStyle:{background:"#d5ddf8",width:"70px",height:"32px",color:"#000",fontWeight:"400",marginLeft:"25px"}}},props:{listIsShow:{type:Boolean},taskList:{type:Object},lastDisabled:{type:Boolean},rightDisabled:{type:Boolean}},created:function(){},methods:{lastPage:function(){this.$emit("lastPage")},nextPage:function(){this.$emit("nextPage")}},computed:{},components:{MyButton:s["a"]}},i=l,r=(n("0eb5"),n("2877")),c=Object(r["a"])(i,a,o,!1,null,"1154a776",null);e["a"]=c.exports},4208:function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";return function(t,e,n){t=t||{};var a=e.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function s(t,e,n,o){return a.fromToBase(t,e,n,o)}n.en.relativeTime=o,a.fromToBase=function(e,a,s,l,i){for(var r,c,u,d=s.$locale().relativeTime||o,p=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=p.length,b=0;b<f;b+=1){var m=p[b];m.d&&(r=l?n(e).diff(s,m.d,!0):s.diff(e,m.d,!0));var h=(t.rounding||Math.round)(Math.abs(r));if(u=r>0,h<=m.r||!m.r){h<=1&&b>0&&(m=p[b-1]);var y=d[m.l];i&&(h=i(""+h)),c="string"==typeof y?y.replace("%d",h):y(h,a,m.l,u);break}}if(a)return c;var _=u?d.future:d.past;return"function"==typeof _?_(c):_.replace("%s",c)},a.to=function(t,e){return s(t,e,this,!0)},a.from=function(t,e){return s(t,e,this)};var l=function(t){return t.$u?n.utc():n()};a.toNow=function(t){return this.to(l(this),t)},a.fromNow=function(t){return this.from(l(this),t)}}}))},"4c68":function(t,e,n){"use strict";n("1f99")},9039:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{title:t.title,visible:t.isShow,width:t.width,"destroy-on-close":t.isDestroy},on:{"update:visible":function(e){t.isShow=e},close:t.close,open:t.open}},[t._t("default"),t.isInfoDialog?n("div",{staticClass:"bottom-btn"},[n("MyButton",{attrs:{btnStyle:t.infoStyle},on:{click:t.infoBtn}},[t._v("重新创建")])],1):t._e(),t.removeDialog?n("div",{staticClass:"bottom-btn"},[n("MyButton",{attrs:{btnStyle:t.infoStyle},on:{click:t.removeBtn}},[t._v("取消工单")])],1):t._e(),t.twoBtn?n("div",{staticClass:"bottom-btn"},[n("MyButton",{attrs:{btnStyle:t.cancelStyle},on:{click:t.cancelBtn}},[t._v("取 消 ")]),n("MyButton",{attrs:{btnStyle:t.sureStyle},on:{click:t.sureBtn}},[t._v("确 定 ")])],1):t._e()],2)},o=[],s=n("09d7"),l={name:"Dialog",data:function(){return{isShow:"",cancelStyle:{background:"#fbf4f0",color:"#655b56"},sureStyle:{background:"linear-gradient(135deg,#ff9743,#ff5e20)",color:"#fff",marginLeft:"24px"},infoStyle:{background:"#fbf4f0",color:"#655b56"}}},props:{businessIsShow:{typeof:Boolean,default:!1},title:{typeof:String},isInfoDialog:{type:Boolean,default:!1},twoBtn:{type:Boolean,default:!0},removeDialog:{type:Boolean,default:!1},isDestroy:{type:Boolean,default:!1},width:{typeof:String,default:"630px"}},created:function(){},methods:{cancelBtn:function(){this.$emit("cancelBtn")},sureBtn:function(){this.$emit("sureBtn")},open:function(){this.$emit("open")},close:function(){this.$emit("close")},infoBtn:function(){this.$emit("infoBtn")},removeBtn:function(){this.$emit("removeBtn")}},computed:{},watch:{businessIsShow:{immediate:!0,handler:function(){this.isShow=this.businessIsShow}}},components:{MyButton:s["a"]}},i=l,r=(n("4c68"),n("2877")),c=Object(r["a"])(i,a,o,!1,null,"023d4138",null);e["a"]=c.exports},9393:function(t,e,n){"use strict";n("041d")},"95a8":function(t,e,n){"use strict";n("15d8")},a471:function(t,e,n){!function(e,a){t.exports=a(n("5a0c"))}(0,(function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=e(t),a={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t,e){return"W"===e?t+"周":t+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(t,e){var n=100*t+e;return n<600?"凌晨":n<900?"早上":n<1100?"上午":n<1300?"中午":n<1800?"下午":"晚上"}};return n.default.locale(a,null,!0),a}))},d56c:function(t,e,n){"use strict";n("07bd")},e4a8:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"peopleManger"},[n("SerchBar",{attrs:{lastInpTitle:"人员搜索",rightInpTitle:"角色",typeList:t.typeList},on:{search:t.searchFn}}),n("worktable"),n("FooterPage",{attrs:{taskList:t.workCountList,listIsShow:!t.workCountList.totalCount,lastDisabled:t.lastDisabled,rightDisabled:t.rightDisabled},on:{lastPage:t.lastPage,nextPage:t.nextPage}})],1)},o=[],s=n("c7eb"),l=n("1da1"),i=n("5530"),r=n("9039"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[n("el-form-item",{attrs:{label:t.lastInpTitle+":"}},[n("el-input",{ref:"lastInput",attrs:{placeholder:"请输入",clearable:""},model:{value:t.taskCode,callback:function(e){t.taskCode=e},expression:"taskCode"}})],1),t.rightInpTitle?n("el-form-item",{attrs:{label:t.rightInpTitle+":"}},[n("el-select",{attrs:{placeholder:"请选择",clearable:!0},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},t._l(t.typeList,(function(t){return n("el-option",{key:t.roleId,attrs:{label:t.roleName,value:t.roleId}})})),1)],1):t._e(),n("el-form-item",[n("MyButton",{attrs:{icon:"el-icon-search",btnStyle:t.searchButStyle},on:{click:t.searchBtnFn}},[t._v(" 查询 ")])],1)],1)],1)},u=[],d=n("09d7"),p={name:"SearchBar",data:function(){return{taskCode:"",status:"",searchButStyle:{background:"#5f84ff"}}},props:{lastInpTitle:{type:String},rightInpTitle:{type:String},typeList:{type:Array}},created:function(){},methods:{searchBtnFn:function(){this.$emit("search",this.taskCode,this.status)}},computed:{},components:{MyButton:d["a"]}},f=p,b=(n("d56c"),n("2877")),m=Object(b["a"])(f,c,u,!1,null,"660cecf0",null),h=m.exports,y=n("2f62"),_=n("3d7a"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"","empty-text":"暂无数据",border:!1,data:t.workCountList.currentPageRecords}},[n("el-table-column",{attrs:{prop:"pageIndex",label:"序号",width:"80",type:"index",index:t.indexMethod,"empty-text":"暂无数据"}}),n("el-table-column",{attrs:{prop:"userName",label:"人员名称"}}),n("el-table-column",{attrs:{prop:"roleName",label:"角色"}}),n("el-table-column",{attrs:{prop:"mobile",label:"联系电话"}}),n("el-table-column",{attrs:{prop:"workCount",label:"完成工单(本月)"}}),n("el-table-column",{attrs:{prop:"progressTotal",label:"进行中工单"}}),n("el-table-column",{attrs:{prop:"cancelCount",label:"拒绝工单(本月)"}}),n("el-table-column",{attrs:{prop:"taskId",label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.sureBtn(a.userId)}}},[t._v(" 查看详情 ")])]}}])})],1),n("div",{staticClass:"detail"},[n("el-dialog",{attrs:{title:"人员详情",visible:t.businessIsShow},on:{"update:visible":function(e){t.businessIsShow=e}}},[n("div",{staticClass:"peopleName"},[n("span",{staticClass:"street"},[t._v("人员名称："+t._s(t.peopleInfo.userName))]),n("span",{staticClass:"yunying"},[t._v("角色："+t._s(t.peopleInfo.roleName))]),n("span",{staticClass:"phone"},[t._v("联系电话："+t._s(t.peopleInfo.mobile))]),n("p",{staticClass:"fuze"},[t._v("负责区域："+t._s(t.peopleInfo.regionName))])]),n("el-table",{attrs:{border:"",data:t.dataTime}},[n("el-table-column",{attrs:{width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.$index?n("span",[t._v("本周")]):t._e(),1===e.$index?n("span",[t._v("本月")]):t._e(),2===e.$index?n("span",[t._v("本年")]):t._e()]}}])}),n("el-table-column",{attrs:{prop:"total",label:"总工单数",width:"160"}}),n("el-table-column",{attrs:{prop:"cancelCount",label:"拒绝工单",width:"160"}}),n("el-table-column",{attrs:{prop:"workCount",label:"完成工单",width:"160"}}),n("el-table-column",{attrs:{prop:"progressTotal",label:"进行中的工单",width:"160"}})],1)],1)],1)],1)},k=[],v=n("996f"),w=n("5a0c"),Y=n.n(w),L=n("4208");Y.a.extend(L),n("a471"),Y.a.locale("zh-cn");var I=Y.a,S={data:function(){return{businessIsShow:!1,formLabelWidth:"120px",detailsList:{},tableTitle:[{title:"总工单数",name:"total"},{title:"拒绝工单",name:"cancelCount"},{title:"完成工单",name:"workCount"},{title:"进行中工单",name:"doingTotal"}],dataTimer:["本周","本月","本年"],dataTime:[]}},created:function(){},computed:Object(i["a"])(Object(i["a"])({},Object(y["e"])("people",["peopleInfo"])),Object(y["e"])("people",["workCountList"])),methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(y["b"])("people",["setpeopleInfoList"])),Object(y["b"])("people",["setWorkCountList"])),{},{sureBtn:function(t){var e=this;return Object(l["a"])(Object(s["a"])().mark((function n(){var a,o,l,i,r,c,u,d,p,f;return Object(s["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.setpeopleInfoList(t);case 2:return console.log(e.peopleInfo),console.log(t),n.next=6,Object(v["g"])(t);case 6:return a=n.sent,e.detailsList=a,o=I().startOf("day").format("YYYY-MM-DD HH:mm:ss"),l=I().endOf("date").format("YYYY-MM-DD HH:mm:ss"),i=I().startOf("month").format("YYYY-MM-DD HH:mm:ss"),r=I().endOf("month").format("YYYY-MM-DD HH:mm:ss"),c=I().startOf("year").format("YYYY-MM-DD HH:mm:ss"),u=I().endOf("year").format("YYYY-MM-DD HH:mm:ss"),n.next=16,Object(v["f"])({userId:e.peopleInfo.userId,start:o,end:l});case 16:return d=n.sent,e.dataTime.push(d),n.next=20,Object(v["f"])({userId:e.peopleInfo.userId,start:i,end:r});case 20:return p=n.sent,e.dataTime.push(p),n.next=24,Object(v["f"])({userId:e.peopleInfo.userId,start:c,end:u});case 24:f=n.sent,e.dataTime.push(f),console.log(e.dataTime),e.businessIsShow=!0;case 28:case"end":return n.stop()}}),n)})))()},indexMethod:function(t){return t+1}})},x=S,O=(n("298c"),Object(b["a"])(x,g,k,!1,null,"54df1b20",null)),B=O.exports,M={name:"WorkPeopleManger",data:function(){return{dialogTableVisible:!1,typeList:[],peopleSearch:{pageIndex:1,pageSize:10}}},components:{Button:d["a"],SerchBar:h,FooterPage:_["a"],worktable:B,Dialog:r["a"]},created:function(){this.getWorkPeopleList()},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(y["e"])("people",["workCountList"])),Object(y["e"])("people",["workList"])),Object(y["e"])("people",["roleList"])),{},{lastDisabled:function(){return this.workCountList.pageIndex<="1"},rightDisabled:function(){return this.workCountList.pageIndex>=this.workCountList.totalPage}}),methods:Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(y["b"])("people",["setWorkCountList"])),Object(y["b"])("people",["setWorkPeople"])),Object(y["b"])("people",["setpeopleInfoList"])),Object(y["b"])("people",["setRoleList"])),{},{getpeopleInfo:function(){this.dialogTableVisible=!0},getWorkPeopleList:function(t){var e=this;return Object(l["a"])(Object(s["a"])().mark((function n(){return Object(s["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.setWorkCountList(t);case 2:return n.next=4,e.setRoleList(t);case 4:e.typeList=e.roleList,console.log(e.typeList);case 6:case"end":return n.stop()}}),n)})))()},searchFn:function(t,e){var n=this;return Object(l["a"])(Object(s["a"])().mark((function a(){return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:n.setWorkCountList({userName:t},{isRepair:e});case 1:case"end":return a.stop()}}),a)})))()},lastPage:function(){this.setWorkCountList({pageIndex:this.workCountList.pageIndex-1})},nextPage:function(){this.setWorkCountList({pageIndex:this.workCountList.pageIndex-0+1})}})},j=M,C=(n("9393"),Object(b["a"])(j,a,o,!1,null,"71961c50",null));e["default"]=C.exports}}]);