(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/rankingList/rankingList"],{"01ff":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("d1b4"));function n(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){return{id:"",playlist:"",playlistDetailSwith:!1}},components:{nowPlay:a.default},onLoad:function(t){this.id=t.id,this.getTopList()},methods:{getTopList:function(){var e=this;t.showLoading({title:"加载中"}),t.request({url:e.MusicApi.server+e.MusicApi.type.topList,data:{idx:e.id},success:function(i){200==i.data.code?(e.playlist=i.data.playlist,t.hideLoading()):(t.hideLoading(),console.error("数据获取失败"),t.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"}))},fail:function(e){t.hideLoading(),t.showToast({title:"请求超时",duration:5e3,icon:"none"})}})},toPlay:function(e){e=e;t.navigateTo({url:"../play/play?id="+e})}}};e.default=s}).call(this,i("649d")["default"])},1723:function(t,e,i){},3649:function(t,e,i){"use strict";i("a8ff");var a=s(i("b0ce")),n=s(i("dfa7"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(n.default))},"5a9a":function(t,e,i){"use strict";var a=i("1723"),n=i.n(a);n.a},b303:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"page-panel"},[i("nowPlay",{attrs:{mpcomid:"3fe561ce-0"}}),i("view",{staticClass:"playlistDetail ease-row"},[i("view",{staticClass:"ease-col-3-1 coverImgUrls"},[i("image",{attrs:{src:t.playlist.coverImgUrl,mode:"widthFix"}})]),i("view",{staticClass:"ease-col-3-2 playlistInfo"},[i("view",{staticClass:"name"},[t._v(t._s(t.playlist.name))]),i("view",{staticClass:"description"},[t._v(t._s(t.playlist.description))])])]),i("view",{staticClass:"privileges"},t._l(t.playlist.tracks,function(e,a){return i("view",{key:e.index,staticClass:"item",attrs:{eventid:"3fe561ce-0-"+a},on:{tap:function(i){t.toPlay(e.id)}}},[i("view",{staticClass:"index"},[t._v(t._s(a+1))]),i("view",{staticClass:"info"},[i("view",{staticClass:"name"},[t._v(t._s(e.name))]),t._l(e.ar,function(e,a){return i("text",{key:e.i,staticClass:"arName"},[t._v(t._s(e.name))])})],2),t._m(0,!0)])}))],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"btn"},[i("text"),i("text"),i("text")])}];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},d477:function(t,e,i){"use strict";i.r(e);var a=i("01ff"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},dfa7:function(t,e,i){"use strict";i.r(e);var a=i("b303"),n=i("d477");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("5a9a");var l=i("2877"),o=Object(l["a"])(n["default"],a["a"],a["b"],!1,null,null,null);o.options.__file="rankingList.vue",e["default"]=o.exports}},[["3649","common/runtime","common/vendor"]]]);