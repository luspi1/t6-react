import { type FC, type ChangeEvent } from 'react'

import { AddFileSvg } from 'src/UI/icons/addFileSVG'
import styles from './index.module.scss'
import { File } from 'src/UI/File/File'

import { type FileType } from 'src/types/user'
import { useDeleteFileMutation, useUploadFileMutation } from 'src/store/contracts/contracts.api'

type AddFileProps = {
	inputName: string
	documentsListType?: 'contracts' | 'payments' | 'not-created'
	documentsCount: number
	currentFiles?: FileType[]
}

export const AddFile: FC<AddFileProps> = ({
	inputName,
	documentsListType,
	documentsCount,
	currentFiles,
}) => {
	const [uploadFile] = useUploadFileMutation()
	const [deleteFile] = useDeleteFileMutation()

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target && e.target.files) {
			const file = e.target.files[0]
			const fileId = Date.now()
			const fileName = file.name

			console.log('UPLOADING')

			uploadFile(['0', { fileId, fileName }]).catch((err) => console.log(`ERROR: ${err}`))
		}
	}

	const handleDeletingFile = () => {
		deleteFile('3')
			.then((res) => console.log(res))
			.catch((err) => console.log(`ERROR: ${err}`))
	}

	return (
		<label className={styles.inputFile}>
			<input
				type='file'
				accept='.pdf,.doc'
				name={inputName}
				multiple={documentsListType === 'contracts'}
				onChange={handleFileChange}
			/>

			{currentFiles && currentFiles.length < documentsCount && (
				<span className={styles.addFileIcon}>
					<AddFileSvg />
				</span>
			)}

			<div className={styles.fileContainer}>
				{currentFiles && currentFiles.length > 0 && (
					<File onDeleteFile={handleDeletingFile} fileType='doc' />
				)}
			</div>
		</label>
	)
}
