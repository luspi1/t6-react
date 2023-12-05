import { type FC } from 'react'
import cn from 'classnames'

import styles from './index.module.scss'
import { RemoveFile } from '../icons/removeFileSVG'
import { DocFileSVG } from '../icons/docFileSVG'
import { PdfFileSVG } from '../icons/pdfFileSVG'

type FileProps = {
	fileType: 'doc' | 'pdf'
	downloadFile: any
}

export const File: FC<FileProps> = ({ fileType, downloadFile }) => {
	return (
		<a className={cn(styles.fileLink, styles.isHovered)} href='#' download>
			<p className={styles.fileIcon}>{fileType === 'doc' ? <DocFileSVG /> : <PdfFileSVG />}</p>

			<p className={styles.deleteFileIcon} onClick={downloadFile}>
				<RemoveFile />
			</p>
		</a>
	)
}