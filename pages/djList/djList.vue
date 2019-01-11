<template>
	<view class="page-panel">
		<djRecommendList :djRecommendList="djRecommendList" :djListNumber="djListNumber"></djRecommendList>
	</view>
</template>

<script>
	import djRecommendList from '@/components/djRecommendList.vue';
	export default {
		data() {
			return {
				djRecommendList: '',
				djListNumber:'10'
			};
		},
		onLoad() {
			this.getDjList();
		},
		methods:{
			getDjList(){
				//获取电台列表数据
				var _this = this;
				uni.showLoading({
					title: '加载中'
				});
				uni.request({
					url: _this.MusicApi.server + _this.MusicApi.type.djRecommend,
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
			}
		},
		components: {
		    djRecommendList
		}
	}
</script>

<style>

</style>
