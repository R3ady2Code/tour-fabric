import { createRouter, createWebHistory } from 'vue-router'

import Description from '../components/pages/Description.vue'
import Components from '../components/pages/Components.vue'

const routes = [
	{
		path: '/description',
		name: 'description',
		component: Description,
	},
	{
		path: '/components',
		name: 'components',
		component: Components,
	},
	{
		path: '/price-settings',
		name: 'price-settings',
	},
	{
		path: '/qoutes-moves',
		name: 'qoutes-moves',
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
