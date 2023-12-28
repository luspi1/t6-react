import { type FC } from 'react'
import styles from './index.module.scss'

type SectionTitleProps = {
	pageWithRequiredInputs?: boolean
}

export const SectionTitle: FC<SectionTitleProps> = ({ pageWithRequiredInputs }) => {
	return (
		<div className={styles.sectionTitle}>
			{pageWithRequiredInputs && <p>поля, отмеченные символом *, обязательны для заполнения</p>}
			<h2>Атмановские Кулачки 2023</h2>
			<p>26 августа 2023 года — 28 августа 2023 года, с. Атманов Угол Тамбовской области</p>
		</div>
	)
}
