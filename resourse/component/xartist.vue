<template>
	<div class="artists-header" data-active="0-0-">
		<ul class="nav-tab row area">
			<li class="on col-2 log" data-area="0" @click="songAll(0)"><span>全部</span></li>
			<li class="log col-2" data-area="6" @click="songAll(6)"><span>华语</span></li>
			<li class="log col-2" data-area="3" @click="songAll(3)"><span>欧美</span></li>
			<li class="log col-2" data-area="7" @click="songAll(7)"><span>韩国</span></li>
			<li class="log col-2" data-area="60" @click="songAll(60)"><span>日本</span></li>
			<li class="log col-2" data-area="5" @click="songAll(5)"><span>其他</span></li>
		</ul>
		<ul class="sub-nav-tab row sex">
			<li class="on col-2 log" data-sex="0" @click="songAll(0)"><span>全部</span></li>
			<li class="col-2 log" data-sex="1" @click="songAll(1)"><span>男</span></li>
			<li class="col-2 log" data-sex="2" @click="songAll(2)"><span>女</span></li>
			<li class="col-2 log" data-sex="3" @click="songAll(3)"><span>组合</span></li>
		</ul>
		<ul class="abc-nav-tab row">
			<li class="col-6 col-fluid title" style="font-size: 1.2rem;">热门</li>
			<li class="col-6 col-fluid iconfont icon-word" style="font-size: 1.2rem;"></li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			songAll(artistType){
//					console.log(artistType);
					this.$parent.$parent.$store.state.artistType=artistType;
					var self = this;
//					this.$parent.$parent.$store.state.artistList=[];
					$.ajax({
					url:'http://tingapi.ting.baidu.com/v1/restserver/ting?from=webapp_music&method=baidu.ting.artist.getList&format=json&order=1',
					type: 'GET',
					dataType: 'jsonp',
					data: {
						limit:20,
						area:self.$parent.$parent.$store.state.artistType,
					},
					success: function(data) {
//						console.log(data.artist);
					
						self.$parent.$parent.$store.state.artistList=data.artist;
						console.log(self.$parent.$parent.$store.state.artistList);
						
					}
				})
				}
		}
	}
</script>

<style>

</style>