import { type NavProfileItem } from 'src/types/navProfile'

export const cabinetNavItems: NavProfileItem[] = [
	{
		title: 'Кабинет',
		link: 'cabinet',
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
	cabinet: 'Кабинет',
	personal: 'Профиль',
	docs: 'Документы',
	contract: 'Договорная работа',
	tariffs: 'Тарифы и платежи',
}
