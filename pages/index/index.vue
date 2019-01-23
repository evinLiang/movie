<template>
	<view class="page-panel">
		<nowPlay></nowPlay>
		<view class="banner">
			<swiper
				:indicator-dots="swiper.indicatorDots"
				:autoplay="swiper.autoplay"
				:interval="swiper.interval"
				:duration="swiper.duration"
				:circular="swiper.circular"
				:indicator-active-color="swiper.indicatorActiveColor"
				:previous-margin="swiper.previousMargin"
				:next-margin="swiper.previousMargin"
			>
				<swiper-item
					v-for="(item, index) in bannersList"
					:key="item.index"
					@tap="toRankingList(index)"
				>
					<image :src="item.imageUrl" mode="widthFix"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="page-title" @tap="openPersonalizedList()"
			><text class="themeColor">推</text>荐歌单</view
		>
		<scroll-view class="scroll-view_H" scroll-x style="width: 100%">
			<view class="personalizedList">
				<view
					class="item"
					v-for="(item, index) in personalizedList"
					:key="item.index"
					v-if="index <= 10"
					@tap="openPersonalizedDetail(item.id)"
				>
					<image :src="item.picUrl" mode="widthFix"></image>
					<text class="name">{{ item.name }}</text>
				</view>
			</view>
		</scroll-view>
		<view class="page-title"><text class="themeColor">M</text>V排行</view>
		<scroll-view class="scroll-view_H" scroll-x style="width: 100%">
			<view class="topMvList">
				<view
					class="item"
					v-for="item in topMvList"
					:key="item.index"
					@tap="openMvDetail(item.id)"
				>
					<image :src="item.cover" mode="widthFix"></image>
					<text class="name">{{ item.name }}</text>
					<view class="playBtn"> <view class="icon"></view> </view>
				</view>
			</view>
		</scroll-view>
		<view class="page-title"><text class="themeColor">歌</text>手榜</view>
		<scroll-view class="scroll-view_H" scroll-x style="width: 100%">
			<view class="toplistArtistList">
				<view
					class="item"
					v-for="(item, index) in toplistArtistList"
					:key="item.index"
					v-if="index <= 20"
					@tap="toSingerInfo(index)"
				>
					<image :src="item.img1v1Url" mode="widthFix"></image>
					<text class="name">{{ item.name }}</text>
				</view>
			</view>
		</scroll-view>
		<view class="page-title"><text class="themeColor">推</text>荐节目</view>
		<!-- <djRecommendList :djRecommendList="djRecommendList" :djListNumber="djListNumber"></djRecommendList> -->
		<programsList :programsList="programsList"></programsList>
	</view>
</template>

<script>
import djRecommendList from '@/components/djRecommendList.vue';
import nowPlay from '@/components/nowPlay.vue';
import programsList from '@/components/programsList.vue';
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
			djRecommendList: '',
			djListNumber: '5',
			programsList: ''
		};
	},
	components: {
		djRecommendList,
		nowPlay,
		programsList
	},
	onLoad() {
		this.getBannerList(); //获取banner
		this.getPersonalizedList(); //获取推荐歌单
		this.getTopMvList(); //获取mv排行
		this.getToplistArtistList(); //获取歌手榜单
		//this.getDjRecommendList(); //获取推荐电台
		this.getProgramRecommendList(); //获取推荐节目
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
				success: res => {
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
		getPersonalizedList() {
			//获取推荐歌单
			var _this = this;
			uni.showLoading({
				title: '加载中'
			});
			uni.request({
				url: _this.MusicApi.server + _this.MusicApi.type.personalized,
				success: res => {
					uni.hideLoading();
					//console.log(res.data);
					if (res.data.code == 200) {
						_this.personalizedList = res.data.result;
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
				success: res => {
					uni.hideLoading();
					//console.log(res.data);
					if (res.data.code == 200) {
						_this.topMvList = res.data.data;
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
				success: res => {
					uni.hideLoading();
					//console.log(res.data);
					if (res.data.code == 200) {
						_this.toplistArtistList = res.data.list.artists;
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
				success: res => {
					uni.hideLoading();
					//console.log(res.data);
					if (res.data.code == 200) {
						_this.djRecommendList = res.data.djRadios;
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
		getProgramRecommendList() {
			//获取推荐节目
			var _this = this;
			uni.showLoading({
				title: '加载中'
			});
			uni.request({
				url: _this.MusicApi.server + _this.MusicApi.type.programRecommend,
				success: res => {
					uni.hideLoading();
					//console.log(res.data);
					if (res.data.code == 200) {
						_this.programsList = res.data.programs;
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
		openMvDetail(mvid) {
			//跳转mv详情
			var mvid = mvid;
			uni.navigateTo({
				url: '../mvDetail/mvDetail?mvid=' + mvid
			});
		},
		openDjList() {
			//跳转推荐节目详情
			uni.navigateTo({
				url: '../djList/djList'
			});
		},
		openPersonalizedDetail(id) {
			//跳转歌单详情
			var id = id;
			uni.navigateTo({
				url: '../getPlaylistDetail/getPlaylistDetail?id=' + id
			});
		},
		openPersonalizedList() {
			//跳转推荐歌单列表
			uni.navigateTo({
				url: '../personalizedList/personalizedList'
			});
		},
		toSingerInfo(index) {
			//跳转歌手详情
			var data = {
				picUrl: encodeURIComponent(this.toplistArtistList[index].img1v1Url),
				name: this.toplistArtistList[index].name,
				id: this.toplistArtistList[index].id
			};
			data = JSON.stringify(data);
			uni.navigateTo({
				url: '../singerInfo/singerInfo?data=' + data
			});
		},
		toRankingList(e) {
			//因为对banner做太多的处理，先跳到一个榜单
			uni.navigateTo({
				url: '../rankingList/rankingList?id=' + e
			});
		},
		openMvList() {
			//跳转推荐歌单列表
			uni.navigateTo({
				url: '../mvList/mvList'
			});
		}
	}
};
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
	border-radius: 10upx;
	box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.1);
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
	box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.1);
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
	line-height: 142upx;
	text-align: center;
	margin-right: 20upx;
}

.toplistArtistList .item image {
	max-width: 100%;
	height: 150upx;
	border-radius: 50%;
	box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.1);
	vertical-align: middle;
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
</style>
