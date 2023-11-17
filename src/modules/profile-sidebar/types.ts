export type SubmenuItem = {
	title: string
	link: string
	active: boolean
}

export type MenuItem = {
	title: string
	icon: string
	link?: string
	border?: boolean
	active: boolean
	childItems?: SubmenuItem[]
}
