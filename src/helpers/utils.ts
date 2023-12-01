import { type SelOption } from 'src/types/select'

export const formatToCurrency = (num: number) => {
	return new Intl.NumberFormat('ru-RU', { useGrouping: true }).format(num)
}

export const formatTableData = (data: Array<Record<string, string>>) => {
	return data.map((el) => Object.values(el))
}

export const getValue = (value: string, options: SelOption[]) => {
	return value ? options.find((option) => option.value === value) : ''
}
