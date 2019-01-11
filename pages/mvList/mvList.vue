<template>
	<view class="page-panel">
		<view class="mvList">
			<view class="item" v-for="(item,index) in mvList" :key="item.index" @tap="openMvDetail(item.id)">
				<image :src="item.cover" mode="widthFix"></image>
				<text class="name">{{item.name}}</text>
				<view class="playBtn">
					<view class="icon"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mvList: ''
			};
		},
		onLoad() {
			this.getMvList();
		},
		methods: {
			getMvList(){
				
				//获取mv列表
				var _this = this;
				uni.showLoading({
					title: '加载中'
				});
				uni.request({
					url: _this.MusicApi.server + _this.MusicApi.type.topMv,
					success: (res) => {
						uni.hideLoading();
						//console.log(res.data);
						if (res.data.code == 200) {
							_this.mvList = res.data.data;
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
			},
		}
	}
</script>

<style>
	.mvList .item {
		position: relative;
		z-index: 1;
		margin-bottom: 32upx;
	}
	
	.mvList .item image {
		width: 100%;
		border-radius: 10upx;
		box-shadow: 0 0 10px hsla(0, 0%, 51%, .3);
	}
	
	.mvList .item .name {
		position: absolute;
		z-index: 2;
		left: 0upx;
		bottom: 0upx;
		color: #fff;
		background: rgba(0,0,0,0.5);
		display: inline-block;
		width: 100%;
		padding:25upx 20upx;
		font-size: 30upx;
		box-sizing: border-box;
		border-radius:0upx 0upx 10upx 10upx;
	}
</style>
