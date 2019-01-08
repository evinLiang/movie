<template>
	<view class="page-panel">
		<view class="page-title">今日放映影片</view>
		<view class="page-content">
			<view class="list-panel ease-row">
				<view class="item ease-col-2-1" v-for="(item,index) in MovieList" :key='index' @tap="toDetail(item.movieId)">
					<image :src="item.pic_url" mode="aspectFill"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				MovieList: ''
			}
		},
		onLoad() {
			this.getMovieList()
		},
		methods: {
			getMovieList(){
				var _this = this;
				uni.showLoading({
					title: '加载中'
				});
				uni.request({
					url: 'https://www.evinweb.com/movieApi/today.php',
					data: {
						cityid: 5
					},
					success: (res) => {
						uni.hideLoading();
						if(res.data.result == null){
							uni.showToast({
								title: res.data.reason,
								duration: 5000,
								icon: 'none'
							});
						}else {
							_this.MovieList = res.data.result
						}
						
						
					},
					fail: (err) => {
						uni.hideLoading();
						uni.showToast({
							title: err,
							duration: 5000,
							icon: 'none'
						});
					}
				})
			},
			toDetail(id) {
				var movieId = id;
				uni.navigateTo({
					url: '../detail/detail?movieId='+movieId
				});
			}
		}
	}
</script>

<style>
	.page-panel {
		padding: 0upx 47upx 47upx 47upx;
	}
	.page-title {
		font-size: 46upx;
		color: #464646;
		padding: 60upx 0upx 50upx;
		font-weight: bold;
	}
	.list-panel .item {
		overflow: hidden;
		padding: 0upx 0upx 24upx 0upx;
	}
	.list-panel .item image {
		max-width: 100%;
		border-radius: 10upx;
		vertical-align: middle;
	}
</style>
