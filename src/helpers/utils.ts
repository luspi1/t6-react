export const formatToCurrency = (num: number) => {
	return new Intl.NumberFormat('ru-RU', { useGrouping: true }).format(num)
}

export const formatToCurrencyWithSymbol = (num: number) => {
	return new Intl.NumberFormat('ru-RU', {
		useGrouping: true,
		style: 'currency',
		currency: 'RUB',
	}).format(num)
}

export const formatFormData = <T extends NonNullable<object | string>>(data: T) => {
	const formatArr = Object.entries(data).map((el) => {
		if (el[1].value) {
			return [el[0], el[1].value]
		} else return [el[0], el[1]]
	})
	return Object.fromEntries(formatArr)
}
