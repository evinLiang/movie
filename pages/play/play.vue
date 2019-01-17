<template>
	<view class="page-panel">
		<view class="picUrl">
			<image class="cover" :src="musicDetail.picUrl"></image>
			<image class="bg" src="../../static/images/record.png" mode="widthFix"></image>
		</view>
		<view class="musicInfo">
			<view class="musicName">{{musicDetail.name}}</view>
			<view class="musicAuthor">{{musicDetail.author}}</view>
		</view>
		<view class="musicBtns">
			<view class="item"><image src="../../static/images/prev.png"></image></view>
			<view class="item" @tap="bgAudioMannager.pause()"><image src="../../static/images/stop.png"></image></view>
			<view class="item" @tap="bgAudioMannager.play()"><image src="../../static/images/play.png"></image></view>
			<view class="item"><image src="../../static/images/next.png"></image></view>
		</view>
	</view>
</template>

<script>
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
			musicSwith: 0,
			musicSwithNum: 2,
			bgAudioMannager: ''
		};
	},
	onLoad(e) {
		this.musicDetail.id = e.id;
		this.bgAudioMannager = this.globalData.bgAudioMannager;
		this.getMusicUrl();
		this.getMusicInfo();
	},
	methods: {
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
			//或者音乐url
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
			// #ifndef H5
			this.bgAudioMannager.stop();
			this.bgAudioMannager.title = this.musicDetail.name;
			this.bgAudioMannager.singer = this.musicDetail.author;
			this.bgAudioMannager.coverImgUrl = this.musicDetail.picUrl;
			this.bgAudioMannager.src = this.musicDetail.url;
			this.bgAudioMannager.play();
			// #endif
		}
	},
	watch: {
		musicSwith(val, oldVal) {
			if(val == this.musicSwithNum){
				this.playMusic();
			}
		}
	}
};
</script>

<style>
.picUrl {
	position: relative;
	z-index: 1;
	width: 510upx;
	height: 346.8upx;
	margin: 60upx auto;
}
.picUrl .bg {
	width: 510upx;
	height: 346.8upx;
}
.picUrl .cover {
	position: absolute;
	z-index: 2;
	top: 0;
	left: 0;
	width: 346.8upx;
	height: 348upx;
	border-radius: 2px;
	box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.1);
}
.musicInfo {
	text-align: center;
}
.musicInfo .musicName {
	font-size: 48upx;
	margin-bottom: 20upx;
}
.musicInfo .musicAuthor {
	font-size: 26upx;
	color: #999;
}
.musicBtns { 
	display: flex;
}
.musicBtns .item {
	margin-top: 100upx;
	text-align: center;
	flex: 1;
}
.musicBtns .item image {
	width: 100upx;
	height: 100upx;
}
</style>
