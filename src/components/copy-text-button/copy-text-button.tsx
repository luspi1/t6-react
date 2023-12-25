import { type FC, useState } from 'react'

import styles from './index.module.scss'
import { WebsiteSvg } from 'src/UI/icons/websiteSVG'

type CopyTextButtonProps = {
	copyText: string
}

export const CopyTextButton: FC<CopyTextButtonProps> = ({ copyText }) => {
	const [isCopied, setIsCopied] = useState(false)

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
		<button className={styles.copyButton} onClick={handleCopyClick}>
			<WebsiteSvg />
			<span>{isCopied ? 'Скопировано!' : ''}</span>
		</button>
	)
}
