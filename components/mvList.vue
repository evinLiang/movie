<template>
	<view class="simiMvList">
		<view class="item" v-for="item in singerMvs" :key="item.id" @tap="openMvDetail(item.id)">
			<view class="pic"> <image :src="item.imgurl16v9" mode="aspectFill"></image> </view>
			<view class="info">
				<view class="name">{{ item.name }}</view>
				<view class="artistName">{{ item.artistName }}</view>
			</view>
			<view class="btn"> <text></text><text></text><text></text> </view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: ['singerMvs'],
	methods: {
		openMvDetail(mvid) {
			//跳转mv详情
			var mvid = mvid;
			uni.navigateTo({
				url: '../mvDetail/mvDetail?mvid=' + mvid
			});
		}
	}
};
</script>

<style></style>
