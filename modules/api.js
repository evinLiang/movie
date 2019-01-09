module.exports = {
	server:'http://music.evinweb.com/',		//正式环境地址
	type:{
		banner: "banner",						//说明 : 调用此接口 , 可获取 banner( 轮播图 ) 数据
		personalized: "personalized",			//说明 : 调用此接口 , 可获取推荐歌单
		topMv: "top/mv",						//说明 : 调用此接口 , 可获取 mv 排行 , 可选参数 : limit: 取出数量 , 默认为 30 
		toplistArtist: "toplist/artist",		//说明 : 调用此接口 , 可获取排行榜中的歌手榜 
		djRecommend: "dj/recommend"				//说明 : 调用此接口 , 可获取排行榜中的歌手榜
	}
}