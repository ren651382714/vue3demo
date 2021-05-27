<template>
	<div class="r_logo">
		<h1>{{ state.title }}</h1>
		<van-form @submit="onSubmit" class="r_form">
			<van-field
				class="r_input"
				v-model="state.username"
				name="用户名"
				label="用户名"
				placeholder="用户名"
				:rules="[{ required: true, message: '请填写用户名' }]"
			/>
			<van-field
				class="r_input"
				v-model="state.password"
				type="password"
				name="密码"
				label="密码"
				placeholder="密码"
				:rules="[{ required: true, message: '请填写密码' }]"
			/>
			<div class="r_sign_but" @click="huan()">
				<van-button loading type="primary" v-if="state.but" loading-type="spinner" class="border_ra"  />
				<van-button round block size="large" v-if="!state.but" type="primary" native-type="submit" class="r_button" >
					提交
				</van-button>
			</div>
		</van-form>
	</div>
</template>

<script>
	import { reactive } from "vue";
	export default {
		name: 'Logo',
		setup() {
			const state = reactive({
				title:'welcome back',
				username:'',
				password:'',
				but:false
			});
			const huan = () => {
				state.but = !state.but
			};
			
			return{
				state,huan
			}
		}
	}
</script>

<style lang="less" scoped>
	.r_logo{
		background: url(../assets/dengl.jpg) no-repeat;
		position:fixed;
		top: 0;
		left: 0;
		width:100%;
		height:100%;
		-webkit-filter: contrast(75%); 
		filter: contrast(75%);
		z-index:-10;
		zoom: 1;
		display: flex;
		justify-content: center;
		background-color: #fff;
		background-size: cover;
		-webkit-background-size: cover;
		-o-background-size: cover;
		background-position: center;
		h1{
			color:orange;
			font-size: 38px;
			position: fixed;
			top: 18%;
			width: 100%;
			text-shadow: 5px 5px 5px #000;
			font-family: system-ui;
		}
		.r_form{
			position: fixed;
			top:46%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.r_input{
				background-color:inherit;
			}
			.r_sign_but{
				width: 250px;
				position: fixed;
				bottom: 20%;
			}
		}
	}
	/deep/.van-field__label{
		color: blanchedalmond;
		font-size: 22px;
	}
	/deep/.van-field__control{
		color: #fff;
		font-size: 22px;
	}
	.border_ra{
		border-radius: 45px;
		background-color: inherit;
		border: 1px solid blanchedalmond;
	}
	.r_button{
		background-color: inherit;
		border: 1px solid blanchedalmond;
	}
</style>
