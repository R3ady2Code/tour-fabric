<template>
	<div v-if="horizontal" class="row align-items-start">
		<div class="col-2">
			<label class="form-label">{{ label }}</label>
		</div>
		<div class="col-10">
			<textarea
				class="form-control"
				name="example-textarea"
				:placeholder="placeholder"
				:value="modelValue"
				@input="$emit('update:modelValue', $event.target.value)"
			/>
		</div>
	</div>
	<div v-else>
		<label class="form-label mb-2">{{ label }}</label>
		<textarea
			class="form-control"
			name="example-textarea"
			:placeholder="placeholder"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
		/>
	</div>
</template>

<script>
export default {
	props: ['horizontal', 'label', 'placeholder', 'modelValue'],
}
</script>

<style scoped>
.form-control {
	height: 124px;
	resize: none;
}
</style>
