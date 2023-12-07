import { type FC } from 'react'
import cn from 'classnames'

import styles from './index.module.scss'
import { RemoveFile } from '../icons/removeFileSVG'
import { DocFileSVG } from '../icons/docFileSVG'
import { PdfFileSVG } from '../icons/pdfFileSVG'

type FileProps = {
	fileType: 'doc' | 'pdf'
	onDeleteFile: () => void
}

export const File: FC<FileProps> = ({ fileType, onDeleteFile }) => {
	return (
		<a className={cn(styles.fileLink, styles.isHovered)} href='#' download>
			<p className={styles.fileIcon}>{fileType === 'doc' ? <DocFileSVG /> : <PdfFileSVG />}</p>

			<p className={styles.deleteFileIcon} onClick={onDeleteFile}>
				<RemoveFile />
			</p>
		</a>
	)
}
