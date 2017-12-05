<template>
	<div id="main" style="">
	<div class="layout home layout-current">
	<section class="content">
	<div class="mod-albums">
    <div class="hd log url" >
        <h2>新歌速递</h2>
        <div>更多</div>
    </div>
    
    <div class="container">
        <div class="gallery">
            <div class="scroller">
                    <div @click="playNewMusic(a.song_id) " v-for="a in newMusic" class="card url" data-url="#/album/566957098/" data-id="566957098">
                        <div class="album">
                            <img  :src="a.pic_small " alt="a.title ">
                            <span m-on="playall" class="btn-play ui-icon-play-big"></span>
                            <div class="name">{{a.title}}</div>
                            <div class="author">{{a.author}}</div>
                        </div>
                    </div>
                
            </div>
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
			return {
				newMusic:null,
				bool:false,
//				title: '',
//				author: '',
//				pic: "",
//				palySrc: ''
			}
		},
		methods:{
			playNewMusic(singId) {
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
		},
		mounted(){
//			console.log(this.$parent.$store._mutations.playMusic);
			var self=this;
			$.ajax({
				url: 'http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=1&size=3&offset=0',
				type: 'GET',
				dataType:'jsonp',
				success: function(data) {
					self.newMusic=data.song_list;
//					console.log(data.song_list);
//					console.log(self.newMusic);
					
				}

			})

		}
		
	}
</script>

<style>
	a{
		text-decoration: none;
	}
</style>