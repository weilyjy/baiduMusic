<template>
	<div>
		<div class="artist-header" data-name="薛之谦" data-id="2517">
			<div class="header-bg" data-link="http://musicdata.baidu.com/data2/pic/246669444/246669444.jpg@s_0,w_240" style="background:url(http://musicdata.baidu.com/data2/pic/246669444/246669444.jpg@s_0,w_240) no-repeat center;background-size: cover;"></div>
			<div class="header-mask"></div>
			<div class="artist-header-content">
				<div class="pic">
					<img :alt="this.$parent.$store.state.artist_name" :src="this.$parent.$store.state.artist_bg">
				</div>
				<h2>{{this.$parent.$store.state.artist_name}}</h2>
				<div class="artist-header-operate" data-artistid="88">
					<span class="iconfont icon-favor "></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>

</style>