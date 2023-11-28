import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)
const data = {
	labels: [],
	datasets: [
		{
			data: [25, 75],
			backgroundColor: ['#55D6BE', '#EAEFF2'],
			borderColor: ['rgba(255, 99, 132, 0)', 'rgba(54, 162, 235, 0)'],
			borderWidth: 1,
		},
	],
}
export const RoundChart = () => {
	return (
		<div>
			<Pie data={data} />
		</div>
	)
}
