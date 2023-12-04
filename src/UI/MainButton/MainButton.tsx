import React, { type FC, type ReactNode } from 'react'

import cnBind from 'classnames/bind'

import styles from './index.module.scss'

type MainInputProps = {
	svgNode?: ReactNode
}
export const MainButton: FC<MainInputProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
	svgNode,
	...props
}) => {
	const cx = cnBind.bind(styles)
	return (
		<button {...props} className={cx(styles.mainButton, props.className, { _iconInput: svgNode })}>
			{svgNode}
			{props.children}
		</button>
	)
}
