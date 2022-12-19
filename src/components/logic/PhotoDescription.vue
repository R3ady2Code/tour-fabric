<template>
	<div class="row align-items-center mb-3">
		<div :class="[short ? 'col-3' : 'col-2']">
			<img src="../../assets/photo-icon.svg" alt="Photo" />
		</div>
		<div
			class="d-flex flex-column gap-3 mb-3"
			:class="[short ? 'col-6' : 'col-4']"
		>
			<Input label="Описание" :small="true" />
			<Input label="ALT" :small="true" />
		</div>
		<div v-if="!short" class="col-1 d-flex align-items-center cursor-pointer">
			<img src="../../assets/arrow-narrow-down.svg" @click="moveDown(index)" />
			<img src="../../assets/arrow-narrow-up.svg" @click="moveUp(index)" />
		</div>
		<div v-if="!short" class="offset-1 col-2">
			<Checkbox label="На аватар" />
		</div>
		<div v-if="!short" class="col-1">
			<button class="btn btn-pill" @click="deletePhoto(photo.id)">X</button>
		</div>
	</div>
</template>

<script>
import Input from '../UI/Input'
import Checkbox from '../UI/Checkbox'

export default {
	components: {
		Input,
		Checkbox,
	},
	props: ['short', 'photo', 'index', 'deletePhoto', 'moveUp', 'moveDown'],
}
</script>

<style></style>
