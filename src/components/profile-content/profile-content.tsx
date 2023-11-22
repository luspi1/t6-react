import React, { type FC } from 'react'
import cn from 'classnames'

import styles from './index.module.scss'
export const ProfileContent: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
	return (
		<div {...props} className={cn(styles.profileContent, props.className)}>
			{props.children}
		</div>
	)
}
