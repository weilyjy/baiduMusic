<template>
	<div>
		<xheader></xheader>
		<xnewmusic></xnewmusic>
		<xmusiclist></xmusiclist>
	</div>	
</template>

<script>
import xheader from '../component/xheader.vue';
import xmusiclist from '../component/xmusiclist.vue';
import xnewmusic from '../component/xnewmusic.vue';
export default {
	
		components:{
			xheader,
			xnewmusic,
			xmusiclist,
		},
	  
}
</script>

<style>
</style>