import { type FC } from 'react'
import { Container } from 'src/UI/Container/Container'
import { Helmet } from 'react-helmet-async'

import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { AppRoute } from 'src/helpers/consts'

export const HomePage: FC = () => {
	return (
		<Container className={styles.homePage}>
			<Helmet>
				<title>Домашняя страница</title>
			</Helmet>
			<h1>Home page</h1>
			<Link to={AppRoute.Profile}>Перейти в профиль</Link>
		</Container>
	)
}
