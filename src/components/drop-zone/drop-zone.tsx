import { type FC, useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

import { MainButton } from 'src/UI/MainButton/MainButton'
import { DropZoneAddSvg } from 'src/UI/icons/dropZoneAddSVG'

import styles from './index.module.scss'

export const Dropzone: FC = () => {
	const [paths, setPaths] = useState<string[]>([])

	const onDrop = useCallback(
		(acceptedFiles: Blob[] | MediaSource[]) =>
			setPaths(acceptedFiles.map((file: Blob | MediaSource) => URL.createObjectURL(file))),
		[setPaths],
	)

	const { getRootProps, getInputProps, open } = useDropzone({ onDrop, noClick: true })

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
				<MainButton as='button' onClick={open}>
					Загрузить{' '}
				</MainButton>
			</div>
		</div>
	)
}
