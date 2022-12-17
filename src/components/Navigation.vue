<template>
	<div class="card-header mb-3">
		<ul class="nav nav-tabs card-header-tabs" data-bs-toggle="tabs">
			<li
				class="nav-item"
				v-for="route in routes"
				:key="route.id"
				@click="redirectTo(route.path)"
			>
				<a
					class="nav-link"
					data-bs-toggle="tab"
					:class="{ active: $route.fullPath == route.path }"
					>{{ route.name }}</a
				>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data: () => ({
		routes: [
			{ id: 1, name: 'Описание', path: '/description' },
			{ id: 2, name: 'Компоненты', path: '/components' },
			{ id: 3, name: 'Ценовые настройки', path: '/price-settings' },
			{ id: 4, name: 'Движение квот по программе', path: '/quotes-moves' },
		],
	}),
	methods: {
		redirectTo(path) {
			this.$router.push({ path })
		},
	},
}
</script>

<style>
.nav-item {
	cursor: pointer;
}
</style>
