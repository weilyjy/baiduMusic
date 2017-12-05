<template>
	<div>

		<xheader></xheader>
		<div id="main" style="">
			<div class="layout songlist">
				<div class="layout songlists layout-current" data-title="">
					<section class="content">
						<xhotsong></xhotsong>
					</section>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import xheader from '../component/xheader.vue';
//	import xsongsort from '../component/xsongsort.vue';
	import xhotsong from '../component/xhotsong.vue';

	export default {

		components: {
			xheader,
//			xsongsort,
			xhotsong,

		},

	}
</script>

<style>

</style>