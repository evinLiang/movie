import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		isMusicStart: false,
		musicInfo: ''
	},
	mutations: {
		setMusicInfo(state, provider) {
			state.musicInfo = provider;
		},
		musicStart(state, provider) {
			state.isMusicStart = provider;
		}
	}
})
export default store
