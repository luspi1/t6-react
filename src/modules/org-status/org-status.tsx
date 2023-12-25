import { type FC } from 'react'
import cn from 'classnames'

import styles from './index.module.scss'
import { useGetUserByIdQuery } from 'src/store/user/user.api'

export const OrgStatus: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
	const { data: userData } = useGetUserByIdQuery('0')
	return (
		<div className={cn(styles.orgStatus, props.className)}>
			<p>Коммерческий организатор</p>
			{userData?.activated ? (
				<span className={styles.confirmStatus}>Активирован</span>
			) : (
				<span className={styles.notConfirmStatus}>Не активирован</span>
			)}
		</div>
	)
}
