<template>
	<li
		@click.stop="toggle"
		:class="{
			subtasks: subtab.subtabs,
			subtasks_opened: subtab.subtabs && isOpened,
		}"
	>
		<span>{{ subtab.name }}</span>
		<ul v-if="subtab.subtabs && isOpened">
			<Link v-for="link in subtab.subtabs" :key="link.id" :link="link" />
		</ul>
	</li>
</template>

<script>
import Link from './Link'
export default {
	props: ['subtab'],
	components: {
		Link,
	},
	data: () => ({
		isOpened: false,
	}),
	methods: {
		toggle() {
			this.isOpened = !this.isOpened
		},
	},
}
</script>

<style></style>
