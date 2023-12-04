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
			percentEvents: 25,
		},

		contracts: [
			{
				id: '0',
				name: 'Договор № 27-123',
				date: '23.06.2023',
				status: 'договор подписан обеими сторонами',
			},

			{
				id: '1',
				name: 'Договор № 27-123',
				date: '23.06.2023',
				status: 'договор не подписан',
			},
		],

		payments: [
			{
				id: '0',
				name: 'Счёт № 27-123',
				date: '23.06.2023',
				status: 'счет оплачен',
				cost: '20 000'
			},

			{
				id: '1',
				name: 'Акт № 27-123',
				date: '23.06.2023',
				status: 'акт не подписан',
				cost: '20 000'
			},
		],
	},
]
