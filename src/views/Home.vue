<template>
	<van-pull-refresh v-model="state.loading" @refresh="onRefresh">
		
		<div class="r_head">
			<div class="r_head_background">
				
			</div>
			<van-sticky>
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
			</van-sticky>
				<!-- <p>刷新次数: {{ state.count }}</p> -->
				<van-swipe :autoplay="3000" lazy-render indicator-color="red" class="r_head_swipe">
					<van-swipe-item v-for="image in images" :key="image">
						<img :src="image" class="rbannar_img" />
					</van-swipe-item>
				</van-swipe>
			
			
			<div class="r_grid">
				<van-swipe class="my-swipe"  indicator-color="red">
					<van-swipe-item>
						<van-grid :column-num="4" >
							<van-grid-item v-for="lists in state.frid_item" :key="lists.id" :icon="lists.icon" :text="lists.text" :to="lists.to" />
						</van-grid>
					</van-swipe-item>
					<van-swipe-item>
						<van-grid :column-num="4" >
							<van-grid-item v-for="lists in state.frid_items" :key="lists.id" :icon="lists.icon" :text="lists.text" :to="lists.to" />
						</van-grid>
					</van-swipe-item>
				</van-swipe>
			</div>
			<div class="r_miaosha warp">
				<div class="r_miaosha_one">
					<p>{{state.miaosha}}</p>
					<p class="red">{{state.mslist.length + state.frid_item.length}}</p>
					<van-count-down :time="state.time" :format="state.times">
						<template #default="timeData">
							<span class="block">{{ timeData.hours }}</span>
							<span class="colon">:</span>
							<span class="block">{{ timeData.minutes }}</span>
							<span class="colon">:</span>
							<span class="block">{{ timeData.seconds }}</span>
						</template>
					</van-count-down>
					<p>查看更多></p>
				</div>
				<van-swipe >
					<van-swipe-item>
						<div class="r_miaosha_two">
							<ul>
								<li v-for="list in state.mslist" :key="list.text">
									<img :src="list.img" class="r_miaosha_two_img">
									<p>${{list.jg}}</p>
									<del>${{list.yj}}</del>
								</li>
							</ul>
						</div>
					</van-swipe-item>
					<van-swipe-item>
						<div class="r_miaosha_two">
							<ul>
								<li v-for="list in state.mslist" :key="list.text">
									<img :src="list.img" class="r_miaosha_two_img">
									<p>${{list.jg}}</p>
									<del>${{list.yj}}</del>
								</li>
							</ul>
						</div>
					</van-swipe-item>
				</van-swipe>
				
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
				time:1*60*60*1000,
				miaosha:'京东秒杀',
				times:'HH:mm:ss',
				frid_item:[
					{id:1, icon:'home-o',text:'导购',to:'/'},
					{id:2,icon:'search',text:'生活',to:'/logo'},
					{id:3,icon:'service-o',text:'数码',to:'/'},
					{id:4,icon:'fire-o',text:'生鲜',to:'/'},
					{id:5,icon:'point-gift-o',text:'视频',to:'/'},
					{id:6,icon:'browsing-history',text:'虚拟',to:'/'},
					{id:7,icon:'bag-o',text:'衣帽',to:'/'},
					{id:8,icon:'cart-circle-o',text:'裤袜',to:'/'},
				],
				frid_items:[
					{id:11, icon:'home-o',text:'导购',to:'/'},
					{id:21,icon:'search',text:'生活',to:'/logo'},
					{id:31,icon:'service-o',text:'数码',to:'/'},
					{id:41,icon:'fire-o',text:'生鲜',to:'/'},
					{id:51,icon:'point-gift-o',text:'视频',to:'/'},
					{id:61,icon:'browsing-history',text:'虚拟',to:'/'},
					{id:71,icon:'bag-o',text:'衣帽',to:'/'},
					{id:81,icon:'cart-circle-o',text:'裤袜',to:'/'},
				],
				mslist:[
					{text:'皮鞋',img:'https://img11.360buyimg.com/n7/s150x150_jfs/t1/123612/34/15624/146961/60a24e18E43f87b7f/c4ee66f96c35c3bc.jpg.dpg',jg:180,yj:230},
					{text:'水果',img:'https://img11.360buyimg.com/n7/s150x150_jfs/t1/175821/28/2415/123056/606d4172Ea5297395/2985a9af0d8b49ea.jpg.dpg',jg:25,yj:30},
					{text:'家具',img:'https://img11.360buyimg.com/n7/s150x150_jfs/t1/174230/9/11269/167181/60ab53f4Efc638d10/61f480e44b46b4fc.jpg.dpg',jg:855,yj:930},
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
			position: absolute;
			z-index: -5;
			background-color: rgb(200,37,25);
			border-bottom-left-radius: 65px;
			border-bottom-right-radius: 65px;
		}
		.r_form{
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			background-color: rgb(200,37,25);
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
				/deep/.van-search__content{
					border-radius: 25px;
				}
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
		
		.warp{
			width: 92%;
			margin: 0 auto;
		}
		/deep/.van-grid-item__content{
			background-color: rgb(246,246,246);
		}
		/deep/.van-swipe__indicator{
			background-color:rgb(204,204,204);
			opacity:1
		}
		.colon {
				display: inline-block;
				margin: 0 4px;
				color: #ee0a24;
			}
		.block {
			display: inline-block;
			width: 22px;
			color: #fff;
			font-size: 12px;
			text-align: center;
			background-color: #ee0a24;
		}
		.r_miaosha{
			display: flex;
			background: #fff;
			border-radius: 10px;
			flex-direction: column;
			.r_miaosha_one{
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
			}
			.r_miaosha_two{
				width: 100%;
				ul{
					display: flex;
					justify-content: space-evenly;
					align-items: center;
					li{
						flex: 1;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						p{
							color: red;
						}
						.r_miaosha_two_img{
							max-width: 100%;
							height: auto;
							display: block;
						}
					}
				}
			}
		}
		.red{
			color: red;
		}
	}
	
</style>
