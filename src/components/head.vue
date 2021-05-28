<template>
	<van-pull-refresh v-model="state.loading" @refresh="onRefresh">
		
		<div class="r_head">
			<div class="r_head_background">
				
			</div>
			<form action="/" class="r_form">
				
				<van-icon name="wap-nav" class="r_icon"/>
				<van-search
					v-model="value"
					placeholder="请输入搜索关键词"
					background="rgb(200,37,25)"
					input-align="center"
					@search="onSearch"
				/>
				<p class="r_form_p" @click="logo()">登录</p>
			</form>
			
				<!-- <p>刷新次数: {{ state.count }}</p> -->
				<van-swipe :autoplay="3000" lazy-render class="r_head_swipe">
					<van-swipe-item v-for="image in images" :key="image">
						<img :src="image" class="rbannar_img" />
					</van-swipe-item>
				</van-swipe>
			
			<div class="r_grid">
				<van-grid :column-num="4" >
					<van-grid-item v-for="lists in state.frid_item" :key="lists.id" :icon="lists.icon" :text="lists.text" :to="lists.to" />
				</van-grid>
			</div>
		</div>
	</van-pull-refresh>
</template>

<script>
	import { reactive,ref } from 'vue'
	import {	useRouter	} from 'vue-router'
	import { Toast } from 'vant';
	export default {
		name: "Head",
		setup() {
			const state = reactive({
				count: 0,
				loading: false,
				frid_item:[
					{id:1, icon:'home-o',text:'导购',to:'/'},
					{id:2,icon:'search',text:'生活',to:'/'},
					{id:3,icon:'service-o',text:'数码',to:'/'},
					{id:4,icon:'fire-o',text:'生鲜',to:'/'},
					{id:5,icon:'point-gift-o',text:'视频',to:'/'},
					{id:6,icon:'browsing-history',text:'虚拟',to:'/'},
					{id:7,icon:'bag-o',text:'衣帽',to:'/'},
					{id:8,icon:'cart-circle-o',text:'裤袜',to:'/'},
				]
			});
			const onRefresh = () => {
				setTimeout(() => {
					Toast('刷新成功');
					state.loading = false;
					state.count++;
				}, 1000);
			};
			const value = ref('');
			const onSearch = (val) => Toast(val);
			const router = useRouter();
			const logo = ()=>{
				Toast.loading({
					message: '即将返回登录...',
					forbidClick: true,
				});
				setTimeout(
					function(){
						router.push("/logo");
					},3000
				) 
				
			}
			
			const images = [
				'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/192881/8/4482/163527/60a9d00dEadc000a0/4812ad3b22b791a7.jpg!cr_1125x449_0_166!q70.jpg.dpg',
				'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/168280/6/17778/218624/6073348bEfd2d9f99/34faf565e67bef87.jpg!cr_1125x449_0_166!q70.jpg.dpg',
			];
			return {
				state,
				onRefresh,
				images,
				value,
				onSearch,
				logo
			};
		},
		
	}
</script>

<style lang="less" scoped>
	
	.r_head{
		width: 100%;
		position: inherit;
		top: 0%;
		left: 0%;
		z-index: 10;
		height: auto;
		
		.r_head_background{
			height: 150px;
			width: 100%;
			position: fixed;
			z-index: -5;
			background-color: rgb(200,37,25);
			border-bottom-left-radius: 65px;
			border-bottom-right-radius: 65px;
		}
		.r_form{
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			.r_icon{
				color: yellowgreen;
				font-size: 32px;
			}
			.van-search{
				width: 250px;
				background: #fff;
				border-radius: 25px;
				padding: 3px 12px;
			}
		}
		.r_head_swipe{
			width: 92%;
			margin: 10px auto;
			border-radius: 8px;
		}
		h3{
			color: darkred;
			font-size: 20px;
		}
		.rbannar_img{
			max-width: 100%;
			display: block;
			height: 180px;
			margin:0 auto;
		}
		.r_form_p{
			color: #fff;
		}
		.r_grid{
			display: block;
			
		}
	}
	
</style>
