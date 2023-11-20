import { type FC } from 'react'
import { type SubmenuItem } from 'src/modules/profile-sidebar/types'
import { Link, useLocation } from 'react-router-dom'

import styles from './index.module.scss'
import cnBind from 'classnames/bind'

type SidebarSubmenuProps = {
	items?: SubmenuItem[]
}
export const SidebarSubmenu: FC<SidebarSubmenuProps> = ({ items }) => {
	const { pathname } = useLocation()

	const cx = cnBind.bind(styles)

	return (
		<ul className={styles.submenu}>
			{items?.map((subItem) => (
				<li className={cx({ _active: pathname.includes(subItem.link) })} key={subItem.title}>
					<Link to={subItem.link}>{subItem.title}</Link>
				</li>
			))}
		</ul>
	)
}
