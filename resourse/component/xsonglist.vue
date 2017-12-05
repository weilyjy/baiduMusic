<template>
	<div>
		<div class="layout layout-current songs">
			<section class="content">
				<div class="songs-header" style="overflow: hidden;">
					<img :src="bgpic" alt="" style="height: 200px;width: 100%;" />
				</div>

				<div class="songs-content">
					<div class="download-songs">
						<span>批量下载</span>
						<span class="iconfont icon-download"></span>
					</div>
					<ul class="list" >
						<li @click="playSongMusic(a.song_id)" v-for="a in song" class="song log song-566310948 normal url playing-state" :data-sid="a.song_id">

							<div class="left">
								<div class="rank">{{a.rank}}</div>
								<div class="icon-trend icon-trend-zero"></div>

								<span :class="id==a.song_id?'icon-play-state':''" :id="a.song_id"></span>
								<div class="info">
									<div>
										<span>{{a.title}} </span>
										<span class="icon-q icon-sq"></span>
									</div>
									<span class="txt">{{a.author}}</span>
								</div>
							</div>
							<div class="download iconfont icon-download need-active"></div>
						</li>
						<li class="load-more need-active" @click="loadMore" style="margin-bottom: 70px;">查看更多...</li>
					</ul>
				</div>
			</section>
		</div>
		<div v-show="bool">
			<div id="player" style="display:block" @click="detailPaly">
				<div class="player-minibar url">
					<div class="ui-blur"></div>
					<div class="minibar-progress">
						<div class="bar" style="width: 9.75676%;"></div>
					</div>

					<div class="player">
						<img :src="pic" alt="" />
						<div class="info">

							<span class="title">{{title}}</span>
							<span class="name">{{author}}</span>
						</div>
						<audio :src="palySrc" autoplay="autoplay" controls="controls"></audio>
						<ul class="action">
							<li class="iconfont play icon-stop"></li>
							<li class="iconfont icon-next"></li>
							<li class="iconfont icon-list"></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
//	import xplaysong from "./xplaysong.vue";
	export default {
		data() {
			return {
				song: [],
				type: this.$parent.$store.state.type,
				bgpic: null,
				bool: false,
				title: '',
				author: '',
				pic: "",
				palySrc: '',
				id:'',

			}
		},
		/*components:{
			xplaysong,
		},*/
		mounted() {
			this.loadMore();
		},
		methods: {
			paly(e){
//				console.log(e);
//				console.log(e.target);
			},
			playSongMusic(singId) {
				this.id=singId;
				this.bool = true;
				console.log(singId);
				console.log(this.$parent);
				var self = this;
				$.ajax({
					url: 'http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.song.play',
					type: 'GET',
					dataType: 'jsonp',
					data: {
						songid: singId,
					},
					success: function(data) {
						self.palySrc = data.bitrate.file_link;
						self.title = data.songinfo.title;
						self.author = data.songinfo.author;
						self.pic = data.songinfo.pic_small;
						console.log(self.title);
						console.log(self.author);
						console.log(self.pic);

					}
				})
			},
			detailPaly(){
				location.href='#/detailplay';
			},
		loadMore(){
				var self = this;
				this.song=[];
				this.$parent.$parent.$store.state.num+=20;
				var sizeNum=this.$parent.$parent.$store.state.num;
				$.ajax({
					url: 'http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.billboard.billList&offset=0',
					type: 'GET',
					dataType: 'jsonp',
					data: {
						type: self.type,
						size:sizeNum,
					},
					success: function(data) {
						console.log(data.song_list);
						self.song = self.song.concat(data.song_list);
						self.bgpic = data.billboard.pic_s192;
						console.log(self.song);
					}
				})
			}
		}
		
	}
</script>

<style>

</style>