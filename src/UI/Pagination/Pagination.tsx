import { type FC } from 'react'

import styles from './index.module.scss'

type PaginationProps = {
	paginationSteps: number[]
}

export const Pagination: FC<PaginationProps> = ({ paginationSteps }) => {
	return (
		<>
			<ul className={styles.pagination}>
				{paginationSteps.map((item) => (
					<li key={item}>{item}</li>
				))}
				<li>дальше</li>
			</ul>
		</>
	)
}
