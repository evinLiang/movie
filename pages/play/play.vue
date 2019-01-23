<template>
	<view class="page-panel-h">
		<view class="music-name">{{ musicDetail.name }}</view>
		<view class="music-author">{{ musicDetail.author }}</view>
		<view class="music-pic">
			<image :src="musicDetail.picUrl"></image>
		</view>
		{{musicTime.currentTime}}{{musicTime.duration}}
		<view class="player-panel">
			<view class="player-btn">
				<view class="nextPrev"><image src="../../static/images/prev.png" mode=""></image></view>
				<view class="playStop" v-if="isStop" @tap="toAgain()"><image src="../../static/images/again.png" mode=""></image></view>
				<view class="playStop" v-if="!isStop" @tap="toPausePlay()"><image :src="isPlay ? playIcon : pauseIcon" mode=""></image></view>
				<view class="nextPrev"><image src="../../static/images/next.png" mode=""></image></view>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
	data() {
		return {
			musicDetail: {
				id: '',
				url: '',
				name: '',
				picUrl: '',
				author: ''
			},
			musicTime:{
				currentTime:0,
				duration:0
			},
			playIcon: '../../static/images/play.png',
			pauseIcon: '../../static/images/pause.png',
			isStop: false,			//判断是否播放完
			isPlay: true,			//是否在播放
			musicSwith: 0,			//获取歌曲url和详情是两条异步接口,用来监听接口是否都获取数据成功
			musicSwithNum: 2,		//得到播放音乐条件步骤
			bgAudioMannager: ''		//赋值等同于全局的背景音乐组件bgAudioMannager，方便本页面控制背景音乐组件
		};
	},
	computed: {
		...mapState(['isMusicStart', 'musicInfo','isMusicPlay','playTime'])
	},
	onLoad(e) {
		this.musicDetail.id = e.id;
		// #ifndef H5
		this.bgAudioMannager = this.globalData.bgAudioMannager;
		this.bgAudioMannagerFunc();
		// #endif
		
		/* 判断是否不是从音乐组件跳转进来
		*  是：获取音乐信息并且播放
		*  否：页面的musicDetail等于vuex的musicInfo，方便页面控制
		*/
		if (this.musicDetail.id !== 'playing') {
			this.getMusicUrl();
			this.getMusicInfo();
		}else {
			this.musicDetail = this.musicInfo;
			this.musicTime = this.playTime;
			(this.isMusicPlay) ? (this.isPlay = true) : (this.isPlay = false)
			if(this.globalData.bgAudioMannager.currentTime == 0){
				this.isStop = true
			}else {
				this.isStop = false
			}
		}
	},
	onUnload(e){
		this.setPlayTime(this.musicTime);
		this.setMusicInfo(this.musicDetail);
		this.setMusicPlay(this.isPlay); 
	},
	methods: {
		...mapMutations(['musicStart', 'setMusicInfo','setMusicPlay','setPlayTime']),
		bgAudioMannagerFunc() {
			this.bgAudioMannager.onPlay(() => {
			});
			this.bgAudioMannager.onPause(() => {
			});
			this.bgAudioMannager.onStop(() => {
			});
			this.bgAudioMannager.onTimeUpdate(() => {
				this.musicTime.currentTime = this.bgAudioMannager.currentTime / 60;
				this.musicTime.duration = this.bgAudioMannager.duration / 60;
				this.musicTime.currentTime = this.musicTime.currentTime.toFixed(2);
				this.musicTime.duration = this.musicTime.duration.toFixed(2);
				
				//当前播放时间等于歌曲时间，那么状态为暂停
				if(this.globalData.bgAudioMannager.currentTime == this.globalData.bgAudioMannager.duration){
					this.isStop = true;
				}
			});
		},
		getMusicUrl() {
			//或者音乐url
			var _this = this;
			uni.showLoading({
				title: '加载中'
			});
			uni.request({
				url: _this.MusicApi.server + _this.MusicApi.type.songUrl,
				data: {
					id: _this.musicDetail.id
				},
				success: res => {
					//console.log(res.data.data);
					if (res.data.code == 200) {
						_this.musicDetail.url = res.data.data[0].url;
						_this.musicSwith++;
						uni.hideLoading();
					} else {
						uni.hideLoading();
						console.error('数据获取失败');
						uni.showToast({
							title: 'banner数据获取失败',
							duration: 5000,
							icon: 'none'
						});
					}
				},
				fail: err => {
					uni.hideLoading();
					uni.showToast({
						title: '请求超时',
						duration: 5000,
						icon: 'none'
					});
				}
			});
		},
		getMusicInfo() {
			//或者音乐信息
			var _this = this;
			uni.showLoading({
				title: '加载中'
			});
			uni.request({
				url: _this.MusicApi.server + _this.MusicApi.type.songDetail,
				data: {
					ids: _this.musicDetail.id
				},
				success: res => {
					//console.log(res.data.songs[0].name);
					if (res.data.code == 200) {
						_this.musicDetail.name = res.data.songs[0].name;
						_this.musicDetail.picUrl = res.data.songs[0].al.picUrl;
						for (let i in res.data.songs[0].ar) {
							_this.musicDetail.author =
								_this.musicDetail.author + res.data.songs[0].ar[i].name + '/';
						}
						_this.musicDetail.author = _this.musicDetail.author.substr(
							0,
							_this.musicDetail.author.length - 1
						);
						_this.musicSwith++;
						uni.hideLoading();
					} else {
						uni.hideLoading();
						console.error('数据获取失败');
						uni.showToast({
							title: 'banner数据获取失败',
							duration: 5000,
							icon: 'none'
						});
					}
				},
				fail: err => {
					uni.hideLoading();
					uni.showToast({
						title: '请求超时',
						duration: 5000,
						icon: 'none'
					});
				}
			});
		},
		playMusic() {
			//播放音乐
			// #ifndef H5
			this.musicStart('true'); //显示播放组件
			this.bgAudioMannager.stop();
			this.bgAudioMannager.title = this.musicDetail.name;
			this.bgAudioMannager.singer = this.musicDetail.author;
			this.bgAudioMannager.coverImgUrl = this.musicDetail.picUrl;
			this.bgAudioMannager.src = this.musicDetail.url;
			this.bgAudioMannager.play();
			// #endif
		},
		toPausePlay(){
			//播放和暂停按钮
			// #ifndef H5
			if(this.isPlay){
				this.bgAudioMannager.pause();
				this.isPlay = false;
			}else {
				this.bgAudioMannager.play();
				this.isPlay = true;
			}
			// #endif
		},
		toAgain(){
			//重新播放音乐
			this.isStop = false;
			this.isPlay = true;
			this.musicDetail = this.musicInfo;
			this.playMusic();
		}
	},
	watch: {
		musicSwith(val, oldVal) {
			
			//监听符合条件后播放音乐
			if (val == this.musicSwithNum) {
				this.playMusic();
			}
		}
	}
};
</script>

<style scoped>
page {
	width: 100%;
	height: 100%;
}
.page-panel-h {
	position: relative;
	z-index: 1;
	width: 100%;
	height: 100%;
	color: #E91E63;
	text-align: center;
}
.music-name {
	padding: 40upx 0upx 0upx;
	font-size: 40upx;
	font-weight: bold;
}
.music-author {
	font-size: 28upx;
}
.music-pic {
	margin-top: 60upx;
}
.music-pic image {
	width: 340upx;
	height: 340upx;
	border-radius: 50%;
	border:15upx solid #E91E63;
	box-shadow: 0px 0px 20upx rgba(233,30,99,0.5);
}
.player-panel {
	position: fixed;
	z-index: 2;
/* 	border-top:1px solid #999999; */
	left: 0;
	bottom: 0;
	width: 100%;
	padding: 20upx 0upx;
}
.player-btn {
	text-align: center;
	line-height: 100upx;
	padding-bottom: 100upx;
}
.player-btn .playStop,.player-btn .nextPrev {
	display: inline-block;
}
.player-btn .playStop image {
	width: 100upx;
	height: 100upx;
	margin: 0upx 80upx;
}
.player-btn .nextPrev image {
	width: 70upx;
	height: 70upx;
}
</style>
