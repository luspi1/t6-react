import { type FC } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { ProfileHeader } from 'src/modules/profile-header/profile-header'
import { AppRoute } from 'src/helpers/consts'

import styles from './index.module.scss'
import { ProfileSidebar } from 'src/modules/profile-sidebar/profile-sidebar'

export const ProfileLayout: FC = () => {
	const { pathname } = useLocation()
	if (pathname === `/${AppRoute.Profile}`) return <Navigate to={AppRoute.OrganizerCabinet} />
	return (
		<>
			<main className={styles.profileLayout}>
				<ProfileHeader />
				<Container className={styles.profileLayoutContainer} $padding='15px 15px 70px'>
					<ProfileSidebar />
					<div className={styles.profileRight}>
						<ul>
							<li>пункт 1</li>
							<li>пункт 2</li>
							<li>пункт 3</li>
						</ul>
						<div className={styles.profileContent}>
							<Outlet />
						</div>
					</div>
				</Container>
			</main>
		</>
	)
}
