import React, { type FC, type ReactNode } from 'react'

import styles from './index.module.scss'
import cn from 'classnames'

type TableCells = Array<string | ReactNode>

type AddEl = {
	col: number
	el: ReactNode
}

type CustomTableProps = {
	colTitles?: string[]
	cellsData: TableCells[]
	additionalElements?: AddEl[]
}

export const CustomTable: FC<CustomTableProps & React.HTMLAttributes<HTMLTableElement>> = ({
	colTitles,
	cellsData,
	className,
	additionalElements,
	...rest
}) => {
	const copyCellsData = [...cellsData]

	if (additionalElements && copyCellsData[0]?.length !== colTitles?.length) {
		additionalElements?.forEach((addEl) => {
			copyCellsData.forEach((cells) => cells.splice(addEl.col, 0, addEl.el))
		})
	}

	return (
		<table {...rest} className={cn(styles.customTable, className)}>
			{!!colTitles && (
				<thead>
					<tr>
						{colTitles.map((title, idx) => (
							<th key={idx}>{title}</th>
						))}
					</tr>
				</thead>
			)}

			<tbody>
				{copyCellsData?.map((row, rowIdx) => (
					<tr key={rowIdx}>
						{row.map((cell, cellIdx) => (
							<td key={cellIdx}>{cell}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	)
}
