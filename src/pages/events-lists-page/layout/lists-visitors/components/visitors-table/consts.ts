import { type SelOption } from 'src/types/select'

export const TableColTitles = [
	'№',
	'Фамилия, имя, отчество, позывной',
	'Автомобиль',
	'Тип',
	'Билет',
	'Регистрация',
	'Допуск',
	'Оплата',
]

export const AdmissionSelectOptions: SelOption[] = [
	{ value: '0', label: 'ожидает' },
	{ value: '1', label: 'допущен' },
]
export const PaymentSelectOptions: SelOption[] = [
	{ value: '0', label: 'оплачено' },
	{ value: '1', label: 'не платил' },
]
