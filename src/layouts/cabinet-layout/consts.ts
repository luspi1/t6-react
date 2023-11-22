import { type NavProfileItem } from 'src/types/navProfile'

export const cabinetNavItems: NavProfileItem[] = [
	{
		title: 'Дашборд',
		link: 'dashboard',
	},
	{
		title: 'Профиль',
		link: 'personal',
	},
	{
		title: 'Документы',
		link: 'docs',
	},
	{
		title: 'Договорная работа',
		link: 'contract',
	},
	{
		title: 'Тарифы и платежи',
		link: 'tariffs',
	},
]

export const cabinetPathMap = {
	dashboard: 'Дашборд',
	personal: 'Профиль',
	docs: 'Документы',
	contract: 'Договорная работа',
	tariffs: 'Тарифы и платежи',
}
