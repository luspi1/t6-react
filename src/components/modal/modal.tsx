import { type FC, type PropsWithChildren } from 'react'
import styles from './index.module.scss'
import cn from 'classnames'
import { CloseSvg } from 'src/UI/icons/closeSVG'
import { createPortal } from 'react-dom'

type ModalProps = PropsWithChildren<{
	active: boolean
	className?: string
	setActive?: (arg: boolean) => void
}>

export const Modal: FC<ModalProps> = ({ active, setActive, children, className }) => {
	return createPortal(
		<div
			className={cn(styles.modal, { [styles.active]: active })}
			onClick={() => (setActive ? setActive(false) : null)}
		>
			<div className={cn(styles.modalContent, className)} onClick={(e) => e.stopPropagation()}>
				<button
					className={styles.closeBtn}
					type='button'
					onClick={() => (setActive ? setActive(false) : null)}
				>
					<CloseSvg />
				</button>
				{children}
			</div>
		</div>,
		document.getElementById('modal') as HTMLElement,
	)
}
