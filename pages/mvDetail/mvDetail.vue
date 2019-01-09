<template>
	<view>
		<view class="video">
			<video id="myVideo" :src="mvUrl" @error="videoErrorCallback" controls></video>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mvid:'',
				mvDetail:'',
				mvUrl:''
			};
		},
		onLoad:function(e){
			console.log(e);
			this.mvid = e.mvid;
			this.getMvDetail();
			this.getMvUrl();
		},
		methods: {
			getMvDetail(){
				
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
						console.log(res.data.data);
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
			getMvUrl(){
				
				//获取mv详情
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
			}
		}
	}
</script>

<style>
	.video video {
		width:100%;
	}
</style>
