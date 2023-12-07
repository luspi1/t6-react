import { Modal } from 'src/components/modal/modal'

import styles from './index.module.scss'
import { type FC } from 'react'

type AddEmployeeModalProps = {
	activeEmployeeModal: boolean
	setActiveEmployeeModal: (arg: boolean) => void
}

export const AddEmployeeModal: FC<AddEmployeeModalProps> = ({
	setActiveEmployeeModal,
	activeEmployeeModal,
}) => {
	return (
		<Modal
			className={styles.addEmployeeModal}
			active={activeEmployeeModal}
			setActive={setActiveEmployeeModal}
		>
			<h4>Редактирование сотрудника</h4>
		</Modal>
	)
}