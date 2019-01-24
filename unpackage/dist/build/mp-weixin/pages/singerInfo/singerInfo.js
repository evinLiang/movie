(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/singerInfo/singerInfo"],{"0aec":function(t,e,i){"use strict";i("a8ff");var n=a(i("b0ce")),s=a(i("5c2e"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(s.default))},"0b02":function(t,e,i){"use strict";i.r(e);var n=i("3e89"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=s.a},1095:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("3566")),s=o(i("d1b4")),a=o(i("b616"));function o(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{singerInfo:"",tabNum:1,SingerDesc:"",singerHotSongs:"",singerMvs:""}},components:{songList:n.default,nowPlay:s.default,mvList:a.default},onLoad:function(t){var e=JSON.parse(t.data);this.singerInfo=e,this.singerInfo.picUrl=decodeURIComponent(this.singerInfo.picUrl),this.getSingerDesc(),this.getSingerSong(),this.getSingerMv()},methods:{getSingerDesc:function(){var e=this;t.showLoading({title:"加载中"}),t.request({url:e.MusicApi.server+e.MusicApi.type.artistDesc,data:{id:e.singerInfo.id},success:function(i){t.hideLoading(),200==i.data.code?e.SingerDesc=i.data:(console.error("数据获取失败"),t.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"}))},fail:function(e){t.hideLoading(),t.showToast({title:"请求超时",duration:5e3,icon:"none"})}})},getSingerSong:function(){var e=this;t.showLoading({title:"加载中"}),t.request({url:e.MusicApi.server+e.MusicApi.type.artistSong,data:{id:e.singerInfo.id},success:function(i){t.hideLoading(),200==i.data.code?e.singerHotSongs=i.data.hotSongs:(console.error("数据获取失败"),t.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"}))},fail:function(e){t.hideLoading(),t.showToast({title:"请求超时",duration:5e3,icon:"none"})}})},getSingerMv:function(){var e=this;t.showLoading({title:"加载中"}),t.request({url:e.MusicApi.server+e.MusicApi.type.artistMv,data:{id:e.singerInfo.id},success:function(i){t.hideLoading(),200==i.data.code?e.singerMvs=i.data.mvs:(console.error("数据获取失败"),t.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"}))},fail:function(e){t.hideLoading(),t.showToast({title:"请求超时",duration:5e3,icon:"none"})}})}}};e.default=r}).call(this,i("543d")["default"])},"329a":function(t,e,i){},"3e89":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},props:["singerMvs"],methods:{openMvDetail:function(e){e=e;t.navigateTo({url:"../mvDetail/mvDetail?mvid="+e})}}};e.default=i}).call(this,i("543d")["default"])},"447b":function(t,e,i){"use strict";i.r(e);var n=i("1095"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=s.a},"5c2e":function(t,e,i){"use strict";i.r(e);var n=i("6913"),s=i("447b");for(var a in s)"default"!==a&&function(t){i.d(e,t,function(){return s[t]})}(a);i("ac7d");var o=i("2877"),r=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,null,null);r.options.__file="singerInfo.vue",e["default"]=r.exports},6913:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"page-panel singerInfo"},[i("nowPlay",{attrs:{mpcomid:"27728038-0"}}),i("view",{staticClass:"panel"},[i("image",{attrs:{src:t.singerInfo.picUrl,mode:""}}),i("view",{staticClass:"name"},[t._v(t._s(t.singerInfo.name))])]),i("view",{staticClass:"tab"},[i("view",{staticClass:"tab-title"},[i("view",{staticClass:"item",class:1==t.tabNum?"active":"",attrs:{eventid:"27728038-0"},on:{tap:function(e){t.tabNum=1}}},[t._v("描述")]),i("view",{staticClass:"item",class:2==t.tabNum?"active":"",attrs:{eventid:"27728038-1"},on:{tap:function(e){t.tabNum=2}}},[t._v("单曲")]),i("view",{staticClass:"item",class:4==t.tabNum?"active":"",attrs:{eventid:"27728038-2"},on:{tap:function(e){t.tabNum=4}}},[t._v("MV")])]),i("view",{staticClass:"tab-content"},[1==t.tabNum?i("view",{staticClass:"item"},[i("view",{staticClass:"SingerDesc"},[t._v(t._s(t.SingerDesc.briefDesc))])]):t._e(),2==t.tabNum?i("view",{staticClass:"item"},[i("songList",{attrs:{singerHotSongs:t.singerHotSongs,mpcomid:"27728038-1"}})],1):t._e(),4==t.tabNum?i("view",{staticClass:"item"},[i("mvList",{attrs:{singerMvs:t.singerMvs,mpcomid:"27728038-2"}})],1):t._e()])])],1)},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},ac7d:function(t,e,i){"use strict";var n=i("329a"),s=i.n(n);s.a},b481:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"simiMvList"},t._l(t.singerMvs,function(e,n){return i("view",{key:e.id,staticClass:"item",attrs:{eventid:"e30cd080-0-"+n},on:{tap:function(i){t.openMvDetail(e.id)}}},[i("view",{staticClass:"pic"},[i("image",{attrs:{src:e.imgurl16v9,mode:"aspectFill"}})]),i("view",{staticClass:"info"},[i("view",{staticClass:"name"},[t._v(t._s(e.name))]),i("view",{staticClass:"artistName"},[t._v(t._s(e.artistName))])]),t._m(0,!0)])}))},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"btn"},[i("text"),i("text"),i("text")])}];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},b616:function(t,e,i){"use strict";i.r(e);var n=i("b481"),s=i("0b02");for(var a in s)"default"!==a&&function(t){i.d(e,t,function(){return s[t]})}(a);var o=i("2877"),r=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,null,null);r.options.__file="mvList.vue",e["default"]=r.exports}},[["0aec","common/runtime","common/vendor"]]]);