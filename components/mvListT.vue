<template>
	<view class="ease-row mvListT">
		<view
			class="ease-col-2-1 item"
			v-for="(item, index) in data"
			:key="item.id"
			@tap="openMvDetail(item.id)"
		>
			<image :src="item.cover ? item.cover : item.picUrl" mode=""></image>
			<text class="name">{{ item.name }}</text>
			<view class="playBtn"> <view class="icon"></view> </view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: ['data'],
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

<style>
.mvListT .item {
	position: relative;
	z-index: 1;
	overflow: hidden;
	height: 196upx;
	margin-bottom: 25upx;
	border-radius: 10upx;
	box-shadow: 0 0 10px hsla(0, 0%, 50%, 0.1);
}
.mvListT .item .name {
	position: absolute;
	z-index: 2;
	left: 0;
	bottom: 0;
	width: 100%;
	color: #fff;
	font-size: 22upx;
	box-sizing: border-box;
	padding: 12upx 16upx;
	background: rgba(0, 0, 0, 0.5);
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.mvListT .item image {
	max-width: 100%;
	height: 196upx;
	border-radius: 10upx;
	object-fit: cover;
	object-position: right top;
}
.mvListT .item .playBtn {
	left: 40upx;
	top: 40upx;
	width: 50upx;
	height: 50upx;
}

.mvListT .item .playBtn .icon {
	margin: 16upx 0upx 0upx 18upx;
	border-top: 10upx solid transparent;
	border-bottom: 10upx solid transparent;
	border-left: 20upx solid #e91e63;
}
</style>
