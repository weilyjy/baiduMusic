<template>
	<div class="artists-content">
		<ul class="list" id="0-0-">
			<li @click="artistDetail(a.ting_uid,a.avatar_big,a.name)" v-for="a in this.$parent.$parent.$store.state.artistList" class="artist left url log" data-url="#/artist/2517/">
				<div class="pic">
					<img :alt="a.name" :src="a.avatar_small" :org_src="a.avatar_small">
				</div>
				<div class="info">
					<div>{{a.name}}</div>
				</div>
			</li>
			<li class="load-more need-active" @click="loadMore" style="margin-bottom: 70px;">查看更多...</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				artistList:[],
				limit:0,
			}
		},
		mounted(){
			this.loadMore();
		},
		methods:{
			loadMore(){
				this.limit+=20;
				this.artistList=[];
				this.$parent.$parent.$store.state.artistList=[];
				var self=this;
				$.ajax({
					url:'http://tingapi.ting.baidu.com/v1/restserver/ting?from=webapp_music&method=baidu.ting.artist.getList&format=json&order=1',
					type: 'GET',
					dataType: 'jsonp',
					data: {
						limit:self.limit,
						area:self.$parent.$parent.$store.state.artistType,
					},
					success: function(data) {
//						console.log(data.artist);
						self.$parent.$parent.$store.state.artistList=self.$parent.$parent.$store.state.artistList.concat(data.artist);
						
						console.log(self.$parent.$parent.$store.state.artistList);	
					}
				})
			/*if(this.artistList.length>=){
				
			}*/
		},
		artistDetail(ting_uid,artistBg,artistName){
			this.$parent.$store.state.artist_id=ting_uid;
			this.$parent.$store.state.artist_bg=artistBg;
			this.$parent.$store.state.artist_name=artistName;
			location.href='#/artistsong';
		}
	}
}
</script>

<style>

</style>