<template>
	<Navigation />
	<Input label="Название программы" :horizontal="true" />
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
			<button class="btn btn-primary">Загрузить</button>
		</div>
		<div class="col-auto d-flex flex-column gap-2">
			<div class="d-flex align-items-center gap-2">
				<img src="../../../../assets/pdf-icon.jpg" alt="PDF Icon" width="30" />
				<span>Программа2022-08.pdf</span>
				<button class="btn btn-pill">X</button>
			</div>
			<div class="d-flex align-items-center gap-2">
				<img src="../../../../assets/doc-icon.jpg" alt="PDF Icon" width="30" />
				<span>Правила поведения монастыре.doc</span>
				<button class="btn btn-pill">X</button>
			</div>
		</div>
	</div>
	<h4 class="mb-3">Фотографии</h4>
	<PhotoDescription />
	<PhotoDescription />
	<div class="row mb-3">
		<div class="offset-2 col-2">
			<button class="btn btn-primary">Добавить фото</button>
		</div>
	</div>
	<div class="row mb-1">
		<div class="col-auto">
			<h2>Программа</h2>
		</div>
	</div>
	<div class="hr-text"></div>
	<div class="row mb-2">
		<div class="offset-2 col-auto">
			<h3>День 1</h3>
		</div>
	</div>
	<Input label="Заголовок" :horizontal="true" class="mb-3" />
	<Textarea label="Описание" :horizontal="true" class="mb-3" />
	<div class="row mb-3">
		<div class="offset-10 col-2">
			<button class="btn btn-danger">Удалить день</button>
		</div>
	</div>
	<div class="hr-text"></div>
	<div class="row mb-3">
		<div class="col-auto">
			<button class="btn btn-primary">Добавить день</button>
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
import Input from '@/components/UI/Input'
import Checkbox from '@/components/UI/Checkbox'
import Textarea from '@/components/UI/Textarea'
import Select from '@/components/UI/Select'

import PhotoDescription from '@/components/logic/PhotoDescription'
import Navigation from './Navigation.vue'

export default {
	components: {
		Input,
		Checkbox,
		Textarea,
		Select,
		PhotoDescription,
		Navigation,
	},
}
</script>

<style>
.input_small {
	width: 50px;
}
</style>
