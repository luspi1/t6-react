import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

import styles from './index.module.scss'
import { type FC } from 'react'

ChartJS.register(ArcElement, Tooltip, Legend)

type RoundChartProps = {
	title?: string
	percentData: number
}

export const RoundChart: FC<RoundChartProps> = ({ title, percentData }) => {
	const data = {
		labels: [],
		datasets: [
			{
				data: [percentData, 100 - percentData],
				backgroundColor: ['#55D6BE', '#EAEFF2'],
				borderColor: ['transparent'],
				borderWidth: 1,
			},
		],
	}

	return (
		<div className={styles.roundChartWrapper}>
			<h4>{title}</h4>
			<div className={styles.roundChart}>
				<div className={styles.roundChartInfo}>{percentData}%</div>
				<Pie data={data} width={140} height={140} />
			</div>
		</div>
	)
}
