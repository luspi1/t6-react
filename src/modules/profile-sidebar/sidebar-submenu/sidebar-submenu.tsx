import { type FC } from 'react'
import { type SubmenuItem } from 'src/modules/profile-sidebar/types'
import { Link, useLocation } from 'react-router-dom'

import styles from './index.module.scss'

type SidebarSubmenuProps = {
	items?: SubmenuItem[]
}
export const SidebarSubmenu: FC<SidebarSubmenuProps> = ({ items }) => {
	const location = useLocation()
	console.log(location)
	console.log(items)
	return (
		<ul className={styles.submenu}>
			{items?.map((subItem) => (
				<li className={subItem.active ? '_active' : ''} key={subItem.title}>
					<Link to={subItem.link}>{subItem.title}</Link>
				</li>
			))}
		</ul>
	)
}
