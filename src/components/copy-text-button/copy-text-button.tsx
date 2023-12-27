import { type FC, useState } from 'react'

import styles from './index.module.scss'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { WebsiteSvg } from 'src/UI/icons/websiteSVG'

type CopyTextButtonProps = {
	copyText: string
}

export const CopyTextButton: FC<CopyTextButtonProps> = ({ copyText }) => {
	const [isCopied, setIsCopied] = useState<boolean>(false)

	const handleCopyClick = () => {
		navigator.clipboard
			.writeText(copyText)
			.then(() => {
				setIsCopied(true)
				setTimeout(() => {
					setIsCopied(false)
				}, 1500)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<MainButton className={styles.copyButton} onClick={handleCopyClick} as='button'>
			<WebsiteSvg />
			<span>{isCopied ? 'Скопировано!' : ''}</span>
		</MainButton>
	)
}
