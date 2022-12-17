<template>
	<div v-if="horizontal" class="row align-items-center">
		<div class="col-2">
			<label class="form-label">{{ label }}</label>
		</div>
		<div class="col-10">
			<input
				type="text"
				class="form-control"
				:placeholder="placeholder"
				:style="{ width: width }"
			/>
		</div>
	</div>
	<div v-else>
		<label class="form-label">{{ label }}</label>
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
	props: ['horizontal', 'label', 'placeholder', 'width', 'auto', 'small'],
}
</script>

<style>
.form-label {
	margin-bottom: 0;
}
</style>
