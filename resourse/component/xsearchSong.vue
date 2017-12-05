<template>
	<div>
		<div id="search" class="page search" style="display: block; top: 0px;">
			<form id="se_form" action="/" method="GET">
				<div class="search-input">
					<div class="input-wrap">
						<div class="search-query-button"><span></span></div>
						<input @click="focus" type="search" autocomplete="off" name="query" v-model="query" value="" placeholder="歌名、歌词、歌手、专辑">
						<div class="search-cancel-button" style="" @click="cancel"><span></span></div>
						<div class="search-button" style="" @click="searchSong">搜索</div>
					</div>
				</div>
			</form>
			<div class="ui-suggestion"  v-show="bool">
				<div class="hot-sug clearfix" style="margin-bottom: 10px;">
					<span class="item" v-for="a in hotKey" @click="hotSearch">{{a.word}}</span>
				</div>
			</div>
		
		</div>
			<div class="layout layout-current" data-title="搜索结果页">
				<section class="content">
					<ul class="list searchlist">
						<li @click="playSearchMusic(a.song_id)" v-for="a in searchList" class="song log song-74197364 only-play url" :data-sid="a.song_id">
							<div class="left">
								<span class="icon-play-state"></span>
								<div class="info  single-line ">
									<div>
										<span v-html="a.title"></span>
										<span class="icon-q icon-sq"></span>
									</div>
									<span class="txt" v-html="a.author"></span>
								</div>
							</div>
							<div class="download iconfont icon-download need-active"></div>
						</li>
						<li class="load-more need-active" @click="searchSong" style="margin-bottom: 70px;">查看更多...</li>
					</ul>
				</section>
			</div>
		
	<div v-show="palybool" >
		<div id="player" style="display:block" @click="detailPaly">
			<div class="player-minibar url">
				<div class="ui-blur"></div>
				<div class="minibar-progress">
					<div class="bar" style="width: 9.75676%;"></div>
				</div>

				<div class="player">
					<img :src="this.$parent.$store.state.pic" alt="" />
					<div class="info">
						<span class="title">{{this.$parent.$store.state.title}}</span>
						<span class="name">{{this.$parent.$store.state.author}}</span>
					</div>
					<audio :src="this.$parent.$store.state.palySrc" autoplay="autoplay" controls="controls"></audio>
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
	export default {
		data() {
			return {
				searchList: [],
				hotKey: [],
				query: '',
				bool: true,
				page_now: 0,
				palybool: false

			}
		},
		mounted() {
			this.getHotkey();
		},
		methods: {
			focus() {
				this.bool = true;
			},
			cancel() {
				this.query = '';
			},
			hotSearch(e) {
				console.log(e.target.innerHTML);
				this.query = e.target.innerHTML;
			},
			getHotkey() {
				var self = this;
				$.ajax({
					type: "get",
					url: "http://musicapi.qianqian.com/v1/restserver/ting?from=webapp_music&method=baidu.ting.search.hot&format=json&page_num=10",
					dataType: 'jsonp',
					success: function(data) {
						self.hotKey = data.result; 
						console.log(self.hotKey);

					}
				});
			},
			searchSong() {
				this.bool = false;
				var self = this;
				this.page_now++;
				$.ajax({
					type: "get",
					url: "http://musicapi.qianqian.com/v1/restserver/ting?from=webapp_music&method=baidu.ting.search.common&format=jsonp&callback=search_common",
					dataType: 'jsonp',
					data: {
						query: self.query,
						page_size: 20,
						page_no: self.page_now,
					},
					success: function(data) {
						self.searchList = data.song_list;
						console.log(self.searchList);

					}
				});
			},
			playSearchMusic(singId) {
				this.palybool = true;
				//				console.log(singId);
				//				console.log(this.$parent);
				var self = this;
				$.ajax({
					url: 'http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.song.play',
					type: 'GET',
					dataType: 'jsonp',
					data: {
						songid: singId,
					},
					success: function(data) {
						self.$parent.$store.state.palySrc = data.bitrate.file_link;
						self.$parent.$store.state.title = data.songinfo.title;
						self.$parent.$store.state.author = data.songinfo.author;
						self.$parent.$store.state.pic = data.songinfo.pic_small;
						console.log(self.$parent.$store.state.title);
						console.log(self.$parent.$store.state.author);
						console.log(self.$parent.$store.state.pic);

					}
				})
			},
			detailPaly() {
				location.href = '#/detailplay';
			}
		}
	}
</script>

<style>

</style>