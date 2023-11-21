export type SubmenuItem = {
	title: string
	link: string
	linksMatches: string[]
}

export type MenuItem = {
	title: string
	icon: string
	link?: string
	border?: boolean
	active: boolean
	childItems?: SubmenuItem[]
}
