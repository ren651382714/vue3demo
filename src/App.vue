<template>
	<div v-if="$route.name=='Logo'">
		<keep-alive>
			<router-view />
		</keep-alive>
	</div>
	<div v-if="$route.name !== 'Logo'">
		<Head/>
		<keep-alive>
			<router-view />
		</keep-alive>
		<Footer/>
	</div>
</template>
<script>
	import Head from '@/components/head.vue'
	import Footer from '@/components/footer.vue'
	
	export default {
		name: 'Home',
		components: {
			Head,Footer
		}
	}
</script>

<style>
	body{
		margin: 0;
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
