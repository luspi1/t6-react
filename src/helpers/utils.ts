import { type SelOption } from 'src/types/select'

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

export const formatToTable = <T>(dataArr: T[], keyArr: Array<keyof T>) => {
	return dataArr.map((el) => {
		return keyArr.map((key) => String(el[key]))
	})
}

export const getValue = (value: string, options: SelOption[]) => {
	return value ? options.find((option) => option.value === value) : ''
}
