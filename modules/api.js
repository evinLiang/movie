module.exports = {
	server:'https://music.evinweb.com/',		//正式环境地址
	doucment: 'https://binaryify.github.io/NeteaseCloudMusicApi/#/',	//接口说明文档
	type:{
		banner: "banner",						//说明 : 调用此接口 , 可获取 banner( 轮播图 ) 数据
		personalized: "personalized",			//说明 : 调用此接口 , 可获取推荐歌单
		topMv: "top/mv",						//说明 : 调用此接口 , 可获取 mv 排行 , 可选参数 : limit: 取出数量 , 默认为 30 
		mvFirst: "mv/first",					//说明 : 调用此接口 , 可获取最新 mv 可选参数 : limit: 取出数量 , 默认为 30
		personalizedMv: "personalized/mv",		//说明 : 调用此接口 , 可获取推荐 mv
		toplistArtist: "toplist/artist",		//说明 : 调用此接口 , 可获取排行榜中的歌手榜 
		djRecommend: "dj/recommend",			//说明 : 调用此接口 , 可获得推荐电台 
		mvDetail: "mv/detail",					//说明 : 调用此接口 , 传入 mvid ( 在搜索音乐的时候传 type=1004 获得 ) , 可获取对应 MV 数据 , 数据包含 mv 名字 , 歌手 , 发布时间 , mv 视频地址等数据 , 其中 mv 视频 网易做了防盗链处理 , 可能不能直接播放 , 需要播放的话需要调用 ' mv 地址' 接口
		mvUrl: "mv/url",                        //说明 : 调用此接口 , 传入 mv id,可获取 mv 播放地址
		simiMv: "simi/mv",						//说明 : 调用此接口 , 传入 mvid 可获取相似 mv
		playlistDetail: "playlist/detail",		//说明 : 调用此接口 , 传入歌单 id, 可 以获取对应歌单内的所有的音乐
		songDetail: "song/detail",				//说明 : 调用此接口 , 传入音乐 id(支持多个 id, 用 , 隔开), 可获得歌曲详情(注意:歌曲封面现在需要通过专辑内容接口获取) 必选参数 : ids: 音乐 id, 如 ids=347230
		songUrl: "song/url",					//说明 : 调用此接口 , 传入的音乐 id( 可多个 , 用逗号隔开 ), 可以获取对应的音乐的 url( 不需要登录 ) 必选参数 : ids : 音乐 id
		topList: "top/list",					//说明 : 调用此接口 , 传入数字 idx, 可获取不同排行榜
		programRecommend: "program/recommend",	//说明 : 调用此接口 , 可获取推荐电台
		artistDesc: "artist/desc",				//说明 : 调用此接口 , 传入歌手 id, 可获得歌手描述,必选参数 : id: 歌手 id
		artistSong: "artists",					//说明 : 调用此接口 , 传入歌手 id, 可获得歌手部分信息和热门歌曲 必选参数 : id: 歌手 id, 可由搜索接口获得
		artistMv: "artist/mv",					//说明 : 调用此接口 , 传入歌手 id, 可获得歌手 mv 信息
	}
}