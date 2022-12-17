<template>
	<Header />
	<div class="container">
		<div class="row">
			<div class="col-3">
				<Sidebar />
			</div>
			<div class="col">
				<Navigation />
				<div class="card-body">
					<div class="tab-content">
						<router-view />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Header from './components/Header'
import Navigation from './components/Navigation'
import Sidebar from './components/Sidebar'

export default {
	name: 'App',
	components: {
		Header,
		Navigation,
		Sidebar,
	},
	mounted() {
		this.$router.push({ path: '/description' })
	},
}
</script>
