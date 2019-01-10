<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* flexbox:flexbox系统
–––––––––––––––––––––––––––––––––––––––––––––––––– */
	.ease-row {
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		-webkit-justify-content: space-between;
		justify-content: space-between;
		-webkit-box-lines: multiple;
		-moz-box-lines: multiple;
		-webkit-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		-webkit-box-align: start;
		-ms-flex-align: start;
		-webkit-align-items: flex-start;
		align-items: flex-start;
	}

	.ease-row .ease-col-2-1 {
		box-sizing: border-box;
		width: 50%;
		width: calc((100% - 24upx) / 2);
	}
	
	.page-panel {
		padding: 32upx;
	}
	
	.page-title {
		font-size: 36upx;
		padding: 25upx 0upx;
		font-weight: bold;
		color: rbga(72, 88, 162, 0.3);
	}
	
	.themeColor {
		color: #e91e63;
		font-size: 46upx;
	}

	.playBtn {
		position: absolute;
		z-index: 99;
		left: 30upx;
		top: 30upx;
		width: 80upx;
		height: 80upx;
		background: rgba(255, 255, 255, 0.8);
		border-radius: 50%;
	}

	.playBtn .icon {
		margin: 26upx 0upx 0upx 30upx;
		width: 0;
		height: 0;
		border-top: 14upx solid transparent;
		border-bottom: 14upx solid transparent;
		border-left: 28upx solid #e91e63;
		border-radius: 5upx;
	}
	
	.font-w-b {
		font-weight: bold;
	}
</style>
