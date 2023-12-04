import React, { type FC } from 'react'

import styles from './index.module.scss'
import cn from 'classnames'
export const CardInfo: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
	return (
		<div {...props} className={cn(styles.cardInfo, props.className)}>
			{props.children}
		</div>
	)
}
