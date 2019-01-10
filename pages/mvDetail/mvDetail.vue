<template>
	<view>
		<view class="video">
			<video id="myVideo" :src="mvUrl" @error="videoErrorCallback" controls :poster="mvDetail.cover"></video>
		</view>
		<view class="page-panel">
			<view class="videoInfo">
				<view class="name">{{mvDetail.name}}</view>
				<view class="tips"><text>发布 : {{mvDetail.publishTime}}</text><text class="artistName">演唱 : {{mvDetail.artistName}}</text></view>
				<view class="desc">{{mvDetail.desc}}</view>
			</view>
			<view class="page-title"><text class="themeColor">类</text>似MV</view>
			<view class="simiMvList">
				<view class="item" v-for="item in simiMvList" :key="item.id" @tap="toMvDetail(item.id)">
					<view class="pic">
						<image :src="item.cover" mode="aspectFill"></image>
					</view>
					<view class="info">
						<view class="name">{{item.name}}</view>
						<view class="artistName">{{item.artistName}}</view>
					</view>
					<view class="btn">
						<text></text><text></text><text></text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mvid: '',
				mvDetail: '',
				mvUrl: '',
				simiMvList: ''
			};
		},
		onLoad: function(e) {
			//console.log(e);
			this.mvid = e.mvid;
			this.getMvDetail(); //获取mv详情
			this.getMvUrl(); //获取mv URL
			this.getSimiMvList(); //获取类似mv
		},
		methods: {
			getMvDetail() {

				//获取mv详情
				var _this = this;
				uni.showLoading({
					title: '加载中'
				});
				uni.request({
					url: _this.MusicApi.server + _this.MusicApi.type.mvDetail,
					data: {
						mvid: _this.mvid
					},
					success: (res) => {
						uni.hideLoading();
						//console.log(res.data.data);
						if (res.data.code == 200) {
							_this.mvDetail = res.data.data;
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
			getMvUrl() {

				//获取mv Url
				var _this = this;
				uni.showLoading({
					title: '加载中'
				});
				uni.request({
					url: _this.MusicApi.server + _this.MusicApi.type.mvUrl,
					data: {
						id: _this.mvid
					},
					success: (res) => {
						uni.hideLoading();
						if (res.data.code == 200) {
							_this.mvUrl = res.data.data.url;
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
			getSimiMvList() {

				//获取mv Url
				var _this = this;
				uni.showLoading({
					title: '加载中'
				});
				uni.request({
					url: _this.MusicApi.server + _this.MusicApi.type.simiMv,
					data: {
						mvid: _this.mvid
					},
					success: (res) => {
						uni.hideLoading();
						//console.log(res.data);
						if (res.data.code == 200) {
							_this.simiMvList = res.data.mvs;
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
			videoErrorCallback: function(e) {
				uni.showToast({
					title: e.target.errMsg,
					duration: 5000,
					icon: 'none'
				});
			},
			toMvDetail(id){
				
				//更改mvid并且获取详情
				this.mvid = id;
				this.getMvDetail(); //获取mv详情
				this.getMvUrl(); //获取mv URL
				this.getSimiMvList(); //获取类似mv
			}
		}
	}
</script>

<style>
	page {
		background: rgb(251, 251, 251);
	}

	.video video {
		width: 100%;
	}

	.videoInfo {
		padding-bottom: 40upx;
	}

	.videoInfo .name {
		font-weight: bold;
		font-size: 34upx;
	}

	.videoInfo .tips {
		margin-top: 20upx;
		font-size: 22upx;
		color: #999;
	}

	.videoInfo .tips .artistName {
		margin-left: 40upx;
	}

	.videoInfo .desc {
		margin-top: 20upx;
		font-size: 26upx;
		color: #666;
		line-height: 40upx;
	}

	.simiMvList .item {
		background: #fff;
		border-radius: 10upx;
		box-shadow: 0 0 10px hsla(0, 0%, 51%, .2);
		margin-bottom: 40upx;
		display: flex;
	}
	
	.simiMvList .item .pic {
		width: 270upx;
		height: 170upx;
		margin-right: 30upx;
	}
	
	.simiMvList .item .pic image {
		max-width: 100%;
		height: 170upx;
		border-radius: 10upx;
	}
	
	.simiMvList .item .info {
		flex: 1;
	}
	
	.simiMvList .item .info .name {
		margin-top: 25upx;
		font-weight: bold;
		font-size: 30upx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	
	.simiMvList .item .info .artistName {
		color: #999;
		font-size: 24upx;
	}
	
	.simiMvList .item .btn {
		margin-top: 50upx;
		margin-left: 10upx;
		width: 85upx;
	}
	.simiMvList .item .btn text {
		display: inline-block;
		width: 10upx;
		height: 10upx;
		border-radius: 50%;
		background: #999;
		margin: 0upx 5upx;
	}
	
</style>
