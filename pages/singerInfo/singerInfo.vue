<template>
	<view class="page-panel singerInfo">
		<nowPlay></nowPlay>
		<view class="panel">
			<image :src="singerInfo.picUrl" mode=""></image>
			<view class="name">{{ singerInfo.name }}</view>
		</view>
		<view class="tab">
			<view class="tab-title">
				<view class="item" :class="tabNum == 1 ? 'active' : ''" @tap="tabNum = 1"
					>描述</view
				>
				<view class="item" :class="tabNum == 2 ? 'active' : ''" @tap="tabNum = 2"
					>单曲</view
				>
				<!-- 				<view class="item" :class="tabNum == 3 ? 'active' : ''" @tap="tabNum = 3"
					>专辑</view
				> -->
				<!-- #ifndef MP-WEIXIN -->
				<view class="item" :class="tabNum == 4 ? 'active' : ''" @tap="tabNum = 4">MV</view>
				<!-- #endif -->
			</view>
			<view class="tab-content">
				<view class="item" v-if="tabNum == 1">
					<view class="SingerDesc">{{ SingerDesc.briefDesc }}</view>
				</view>
				<view class="item" v-if="tabNum == 2"
					><songList :singerHotSongs="singerHotSongs"></songList
				></view>
				<!-- <view class="item" v-if="tabNum == 3">专辑...</view> -->
				<view class="item" v-if="tabNum == 4"
					><mvList :singerMvs="singerMvs"></mvList
				></view>
			</view>
		</view>
	</view>
</template>

<script>
import songList from '@/components/songList.vue';
import nowPlay from '@/components/nowPlay.vue';
import mvList from '@/components/mvList.vue';
export default {
	data() {
		return {
			singerInfo: '',
			tabNum: 1,
			SingerDesc: '',
			singerHotSongs: '',
			singerMvs: ''
		};
	},
	components: {
		songList,
		nowPlay,
		mvList
	},
	onLoad(e) {
		var singerInfo = JSON.parse(e.data);
		this.singerInfo = singerInfo;
		this.singerInfo.picUrl = decodeURIComponent(this.singerInfo.picUrl);
		this.getSingerDesc(); //获取歌手描述
		this.getSingerSong(); //获取歌手单曲
		// #ifndef MP-WEIXIN
		this.getSingerMv(); //获取歌手MV
		// #endif
	},
	methods: {
		getSingerDesc() {
			//获取歌手描述
			var _this = this;
			uni.showLoading({
				title: '加载中'
			});
			uni.request({
				url: _this.MusicApi.server + _this.MusicApi.type.artistDesc,
				data: {
					id: _this.singerInfo.id
				},
				success: res => {
					uni.hideLoading();
					//console.log(res.data);
					if (res.data.code == 200) {
						_this.SingerDesc = res.data;
					} else {
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
		getSingerSong() {
			//获取歌手单曲
			var _this = this;
			uni.showLoading({
				title: '加载中'
			});
			uni.request({
				url: _this.MusicApi.server + _this.MusicApi.type.artistSong,
				data: {
					id: _this.singerInfo.id
				},
				success: res => {
					uni.hideLoading();
					//console.log(res.data);
					if (res.data.code == 200) {
						_this.singerHotSongs = res.data.hotSongs;
					} else {
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
		getSingerMv() {
			//获取歌手mv
			var _this = this;
			uni.showLoading({
				title: '加载中'
			});
			uni.request({
				url: _this.MusicApi.server + _this.MusicApi.type.artistMv,
				data: {
					id: _this.singerInfo.id
				},
				success: res => {
					uni.hideLoading();
					//console.log(res.data);
					if (res.data.code == 200) {
						_this.singerMvs = res.data.mvs;
						//console.log(_this.singerMvs)
					} else {
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
		}
	}
};
</script>

<style>
.singerInfo .panel {
	position: relative;
	z-index: 1;
	width: 300upx;
	height: 300upx;
	text-align: center;
	margin: 20upx auto;
	font-weight: bold;
	border-radius: 50%;
	overflow: hidden;
	color: #fff;
	box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3);
}
.singerInfo .panel image {
	width: 300upx;
	height: 300upx;
}
.singerInfo .panel .name {
	position: absolute;
	z-index: 2;
	top: 0;
	left: 0;
	width: 300upx;
	height: 300upx;
	line-height: 300upx;
	background: rgba(0, 0, 0, 0.3);
}
.tab-title {
	display: flex;
	text-align: center;
	font-size: 28upx;
}
.tab-title .item {
	padding: 20upx;
	flex: 1;
	border-bottom: 3px solid #fff;
}
.tab-title .item.active {
	border-color: #e91e63;
}
.tab-content .item {
	margin-top: 40upx;
}
.SingerDesc {
	color: #666;
	font-size: 28upx;
	line-height: 1.8;
	text-indent: 2em;
	border-radius: 10upx;
	padding: 20upx 30upx;
	box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.1);
}
</style>
