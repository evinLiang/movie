(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-play-play"],{"40ae":function(i,t,e){"use strict";e.r(t);var n=e("98f4"),a=e.n(n);for(var s in n)"default"!==s&&function(i){e.d(t,i,function(){return n[i]})}(s);t["default"]=a.a},"546f":function(i,t,e){"use strict";var n=function(){var i=this,t=i.$createElement,e=i._self._c||t;return""==!i.musicDetail.name?e("v-uni-view",{staticClass:"page-panel-h"},[e("v-uni-view",{staticClass:"music-name"},[i._v(i._s(i.musicDetail.name))]),e("v-uni-view",{staticClass:"music-author"},[i._v(i._s(i.musicDetail.author))]),e("v-uni-view",{staticClass:"music-pic"},[e("v-uni-image",{attrs:{src:i.musicDetail.picUrl}})],1),e("v-uni-view",{staticClass:"player-panel"},[e("v-uni-view",{staticClass:"time"},[e("v-uni-view",{staticClass:"item"},[i._v(i._s(i.musicTime.currentTime))]),e("v-uni-view",{staticClass:"item"},[i._v(i._s(i.musicTime.duration))])],1),e("v-uni-slider",{attrs:{value:i.musicTime.currentTime,step:"0.01",min:"0",max:i.musicTime.duration,"block-size":"12",activeColor:"#E91E63"},on:{changing:function(t){t=i.$handleEvent(t),i.sliderChange(t)}}}),e("v-uni-view",{staticClass:"player-btn"},[i.isStop?e("v-uni-view",{staticClass:"playStop",on:{click:function(t){t=i.$handleEvent(t),i.toAgain()}}},[e("v-uni-image",{attrs:{src:"../../static/images/again.png",mode:""}})],1):i._e(),i.isStop?i._e():e("v-uni-view",{staticClass:"playStop",on:{click:function(t){t=i.$handleEvent(t),i.toPausePlay()}}},[e("v-uni-image",{attrs:{src:i.isPlay?i.playIcon:i.pauseIcon,mode:""}})],1)],1)],1)],1):i._e()},a=[];e.d(t,"a",function(){return n}),e.d(t,"b",function(){return a})},"7df1":function(i,t,e){t=i.exports=e("2350")(!1),t.push([i.i,"uni-page-body[data-v-68e20f16]{width:100%;height:100%}.page-panel-h[data-v-68e20f16]{position:relative;z-index:1;width:100%;height:100%;color:#e91e63;text-align:center}.music-name[data-v-68e20f16]{padding:%?40?% %?20?% %?0?%;font-size:%?40?%;font-weight:700;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.music-author[data-v-68e20f16]{font-size:%?28?%}.music-pic[data-v-68e20f16]{margin:%?60?% auto %?0?%;width:%?340?%;height:%?340?%;-webkit-border-radius:50%;border-radius:50%;overflow:hidden;border:%?15?% solid #e91e63;-webkit-box-shadow:0 0 %?20?% rgba(233,30,99,.5);box-shadow:0 0 %?20?% rgba(233,30,99,.5)}.music-pic uni-image[data-v-68e20f16]{width:%?340?%;height:%?340?%;-webkit-border-radius:50%;border-radius:50%}.player-panel[data-v-68e20f16]{position:fixed;z-index:2;\r\n\t/* \tborder-top:1px solid #999999; */left:0;bottom:0;width:100%;padding:%?20?% %?0?%}.player-btn[data-v-68e20f16]{text-align:center;line-height:%?100?%;padding-bottom:%?100?%}.player-btn .nextPrev[data-v-68e20f16],.player-btn .playStop[data-v-68e20f16]{display:inline-block}.player-btn .playStop uni-image[data-v-68e20f16]{width:%?100?%;height:%?100?%;margin:%?0?% %?80?%}.player-btn .nextPrev uni-image[data-v-68e20f16]{width:%?70?%;height:%?70?%}.time[data-v-68e20f16]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?0?% %?30?%}.time .item[data-v-68e20f16]{font-size:%?24?%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:left}.time .item[data-v-68e20f16]:nth-child(2){text-align:right}",""])},"88f9":function(i,t,e){"use strict";e.r(t);var n=e("546f"),a=e("40ae");for(var s in a)"default"!==s&&function(i){e.d(t,i,function(){return a[i]})}(s);e("fed3");var o=e("2877"),u=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"68e20f16",null);t["default"]=u.exports},"98f4":function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=e("2f62");function a(i){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},n=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(e).filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.forEach(function(t){s(i,t,e[t])})}return i}function s(i,t,e){return t in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e,i}var o={data:function(){return{musicDetail:{id:"",url:"",name:"",picUrl:"",author:""},musicTime:{currentTime:0,duration:0},playIcon:"../../static/images/play.png",pauseIcon:"../../static/images/pause.png",isStop:!1,isPlay:!0,musicSwith:0,musicSwithNum:2,bgAudioMannager:"",innerAudioContext:""}},computed:a({},(0,n.mapState)(["isMusicStart","musicInfo","isMusicPlay","playTime"])),onLoad:function(i){this.musicDetail.id=i.id,this.innerAudioContext=this.globalData.innerAudioContext,this.innerAudioContextFunc(),"playing"!==this.musicDetail.id?(this.getMusicUrl(),this.getMusicInfo(),this.isStop=!1,this.isPlay=!0):(this.musicDetail=this.musicInfo,this.musicTime=this.playTime,this.isMusicPlay?this.isPlay=!0:this.isPlay=!1,this.globalData.innerAudioContext.currentTime==this.globalData.innerAudioContext.duration?this.isStop=!0:this.isStop=!1)},onUnload:function(i){this.setPlayTime(this.musicTime),this.setMusicInfo(this.musicDetail),this.setMusicPlay(this.isPlay)},methods:a({},(0,n.mapMutations)(["musicStart","setMusicInfo","setMusicPlay","setPlayTime"]),{innerAudioContextFunc:function(){var i=this;this.innerAudioContext.onTimeUpdate(function(){i.musicTime.currentTime=i.innerAudioContext.currentTime/60,i.musicTime.duration=i.innerAudioContext.duration/60,i.musicTime.currentTime=i.musicTime.currentTime.toFixed(2),i.musicTime.duration=i.musicTime.duration.toFixed(2),i.globalData.innerAudioContext.currentTime==i.globalData.innerAudioContext.duration&&(i.isStop=!0)})},getMusicUrl:function(){var i=this;uni.showLoading({title:"加载中"}),uni.request({url:i.MusicApi.server+i.MusicApi.type.songUrl,data:{id:i.musicDetail.id},success:function(t){200==t.data.code?(i.musicDetail.url=t.data.data[0].url,i.musicSwith++,uni.hideLoading()):(uni.hideLoading(),console.error("数据获取失败"),uni.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"}))},fail:function(i){uni.hideLoading(),uni.showToast({title:"请求超时",duration:5e3,icon:"none"})}})},getMusicInfo:function(){var i=this;uni.showLoading({title:"加载中"}),uni.request({url:i.MusicApi.server+i.MusicApi.type.songDetail,data:{ids:i.musicDetail.id},success:function(t){if(200==t.data.code){for(var e in i.musicDetail.name=t.data.songs[0].name,i.musicDetail.picUrl=t.data.songs[0].al.picUrl,t.data.songs[0].ar)i.musicDetail.author=i.musicDetail.author+t.data.songs[0].ar[e].name+"/";i.musicDetail.author=i.musicDetail.author.substr(0,i.musicDetail.author.length-1),i.musicSwith++,uni.hideLoading()}else uni.hideLoading(),console.error("数据获取失败"),uni.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"})},fail:function(i){uni.hideLoading(),uni.showToast({title:"请求超时",duration:5e3,icon:"none"})}})},playMusic:function(){this.musicStart("true"),this.innerAudioContext.autoplay=!0,this.innerAudioContext.src=this.musicDetail.url,this.innerAudioContext.play()},toPausePlay:function(){this.isPlay?(this.innerAudioContext.pause(),this.isPlay=!1):(this.innerAudioContext.play(),this.isPlay=!0)},toAgain:function(){this.isStop=!1,this.isPlay=!0,this.playMusic()},sliderChange:function(i){var t=i.detail.value;this.innerAudioContext.seek(60*t)}}),watch:{musicSwith:function(i,t){i==this.musicSwithNum&&this.playMusic()}}};t.default=o},b2d5:function(i,t,e){var n=e("7df1");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var a=e("4f06").default;a("24669fec",n,!0,{sourceMap:!1,shadowMode:!1})},fed3:function(i,t,e){"use strict";var n=e("b2d5"),a=e.n(n);a.a}}]);