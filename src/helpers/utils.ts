export const formatToCurrency = (num: number) => {
	return new Intl.NumberFormat('ru-RU', { useGrouping: true }).format(num)
}
