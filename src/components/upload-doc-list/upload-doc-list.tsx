import { type FC } from 'react'

import styles from './index.module.scss'
import { DocFileSVG } from 'src/UI/icons/docFileSVG'
import { PdfFileSVG } from 'src/UI/icons/pdfFileSVG'
import { RemoveFileSvg } from 'src/UI/icons/removeFileSVG'
import { FileTypes } from 'src/helpers/consts'
import { MainButton } from 'src/UI/MainButton/MainButton'

type UploadDocListProps = {
	filesList: File[]
	handleDelete: (idx: number) => void
}
export const UploadDocList: FC<UploadDocListProps> = ({ filesList, handleDelete }) => {
	const fileTypeRender = (type: string) => {
		switch (type) {
			case FileTypes.Word:
				return <DocFileSVG />
			case FileTypes.Pdf:
				return <PdfFileSVG />
			default:
				return <DocFileSVG />
		}
	}

	return (
		<ul className={styles.docFilesList}>
			{filesList?.map((file, idx) => (
				<li key={file.lastModified}>
					<a href='#'>{fileTypeRender(file?.type)}</a>

					<MainButton
						className={styles.deleteFileIcon}
						as='button'
						type='button'
						onClick={() => handleDelete(idx)}
					>
						<RemoveFileSvg />
					</MainButton>
				</li>
			))}
		</ul>
	)
}
