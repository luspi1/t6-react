import { type FC } from 'react'

import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { SidebarSubmenu } from 'src/modules/profile-sidebar/sidebar-submenu/sidebar-submenu'
import { useAppSelector } from 'src/hooks/store'
import { getSidebarItems } from 'src/modules/profile-sidebar/store/profile-sidebar.selectors'
import { useActions } from 'src/hooks/actions/actions'
import cnBind from 'classnames/bind'

export const ProfileSidebar: FC = () => {
	const menuItems = useAppSelector(getSidebarItems)

	const { changeMenuItemActive } = useActions()

	const cx = cnBind.bind(styles)

	return (
		<aside className={styles.profileSidebar}>
			<ul>
				{menuItems.map((item, idx) => (
					<li
						className={cx(styles.sidebarItem, {
							_parent: item.childItems,
							_active: item.active,
							_border: item.border,
						})}
						key={item.title}
						onClick={() => changeMenuItemActive(idx)}
					>
						{item.link ? (
							<Link className={styles.titleItem} to={item.link}>
								<span dangerouslySetInnerHTML={{ __html: item.icon }}></span>
								{item.title}
							</Link>
						) : (
							<>
								<p className={styles.titleItem}>
									<span dangerouslySetInnerHTML={{ __html: item.icon }}></span>
									{item.title}
								</p>
								{item.active && <SidebarSubmenu items={item.childItems} />}
							</>
						)}
					</li>
				))}
			</ul>
		</aside>
	)
}
