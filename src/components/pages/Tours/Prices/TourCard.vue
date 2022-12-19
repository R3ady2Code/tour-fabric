<template>
	<h1 class="mb-3">Экскурсии - Карточка экскурсии</h1>
	<Input label="Наименование" class="mb-3" />
	<Textarea label="Анонс" />
	<div class="row mb-3">
		<span>(250 знаков)</span>
	</div>
	<Textarea label="Описание" class="mb-3" />
	<div class="row mb-3">
		<div class="col-3">
			<Input :horizontal="true" label="Время" width="100px" />
		</div>
		<div class="col-3">
			<Input :horizontal="true" label="Километраж" width="100px" />
		</div>
	</div>
	<div class="d-flex gap-3 mb-3">
		<Checkbox
			v-for="day in week"
			:key="day"
			:label="day"
			:class="[day === 'Вс' && 'me-3']"
		/>
		<Checkbox label="При наборе" />
	</div>
	<div class="row mb-3">
		<div class="col-2">
			<h2>Цена</h2>
		</div>
		<div class="col-3">
			<Input :horizontal="true" label="Теплоходная" width="100px" />
		</div>
		<div class="col-3">
			<Input :horizontal="true" label="Пешая" width="100px" />
		</div>
	</div>
	<h2 class="mb-3">Фотографии</h2>
	<PhotoDescription
		v-for="(photo, index) in photos"
		:key="photo.id"
		:index="index"
		:photo="photo"
		:deletePhoto="deletePhoto"
		:moveUp="movePhotoUp"
		:moveDown="movePhotoDown"
	/>
	<button class="btn btn-primary mb-3" @click="addPhoto">+Добавить фото</button>
	<div class="row mb-3">
		<div class="col-6">
			<h2 class="mb-3">Карта маршрута</h2>
			<PhotoDescription :short="true" />
		</div>
		<div class="col-6 d-flex flex-column">
			<h3>Код для вставки карты</h3>
			<Textarea />
		</div>
	</div>
	<div class="row justify-content-end align-items-center mb-3">
		<div class="col-auto">
			<button class="btn btn-primary">Сохранить</button>
		</div>
	</div>
</template>

<script>
import Input from '@/components/UI/Input'
import Textarea from '@/components/UI/Textarea'
import Checkbox from '@/components/UI/Checkbox'

import PhotoDescription from '@/components/logic/PhotoDescription'

export default {
	components: {
		Input,
		Textarea,
		Checkbox,
		PhotoDescription,
	},
	data: () => ({
		week: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
		photos: [{ id: 1 }, { id: 2 }],
	}),
	methods: {
		addPhoto() {
			this.photos.push({ id: Date.now() })
		},
		deletePhoto(photoId) {
			this.photos = this.photos.filter(photo => photo.id !== photoId)
		},
		movePhotoDown(index) {
			if (index === this.photos.length - 1) return
			function moveElement(arr, from, to) {
				arr.splice(to, 0, arr.splice(from, 1)[0])
				return arr
			}
			this.photos = moveElement(this.photos, index, index + 1)
		},
		movePhotoUp(index) {
			if (index === 0) return
			const nextElement = this.photos[index - 1]
			this.photos[index - 1] = this.photos[index]
			this.photos[index] = nextElement
		},
	},
}
</script>

<style></style>
