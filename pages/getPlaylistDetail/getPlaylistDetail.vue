<template>
	<view class="page-panel">
		<view class="playlistDetail ease-row">
			<view class="ease-col-3-1 coverImgUrls">
				<image :src="playlist.coverImgUrl" mode="widthFix"></image>
			</view>
			<view class="ease-col-3-2 playlistInfo">
				<view class="name">{{playlist.name}}</view>
				<view class="description">{{playlist.description}}</view>
			</view>
		</view>
		<view class="privileges">
			<view class="item" v-for="(item,index) in playlist.tracks" :key="item.id">
				<view class="index">{{index+1}}</view>
				<view class="info">
					<view class="name">{{item.name}}</view>
					<text v-for="(childItem,i) in item.ar" :key="childItem.id" class="arName" v-if="i<=1">{{childItem.name}} </text>
				</view>
				<view class="btn">
					<text></text><text></text><text></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				playlist: '',
				playlistDetailSwith: false
			}
		},
		onLoad: function(e) {
			//console.log(e);
			this.id = e.id;
			this.getPlaylistDetail(); //获取歌单详情
		},
		methods: {
			getPlaylistDetail() {
				//获取mv详情
				var _this = this;
				uni.showLoading({
					title: '加载中'
				});
				uni.request({
					url: _this.MusicApi.server + _this.MusicApi.type.playlistDetail,
					data: {
						id: _this.id
					},
					success: (res) => {
						//console.log(res.data);
						if (res.data.code == 200) {
							_this.playlist = res.data.playlist;
							uni.hideLoading();
						} else {
							uni.hideLoading();
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
		}
	}
</script>

<style>
	.coverImgUrls {
		height: 212upx;
	}

	.coverImgUrls image {
		width: 100%;
		height: 212upx;
		border-radius: 10upx;
		box-shadow: 0 0 10px hsla(0, 0%, 51%, .3);
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

	.privileges .item {
		background: #fff;
		border-radius: 10upx;
		box-shadow: 0 0 10px hsla(0, 0%, 51%, .3);
		margin-top: 32upx;
		padding: 20upx 32upx;
		display: flex;
	}
	
	.privileges .item .index {
		font-weight: bold;
		color: #666;
		margin-right: 32upx;
		line-height: 94upx;
		font-size: 48upx;
		padding: 0upx 10upx;
	}
	
	.privileges .item .info {
		flex: 1;
		overflow: hidden;
	}
	
	.privileges .item .info .name {
		width: 100%;
		font-size: 34upx;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space:nowrap
	}
	.privileges .item .info .arName {
		font-size: 28upx;
		color: #888;
	}
	
	.privileges .item .btn {
		margin-top: 20upx;
		margin-left: 10upx;
		width: 70upx;
	}
	.privileges .item .btn text {
		display: inline-block;
		width: 10upx;
		height: 10upx;
		border-radius: 50%;
		background: #999;
		margin: 0upx 5upx;
	}
</style>
