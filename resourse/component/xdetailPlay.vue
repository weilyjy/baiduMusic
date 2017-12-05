<template>
	<div class="page page-current" id="layoutSong">
	<div class="mod-song-header grid">
		<div class="mod-song-info grid">
        <section class="grid-section">
        	<div class="container info-inner" style="height: 268px;">
            <div class="row">
                <a href="#/index"><i class="col-1 iconfont icon-home" style="font-size: 2rem;"></i></a>
                <div class="col-13 header-content" style="width: 60%;">
                    <p class="title" style="font-size: 1.2rem;">{{this.$parent.$store.state.title}}</p>
                    <p class="author" style="font-size: 1rem;">{{this.$parent.$store.state.author}}</p>
                </div>
                <a href="#/searchsong"><span class="iconfont col-1 icon-search log" style="font-size: 2rem;"></span></a>
            </div>
            <div class=" frontside animated" style="margin-top: 50px;">
            <div class="album-panel">
                <img alt="" :src="this.$parent.$store.state.pic">
            </div>
            </div>
            </div>
           
            <audio :src="this.$parent.$store.state.palySrc" controls="controls" style="margin-top: 120px;" ></audio>
        </section>
         </div>
    </div>
    </div>
</template>

<script>
	
</script>

<style>
</style>