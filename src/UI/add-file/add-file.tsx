import { type FC, type ChangeEvent, useState } from 'react'

import { PlusSvg } from 'src/UI/icons/plusSVG'
import styles from './index.module.scss'
import { File } from 'src/UI/File/File'

export const AddFile: FC = () => {
	const [file, setFile] = useState<File>()

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFile(e.target.files[0])
		}
	}

	return (
		<label className={styles.inputFile}>
			<input type='file' name='file' onChange={handleFileChange} />
			<span>
				<PlusSvg />
			</span>

			{file && <File fileType='doc' />}
		</label>
	)
}
