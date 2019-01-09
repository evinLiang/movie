module.exports = {
	server:'http://music.evinweb.com/',		//正式环境地址
	type:{
		banner: "banner",						//说明 : 调用此接口 , 可获取 banner( 轮播图 ) 数据
		personalized: "personalized",			//说明 : 调用此接口 , 可获取推荐歌单
		topMv: "top/mv",						//说明 : 调用此接口 , 可获取 mv 排行 , 可选参数 : limit: 取出数量 , 默认为 30 
		toplistArtist: "toplist/artist",		//说明 : 调用此接口 , 可获取排行榜中的歌手榜 
		djRecommend: "dj/recommend",			//说明 : 登陆后调用此接口 , 可获得推荐电台 
		mvDetail: "mv/detail",					//说明 : 调用此接口 , 传入 mvid ( 在搜索音乐的时候传 type=1004 获得 ) , 可获取对应 MV 数据 , 数据包含 mv 名字 , 歌手 , 发布时间 , mv 视频地址等数据 , 其中 mv 视频 网易做了防盗链处理 , 可能不能直接播放 , 需要播放的话需要调用 ' mv 地址' 接口
		mvUrl: "mv/url"                         //说明 : 调用此接口 , 传入 mv id,可获取 mv 播放地址
	}
}