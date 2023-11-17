import { type FC } from 'react'
import { type SubmenuItem } from 'src/modules/profile-sidebar/types'
import { Link } from 'react-router-dom'

type SidebarSubmenuProps = {
	items?: SubmenuItem[]
}
export const SidebarSubmenu: FC<SidebarSubmenuProps> = ({ items }) => {
	return (
		<ul>
			{items?.map((subItem) => (
				<li key={subItem.title}>
					<Link to={subItem.link}>{subItem.title}</Link>
				</li>
			))}
		</ul>
	)
}
