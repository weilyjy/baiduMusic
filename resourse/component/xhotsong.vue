<template>
	<div class="songlists-hot">
		<h2 style="font-size: 1.2rem;">热门歌单</h2>
		<div class="row songlists-ul" >
			<div @click="playHotsong(a.songIds[0])" v-for="a in hotsongList" class="col-6 info url log" data-url="#/songlist/515610256" data-log="{&quot;page&quot;:&quot;songlist&quot;,&quot;pos&quot;:&quot;songlist_panel&quot;,&quot;sub&quot;:&quot;songlist_detail&quot;}">
				<div class="poster">
					<img :src="a.pic_300" :alt="a.title">
					<div class="play-num">
						<i class="icon-listen"></i>{{a.listenum}}
					</div>
					<span m-on="playall" class="btn-play iconfont icon-triangle" data-sid="515610256"></span>
				</div>
				<div class="text-wrap">
					<div class="txt">{{a.tag}}</div>
					<div class="title" style="font-size: 0.7rem;">{{a.title}}</div>
				</div>
			</div>
		</div>
		<div @click="loadMore" class="load-more need-active" style="margin-bottom: 70px;">查看更多...</div>

		<!-- <div class="songlist-more need-active"><span class="icon-phone"></span>去客户端试听更多歌单 >></div> -->
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
	export default {
		data(){
			return {
				hotsongList:[],	
				bool:false
			}
		},
		mounted(){
			this.loadMore();
		},
		methods:{
			
			loadMore(){
				var self = this;
				console.log(this.$parent.$parent.$store.state.page)
				this.$parent.$parent.$store.state.page++;
				var page_now=this.$parent.$parent.$store.state.page;
					$.ajax({
						url:'http://musicapi.qianqian.com/v1/restserver/ting?from=webapp_music&method=baidu.ting.diy.gedan&format=json&callback=diy_gedan&page_size=20&query=全部&s_protocol=&_=1512269515730',
						type:'GET',
						dataType:'jsonp',
						data:{
							page_no:page_now,
						},
						success:function(data){
//							console.log(data.content);
							self.hotsongList=self.hotsongList.concat(data.content)
							console.log(self.hotsongList)
						}
					})
			},
			playHotsong(singId) {
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