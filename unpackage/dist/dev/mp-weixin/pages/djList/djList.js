require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([8],{49:function(e,t,n){"use strict";var o=i(n(1)),s=i(n(50));function i(e){return e&&e.__esModule?e:{default:e}}Page((0,o.default)(s.default))},50:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(52),s=n.n(o),i=n(53),u=!1;var d=function(e){u||n(51)},r=n(0)(s.a,i.a,d,null,null);r.options.__file="..\\..\\..\\..\\work\\1-ME\\muiapp\\movie\\pages\\djList\\djList.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] djList.vue: functional components are not supported with templates, they should use render functions."),t.default=r.exports},51:function(e,t){},52:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o,s=n(15),i=(o=s)&&o.__esModule?o:{default:o};t.default={data:function(){return{djRecommendList:"",djListNumber:"10"}},onLoad:function(){this.getDjList()},methods:{getDjList:function(){var t=this;e.showLoading({title:"加载中"}),e.request({url:t.MusicApi.server+t.MusicApi.type.djRecommend,success:function(n){e.hideLoading(),200==n.data.code?t.djRecommendList=n.data.djRadios:(console.error("数据获取失败"),e.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"}))},fail:function(t){e.hideLoading(),e.showToast({title:"请求超时",duration:5e3,icon:"none"})}})}},components:{djRecommendList:i.default}}}).call(t,n(2).default)},53:function(e,t,n){"use strict";var o=function(){var e=this.$createElement,t=this._self._c||e;return t("view",{staticClass:"page-panel"},[t("djRecommendList",{attrs:{djRecommendList:this.djRecommendList,djListNumber:this.djListNumber,mpcomid:"uR5-0"}})],1)};o._withStripped=!0;var s={render:o,staticRenderFns:[]};t.a=s}},[49]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/djList/djList.js.map