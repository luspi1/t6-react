import React, { type FC, type ReactNode } from 'react'

import styles from './index.module.scss'
import cn from 'classnames'
import cnBind from 'classnames/bind'

type MainInputProps = {
	className?: string
	svgnode?: ReactNode
}
export const MainInput: FC<MainInputProps & React.InputHTMLAttributes<HTMLInputElement>> = (
	props,
) => {
	const cx = cnBind.bind(styles)
	return (
		<div className={cn(styles.mainInputWrapper, props.className)}>
			<input {...props} className={cx({ _iconInput: props.svgnode })} />
			{props?.svgnode}
		</div>
	)
}
