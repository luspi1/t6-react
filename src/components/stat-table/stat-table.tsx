import { type FC } from 'react'

import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { formatToCurrency } from 'src/helpers/utils'

type StatTableProps = {
	title: string
	redirection?: {
		title: string
		link: string
	}
	tableTitles: string[]
	tableData: number[]
	isCurrency?: boolean
}
export const StatTable: FC<StatTableProps> = ({
	title,
	redirection,
	tableTitles,
	tableData,
	isCurrency,
}) => {
	return (
		<div className={styles.statTable}>
			<div className={styles.statTableTop}>
				<h4>{title}</h4>
				{redirection && (
					<Link className={styles.statLink} to={redirection.link}>
						{redirection.title}
					</Link>
				)}
			</div>
			<div className={styles.statInnerTable}>
				<ul className={styles.statInnerTableTop}>
					{tableTitles?.map((el) => <li key={el}>{el}</li>)}
				</ul>
				<ul className={styles.statInnerTableBottom}>
					{tableData?.map((el, idx) =>
						isCurrency ? (
							<li className={styles.currencyData} key={idx}>
								{formatToCurrency(el)}
							</li>
						) : (
							<li key={idx}>{el}</li>
						),
					)}
				</ul>
			</div>
		</div>
	)
}
