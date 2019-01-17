<template>
	<view class="bottomMusci">
		<view class="bottomMusicPanel">bottomMusicPanel</view>
		<view class="bottomMusicSeat"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.bottomMusicPanel {
	position: fixed;
	z-index: 1000;
	left: 0px;
	bottom: 0px;
	width: 100%;
	height: 120upx;
	padding: 20upx;
	box-sizing: border-box;
	background: #fff;
	border-top: 3px solid #E91E63;
	box-shadow: 0 0 10px hsla(0, 0%, 51%, .1);
}
.bottomMusicSeat {
	width: 100%;
	height: 120upx;
}
</style>
