<template>
	<view class="page-panel">
		<nowPlay></nowPlay>
		<view class="personalizedList ease-row">
			<view
				class="item ease-col-2-1"
				v-for="(item, index) in personalizedList"
				:key="item.id"
				@tap="openPersonalizedDetail(item.id)"
			>
				<image :src="item.picUrl" mode="widthFix"></image>
				<text class="name">{{ item.name }}</text>
			</view>
		</view>
	</view>
</template>

<script>
import nowPlay from '@/components/nowPlay.vue';
export default {
	data() {
		return {
			personalizedList: ''
		};
	},
	components: {
		nowPlay
	},
	onLoad() {
		this.getPersonalizedList();
	},
	methods: {
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
		openPersonalizedDetail(id) {
			//跳转歌单详情
			var id = id;
			uni.navigateTo({
				url: '../getPlaylistDetail/getPlaylistDetail?id=' + id
			});
		}
	}
};
</script>

<style>
.personalizedList .item {
	position: relative;
	z-index: 1;
	margin-bottom: 24upx;
	height: 332upx;
}

.personalizedList .item .name {
	position: absolute;
	z-index: 2;
	display: inline-block;
	bottom: 0upx;
	left: 0upx;
	color: #fff;
	background: rgba(0, 0, 0, 0.3);
	border-radius: 0upx 0upx 10upx 10upx;
	padding: 15upx;
	font-size: 24upx;
	min-height: 98upx;
	width: 100%;
	box-sizing: border-box;
}

.personalizedList .item image {
	max-width: 100%;
	height: 332upx;
	border-radius: 10upx;
	box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3);
}
</style>
