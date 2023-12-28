import { NavLink } from 'react-router-dom'
import { AppRoute } from 'src/helpers/consts'

import styles from './index.module.scss'
export const EventsListsNav = () => {
	const setActiveLink = ({ isActive }: { isActive: boolean }) => (isActive ? styles.activeLink : '')

	return (
		<div className={styles.navMenu}>
			<NavLink to={AppRoute.EventsListsVisitors} className={setActiveLink}>
				Посетители
			</NavLink>
			<NavLink to={AppRoute.EventsListsGroups} className={setActiveLink}>
				Группы
			</NavLink>
			<NavLink to={AppRoute.EventsListsTransport} className={setActiveLink}>
				Транспортные средства
			</NavLink>
		</div>
	)
}
