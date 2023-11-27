import { type FC } from 'react'
import { type SubmenuItem } from 'src/modules/profile-sidebar/types'
import { Link } from 'react-router-dom'

import styles from './index.module.scss'
import cnBind from 'classnames/bind'
import { useLocationMatch } from 'src/hooks/location-match'

type SidebarSubmenuProps = {
	items?: SubmenuItem[]
}
export const SidebarSubmenu: FC<SidebarSubmenuProps> = ({ items }) => {
	const cx = cnBind.bind(styles)
	const checkMatches = (links: string[]) => {
		const [matchesLocation] = useLocationMatch(links)
		return matchesLocation
	}

	return (
		<ul className={styles.submenu}>
			{items?.map((subItem) => (
				<li className={cx({ _active: checkMatches(subItem.linksMatches) })} key={subItem.title}>
					<Link to={subItem.link}>{subItem.title}</Link>
				</li>
			))}
		</ul>
	)
}
