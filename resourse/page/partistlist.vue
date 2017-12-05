<template>
	<div>
	<xheader></xheader>
		<div class="layout artists layout-current" data-title=""   style=" margin-top: 44px;" >
			<section class="content">
				<xartist></xartist>
				<xartistlist></xartistlist>
			</section>
		</div>
	</div>
</template>

<script>
import xheader from '../component/xheader.vue';
import xartist from '../component/xartist.vue';
import xartistlist from '../component/xartistlist.vue';

export default {
		components:{
			xheader,
			xartist,
			xartistlist,
		},
	  
}
</script>

<style>
</style>