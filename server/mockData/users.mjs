export let users = [
	{
		id: '0',
		name: 'Светлана',
		avatar: 'https://avatarko.ru/img/kartinka/2/devushka_1393.jpg',
		activated: true,
		orgStatistics: {
			events: [21, 6, 11, 4],
			visits: [900, 830, 70, 900],
			fundraisers: [99999999, 99000000, -999999, 4],
			percentEvents: 25
		},
		employees: {
			employeesList: [
				{
					id: '1',
					typeEmployment: 'Постоянная',
					position: 'Помощник',
					fullName: 'Никанорова Василиса Константиновна (Вася)',
					dateEmployment: '27.03.2023',
					status: 'Активен'
				},
				{
					id: '2',
					typeEmployment: 'Временная',
					position: 'Вратарь',
					fullName: 'Иванов Иван Иванович (Оригинал)',
					dateEmployment: '27.03.2023',
					status: 'Активен'
				}
			]
		},
		contracts: [
			{
				id: '0',
				name: 'Договор № 27-123',
				date: '23.06.2023',
				status: 'договор подписан обеими сторонами'
			},

			{
				id: '1',
				name: 'Договор № 27-123',
				date: '23.06.2023',
				status: 'договор не подписан'
			}
		],

		payments: [
			{
				id: '0',
				name: 'Счёт № 27-123',
				date: '23.06.2023',
				status: 'счет оплачен'
			},

			{
				id: '1',
				name: 'Акт № 27-123',
				date: '23.06.2023',
				status: 'акт не подписан'
			}
		]
	}
]
