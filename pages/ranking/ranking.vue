<template>
	<view class="page-panel">
		<nowPlay></nowPlay>
		<view class="ranking-panel ease-row">
			<div
				class="item ease-col-3-1"
				v-for="(item, index) in rankingList"
				:key="item.index"
				@tap="toRankingList(index)"
			>
				<image class="ranking-pic" :src="item.picUrl" mode="widthFix"></image>
				<view class="ranking-name">{{ item.name }}</view>
			</div>
		</view>
	</view>
</template>

<script>
import nowPlay from '@/components/nowPlay.vue';
export default {
	data() {
		return {
			rankingList: [
				{
					name: '云音乐新歌榜',
					id: '0',
					picUrl:
						'http://p1.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg',
					description:
						'云音乐新歌榜：云音乐用户一周内收听所有新歌（一月内最新发行） 官方TOP排行榜，每天更新。'
				},
				{
					name: '云音乐热歌榜',
					id: '1',
					picUrl:
						'http://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg',
					description:
						'云音乐热歌榜：云音乐用户一周内收听所有线上歌曲 官方TOP排行榜，每周四更新。'
				},
				{
					name: '网易原创歌曲榜',
					id: '2',
					picUrl:
						'http://p1.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg',
					description:
						'云音乐独立原创音乐人作品官方榜单，以推荐优秀原创作品为目的。每周四网易云音乐首发。申请网易音乐人：http://music.163.com/nmusician/'
				},
				{
					name: '云音乐飙升榜',
					id: '3',
					picUrl:
						'http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg',
					description: '云音乐中每天热度上升最快的100首单曲，每日更新。'
				},
				{
					name: '云音乐电音榜',
					id: '4',
					picUrl:
						'http://p1.music.126.net/5tgOCD4jiPKBGt7znJl-2g==/18822539557941307.jpg',
					description: '云音乐用户一周内收听电子音乐官方TOP排行榜，每周五更新'
				},
				{
					name: 'UK排行榜周榜',
					id: '5',
					picUrl:
						'http://p1.music.126.net/VQOMRRix9_omZbg4t-pVpw==/18930291695438269.jpg',
					description: 'UK排行榜'
				},
				{
					name: '美国Billboard周榜',
					id: '6',
					picUrl:
						'http://p1.music.126.net/EBRqPmY8k8qyVHyF8AyjdQ==/18641120139148117.jpg',
					description: '美国Billboard排行榜'
				},
				{
					name: 'iTunes榜',
					id: '8',
					picUrl:
						'http://p2.music.126.net/WTpbsVfxeB6qDs_3_rnQtg==/109951163601178881.jpg',
					description: 'iTunes榜Top100'
				},
				{
					name: 'Hit FM Top榜',
					id: '9',
					picUrl:
						'http://p2.music.126.net/54vZEZ-fCudWZm6GH7I55w==/19187577416338508.jpg',
					description: 'Hit FM Top 20 Countdown 第36期'
				},
				{
					name: '日本Oricon周榜',
					id: '10',
					picUrl:
						'http://p2.music.126.net/Rgqbqsf4b3gNOzZKxOMxuw==/19029247741938160.jpg',
					description: 'ORICONSTYLE CD单曲周榜，每周三更新，欢迎关注。'
				},
				{
					name: '香港电台中文歌曲龙虎榜',
					id: '16',
					picUrl:
						'http://p2.music.126.net/YQsr07nkdkOyZrlAkf0SHA==/18976471183805915.jpg',
					description: '香港电台中文歌曲龙虎榜，每周五更新'
				},
				{
					name: '台湾Hito排行榜',
					id: '20',
					picUrl:
						'http://p2.music.126.net/wqi4TF4ILiTUUL5T7zhwsQ==/18646617697286899.jpg',
					description:
						'資料來源統計： ※唱片行銷售量佔20%(含玫瑰大眾、g-music、五大、佳佳、博客來等各大唱片行) ※數位音樂下載佔30%(含 iTunes、KK box、myMusic、Omusic、各鈴聲下載榜) ※Hit Fm聯播網AIR PLAY電台播出率佔50%'
				},
				{
					name: 'Beatport全球电子舞曲榜',
					id: '21',
					picUrl:
						'http://p2.music.126.net/A61n94BjWAb-ql4xpwpYcg==/18613632348448741.jpg',
					description: 'Beatport全球电子舞曲排行榜TOP100（本榜每周四更新）'
				},
				{
					name: '云音乐ACG音乐榜',
					id: '22',
					picUrl:
						'http://p1.music.126.net/vttjtRjL75Q4DEnjRsO8-A==/18752170813539664.jpg',
					description: '云音乐用户一周内收听所有ACG音乐官方TOP排行榜，每周四更新。'
				},
				{
					name: '中国TOP排行榜(港台榜)',
					id: '14',
					picUrl: 'http://p1.music.126.net/d8faOLHxwWPta02fskrdDQ==/2057186255569164.jpg',
					description:
						'中国TOP排行榜是由MusicRadio音乐之声依据时下最热门的流行单曲形成的权威音乐榜单。'
				},
				{
					name: '中国TOP排行榜(内地榜)',
					id: '15',
					picUrl: '../../static/images/mr.png',
					description:
						'中国TOP排行榜是由MusicRadio音乐之声依据时下最热门的流行单曲形成的权威音乐榜单。'
				},
				{
					name: '云音乐嘻哈榜',
					id: '23',
					picUrl: 'http://p1.music.126.net/QWMV-Ru_6149AKe0mCBXKg==/1420569024374784.jpg',
					description: '云音乐嘻哈榜'
				},
				{
					name: '韩国Melon排行榜周榜',
					id: '11',
					picUrl: 'http://p1.music.126.net/kSDPQ1aRPPf1GXHwICGLvg==/1367792472071827.jpg',
					description:
						'MelOn已成为韩国最大的音源网站，许多音乐打榜节目，均以MelOn的音源排行作为参考，或者MelOn占较大比重。MelOn包涵了几乎所有在韩国发行的歌曲，包括数码单曲，专辑歌曲，迷你专辑歌曲，OST等。'
				}
			]
		};
	},
	components: {
		nowPlay
	},
	methods: {
		toRankingList(e) {
			//跳转榜单详情
			var rankingInfo = this.rankingList[e];
			uni.navigateTo({
				url: '../rankingList/rankingList?id=' + rankingInfo.id
			});
		}
	}
};
</script>

<style scoped>
.ranking-panel .item {
	position: relative;
	z-index: 1;
	margin-bottom: 32upx;
}
.ranking-panel .item .ranking-name {
	position: absolute;
	z-index: 2;
	bottom: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.3);
	border-radius: 0upx 0upx 10upx 10upx;
	padding: 15upx;
	font-size: 22upx;
	width: 100%;
	box-sizing: border-box;
	color: #fff;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.ranking-panel .item .ranking-pic {
	max-width: 100%;
	border-radius: 10upx;
	box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3);
	height: 212upx;
}
</style>
