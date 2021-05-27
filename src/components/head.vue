<template>
	<div class="r_head">
		<form action="/" class="r_form">
			<van-icon name="wap-nav" class="r_icon"/>
		
			<van-search
				v-model="value"
				placeholder="请输入搜索关键词"
				background="rgb(200,37,25)"
				input-align="center"
				@search="onSearch"
			/>
			<p class="r_form_p">登录</p>
		</form>
		<van-pull-refresh v-model="state.loading" @refresh="onRefresh">
			<!-- <p>刷新次数: {{ state.count }}</p> -->
			<van-swipe :autoplay="3000" lazy-render>
				<van-swipe-item v-for="image in images" :key="image">
					<img :src="image" class="rbannar_img" />
				</van-swipe-item>
			</van-swipe>
		</van-pull-refresh>
	</div>
</template>

<script>
	import { reactive,ref } from 'vue'
	import { Toast } from 'vant';
	export default {
		name: "Head",
		setup() {
			const state = reactive({
				count: 0,
				loading: false,
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
			
			const images = [
				'https://img.yzcdn.cn/vant/apple-1.jpg',
				'https://img.yzcdn.cn/vant/apple-2.jpg',
			];
			return {
				state,
				onRefresh,
				images,
				value,
				onSearch,
	
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
		height: 180px;
		background-color: rgb(200,37,25);
		border-bottom-left-radius: 65px;
		border-bottom-right-radius: 65px;
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
			}
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
	}
	
</style>
