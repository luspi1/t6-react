import { AddFileSvg } from 'src/UI/icons/addFileSVG'
import React, { type ChangeEvent, type FC } from 'react'

import styles from './index.module.scss'
import cn from 'classnames'

type UploadInputPlusProps = {
	maxFiles: number
	currentFilesCount: number
	handleAddingFiles: (data: FormData) => void
}
export const UploadInputPlus: FC<
	UploadInputPlusProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ maxFiles, currentFilesCount, handleAddingFiles, ...props }) => {
	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			const formData = new FormData()

			for (const file of event.target.files) {
				formData.append('files', file)
			}

			handleAddingFiles(formData)
		}
	}

	return (
		<label className={cn(styles.uploadContainer, props.className)}>
			<input {...props} type='file' onChange={handleFileChange} />
			{currentFilesCount < maxFiles && (
				<span className={styles.addFileBtn}>
					<AddFileSvg />
				</span>
			)}
		</label>
	)
}
