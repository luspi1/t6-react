import { type FC } from 'react'
import { MainInput } from 'src/UI/MainInput/MainInput'
import { Container } from 'src/UI/Container/Container'

import styles from './index.module.scss'
import { SearchSvg } from 'src/UI/icons/searchSVG'
import { ProfilePersonal } from 'src/modules/profile-header/components/profile-personal/profile-personal'
export const ProfileHeader: FC = () => {
	return (
		<header className={styles.profileHeader}>
			<Container className={styles.profileHeaderContainer}>
				<h3>Пропуск</h3>
				<MainInput
					className={styles.profileSearchInput}
					name='global_search'
					placeholder='Поиск'
					svgNode={<SearchSvg />}
				/>
				<ProfilePersonal />
			</Container>
		</header>
	)
}
