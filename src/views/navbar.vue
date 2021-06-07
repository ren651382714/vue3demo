<template>
	<van-sidebar v-model="active" @change="onChange" >
		<van-sidebar-item v-for="lists in tabbarlist.title" :key="lists.id" :title="lists.text"/>
		
	</van-sidebar>
</template>

<script>
	import { ref,reactive } from "vue";
	import { Toast } from 'vant';
	export default {
		name:'Navbar',
		setup() {
			const active = ref(0);
			const onChange = (index) => Toast(`标签名 ${index + 1}`);
			const tabbarlist = reactive({
				title:[
					{id:1,text:'美食'},
					{id:2,text:'服装'},
					{id:3,text:'日常'},
					{id:4,text:'用品'},
					{id:5,text:'打车'},
					{id:6,text:'数码'},
					{id:7,text:'手机'},
					{id:8,text:'科技'},
					{id:9,text:'户外用品'},
				]
			})
			return {
				active,
				onChange,
				tabbarlist
			};
		},
	};
</script>

<style>
</style>
