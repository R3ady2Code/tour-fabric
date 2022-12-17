<template>
	<li @click.stop>
		<nuxt-link v-if="link.path" @click="redirectTo(link.path)">{{
			link.name
		}}</nuxt-link>
		<span v-else>{{ link.name }}</span>
	</li>
</template>

<script>
export default {
	props: ['link'],
	methods: {
		redirectTo(path) {
			this.$router.push({ path })
		},
	},
}
</script>

<style></style>
