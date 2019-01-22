<template>
	<view class="nowPlay" v-show="isMusicStart">
		<div class="nowPlay-panel" @tap="toPlaying()">
			<image class="nowPlayIcom" src="../../static/images/nowPlay.png" mode=""></image>
			<view class="nowPlayInfo">正在播放 :</view>
			<view class="nowPlayName">{{ musicInfo.name }}--{{ musicInfo.author }}</view>
			<image class="nowPlayIcomP" :src="musicInfo.picUrl" mode=""></image>
		</div>
		<div class="nowPlay-seat"></div>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
	data() {
		return {
			show: this.isMusicStart
		};
	},
	computed: {
		...mapState(['isMusicStart', 'musicInfo'])
	},
	methods: {
		toPlaying() {
			uni.navigateTo({
				url: '../play/play?id=playing'
			});
		}
	}
};
</script>

<style>
.nowPlay-seat {
	height: 100upx;
}
.nowPlay-panel {
	position: fixed;
	z-index: 999;
	/* #ifndef H5 */
	top: 0upx;
	/* #endif */
	/* #ifdef H5 */
	top: 88upx;
	/* #endif */
	left: 0upx;
	width: 100%;
	display: flex;
	line-height: 62upx;
	overflow: hidden;
	padding: 20upx 32upx;
	box-sizing: border-box;
	background: #fff;
	box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.1);
}
.nowPlayIcom {
	width: 60upx;
	height: 60upx;
	margin-right: 10upx;
}
.nowPlayIcomP {
	border-radius: 50%;
	box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.1);
	width: 56upx;
	height: 56upx;
	margin-left: 10upx;
	margin-top: 2upx;
}
.nowPlayInfo {
	font-size: 34upx;
	color: #e91e63;
	margin-right: 12upx;
}
.nowPlayName {
	font-size: 34upx;
	color: #666;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	flex: 1;
}
</style>
