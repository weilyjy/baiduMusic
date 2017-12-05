<template>
	<ul class="list-category">
		<li @click="showListcate(1)" class="cate-item  url log post-love"  data-link="" data-url="#songs/love/" data-title="情歌对唱榜">
			<div class="item-content need-active">
				<div class="cate-post">
					<img  :src="newListcate.billboard.pic_s192" :alt="newListcate.billboard.name">
					<span class="btn-play ui-icon-play-big" data-list="261704948,258475780,259727051,265046969" data-type="23" ></span>
				</div>
				<ul class="cate-hot">
					<li v-for="a in newListcate.song_list">
						<span class="col-rank rank-1" :title="a.rank">{{a.rank}}</span>
						<span class="col-title">{{a.title}}</span>
					</li>
				</ul>
			</div>
		</li>
		<li @click="showListcate(2)" class="cate-item  url log post-love"  data-link="" data-url="#songs/love/" data-title="情歌对唱榜">
			<div class="item-content need-active">
				<div class="cate-post">
					<img  :src="hotListcate.billboard.pic_s192" :alt="hotListcate.billboard.name">
					<span class="btn-play ui-icon-play-big" data-list="261704948,258475780,259727051,265046969" data-type="23" ></span>
				</div>
				<ul class="cate-hot">
					<li v-for="a in hotListcate.song_list">
						<span class="col-rank rank-1" :title="a.rank">{{a.rank}}</span>
						<span class="col-title">{{a.title}}</span>
					</li>
				</ul>
			</div>
		</li>
		<li @click="showListcate(11)" class="cate-item  url log post-love"  data-link="" data-url="#songs/love/" data-title="情歌对唱榜">
			<div class="item-content need-active">
				<div class="cate-post">
					<img  :src="rockListcate.billboard.pic_s192" :alt="rockListcate.billboard.name">
					<span class="btn-play ui-icon-play-big" data-list="261704948,258475780,259727051,265046969" data-type="23" ></span>
				</div>
				<ul class="cate-hot">
					<li v-for="a in rockListcate.song_list">
						<span class="col-rank rank-1" :title="a.rank">{{a.rank}}</span>
						<span class="col-title">{{a.title}}</span>
					</li>
				</ul>
			</div>
		</li>
		<li @click="showListcate(12)" class="cate-item  url log post-love"  data-link="" data-url="#songs/love/" data-title="情歌对唱榜">
			<div class="item-content need-active">
				<div class="cate-post" style="background: url(../images/logomusic.jpg) no-repeat;">
					<img  :src="jazzListcate.billboard.pic_s192" :alt="jazzListcate.billboard.name">
					<span class="btn-play ui-icon-play-big" data-list="261704948,258475780,259727051,265046969" data-type="23" ></span>
				</div>
				<ul class="cate-hot">
					<li v-for="a in jazzListcate.song_list">
						<span class="col-rank rank-1" :title="a.rank">{{a.rank}}</span>
						<span class="col-title">{{a.title}}</span>
					</li>
				</ul>
			</div>
		</li>
		<li @click="showListcate(16)" class="cate-item  url log post-love"  data-link="" data-url="#songs/love/" data-title="情歌对唱榜">
			<div class="item-content need-active">
				<div class="cate-post" >
					<img  :src="popListcate.billboard.pic_s192" :alt="popListcate.billboard.name">
					<span class="btn-play ui-icon-play-big" data-list="261704948,258475780,259727051,265046969" data-type="23" ></span>
				</div>
				<ul class="cate-hot">
					<li v-for="a in popListcate.song_list">
						<span class="col-rank rank-1" :title="a.rank">{{a.rank}}</span>
						<span class="col-title">{{a.title}}</span>
					</li>
				</ul>
			</div>
		</li>
		<li @click="showListcate(21)" class="cate-item  url log post-love"  data-link="" data-url="#songs/love/" data-title="情歌对唱榜">
			<div class="item-content need-active">
				<div class="cate-post">
					<img  :src="EAListcate.billboard.pic_s192" :alt="EAListcate.billboard.name">
					<span class="btn-play ui-icon-play-big" data-list="261704948,258475780,259727051,265046969" data-type="23" ></span>
				</div>
				<ul class="cate-hot">
					<li v-for="a in EAListcate.song_list">
						<span class="col-rank rank-1" :title="a.rank">{{a.rank}}</span>
						<span class="col-title">{{a.title}}</span>
					</li>
				</ul>
			</div>
		</li>
		<li @click="showListcate(22)" class="cate-item  url log post-love"  data-link="" data-url="#songs/love/" data-title="情歌对唱榜">
			<div class="item-content need-active">
				<div class="cate-post">
					<img  :src="classListcate.billboard.pic_s192" :alt="classListcate.billboard.name">
					<span class="btn-play ui-icon-play-big" data-list="261704948,258475780,259727051,265046969" data-type="23" ></span>
				</div>
				<ul class="cate-hot">
					<li v-for="a in classListcate.song_list">
						<span class="col-rank rank-1" :title="a.rank">{{a.rank}}</span>
						<span class="col-title">{{a.title}}</span>
					</li>
				</ul>
			</div>
		</li>
		<li @click="showListcate(23)" class="cate-item  url log post-love"  data-link="" data-url="#songs/love/" data-title="情歌对唱榜">
			<div class="item-content need-active">
				<div class="cate-post">
					<img  :src="loveListcate.billboard.pic_s192" :alt="loveListcate.billboard.name">
					<span class="btn-play ui-icon-play-big" data-list="261704948,258475780,259727051,265046969" data-type="23" ></span>
				</div>
				<ul class="cate-hot">
					<li v-for="a in loveListcate.song_list">
						<span class="col-rank rank-1" :title="a.rank">{{a.rank}}</span>
						<span class="col-title">{{a.title}}</span>
					</li>
				</ul>
			</div>
		</li>
		<li @click="showListcate(24)" class="cate-item  url log post-love"  data-link="" data-url="#songs/love/" data-title="情歌对唱榜">
			<div class="item-content need-active">
				<div class="cate-post">
					<img  :src="moveListcate.billboard.pic_s192" :alt="moveListcate.billboard.name">
					<span class="btn-play ui-icon-play-big" data-list="261704948,258475780,259727051,265046969" data-type="23" ></span>
				</div>
				<ul class="cate-hot">
					<li v-for="a in moveListcate.song_list">
						<span class="col-rank rank-1" :title="a.rank">{{a.rank}}</span>
						<span class="col-title">{{a.title}}</span>
					</li>
				</ul>
			</div>
		</li>
		<li @click="showListcate(25)" class="cate-item  url log post-love"  data-link="" data-url="#songs/love/" data-title="情歌对唱榜">
			<div class="item-content need-active">
				<div class="cate-post">
					<img  :src="netListcate.billboard.pic_s192" :alt="netListcate.billboard.name">
					<span class="btn-play ui-icon-play-big" data-list="261704948,258475780,259727051,265046969" data-type="23" ></span>
				</div>
				<ul class="cate-hot">
					<li v-for="a in netListcate.song_list">
						<span class="col-rank rank-1" :title="a.rank">{{a.rank}}</span>
						<span class="col-title">{{a.title}}</span>
					</li>
				</ul>
			</div>
		</li>
	
	</ul>
