<template>
	<view class="page-panel">
		<view class="banner">
			<swiper :indicator-dots="swiper.indicatorDots" :autoplay="swiper.autoplay" :interval="swiper.interval" :duration="swiper.duration"
			 :circular="swiper.circular" :indicator-active-color="swiper.indicatorActiveColor" :previous-margin="swiper.previousMargin"
			 :next-margin="swiper.previousMargin">
				<swiper-item v-for="item in bannersList" :key="item.id">
					<image :src="item.imageUrl" mode="widthFix"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="page-title"><text class="themeColor">推</text>荐歌单</view>
		<scroll-view class="scroll-view_H" scroll-x style="width: 100%">
			<view class="personalizedList">
				<view class="item" v-for="(item,index) in personalizedList" :key="item.id" v-if='index<=10'>
					<image :src="item.picUrl" mode="widthFix"></image>
					<text class="name">{{item.name}}</text>
				</view>
			</view>
		</scroll-view>
		<view class="page-title"><text class="themeColor">M</text>V排行</view>
		<scroll-view class="scroll-view_H" scroll-x style="width: 100%">
			<view class="topMvList">
				<view class="item" v-for="item in topMvList" :key="item.id" @tap="openMvDetail(item.id)">
					<image :src="item.cover" mode="widthFix"></image>
					<text class="name">{{item.name}}</text>
					<view class="playBtn">
						<view class="icon"></view>
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="page-title"><text class="themeColor">歌</text>手榜</view>
		<scroll-view class="scroll-view_H" scroll-x style="width: 100%">
			<view class="toplistArtistList">
				<view class="item" v-for="(item,index) in toplistArtistList" :key="item.id" v-if='index<=20'>
					<image :src="item.img1v1Url" mode="widthFix"></image>
					<text class="name">{{item.name}}</text>
				</view>
			</view>
		</scroll-view>
		<view class="page-title"><text class="themeColor">推</text>荐电台</view>
		<view class="djRecommendList">
			<view class="item" v-for="(item,index) in djRecommendList" :key="item.id" v-if='index<=10'>
				<view class="pic">
					<image :src="item.picUrl" mode="widthFix"></image>
					<view class="playBtn">
						<view class="icon"></view>
					</view>
				</view>
				<view class="content">
					<view class="name">{{item.name}}</view>
					<view class="rcmdtext">{{item.rcmdtext}}</view>
					<view class="info"><text>播放 : {{item.subCount}}次</text><text class="category">类型 : {{item.category}}</text></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bannersList: '',
				swiper: {
					indicatorDots: true,
					autoplay: true,
					interval: 5000,
					duration: 500,
					circular: true,
					indicatorActiveColor: '#e91e63',
					previousMargin: '10px'
				},
				personalizedList: '',
				topMvList: '',
				toplistArtistList: '',
				djRecommendList: ''
			}
		},
		onLoad() {
			this.getBannerList(); //获取banner
			this.getPersonalizedList(); //获取推荐歌单
			this.getTopMvList(); //获取mv排行
			this.getToplistArtistList(); //获取歌手榜单
			this.getDjRecommendList(); //获取推荐电台
		},
		methods: {
			getBannerList() {
				
				//获取banner
				var _this = this;
				uni.showLoading({
					title: '加载中'
				});
				uni.request({
					url: _this.MusicApi.server + _this.MusicApi.type.banner,
					success: (res) => {
						uni.hideLoading();
						//console.log(res.data);
						if (res.data.code == 200) {
							_this.bannersList = res.data.banners;
						} else {
							//console.error("数据获取失败");
							uni.showToast({
								title: 'banner数据获取失败',
								duration: 5000,
								icon: 'none'
							});
						}
					},
					fail: (err) => {
						uni.hideLoading();
						uni.showToast({
							title: '请求超时',
							duration: 5000,
							icon: 'none'
						});
					}
				})
			},
			getPersonalizedList() {
				
				//获取推荐歌单
				var _this = this;
				uni.showLoading({
					title: '加载中'
				});
				uni.request({
					url: _this.MusicApi.server + _this.MusicApi.type.personalized,
					success: (res) => {
						uni.hideLoading();
						//console.log(res.data);
						if (res.data.code == 200) {
							_this.personalizedList = res.data.result;
						} else {
							console.error("数据获取失败");
							uni.showToast({
								title: 'banner数据获取失败',
								duration: 5000,
								icon: 'none'
							});
						}
					},
					fail: (err) => {
						uni.hideLoading();
						uni.showToast({
							title: '请求超时',
							duration: 5000,
							icon: 'none'
						});
					}
				})
			},
			getTopMvList() {
				
				//获取mv排行
				var _this = this;
				uni.showLoading({
					title: '加载中'
				});
				uni.request({
					url: _this.MusicApi.server + _this.MusicApi.type.topMv,
					data: {
						limit: 10
					},
					success: (res) => {
						uni.hideLoading();
						//console.log(res.data);
						if (res.data.code == 200) {
							_this.topMvList = res.data.data;
						} else {
							console.error("数据获取失败");
							uni.showToast({
								title: 'banner数据获取失败',
								duration: 5000,
								icon: 'none'
							});
						}
					},
					fail: (err) => {
						uni.hideLoading();
						uni.showToast({
							title: '请求超时',
							duration: 5000,
							icon: 'none'
						});
					}
				})
			},
			getToplistArtistList() {
				
				//获取歌手榜单
				var _this = this;
				uni.showLoading({
					title: '加载中'
				});
				uni.request({
					url: _this.MusicApi.server + _this.MusicApi.type.toplistArtist,
					data: {
						limit: 10
					},
					success: (res) => {
						uni.hideLoading();
						//console.log(res.data);
						if (res.data.code == 200) {
							_this.toplistArtistList = res.data.list.artists;
						} else {
							console.error("数据获取失败");
							uni.showToast({
								title: 'banner数据获取失败',
								duration: 5000,
								icon: 'none'
							});
						}
					},
					fail: (err) => {
						uni.hideLoading();
						uni.showToast({
							title: '请求超时',
							duration: 5000,
							icon: 'none'
						});
					}
				})
			},
			getDjRecommendList() {
				
				//获取推荐电台
				var _this = this;
				uni.showLoading({
					title: '加载中'
				});
				uni.request({
					url: _this.MusicApi.server + _this.MusicApi.type.djRecommend,
					data: {
						limit: 10
					},
					success: (res) => {
						uni.hideLoading();
						//console.log(res.data);
						if (res.data.code == 200) {
							_this.djRecommendList = res.data.djRadios;
						} else {
							console.error("数据获取失败");
							uni.showToast({
								title: 'banner数据获取失败',
								duration: 5000,
								icon: 'none'
							});
						}
					},
					fail: (err) => {
						uni.hideLoading();
						uni.showToast({
							title: '请求超时',
							duration: 5000,
							icon: 'none'
						});
					}
				})
			},
			openMvDetail(mvid){
				//跳转mv详情
				var mvid = mvid;
				uni.navigateTo({
					url: '../mvDetail/mvDetail?mvid='+mvid
				});
			}
		}
	}
