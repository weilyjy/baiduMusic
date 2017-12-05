import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import $ from "jquery";
window.$ = $;
//使用vuex
Vue.use(Vuex);
//使用VueRouter
Vue.use(VueRouter);
window.bus = new Vue();
import pindex  from  "./resourse/page/pindex.vue";
import psonglist  from  "./resourse/page/psonglist.vue";
import psongsort  from  "./resourse/page/psongsort.vue";
import partistlist  from  "./resourse/page/partistlist.vue";
import plistcate  from  "./resourse/page/plistcate.vue";
import partistsong  from  "./resourse/page/partistsong.vue";
import psearchSong  from  "./resourse/page/psearchSong.vue";
import pdetailplay  from  "./resourse/page/pdetailplay.vue";

let router = new VueRouter({
	routes:[
	{	path:'/',
		component:pindex,
		redirect: '/index'
	},
	{
		path:"/index",
		component:pindex,
	},
	{
		path:"/songlist",
		component:psonglist,
	},{
		path:"/songsort",
		component:psongsort,
	},{
		path:"/artistlist",
		component:partistlist,
	},{
		path:"/listcate",
		component:plistcate,
	},{
		path:"/artistsong",
		component:partistsong,
	},{
		path:"/searchsong",
		component:psearchSong,
	},{
		path:"/detailplay",
		component:pdetailplay,
	}]
});
let store = new Vuex.Store({
	state:{
		bool:false,
		type:'2',
		songList:null,
		page:0,
		num:0,
		artistType:0,
		sex:0,
		artistList:[],
		palySrc:'',
		title:'',
		author:'',
		pic:'',
		artist_id:'',
		artist_bg:'',
		artist_name:'',
		
	},
});
let index=new Vue({
	el:'#app',
	router,
	store,
	data:{
		name:'music',
		palySrc:'',
		title:'',
		author:'',
		pic:'',
	},
	template:`
	<div>
		<router-view></router-view>
	</div>	
	`,
	
	components:{
		pindex,
		psonglist,
		psongsort,
		plistcate,
		partistsong,
		psearchSong,
		pdetailplay,
	},
})
