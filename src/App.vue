<template>
	<div v-if="route.name == 'Home'">
		
		<keep-alive>
			<router-view />
		</keep-alive>
		<Footer/>
	</div>
	<div v-if="route.name == 'About' || route.name == 'Navbar' ">
		<Head/>
		<keep-alive>
			<router-view />
		</keep-alive>
		<Footer/>
	</div>
	<div v-if="route.name == 'Logo'">
		<keep-alive>
			<router-view />
		</keep-alive>
	</div>
</template>
<script>
	import Head from '@/components/head.vue'
	import Footer from '@/components/footer.vue'
	import { toRaw } from 'vue'
	import { useRoute } from 'vue-router'
	export default {
		name: 'App',
		components: {
			Head,Footer
		},
		setup() {
			const route = useRoute()
			console.log(toRaw(route));
			return{
				route
			}
		},
		
	}
</script>

<style>
	body{
		margin: 0;
		margin-bottom: 50px!important;
	}
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}
</style>
