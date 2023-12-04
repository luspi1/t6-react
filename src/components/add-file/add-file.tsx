import { type FC, type ChangeEvent, useState } from 'react'

import { AddFileSvg } from 'src/UI/icons/addFileSVG'
import styles from './index.module.scss'
import { File } from 'src/UI/File/File'

type AddFileProps = {
	inputName: string
}

export const AddFile: FC<AddFileProps> = ({ inputName }) => {
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

			<p style={{ border: '3px solid green' }}>{file && <File fileType='doc' />}</p>
		</label>
	)
}
