import { type FC, type ChangeEvent, useState } from 'react'

import { AddFileSvg } from 'src/UI/icons/addFileSVG'
import styles from './index.module.scss'
import { File } from 'src/UI/File/File'

type AddFileProps = {
	inputName: string
	downloadFile: any
}

export const AddFile: FC<AddFileProps> = ({ inputName, downloadFile }) => {
	const [file, setFile] = useState<File>()

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFile(e.target.files[0])
		}
	}

	return (
		<label className={styles.inputFile}>
			<input type='file' name={inputName} onChange={handleFileChange} />
			<span className={styles.addFileIcon}>
				<AddFileSvg />
			</span>

			<div>{file && <File fileType='doc' downloadFile={downloadFile} />}</div>
		</label>
	)
}
