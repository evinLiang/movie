<template>
	<view class="page-panel">
		<nowPlay></nowPlay>
		<view class="playlistDetail ease-row">
			<view class="ease-col-3-1 coverImgUrls">
				<image :src="playlist.coverImgUrl" mode="widthFix"></image>
			</view>
			<view class="ease-col-3-2 playlistInfo">
				<view class="name">{{ playlist.name }}</view>
				<view class="description">{{ playlist.description }}</view>
			</view>
		</view>
		<songList :singerHotSongs="playlist.tracks"></songList>
	</view>
</template>

<script>
import nowPlay from '@/components/nowPlay.vue';
import songList from '@/components/songList.vue';
export default {
	data() {
		return {
			id: '',
			playlist: '',
			playlistDetailSwith: false
		};
	},
	components: {
		nowPlay,
		songList
	},
	onLoad: function(e) {
		//console.log(e);
		this.id = e.id;
		this.getPlaylistDetail(); //获取歌单详情
	},
	methods: {
		getPlaylistDetail() {
			//获取详情
			var _this = this;
			uni.showLoading({
				title: '加载中'
			});
			uni.request({
				url: _this.MusicApi.server + _this.MusicApi.type.playlistDetail,
				data: {
					id: _this.id
				},
				success: res => {
					//console.log(res.data);
					if (res.data.code == 200) {
						_this.playlist = res.data.playlist;
						uni.hideLoading();
					} else {
						uni.hideLoading();
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
		toPlay(id) {
			//跳到音乐播放页面
			var id = id;
			uni.navigateTo({
				url: '../play/play?id=' + id
			});
		}
	}
};
</script>

<style>
.coverImgUrls {
	height: 212upx;
}

.coverImgUrls image {
	width: 100%;
	height: 212upx;
	border-radius: 10upx;
	box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3);
}

.playlistInfo .name {
	font-weight: bold;
	font-size: 32upx;
}

.playlistInfo .description {
	margin-top: 6upx;
	color: #999;
	font-size: 22upx;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
}
</style>
