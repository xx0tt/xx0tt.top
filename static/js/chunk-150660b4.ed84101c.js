(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-150660b4"],{2394:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"count"},[a("div",{staticClass:"top"},[a("div",{staticClass:"people-left"},[a("div",{staticClass:"title"},[t._v("运营人员（当天）")]),a("div",{staticClass:"people-right-car"},[a("div",{staticClass:"status"},[a("div",{staticClass:"item"},[a("div",{staticClass:"num"},[t._v(t._s(t.dataTime.total))]),a("div",{staticClass:"text"},[t._v("工单总数（个）")])])]),a("div",{staticClass:"status"},[a("div",{staticClass:"item"},[a("div",{staticClass:"num"},[t._v(t._s(t.dataTime.completedTotal))]),a("div",{staticClass:"text"},[t._v("完成工单（个）")])])]),a("div",{staticClass:"status"},[a("div",{staticClass:"item"},[a("div",{staticClass:"num"},[t._v(t._s(t.dataTime.cancelTotal))]),a("div",{staticClass:"text"},[t._v("拒绝工单（个）")])])]),a("div",{staticClass:"status"},[a("div",{staticClass:"item"},[a("div",{staticClass:"num"},[t._v(t._s(t.dataTime.workerCount))]),a("div",{staticClass:"text"},[t._v("运营人员数（个）")])])])])]),a("div",{staticClass:"people-right"},[a("div",{staticClass:"title"},[t._v("运维人员（当天）")]),a("div",{staticClass:"people-right-cilun"},[a("div",{staticClass:"status"},[a("div",{staticClass:"item"},[a("div",{staticClass:"num"},[t._v(t._s(t.operation.total))]),a("div",{staticClass:"text"},[t._v("工单总数（个）")])])]),a("div",{staticClass:"status"},[a("div",{staticClass:"item"},[a("div",{staticClass:"num"},[t._v(t._s(t.operation.completedTotal))]),a("div",{staticClass:"text"},[t._v("完成工单（个）")])])]),a("div",{staticClass:"status"},[a("div",{staticClass:"item"},[a("div",{staticClass:"num"},[t._v(t._s(t.operation.cancelTotal))]),a("div",{staticClass:"text"},[t._v("拒绝工单（个）")])])]),a("div",{staticClass:"status"},[a("div",{staticClass:"item"},[a("div",{staticClass:"num"},[t._v(t._s(t.operation.workerCount))]),a("div",{staticClass:"text"},[t._v("运维人员数（个）")])])])])])]),a("div",{staticClass:"card"},[a("el-card",{staticClass:"box-card",staticStyle:{border:"none"},attrs:{shadow:"never"}},[a("div",{staticClass:"status"},[a("div",{staticClass:"left-status"},[t._v("工单状态")]),a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"~","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions},model:{value:t.value1,callback:function(s){t.value1=s},expression:"value1"}})],1)]),a("div",{staticClass:"selectTime"},[a("div",{staticClass:"item",class:{ischeckoud:1===t.index},on:{click:t.week}},[t._v(" 周 ")]),a("div",{staticClass:"item",class:{ischeckoud:2===t.index},on:{click:t.mon}},[t._v(" 月 ")]),a("div",{staticClass:"item",class:{ischeckoud:3===t.index},on:{click:t.yer}},[t._v(" 年 ")])]),a("div",{staticClass:"card-img"},[a("img",{attrs:{src:e("d5c3")}})])]),a("el-card",{staticClass:"right-card",staticStyle:{border:"none"},attrs:{shadow:"never"}},[a("div",{staticClass:"header"},[a("div",{staticClass:"title"},[t._v("人效排名（月度）")]),a("div",{staticClass:"select"},[a("el-select",{attrs:{placeholder:"全部"},model:{value:t.areaList.name,callback:function(s){t.$set(t.areaList,"name",s)},expression:"areaList.name"}},t._l(t.areaList.currentPageRecords,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),a("div",{staticClass:"role-list"},[a("div",{staticClass:"item",class:{ischeckoud:1===t.checkedout},on:{click:t.isCheckedone}},[t._v(" 运营人员 ")]),a("div",{staticClass:"item",class:{ischeckoud:2===t.checkedout},on:{click:t.isCheckedtwo}},[t._v(" 运维人员 ")])])]),a("div",{staticClass:"body-img"},[a("img",{attrs:{src:e("d5c3"),alt:""}})])])],1)])},i=[],c=e("c7eb"),n=e("1da1"),l=e("5530"),d=e("ade3"),o=e("996f"),r=e("2f62"),v={name:"task",data:function(){return Object(d["a"])({pickerOptions:{},value1:[new Date,new Date],dataTime:{},index:1,checkedout:1,operation:{}},"pickerOptions",{disabledDate:function(t){return t.getTime()>Date.now()}})},created:function(){this.getPeopleCount()},methods:Object(l["a"])(Object(l["a"])({week:function(){1!==this.index&&(this.index=1)},mon:function(){2!==this.index&&(this.index=2)},yer:function(){3!==this.index&&(this.index=3)},isCheckedone:function(){1!==this.checkedout&&(this.checkedout=1)},isCheckedtwo:function(){2!==this.checkedout&&(this.checkedout=2)},getPeopleCount:function(){return Object(n["a"])(Object(c["a"])().mark((function t(){return Object(c["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["e"])();case 2:case"end":return t.stop()}}),t)})))()}},Object(r["b"])("people",["setAreaList"])),{},{getPeopleCount:function(t){var s=this;return Object(n["a"])(Object(c["a"])().mark((function e(){var a;return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.setAreaList(t);case 2:return e.next=4,Object(o["e"])();case 4:a=e.sent,s.dataTime=a[0],s.operation=a[1];case 7:case"end":return e.stop()}}),e)})))()}}),computed:Object(l["a"])({},Object(r["e"])("people",["areaList"]))},u=v,C=(e("9843"),e("2877")),p=Object(C["a"])(u,a,i,!1,null,"68ffa6a8",null);s["default"]=p.exports},9843:function(t,s,e){"use strict";e("c387")},c387:function(t,s,e){},d5c3:function(t,s,e){t.exports=e.p+"static/img/no.87c4f71b.png"}}]);