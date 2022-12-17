<template>
	<ul>
		<Tab v-for="tab in tabs" :key="tab.id" :tab="tab" />
	</ul>
</template>

<script>
import Tab from './Tab'
export default {
	components: { Tab },
	data: () => ({
		tabs: [
			{ id: 1, name: 'Заявки', subtabs: [{ id: 1, name: 'Заявка' }] },
			{
				id: 2,
				name: 'Теплоходы',
				subtabs: [
					{
						id: 1,
						name: 'Теплоходы Редактирование',
						subtabs: [{ id: 1, name: 'Добавить ред теплоход' }],
					},
					{ id: 2, name: 'Формирование расписания' },
					{
						id: 3,
						name: 'Сводное расписание по теплоходам',
						subtabs: [{ id: 1, name: 'Информация по рейсу' }],
					},
					{ id: 4, name: 'Квоты для программ' },
				],
			},
			{
				id: 3,
				name: 'Гостиница',
				subtabs: [
					{
						id: 1,
						name: 'Редактирование',
						subtabs: [{ id: 1, name: 'Создание / Редактирование номера' }],
					},
					{ id: 2, name: 'Цены' },
					{ id: 3, name: 'Категории' },
					{ id: 4, name: 'Типы' },
					{ id: 5, name: 'Номера' },
				],
			},
			{
				id: 4,
				name: 'Экскурсии, услуги',
				subtabs: [
					{
						id: 1,
						name: 'Цены и график',
						subtabs: [{ id: 1, name: 'Карточка экскурсии' }],
					},
					{ id: 2, name: 'Расписание с бронями' },
				],
			},
			{ id: 5, name: 'Питание' },
			{
				id: 6,
				name: 'Пользователи',
				subtabs: [
					{
						id: 1,
						name: 'Редактирование пользователя',
						subtabs: [{ id: 1, name: 'Добавить пользователя' }],
					},
				],
			},
			{
				id: 7,
				name: 'Настройки',
				subtabs: [
					{ id: 1, name: 'Скидки' },
					{ id: 2, name: 'Сообщения' },
				],
			},
			{
				id: 8,
				name: 'Программы',
				subtabs: [
					{
						id: 1,
						name: 'Создание программы',
						subtabs: [
							{ id: 1, name: 'Описание', path: '/description' },
							{ id: 2, name: 'Компоненты', path: '/components' },
							{ id: 3, name: 'Ценовые настройки' },
							{ id: 4, name: 'Движение квот по программе' },
						],
					},
				],
			},
		],
	}),
}
</script>

<style lang="scss">
ul {
	list-style: none;
	li {
		user-select: none;
		cursor: pointer;
		align-items: center;
		&.subtasks {
			&::before {
				content: '';
				background-image: url('../../assets/subtabs-close.png');
				background-repeat: no-repeat;
				width: 9px;
				height: 9px;
				display: block;
				float: left;
				margin: 6px 6px 0 0;
			}
			&_opened {
				&::before {
					content: '';
					background-image: url('../../assets/subtabs-open.png');
					background-repeat: no-repeat;
					width: 9px;
					height: 9px;
					display: block;
					float: left;
					margin: 6px 6px 0 0;
				}
			}
		}
		&::before {
			content: '';
			background-repeat: no-repeat;
			width: 9px;
			height: 9px;
			display: block;
			float: left;
			margin: 6px 6px 0 0;
		}
	}
}
</style>
