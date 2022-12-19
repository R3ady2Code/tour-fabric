<template>
	<Navigation />
	<div class="row mb-3">
		<div class="col-2">
			<label class="form-label">Название программы</label>
		</div>
		<div class="col-10">
			<input type="text" class="form-control" />
		</div>
	</div>
	<div class="row mb-3 mt-3">
		<div class="offset-3 col d-flex align-items-center gap-2">
			<label class="form-label">дней</label>
			<input
				type="text"
				class="form-control input_small"
				name="example-text-input"
			/>
		</div>
		<div class="col d-flex align-items-center gap-2">
			<label class="form-label">для группы </label>
			<input
				type="text"
				class="form-control input_small"
				name="example-text-input"
			/>
			<span>-</span>
			<input
				type="text"
				class="form-control input_small"
				name="example-text-input"
			/>
		</div>
	</div>
	<div class="row mb-3">
		<div class="offset-3 col-auto">
			<Checkbox label="Выводить в блоке популярных" />
		</div>
	</div>
	<Textarea label="Анонс" :horizontal="true" />
	<div class="row mb-3 mt-3">
		<div class="offset-2 col-auto">
			<span>(250 знаков)</span>
		</div>
	</div>
	<Textarea label="Описание" :horizontal="true" />
	<div class="row mb-3 mt-3">
		<div class="col-2">
			<h4>Файлы с описанием</h4>
		</div>
		<div class="col-2">
			<button class="btn btn-primary" @click="clickToInputFile">
				Загрузить
			</button>
			<input
				type="file"
				id="file"
				ref="inputFile"
				class="d-none"
				@change="previewFile"
			/>
		</div>
		<div class="col-auto d-flex flex-column gap-2">
			<div
				class="d-flex align-items-center gap-2"
				v-for="file in descriptionsFiles"
				:key="file.id"
			>
				<img
					src="../../../../assets/icons/file.svg"
					alt="file Icon"
					width="30"
				/>
				<span>{{ file.name }}</span>
				<button class="btn btn-pill" @click="deleteFile(file.id)">X</button>
			</div>
		</div>
	</div>
	<h4 class="mb-3">Фотографии</h4>
	<PhotoDescription
		v-for="(photo, index) in photos"
		:key="photo.id"
		:index="index"
		:photo="photo"
		:deletePhoto="deletePhoto"
		:moveUp="movePhotoUp"
		:moveDown="movePhotoDown"
	/>
	<div class="row mb-3">
		<div class="offset-2 col-2">
			<button class="btn btn-primary" @click="addPhoto">Добавить фото</button>
		</div>
	</div>

	<div class="row mb-1">
		<div class="col-auto">
			<h2>Программа</h2>
		</div>
	</div>

	<div class="program-day" v-for="(day, index) in programDays" :key="day.id">
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
				<input type="text" class="form-control" v-model="day.title" />
			</div>
		</div>
		<Textarea
			label="Описание"
			:horizontal="true"
			class="mb-3"
			v-model="day.description"
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

	<div class="row mb-3">
		<div class="col-auto">
			<button class="btn btn-primary" @click.prevent="addProgramDay">
				Добавить день
			</button>
		</div>
	</div>
	<Textarea label="Примечание" class="mb-3" />
	<Textarea label="Льготы" class="mb-3" />
	<Textarea label="В стоимость входит" class="mb-3" />
	<Textarea label="Дополнительно оплачивается" class="mb-3" />
	<Textarea label="Описание для ваучера" class="mb-3" />
	<Select
		label="Закрепленный менеджер"
		:options="['Менеджер 1', 'Менеджер 2', 'Менеджер 3']"
		class="mb-3"
	/>
	<div class="row mb-3">
		<div class="col-6">
			<h3 class="mb-3">Карта маршрута</h3>
			<PhotoDescription :short="true" />
		</div>
		<div class="col-6 d-flex flex-column">
			<h3>Код для вставки карты</h3>
			<Textarea />
		</div>
	</div>
	<div class="row mb-3">
		<div class="col-auto">
			<button class="btn btn-primary">Сохранить</button>
		</div>
	</div>
</template>

<script>
import Checkbox from '@/components/UI/Checkbox'
import Textarea from '@/components/UI/Textarea'
import Select from '@/components/UI/Select'

import PhotoDescription from '@/components/logic/PhotoDescription'
import Navigation from './Navigation.vue'

export default {
	components: {
		Checkbox,
		Textarea,
		Select,
		PhotoDescription,
		Navigation,
	},
	data: () => ({
		descriptionsFiles: [
			{ id: 1, name: 'Программа2022-08.pdf' },
			{ id: 2, name: 'Правила поведения монастыре.doc' },
		],
		photos: [{ id: 1 }, { id: 2 }],
		programDays: [{ id: 1 }],
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
		addProgramDay() {
			this.programDays.push({ id: Date.now() })
		},
		deleteDay(dayId) {
			this.programDays = this.programDays.filter(day => day.id !== dayId)
		},
		clickToInputFile() {
			this.$refs.inputFile.click()
		},
		previewFile() {
			this.descriptionsFiles.push({
				name: this.$refs.inputFile.files[0].name,
				id: Date.now(),
			})
		},
		deleteFile(fileId) {
			this.descriptionsFiles = this.descriptionsFiles.filter(
				file => file.id !== fileId
			)
		},
	},
}
</script>

<style>
.input_small {
	width: 50px;
}
</style>
