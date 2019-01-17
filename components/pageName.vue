<template>
	<view class="pageName">
		<text class="title">{{pageName}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props: ['pageName'],
	}
</script>

<style>
	.pageName {
		display: flex;
		padding-bottom: 26upx;
	}
	.pageName .title {
		font-size: 48upx;
		font-weight: bold;
	}
</style>
