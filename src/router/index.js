import { createRouter, createWebHistory } from 'vue-router'

import Description from '../components/pages/Program/Create/Description.vue'
import Components from '../components/pages/Program/Create/Components.vue'
import TourCard from '../components/pages/Tours/Prices/TourCard.vue'

const routes = [
	{
		path: '/program/create/description',
		name: 'description',
		component: Description,
	},
	{
		path: '/program/create/components',
		name: 'components',
		component: Components,
	},
	{
		path: '/tours/prices/tour-card',
		name: 'tour-card',
		component: TourCard,
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
