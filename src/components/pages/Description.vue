<template>
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
				<img src="../../assets/pdf-icon.jpg" alt="PDF Icon" width="30" />
				<span>Программа2022-08.pdf</span>
				<button class="btn btn-pill">X</button>
			</div>
			<div class="d-flex align-items-center gap-2">
				<img src="../../assets/doc-icon.jpg" alt="PDF Icon" width="30" />
				<span>Правила поведения монастыре.doc</span>
				<button class="btn btn-pill">X</button>
			</div>
		</div>
	</div>
	<div class="row align-items-center">
		<div class="col-2 align-self-start">
			<h4>Фотогалерея</h4>
		</div>
		<div class="col-2">
			<img src="../../assets/photo-icon.svg" alt="Photo" />
		</div>
		<div class="col-3 d-flex flex-column gap-3 mb-3">
			<Input label="Описание" :small="true" />
			<Input label="ALT" :small="true" />
		</div>
		<div class="col-1 d-flex align-items-center">
			<img src="../../assets/arrow-down.png" />
			<img src="../../assets/arrow-up.png" />
		</div>
		<div class="offset-1 col-2">
			<Checkbox label="На аватар" />
		</div>
		<div class="col-1">
			<button class="btn btn-pill">X</button>
		</div>
	</div>
	<div class="row align-items-center mb-3">
		<div class="offset-2 col-2">
			<img src="../../assets/photo-icon.svg" alt="Photo" />
		</div>
		<div class="col-3 d-flex flex-column gap-3 mb-3">
			<Input label="Описание" :small="true" />
			<Input label="ALT" :small="true" />
		</div>
		<div class="col-1 d-flex align-items-center">
			<img src="../../assets/arrow-down.png" />
			<img src="../../assets/arrow-up.png" />
		</div>
		<div class="offset-1 col-2">
			<Checkbox label="На аватар" />
		</div>
		<div class="col-1">
			<button class="btn btn-pill">X</button>
		</div>
	</div>
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
	<Textarea label="Описание" :horizontal="true" />
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
	<Textarea label="Примечание" />
	<Textarea label="Льготы" />
	<Textarea label="В стоимость входит" />
	<Textarea label="Дополнительно оплачивается" />
	<Textarea label="Описание для ваучера" />
	<Select
		label="Закрепленный менеджер"
		:options="['Менеджер 1', 'Менеджер 2', 'Менеджер 3']"
		class="mb-3"
	/>
	<div class="row mb-3">
		<div class="col-6">
			<h3 class="mb-3">Карта маршрута</h3>
			<div class="d-flex align-items-center gap-3">
				<img src="../../assets/photo-icon.svg" alt="Photo" />
				<div class="d-flex flex-column gap-3">
					<Input label="Описание" :small="true" />
					<Input label="ALT" :small="true" />
				</div>
			</div>
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
import Input from '../UI/Input'
import Checkbox from '../UI/Checkbox'
import Textarea from '../UI/Textarea'
import Select from '../UI/Select'

export default {
	components: {
		Input,
		Checkbox,
		Textarea,
		Select,
	},
}
</script>

<style>
.input_small {
	width: 50px;
}
</style>
