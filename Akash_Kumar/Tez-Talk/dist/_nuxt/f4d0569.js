(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{493:function(e,t){},557:function(e,t){},559:function(e,t){},625:function(e,t){},627:function(e,t){},637:function(e,t){},639:function(e,t){},672:function(e,t){},674:function(e,t){},675:function(e,t){},680:function(e,t){},682:function(e,t){},701:function(e,t){},713:function(e,t){},716:function(e,t){},762:function(e,t,r){"use strict";r.r(t);r(7),r(46);var n=r(23),o=(r(95),r(26),r(48),r(551),r(54),r(13),r(52),r(548)),c=r(651),l=r(760),m="KT1DwzJoHV3mZMEZybunYY83QbsRmekRK9yd",d="https://ghostnet.smartpy.io";var v={components:{},data:function(){return{loading:!0,sending:!1,confirming:!1,entries:[],author:"",message:"",error:null}},mounted:function(){this.Tezos=new o.a(d),this.refresh()},methods:{refresh:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,e.error=null,t.next=4,e.Tezos.contract.at(m);case 4:return e.contract=t.sent,t.next=7,e.contract.storage();case 7:r=t.sent,data=r.authors.map((function(e,i){return{author:e,entry:(t=r.entries[i],t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")).replace("\n","<br>"),date:Object(l.a)(new Date(r.dates[i]),new Date)};var t})),e.entries=data,e.loading=!1;case 11:case"end":return t.stop()}}),t)})))()},submit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,l,v,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.message.length<10||e.message.length>280)){t.next=2;break}return t.abrupt("return");case 2:return e.error=null,r={name:"Tez-Talk"},n=new c.a(r),t.prev=5,t.next=8,n.requestPermissions({network:{type:"ghostnet",rpcUrl:d}});case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(5),e.error=t.t0.description,t.abrupt("return");case 14:return t.next=16,n.getPKH();case 16:return o=t.sent,e.Tezos.setProvider({wallet:n}),t.next=20,e.Tezos.wallet.at(m);case 20:return l=t.sent,e.sending=!0,t.prev=22,t.next=25,l.methods.default(o,e.message).send();case 25:v=t.sent,t.next=33;break;case 28:return t.prev=28,t.t1=t.catch(22),e.error=t.t1.description,e.sending=!1,t.abrupt("return");case 33:return e.sending=!1,e.confirming=!0,t.next=37,v.confirmation();case 37:f=t.sent,e.confirming=!1,f.completed?(e.author="",e.message="",e.refresh()):e.error="An error has occurred";case 40:case"end":return t.stop()}}),t,null,[[5,10],[22,28]])})))()}}},f=r(90),h=r(133),w=r.n(h),_=r(379),x=r(168),T=r(531),k=r(462),y=r(755),V=r(756),C=r(167),z=r(757),R=r(761),j=r(758),P=r(759),component=Object(f.a)(v,(function(){var e=this,t=e._self._c;return t("v-row",{attrs:{justify:"center",align:"center",color:"#69ff3e"}},[t("v-col",{attrs:{cols:"12",sm:"8",md:"6",loading:e.loading}},[e.error?t("v-alert",{attrs:{dismissible:"",type:"error"}},[e._v("\n      "+e._s(e.error)+"\n    ")]):e._e(),e._v(" "),e.confirming?t("v-alert",{attrs:{type:"info",color:"black"}},[e._v("\n      Waiting to include the operation on the blockchain...\n    ")]):e._e(),e._v(" "),e.sending?t("v-progress-circular",{staticClass:"mt-2",attrs:{size:"100",color:"primary",indeterminate:""}}):t("div",[t("v-textarea",{attrs:{counter:"","no-resize":"",rows:"5",label:"Tweet",rules:[function(e){return""==e||e.length>=10||"Tweet must be atleast 10 characters"},function(e){return e.length<=280||"Tweet must be less than 281 characters"}],outlined:""},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),e._v(" "),t("v-btn",{staticClass:"primary",on:{click:e.submit}},[e._v("\n        Submit\n      ")])],1),e._v(" "),t("br"),e._v(" "),t("v-divider"),e._v(" "),e.loading?t("v-progress-circular",{staticClass:"mt-2",attrs:{size:"100",color:"primary",indeterminate:""}}):e._e(),e._v(" "),t("v-card",{staticClass:"mt-2"},[t("v-card-title",[e._v("Tweets")]),e._v(" "),t("v-card-text",[t("v-timeline",{attrs:{"align-top":"",dense:""}},e._l(e.entries,(function(r,n){return t("v-timeline-item",{key:n,attrs:{small:""}},[t("div",[t("div",{staticClass:"font-weight-normal"},[t("strong",[e._v(e._s(r.author))]),e._v(" "),t("small",[e._v("@"+e._s(r.date))])]),e._v(" "),t("div",{domProps:{innerHTML:e._s(r.entry)}})])])})),1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;w()(component,{VAlert:_.a,VBtn:x.a,VCard:T.a,VCardText:k.a,VCardTitle:k.b,VCol:y.a,VDivider:V.a,VProgressCircular:C.a,VRow:z.a,VTextarea:R.a,VTimeline:j.a,VTimelineItem:P.a})}}]);