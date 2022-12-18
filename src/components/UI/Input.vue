<template>
	<div v-if="horizontal" class="d-flex align-items-center gap-2">
		<label class="form-label">{{ label }}</label>
		<input
			type="text"
			class="form-control"
			:placeholder="placeholder"
			:style="{ width: width }"
		/>
	</div>
	<div v-else>
		<label class="form-label mb-2">{{ label }}</label>
		<input
			type="text"
			class="form-control"
			:class="{ 'form-control-sm': small }"
			:placeholder="placeholder"
			:style="{ width: width }"
		/>
	</div>
</template>

<script>
export default {
	props: ['horizontal', 'label', 'placeholder', 'width', 'small'],
}
</script>

<style>
.form-label {
	margin-bottom: 0;
}
</style>
