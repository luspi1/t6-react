import { type FC, type PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'
import cn from 'classnames'

import styles from './index.module.scss'
import { CloseSvg } from 'src/UI/icons/closeSVG'
import { MainButton } from 'src/UI/MainButton/MainButton'

type ModalProps = PropsWithChildren<{
	active: boolean
	className?: string
	setActive?: (arg: boolean) => void
	customClose?: () => void
}>

export const Modal: FC<ModalProps> = ({ active, setActive, children, className, customClose }) => {
	const handleCloseModal = () => {
		if (customClose) {
			customClose()
			return
		}

		if (setActive) {
			setActive(false)
		}
	}

	if (!active) {
		return null
	}

	return createPortal(
		<div className={cn(styles.modal, { [styles.active]: active })} onClick={handleCloseModal}>
			<div className={cn(styles.modalContent, className)} onClick={(e) => e.stopPropagation()}>
				<MainButton
					className={styles.closeBtn}
					type='button'
					as='button'
					onClick={handleCloseModal}
				>
					<CloseSvg />
				</MainButton>

				{children}
			</div>
		</div>,
		document.getElementById('modal') as HTMLElement,
	)
}