</script>

<style>
	.banner swiper {
		height: 236upx;
		border-radius: 10upx;
		overflow: hidden;
	}

	.banner swiper swiper-item {
		padding: 0upx 5upx;
		box-sizing: border-box;
	}

	.banner image {
		width: 100%;
		height: 236upx;
		vertical-align: middle;
		border-radius: 10upx;
		box-shadow: 0 0 10px hsla(0, 0%, 51%, .1);
	}

	.personalizedList,
	.topMvList,
	.toplistArtistList {
		display: flex;
	}

	.personalizedList .item {
		position: relative;
		z-index: 1;
		width: 240upx;
		height: 240upx;
		margin-right: 12upx;
	}

	.personalizedList .item .name {
		position: absolute;
		z-index: 2;
		color: #fff;
		left: 0upx;
		bottom: 0upx;
		font-size: 20upx;
		padding: 10upx;
		background: rgba(0, 0, 0, 0.3);
		width: 100%;
		min-height: 76upx;
		box-sizing: border-box;
		border-radius: 0upx 0upx 10upx 10upx;
	}

	.personalizedList .item image,
	.topMvList .item image {
		max-width: 100%;
		height: 240upx;
		border-radius: 10upx;
		box-shadow: 0 0 10px hsla(0, 0%, 51%, .1);
	}

	.topMvList .item {
		position: relative;
		z-index: 1;
		width: 426upx;
		height: 240upx;
		margin-right: 12upx;
	}

	.topMvList .item .name {
		position: absolute;
		z-index: 2;
		color: #fff;
		left: 0upx;
		bottom: 0upx;
		font-size: 10px;
		padding: 15upx;
		background: rgba(0, 0, 0, 0.3);
		width: 100%;
		box-sizing: border-box;
		border-radius: 0upx 0upx 10upx 10upx;
	}

	.toplistArtistList .item {
		position: relative;
		z-index: 1;
		width: 150upx;
		height: 150upx;
		line-height: 150upx;
		text-align: center;
		margin-right: 20upx;
	}

	.toplistArtistList .item image {
		max-width: 100%;
		height: 150upx;
		border-radius: 50%;
		box-shadow: 0 0 10px hsla(0, 0%, 51%, .1);
	}

	.toplistArtistList .item .name {
		position: absolute;
		z-index: 2;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.3);
		color: #fff;
		border-radius: 50%;
		font-size: 10px;
	}

	.djRecommendList .item {
		display: flex;
		margin-bottom: 40upx;
	}

	.djRecommendList .item .pic {
		position: relative;
		z-index: 1;
		margin-right: 40upx;
	}
	
	.djRecommendList .item .pic .playBtn {
		left: inherit;
		top: inherit;
		right: 20upx;
		bottom: 30upx;
		width: 50upx;
		height: 50upx;
	}
	
	.djRecommendList .item .pic .playBtn .icon {
		margin: 16upx 0upx 0upx 18upx;
		border-top: 10upx solid transparent;
		border-bottom: 10upx solid transparent;
		border-left: 20upx solid #e91e63;
	}
	
	.djRecommendList .item .pic image {
		width: 180upx;
		height: 180upx;
		border-radius: 10upx;
		box-shadow: 0 0 10px hsla(0, 0%, 51%, .3);
	}

	.djRecommendList .item .content {
		flex: 1;
	}

	.djRecommendList .item .content .name {
		font-size: 38upx;
		font-weight: bold;
	}

	.djRecommendList .item .content .rcmdtext {
		margin-top: 10upx;
		font-size: 28upx;
	}

	.djRecommendList .item .content .info {
		margin-top: 30upx;
		font-size: 20upx;
		color: #999;
	}
	
	.djRecommendList .item .content .category {
		margin-left: 40upx;
	}
</style>
