require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([3],{35:function(t,e,n){"use strict";var i=o(n(1)),s=o(n(36));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(s.default))},36:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(38),s=n.n(i),o=n(39),a=!1;var r=function(t){a||n(37)},u=n(0)(s.a,o.a,r,null,null);u.options.__file="..\\..\\..\\..\\work\\1-ME\\muiapp\\movie\\pages\\mvList\\mvList.vue",u.esModule&&Object.keys(u.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] mvList.vue: functional components are not supported with templates, they should use render functions."),e.default=u.exports},37:function(t,e){},38:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{mvList:""}},onLoad:function(){this.getMvList()},methods:{getMvList:function(){var e=this;t.showLoading({title:"加载中"}),t.request({url:e.MusicApi.server+e.MusicApi.type.topMv,success:function(n){t.hideLoading(),200==n.data.code?e.mvList=n.data.data:(console.error("数据获取失败"),t.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"}))},fail:function(e){t.hideLoading(),t.showToast({title:"请求超时",duration:5e3,icon:"none"})}})},openMvDetail:function(e){e=e;t.navigateTo({url:"../mvDetail/mvDetail?mvid="+e})}}}}).call(e,n(2).default)},39:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"page-panel"},[n("view",{staticClass:"mvList"},t._l(t.mvList,function(e,i){return n("view",{key:e.index,staticClass:"item",attrs:{eventid:"ElG-0-"+i},on:{tap:function(n){t.openMvDetail(e.id)}}},[n("image",{attrs:{src:e.cover,mode:"widthFix"}}),n("text",{staticClass:"name"},[t._v(t._s(e.name))]),t._m(0,!0)])}))])};i._withStripped=!0;var s={render:i,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"playBtn"},[e("view",{staticClass:"icon"})])}]};e.a=s}},[35]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mvList/mvList.js.map