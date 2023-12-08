// import { type FC, type ChangeEvent } from 'react'
//
// import styles from './index.module.scss'
// import { File } from 'src/UI/File/File'
//
// import { useDeleteFileMutation, useUploadFileMutation } from 'src/store/contracts/contracts.api'
//
// type AddFileProps = {
// 	inputName: string
// 	documentsListType?: 'contracts' | 'payments' | 'not-created'
// 	documentsCount: number
// 	contractId: string
// }
//
// export const AddFile: FC<AddFileProps> = ({
// 	inputName,
// 	documentsListType,
// 	documentsCount,
// 	currentFiles,
// 	contractId,
// }) => {
// 	const [uploadFile] = useUploadFileMutation()
// 	const [deleteFile] = useDeleteFileMutation()
//
// 	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
// 		if (e.target && e.target.files) {
// 			const file = e.target.files[0]
// 			const fileId = Date.now()
// 			const fileName = file.name
// 			uploadFile(['0', { fileId, fileName }]).catch((err) => console.log(`ERROR: ${err}`))
// 		}
// 	}
//
// 	const handleDeletingFile = () => {
// 		deleteFile([contractId, 0])
// 			.then((res) => console.log(res))
// 			.catch((err) => console.log(`ERROR: ${err}`))
// 	}
//
// 	return (
// 		<label className={styles.inputFile}>
// 			<div className={styles.fileContainer}>
// 				{currentFiles && currentFiles.length > 0 && (
// 					<File onDeleteFile={handleDeletingFile} fileType='doc' />
// 				)}
// 			</div>
// 		</label>
// 	)
// }
