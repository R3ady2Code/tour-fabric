<template>
	<li
		@click="toggle"
		:class="{ subtasks: tab.subtabs, subtasks_opened: tab.subtabs && isOpened }"
	>
		<span>{{ tab.name }}</span>
		<ul v-if="tab.subtabs && isOpened">
			<Subtab v-for="subtab in tab.subtabs" :key="subtab.id" :subtab="subtab" />
		</ul>
	</li>
</template>

<script>
import Subtab from './Subtab'
export default {
	props: ['tab'],
	components: {
		Subtab,
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
