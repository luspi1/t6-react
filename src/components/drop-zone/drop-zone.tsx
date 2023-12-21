import { type FC, useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

import { DropZoneAddSvg } from 'src/UI/icons/dropZoneAddSVG'

import styles from './index.module.scss'

export const Dropzone: FC = () => {
	const [paths, setPaths] = useState([])

	const onDrop = useCallback(
		(acceptedFiles: any) => setPaths(acceptedFiles.map((file: File) => URL.createObjectURL(file))),
		[setPaths],
	)

	const { getRootProps, getInputProps, isDragActive, open } = useDropzone({ onDrop, noClick: true })

	return (
		<div className={styles.dropzoneContainer}>
			<div {...getRootProps()}>
				<div className={styles.imageContainer} onClick={open}>
					<DropZoneAddSvg />
					{paths.map((path) => (
						<img key={path} src={path} />
					))}
				</div>
				<input {...getInputProps()} />
			</div>

			<div className={styles.dropzoneRight}>
				<p>
					Перетащите изображение на поле слева или нажмите кнопку для загрузки изображения с
					жесткого диска Вашего компьютера.
				</p>
				<button type='button' onClick={open}>
					Загрузить{' '}
				</button>
			</div>
		</div>
	)
}
