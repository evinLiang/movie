import Vue from 'vue'
import App from './App'
import MusicApi from './modules/api'	//接口信息
import store from './store';

Vue.prototype.$store = store;
Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.MusicApi = MusicApi;	//定义api全局变量

const app = new Vue({
	store,
    ...App
})
app.$mount();

Vue.prototype.globalData = {
	// #ifndef H5
	bgAudioMannager: uni.getBackgroundAudioManager()  //全局播放器管理
	// #endif
	
}
