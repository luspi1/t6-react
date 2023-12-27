import { type FC, type MouseEventHandler } from 'react'

import { MainButton } from 'src/UI/MainButton/MainButton'
import { DeleteSVG } from 'src/UI/icons/deleteSVG'
import styles from './index.module.scss'

type FilePreviewProps = {
	imgSrc: string
	imgName: string
	onDeleteImg: MouseEventHandler<HTMLButtonElement>
}
export const FilePreview: FC<FilePreviewProps> = ({ imgSrc, imgName, onDeleteImg }) => {
	return (
		<li className={styles.filePreview}>
			<MainButton as='button' onClick={onDeleteImg}>
				<DeleteSVG />
			</MainButton>
			<img src={imgSrc} alt={imgName} />
		</li>
	)
}
