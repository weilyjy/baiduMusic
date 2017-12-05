<template>
	<div class="artist-content" >
		<ul class="list">
			<li @click="playArtMusic(a.song_id)"  v-for="a in artistSongList" class="song log song-256003106 normal url" data-sid="256003106" data-url="/song/256003106/">
				<div class="left">
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
			<li class="load-more need-active" @click="loadeMore" style="margin-bottom: 70px;">查看更多...</li>
		</ul>
		    <div v-show="bool">
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
	export default{
		data(){
			return {
				artistSongList:[],
				limits:0,
				bool:false,
				id:'',
			}
		},
		mounted(){
			this.loadeMore();
		},
		methods:{
			loadeMore(){
				var self = this;
				this.limits+=20;
				this.artistSongList=[];
					$.ajax({
						url:'http://musicapi.qianqian.com/v1/restserver/ting?from=webapp_music&method=baidu.ting.artist.getSongList&format=jsonp&callback=artist_getSongList&order=2',
						type:'GET',
						dataType:'jsonp',
						data:{
							tinguid:self.$parent.$parent.$store.state.artist_id,
							limits:self.limits
						},
						success:function(data){
//							console.log(data.content);
							self.artistSongList=self.artistSongList.concat(data.songlist)
							console.log(self.artistSongList)
						}
					})
			},
			playArtMusic(singId) {
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
			detailPaly(){
				location.href='#/detailplay';
			}
		}
	}
</script>

<style>

</style>