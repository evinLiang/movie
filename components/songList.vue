<template>
	<view class="privileges">
		<view
			class="item"
			v-for="(item, index) in singerHotSongs"
			:key="item.index"
			@tap="toPlay(item.id)"
		>
			<view class="index">{{ index + 1 }}</view>
			<view class="info">
				<view class="name">{{ item.name }}</view>
				<text v-for="(childItem, i) in item.ar" :key="childItem.i" class="arName"
					>{{ childItem.name }}
				</text>
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
	props: ['singerHotSongs'],
	methods: {
		toPlay(id) {
			//跳到音乐播放页面
			var id = id;
			//console.log(id);
			uni.navigateTo({
				url: '../play/play?id=' + id
			});
		}
	}
};
</script>

<style></style>
