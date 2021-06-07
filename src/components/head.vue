<template>
	<van-nav-bar 
		:title="titles" 
		left-text="返回" 
		left-arrow
		@click-left="onClickLeft"
		@click-right="onClickRight"
			>
		<template #right>
			<van-icon name="search" size="24" />
		</template>
	</van-nav-bar>
	
</template>

<script>
	import { ref } from "vue";
	import {	useRouter	} from 'vue-router'
	import { Toast } from 'vant';
	export default {
		setup() {
			const router = useRouter();
			const onClickLeft = () => {
				Toast('返回');
				router.back();
			};
			const onClickRight = () =>{
				titles.value = "标题1";
				Toast('搜索')
			};
			const njd = () =>{
				console.log(this.$route.name);
			}
			let titles = ref("这是标题");
			
			return {
				onClickLeft,
				onClickRight,
				titles,
				njd
			};
		},
	};
</script>

<style lang="less" scoped>
	
	
	
</style>