</template>
<!--type = 1-新歌榜,2-热歌榜,11-摇滚榜,12-爵士,16-流行,21-欧美金曲榜,22-经典老歌榜,23-情歌对唱榜,24-影视金曲榜,25-网络歌曲榜-->
<script>
	export default{
		data(){
			return {
				newListcate:[],
				hotListcate:[],
				rockListcate:[],
				jazzListcate:[],
				popListcate:[],
				EAListcate:[],
				classListcate:[],
				loveListcate:[],
				moveListcate:[],
				netListcate:[],
			}
		},
		mounted(){
			this.getListcate(1);
			this.getListcate(2);
			this.getListcate(11);
			this.getListcate(12);
			this.getListcate(16);
			this.getListcate(21);
			this.getListcate(22);
			this.getListcate(23,this.loveListcate);
			this.getListcate(24,this.moveListcate);
			this.getListcate(25,this.netListcate);
			
		},
		methods:{
			showListcate(type){
				var self=this;
				this.$parent.$parent.$store.state.type=type;
				console.log(this.$parent.$parent.$store.state.type);
				location.href='#/songlist';
			},
			getListcate(type){
				var self = this;
				$.ajax({
								url:'http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.billboard.billList&offset=0',
								type:'GET',
								dataType:'jsonp',
								data:{
									type:type,
									size:3,
								},
								success:function(data){
									switch(type){
										case 1:
  											self.newListcate=data;
  											console.log(self.newListcate);
  											break;
  										case 2:
  											self.hotListcate=data;
  											console.log(self.hotListcate);
  											break;
  										case 11:
  											self.rockListcate=data;
  											console.log(self.rockListcate);
  											break;
  										case 12:
  											self.jazzListcate=data;
  											console.log(self.jazzListcate);
  											break;
  										case 16:
  											self.popListcate=data;
  											console.log(self.popListcate);
  											break;
  										case 21:
  											self.EAListcate=data;
  											console.log(self.EAListcate);
  											break;
  										case 22:
  											self.classListcate=data;
  											console.log(self.classListcate);
  											break;	
  										case 23:
  											self.loveListcate=data;
  											console.log(self.loveListcate);
  											break;	
  										case 24:
  											self.moveListcate=data;
  											console.log(self.moveListcate);
  											break;	
  										case 25:
  											self.netListcate=data;
  											console.log(self.netListcate);
  											break;		
									}
								}
							})
				
			}
		}
	}
</script>

<style>
	img{
		background: url(../images/logomusic.jpg) no-repeat;
	}
</style>