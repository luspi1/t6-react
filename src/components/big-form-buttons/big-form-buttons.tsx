import { type FC } from 'react'
import styles from './index.module.scss'

export const BigFormButtons: FC = () => {
	return (
		<div className={styles.controlsButtonContainer}>
			<div>
				<button className={styles.saveButton}>Сохранить и закрыть</button>
				<button className={styles.applyButton}>Применить и продолжить</button>
			</div>

			<button className={styles.cancelButton}>Отменить изменения</button>
		</div>
	)
}
