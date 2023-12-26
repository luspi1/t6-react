import React, { type FC, type ReactNode } from 'react'
import cnBind from 'classnames/bind'

import styles from './index.module.scss'

type MainLinkProps = {
	svgNode?: ReactNode
}
export const MainLink: FC<MainLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
	svgNode,
	...props
}) => {
	const cx = cnBind.bind(styles)
	return (
		<a {...props} className={cx(styles.mainLink, props.className, { _iconInput: svgNode })}>
			{svgNode}
			{props.children}
		</a>
	)
}
