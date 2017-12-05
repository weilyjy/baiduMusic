<template>
	<div id="main">
		<div class="layout artist layout-current" data-title="薛之谦">
		<section class="content">
			<xheader></xheader>
			<xartistsong></xartistsong>
			<xartistsongList></xartistsongList>
		</section>
		</div>
	</div>	
</template>

<script>
import xheader from '../component/xheader.vue';
import xartistsong from '../component/xartistsong.vue';
import xartistsongList from '../component/xartistsongList.vue';

export default {
	
		components:{
			xheader,
			xartistsong,
			xartistsongList,
			
		},
	  
}
</script>

<style>
</style>