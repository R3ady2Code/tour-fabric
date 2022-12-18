<template>
	<Header />
	<div class="container">
		<div class="row">
			<div class="col-3">
				<Sidebar />
			</div>
			<div class="col">
				<router-view />
			</div>
		</div>
	</div>
</template>

<script>
import Header from './components/Header'
import Sidebar from './components/Sidebar'

export default {
	name: 'App',
	components: {
		Header,
		Sidebar,
	},
	mounted() {
		this.$router.push({ path: '/program/create/description' })
	},
}
</script>
