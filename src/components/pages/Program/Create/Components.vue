<template>
	<Navigation />
	<Checkbox label="Трансфер СПб <> причал" class="mb-3" />
	<Input
		:horizontal="true"
		label="Время выезда автобуса из СПб"
		width="50px"
		class="mb-3"
	/>
	<h2>Рейсы теплоходов</h2>
	<table class="table mb-3">
		<thead>
			<tr>
				<th scope="col"><h3>Рейс туда</h3></th>
				<th scope="col"><h3>Рейс обратно</h3></th>
				<th></th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>25.05 11:00 Сортавала - Валаам - Метеор</td>
				<td>25.05 15:00 Валаам - Сортавала - ОМ-1</td>
				<td class="cursor-pointer">
					<img src="../../../../assets/icons/edit.svg" alt="Icon" height="25" />
				</td>
				<td class="cursor-pointer">
					<img
						src="../../../../assets/icons/calendar.svg"
						alt="Icon"
						height="25"
					/>
				</td>
			</tr>
			<tr>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td class="cursor-pointer">
					<img src="../../../../assets/icons/edit.svg" alt="Icon" height="25" />
				</td>
				<td class="cursor-pointer">
					<img
						src="../../../../assets/icons/calendar.svg"
						alt="Icon"
						height="25"
					/>
				</td>
			</tr>
			<tr>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td class="cursor-pointer">
					<img src="../../../../assets/icons/edit.svg" alt="Icon" height="25" />
				</td>
				<td class="cursor-pointer">
					<img
						src="../../../../assets/icons/calendar.svg"
						alt="Icon"
						height="25"
					/>
				</td>
			</tr>
		</tbody>
	</table>
	<div class="row mb-3">
		<div class="col-2">
			<button class="btn btn-primary">Добавить рейс</button>
		</div>
		<div class="col-10 border p-3">
			<div class="d-flex align-items-center gap-2">
				<Input />
				<span>-</span>
				<Input />
				<img
					src="../../../../assets/icons/calendar.svg"
					alt="Icon"
					height="25"
				/>
				<Input />
				<span>-</span>
				<Input />
				<img src="../../../../assets/icons/clock.svg" alt="Icon" height="25" />
				<Select :options="['причал отправления']" />
			</div>
			<div class="d-flex gap-2">
				<h4>25.05 11:00 Сортавала - Валаам Метеор</h4>
				<Checkbox />
			</div>
			<div class="d-flex gap-2">
				<h4>25.05 15:00 Сортавала - Валаам ОМ-1</h4>
				<Checkbox />
			</div>
		</div>
	</div>
	<Input :horizontal="true" label="Квота на тур" width="50px" class="mb-3" />
	<h2>Экскурсии</h2>
	<div class="row align-items-baseline">
		<div class="col-4">
			<Select
				:options="['Никольский скит', 'Скиты Всех Святых и Смоленский']"
			/>
		</div>
		<div class="col-4 d-flex gap-2">
			<input
				class="form-check-input"
				type="radio"
				name="flexRadioDefault"
				id="radio1"
			/>
			<label class="form-check-label" for="radio1"> Паломническая </label>
			<input
				class="form-check-input"
				type="radio"
				name="flexRadioDefault"
				id="radio2"
			/>
			<label class="form-check-label" for="radio2"> Пешая </label>
		</div>
		<div class="col-1 cursor-pointer">
			<img src="../../../../assets/icons/trash.svg" alt="Icon" height="30" />
		</div>
	</div>
	<div class="row align-items-baseline mb-3">
		<div class="col-4">
			<Select
				:options="['Никольский скит', 'Скиты Всех Святых и Смоленский']"
			/>
		</div>
		<div class="col-4 d-flex gap-2">
			<input
				class="form-check-input"
				type="radio"
				name="flexRadioDefault2"
				id="radio1"
			/>
			<label class="form-check-label" for="radio1"> Паломническая </label>
			<input
				class="form-check-input"
				type="radio"
				name="flexRadioDefault2"
				id="radio2"
			/>
			<label class="form-check-label" for="radio2"> Пешая </label>
		</div>
		<div class="col-1 cursor-pointer">
			<img src="../../../../assets/icons/trash.svg" alt="Icon" height="30" />
		</div>
	</div>
	<button class="btn btn-primary mb-3">Добавить</button>
	<Input :horizontal="true" label="Базовая цена" width="100px" class="mb-3" />
	<h2>Размещение</h2>
	<Input :horizontal="true" label="Ночей" width="50px" class="mb-3" />
	<div class="row mb-3">
		<div class="col-5">
			<Textarea label="Описание блока типов номеров" />
		</div>
		<div class="col-7">
			<Checkbox label="Цена за человека" />
			<table class="table table-bordered">
				<thead>
					<tr>
						<th scope="col">id</th>
						<th scope="col">Тип в Logus</th>
						<th scope="col">Описание для прайса</th>
						<th scope="col">Цена</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<Checkbox />
						</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>
							<Checkbox />
						</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<div class="row">
		<div class="col-auto">
			<button class="btn btn-primary">Добавить блок</button>
		</div>
		<div class="col-auto">
			<button class="btn btn-danger">Удалить</button>
		</div>
		<div class="col-auto">
			<button class="btn">Редактировать</button>
		</div>
	</div>
	<div class="hr-text"></div>
	<h2>Питание</h2>
	<div class="d-flex align-items-center mb-3">
		<img src="../../../../assets/icons/meat.svg" alt="Icon" height="30" />
		<h3>Питание</h3>
	</div>
	<div class="row align-items-center">
		<div class="col-2 d-flex align-items-center justify-content-between gap-2">
			<label class="form-label">Завтраков</label>
			<input
				type="text"
				class="form-control input_small"
				name="example-text-input"
			/>
		</div>
		<div class="col-2">
			<Select :options="['Стандартное', 'Постоное', 'Детское']" />
		</div>
		<div class="col-1">
			<button class="btn btn-pill">X</button>
		</div>
	</div>
	<div class="row align-items-center">
		<div class="col-2 d-flex align-items-center justify-content-between gap-2">
			<label class="form-label">Обедов</label>
			<input
				type="text"
				class="form-control input_small"
				name="example-text-input"
			/>
		</div>
		<div class="col-2">
			<Select :options="['Стандартное', 'Постоное', 'Детское']" />
		</div>
		<div class="col-1">
			<button class="btn btn-pill">X</button>
		</div>
	</div>
	<div class="row align-items-center mb-3">
		<div class="col-2 d-flex align-items-center justify-content-between gap-2">
			<label class="form-label">Ужинов</label>
			<input
				type="text"
				class="form-control input_small"
				name="example-text-input"
			/>
		</div>
		<div class="col-2">
			<Select :options="['Стандартное', 'Постоное', 'Детское']" />
		</div>
		<div class="col-1">
			<button class="btn btn-pill">X</button>
		</div>
	</div>
	<Textarea label="Описание для ваучера" />
	<button class="btn btn-primary mb-3">Сохранить</button>
</template>

<script>
import Input from '@/components/UI/Input'
import Checkbox from '@/components/UI/Checkbox'
import Textarea from '@/components/UI/Textarea'
import Select from '@/components/UI/Select'

import Navigation from './Navigation.vue'

export default {
	components: {
		Input,
		Checkbox,
		Textarea,
		Select,
		Navigation,
	},
}
</script>

<style>
th,
td {
	text-align: center;
}
</style>
