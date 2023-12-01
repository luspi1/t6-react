export const formatToCurrency = (num: number) => {
	return new Intl.NumberFormat('ru-RU', { useGrouping: true }).format(num)
}

export const formatTableData = (data: Array<Record<string, string>>) => {
	return data.map((el) => Object.values(el))
}
