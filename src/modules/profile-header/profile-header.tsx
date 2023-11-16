import { type FC } from 'react'
import { MainInput } from 'src/UI/MainInput/MainInput'
import { Container } from 'src/UI/Container/Container'

import styles from './index.module.scss'
import { SearchSvg } from 'src/UI/icons/searchSVG'
export const ProfileHeader: FC = () => {
	return (
		<header className={styles.profileHeader}>
			<Container className={styles.profileHeaderContainer}>
				<h3>Пропуск</h3>
				<MainInput
					className={styles.profileSearchInput}
					name='global_search'
					placeholder='Поиск'
					svgnode={<SearchSvg />}
				/>
			</Container>
		</header>
	)
}
