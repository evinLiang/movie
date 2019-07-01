<template>
	<view class="page-panel-h" v-if="!musicDetail.name == ''">
		<view class="music-name">{{ musicDetail.name }}</view>
		<view class="music-author">{{ musicDetail.author }}</view>
		<view class="music-pic"> <image :src="musicDetail.picUrl"></image> </view>
		<view class="player-panel">
			<view class="time"
				><view class="item">{{ musicTime.currentTime }}</view
				><view class="item">{{ musicTime.duration }}</view></view
			>
			<slider
				:value="musicTime.currentTime"
				step="0.01"
				@changing="sliderChange"
				min="0"
				:max="musicTime.duration"
				block-size="12"
				activeColor="#E91E63"
			/>
			<view class="player-btn">
				<!-- <view class="nextPrev">
					<image src="../../static/images/prev.png" mode=""></image>
				</view> -->
				<view class="playStop" v-if="isStop" @tap="toAgain()">
					<image src="../../static/images/again.png" mode=""></image>
				</view>
				<view class="playStop" v-if="!isStop" @tap="toPausePlay()">
					<image :src="isPlay ? playIcon : pauseIcon" mode=""></image>
				</view>
				<!-- <view class="nextPrev">
					<image src="../../static/images/next.png" mode=""></image>
				</view> -->
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
			musicTime: {
				currentTime: 0,
				duration: 0
			},
			playIcon: '../../static/images/play.png',
			pauseIcon: '../../static/images/pause.png',
			isStop: false, //判断是否播放完
			isPlay: true, //是否在播放
			musicSwith: 0, //获取歌曲url和详情是两条异步接口,用来监听接口是否都获取数据成功
			musicSwithNum: 2, //得到播放音乐条件步骤
			bgAudioMannager: '', //赋值等同于全局的背景音乐组件bgAudioMannager，方便本页面控制背景音乐组件
			innerAudioContext: '' //赋值等同于全局的背景音乐组件innerAudioContext，方便本页面控制背景音乐组件
		};
	},
	computed: {
		...mapState(['isMusicStart', 'musicInfo', 'isMusicPlay', 'playTime'])
	},
	onLoad(e) {
		this.musicDetail.id = e.id;
		// #ifndef H5
		this.bgAudioMannager = this.globalData.bgAudioMannager;
		this.bgAudioMannagerFunc();
		// #endif

		// #ifdef H5
		this.innerAudioContext = this.globalData.innerAudioContext;
		this.innerAudioContextFunc();
		// #endif

		/* 判断是否不是从音乐组件跳转进来
		 *  是：获取音乐信息并且播放
		 *  否：页面的musicDetail等于vuex的musicInfo，方便页面控制
		 */
		if (this.musicDetail.id !== 'playing') {
			this.getMusicUrl();
			this.getMusicInfo();
			this.isStop = false;
			this.isPlay = true;
		} else {
			this.musicDetail = this.musicInfo;
			this.musicTime = this.playTime;
			this.isMusicPlay ? (this.isPlay = true) : (this.isPlay = false);
			// #ifndef H5
			if (this.globalData.bgAudioMannager.currentTime == 0) {
				this.isStop = true;
			} else {
				this.isStop = false;
			}
			// #endif
			// #ifdef H5
			if (
				this.globalData.innerAudioContext.currentTime ==
				this.globalData.innerAudioContext.duration
			) {
				this.isStop = true;
			} else {
				this.isStop = false;
			}
			// #endif
		}
	},
	onUnload(e) {
		this.setPlayTime(this.musicTime);
		this.setMusicInfo(this.musicDetail);
		this.setMusicPlay(this.isPlay);
	},
	methods: {
		...mapMutations(['musicStart', 'setMusicInfo', 'setMusicPlay', 'setPlayTime']),
		// #ifndef H5
		bgAudioMannagerFunc() {
			this.bgAudioMannager.onTimeUpdate(() => {
				this.musicTime.currentTime = this.bgAudioMannager.currentTime / 60;
				this.musicTime.duration = this.bgAudioMannager.duration / 60;
				this.musicTime.currentTime = this.musicTime.currentTime.toFixed(2);
				this.musicTime.duration = this.musicTime.duration.toFixed(2);

				//当前播放时间等于歌曲时间，那么状态为暂停
				if (
					this.globalData.bgAudioMannager.currentTime ==
					this.globalData.bgAudioMannager.duration
				) {
					this.isStop = true;
				}
			});
		},
		// #endif
		// #ifdef H5
		innerAudioContextFunc() {
			this.innerAudioContext.onTimeUpdate(() => {
				this.musicTime.currentTime = this.innerAudioContext.currentTime / 60;
				this.musicTime.duration = this.innerAudioContext.duration / 60;
				this.musicTime.currentTime = this.musicTime.currentTime.toFixed(2);
				this.musicTime.duration = this.musicTime.duration.toFixed(2);

				//当前播放时间等于歌曲时间，那么状态为暂停
				if (
					this.globalData.innerAudioContext.currentTime ==
					this.globalData.innerAudioContext.duration
				) {
					this.isStop = true;
				}
			});
		},
		// #endif
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
			this.musicStart('true'); //显示播放组件
			//播放音乐
			// #ifndef H5
			this.bgAudioMannager.stop();
			this.bgAudioMannager.title = this.musicDetail.name;
			this.bgAudioMannager.singer = this.musicDetail.author;
			this.bgAudioMannager.coverImgUrl = this.musicDetail.picUrl;
			this.bgAudioMannager.src = this.musicDetail.url;
			this.bgAudioMannager.play();
			// #endif
			// #ifdef H5
			this.innerAudioContext.autoplay = true;
			this.innerAudioContext.src = this.musicDetail.url;
			this.innerAudioContext.play();
			// #endif
		},
		toPausePlay() {
			//播放和暂停按钮

			if (this.isPlay) {
				// #ifndef H5
				this.bgAudioMannager.pause();
				// #endif
				// #ifdef H5
				this.innerAudioContext.pause();
				// #endif
				this.isPlay = false;
			} else {
				// #ifndef H5
				this.bgAudioMannager.play();
				// #endif
				// #ifdef H5
				this.innerAudioContext.play();
				// #endif
				this.isPlay = true;
			}
		},
		toAgain() {
			//重新播放音乐
			this.isStop = false;
			this.isPlay = true;
			this.playMusic();
		},
		sliderChange(e) {
			var time = e.detail.value;
			// #ifndef H5
			this.bgAudioMannager.seek(time * 60);
			// #endif
			// #ifdef H5
			this.innerAudioContext.seek(time * 60);
			// #endif
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
	color: #e91e63;
	text-align: center;
}

.music-name {
	padding: 40upx 20upx 0upx;
	font-size: 40upx;
	font-weight: bold;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
}

.music-author {
	font-size: 28upx;
}

.music-pic {
	margin: 60upx auto 0upx;
	width: 340upx;
	height: 340upx;
	border-radius: 50%;
	overflow: hidden;
	border: 15upx solid #e91e63;
	box-shadow: 0px 0px 20upx rgba(233, 30, 99, 0.5);
}

.music-pic image {
	width: 340upx;
	height: 340upx;
	border-radius: 50%;
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

.player-btn .playStop,
.player-btn .nextPrev {
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
.time {
	display: flex;
	padding: 0upx 30upx;
}
.time .item {
	font-size: 24upx;
	flex: 1;
	text-align: left;
}
.time .item:nth-child(2) {
	text-align: right;
}
</style>
