import { type FC } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { ProfileHeader } from 'src/modules/profile-header/profile-header'
import { AppRoute } from 'src/helpers/consts'

import styles from './index.module.scss'

export const ProfileLayout: FC = () => {
	const { pathname } = useLocation()
	if (pathname === `/${AppRoute.Profile}`) return <Navigate to={AppRoute.OrganizerCabinet} />
	return (
		<>
			<main className={styles.profileLayout}>
				<ProfileHeader />
				<Container>
					<Outlet />
				</Container>
			</main>
		</>
	)
}
