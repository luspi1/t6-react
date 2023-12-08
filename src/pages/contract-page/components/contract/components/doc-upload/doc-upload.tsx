import { type FC } from 'react'

import styles from './index.module.scss'
import { UploadDocList } from 'src/components/upload-doc-list/upload-doc-list'
import { UploadInputPlus } from 'src/components/upload-input-plus/upload-input-plus'
import { useDeleteFileMutation, useUploadFileMutation } from 'src/store/contracts/contracts.api'

type DocUploadProps = {
	docFiles: File[]
	contractId: string
}
export const DocUpload: FC<DocUploadProps> = ({ docFiles, contractId }) => {
	const [uploadFiles] = useUploadFileMutation()
	const [deleteFiles] = useDeleteFileMutation()
	const handleDelete = (idx: number) => {
		deleteFiles([contractId, idx]).catch((err) => console.error(err))
	}

	const handleAdd = (files: FormData) => {
		uploadFiles([contractId, files]).catch((err) => console.error(err))
	}

	return (
		<div className={styles.docUpload}>
			<UploadDocList filesList={docFiles} handleDelete={handleDelete} />
			<UploadInputPlus
				multiple={true}
				maxFiles={2}
				currentFilesCount={docFiles.length}
				handleAddingFiles={handleAdd}
			/>
		</div>
	)
}
