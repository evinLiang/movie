<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
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
.themeColor { 
	color: #e91e63;
	font-size: 46upx;
}
</style>
