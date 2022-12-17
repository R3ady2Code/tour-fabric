<template>
	<div>
		<div class="form-label mb-1">{{ label }}</div>
		<select class="form-select">
			<option v-for="(o, i) in options" :key="i">{{ o }}</option>
		</select>
	</div>
</template>

<script>
export default {
	props: ['label', 'options'],
}
</script>

<style></style>
