import { type FC } from 'react'

import styles from './index.module.scss'
import { UploadDocList } from 'src/components/upload-doc-list/upload-doc-list'
import { UploadInputPlus } from 'src/components/upload-input-plus/upload-input-plus'

type DocUploadProps = {
	docFiles: File[]
}
export const DocUpload: FC<DocUploadProps> = ({ docFiles }) => {
	const handleDelete = () => {
		console.log('test delete')
	}

	return (
		<div className={styles.docUpload}>
			<UploadDocList filesList={docFiles} handleDelete={handleDelete} />
			<UploadInputPlus maxFiles={2} currentFilesCount={docFiles.length} />
		</div>
	)
}
