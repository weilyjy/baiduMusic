<template>
	<div id="main" style="">
	<div class="layout home layout-current">
	<section class="content">
	<div class="mod-lists ">
            <div class="log url hd">
                <h2>音乐榜单</h2>
                <div>更多</div>
            </div>
            <div class="bars">
                <div :class="hotbool?'bar on':'bar'" @click="hotdown">热歌榜<i></i><span class="gap-line"> </span></div>
                <div :class="newbool?'bar on':'bar'" @click="newdown">新歌榜<i></i><span class="gap-line"> </span></div>
                <div :class="rockbool?'bar on':'bar'" @click="rockdown">摇滚榜<i></i></div>
            </div>
            <div class="board panels">
                <div class="panel hotsongs on" data-key="listcate_hotsong" >
                    <ul class="list">
				       <li @click="playBangMusic(a.song_id)" v-for="a in songList" class="song url  song-542369506 normal" data-sid="542369506" data-url="/song/542369506">
					        <div class="poster">
					            <img  :src="a.pic_small" :alt="a.title">
					            <i>0{{a.rank}}</i>
					        </div>
				            <div class="icon-trend icon-trend-zero"></div>
							<span :class="id==a.song_id?'icon-play-state':''" :id="a.song_id"></span>
					         <div class="info">
					                <div class="name">{{a.title }}<span class="icon-q icon-sq"></span></div>
					                <div class="author">{{a.author}}</div>
					        </div>
				        	<div class="download iconfont icon-download need-active"></div>
				    	</li>
					</ul>
                </div>
                <div class="more-songs url" data-url="#/songs/hot/" style="margin-bottom: 70px;">
                <a   @click="showSongList">查看该榜单&gt;</a>
                </div>
            </div>
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
			return{
				bool:false,
				songList:null,
				type:'2',
				hotbool:true,
				newbool:false,
				rockbool:false,
				id:'',
				getSongList(self,num){
					$.ajax({
								url:'http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.billboard.billList&offset=0',
								type:'GET',
								dataType:'jsonp',
								data:{
									type:self.type,
									size:num,
								},
								success:function(data){
//									console.log(data.song_list);
									self.songList=data.song_list;
//									console.log(self.songList);
								}
							})
					
				}
			}
		},
		mounted(){
			var self=this;
			this.getSongList(self,5)
		},
		methods:{
			hotdown(){
				this.hotbool=true;
				this.newbool=false;
				this.rockbool=false;
				this.type='2';
				console.log(this.type);
				var self=this;
				this.getSongList(self,5);
				this.size='20';
			},
			newdown(){
				this.newbool=true;
				this.hotbool=false;
				this.rockbool=false;
				this.type='1';
				var self=this;
				console.log(this.type);
				this.getSongList(self,5);
				this.size='20';
			},
			rockdown(){
				this.rockbool=true;
				this.hotbool=false;
				this.newbool=false;
				this.type='11';
				console.log(this.type);
				var self=this;
				this.getSongList(self,5);
				this.size='20';
			},
			showSongList(){
				var self=this;
//				this.getSongList(self,20);
//				this.$parent.$store.state.songList=this.songList;
				this.$parent.$store.state.type=this.type;
				console.log(this.type);
				console.log(this.$parent.$store.state.type);
//				bus.$emit('songlist',this.songList);
				location.href='#/songlist';
			},
			playBangMusic(singId) {
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

<style></style>