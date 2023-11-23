import { type FC } from 'react'

import styles from './index.module.scss'
import { Container } from 'src/UI/Container/Container'
export const ProfileFooter: FC = () => {
	return (
		<footer className={styles.profileFooter}>
			<Container>
				<ul className={styles.footerListLinks}>
					<li>
						<a href='#'>Правила и условия</a>
					</li>
					<li>
						<a href='#'>Соглашение об обработке персональных данных</a>
					</li>
					<li>
						<a href='#'>Раскрытие информации</a>
					</li>
				</ul>
				<div className={styles.footerCopyright}>
					<span>© НПО ТАУ 2023</span>
					<p>
						Авторы и владельцы Сайта не несут ответственности за контент, размещенный пользователями
						Сайта
					</p>
				</div>
			</Container>
		</footer>
	)
}
