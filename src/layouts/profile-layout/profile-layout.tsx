import { type FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { ProfileHeader } from 'src/modules/profile-header/profile-header'
import { AppRoute } from 'src/helpers/consts'

import styles from './index.module.scss'
import { ProfileSidebar } from 'src/modules/profile-sidebar/profile-sidebar'
import { useLocationMatch } from 'src/hooks/location-match'
import { ProfileFooter } from 'src/modules/profile-footer/profile-footer'

export const ProfileLayout: FC = () => {
	const [matchLocation] = useLocationMatch([AppRoute.Profile])
	if (matchLocation) return <Navigate to={AppRoute.OrgCabinet} />
	return (
		<>
			<main className={styles.profileLayout}>
				<ProfileHeader />
				<Container className={styles.profileLayoutContainer} $padding='15px 15px 70px'>
					<ProfileSidebar />
					<div className={styles.profileRight}>
						<Outlet />
					</div>
				</Container>
			</main>
			<ProfileFooter />
		</>
	)
}
