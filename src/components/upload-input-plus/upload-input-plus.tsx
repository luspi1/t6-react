import { AddFileSvg } from 'src/UI/icons/addFileSVG'
import React, { type FC } from 'react'

import styles from './index.module.scss'
import cn from 'classnames'

type UploadInputPlusProps = {
	maxFiles: number
	currentFilesCount: number
}
export const UploadInputPlus: FC<
	UploadInputPlusProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ maxFiles, currentFilesCount, ...props }) => {
	return (
		<label className={cn(styles.uploadContainer, props.className)}>
			<input {...props} type='file' />
			{currentFilesCount < maxFiles && (
				<span className={styles.addFileBtn}>
					<AddFileSvg />
				</span>
			)}
		</label>
	)
}
