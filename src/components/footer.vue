<template>
	<div class="r_footer">
		<van-tabbar v-model="active" @change="onChange">
			<van-tabbar-item icon="home-o">首页</van-tabbar-item>
			<van-tabbar-item icon="search" dot>搜索</van-tabbar-item>
			<van-tabbar-item icon="friends-o" badge="5">这是</van-tabbar-item>
			<van-tabbar-item icon="setting-o" :badge='state.tar'  @click="huan" >我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	import { reactive,ref } from "vue";
	import { Toast } from 'vant';
	export default {
		name: "Footer",
		setup() {
			const active = ref(0);
			const onChange = (index) => Toast(`标签 ${index}`);
			const state = reactive({
				tar:3,
				but:false
			});
			const huan = () => {
				state.tar += 1
			};
			
			return{
				state,huan,onChange,active
			}
		}
	}
</script>

<style lang="less" scoped>
	
	
</style>
