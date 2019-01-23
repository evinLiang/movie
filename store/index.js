import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		isMusicStart: false,
		isMusicPlay: true,
		musicInfo: '',
		playTime:''
	},
	mutations: {
		setMusicInfo(state, provider) {
			state.musicInfo = provider;
		},
		musicStart(state, provider) {
			state.isMusicStart = provider;
		},
		setMusicPlay(state, provider) {
			state.isMusicPlay = provider;
		},
		setPlayTime(state, provider) {
			state.playTime = provider;
		}
	}
})
export default store
