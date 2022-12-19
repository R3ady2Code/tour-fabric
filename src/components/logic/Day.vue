<template>
	<div class="program-day">
		<div class="hr-text"></div>
		<div class="row mb-2">
			<div class="offset-2 col-auto">
				<h3>День {{ index + 1 }}</h3>
			</div>
		</div>
		<div class="row mb-3">
			<div class="col-2">
				<label class="form-label">Заголовок</label>
			</div>
			<div class="col-10">
				<input type="text" class="form-control" v-model="title" />
			</div>
		</div>
		<Textarea
			label="Описание"
			:horizontal="true"
			class="mb-3"
			v-model="description"
		/>
		<div class="row justify-content-end align-items-center mb-3">
			<div class="col-auto">
				<button class="btn btn-danger" @click.prevent="deleteDay(day.id)">
					Удалить день
				</button>
			</div>
		</div>
		<div class="hr-text"></div>
	</div>
</template>

<script>
import Textarea from '../UI/Textarea'
export default {
	components: { Textarea },
	props: ['day', 'index', 'deleteDay'],
	data: () => ({
		title: '',
		description: '',
	}),
}
</script>

<style></style>
