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
					status: 'Активен',
					email: 'test@ya.ru',
					phone: '+7 (999) 999-99-99',
					avatar: 'https://masterpiecer-images.s3.yandex.net/a2e0950d474b11ee99acbaea8797b5f2:upscaled',
					events: [
						{
							id:'1',
							relevance: 'Прошедшее',
							position: 'Нападающий',
							title: 'Битва на Неве — 2023 (спортивный турнир)',
							dates: '23.03.2023 — 24.03.2023'
						}
					]
				},
				{
					id: '2',
					typeEmployment: 'Временная',
					position: 'Вратарь',
					fullName: 'Иванов Иван Иванович (Оригинал)',
					dateEmployment: '27.03.2023',
					status: 'Активен',
					email: 'ivanov@inanov.iv',
					phone: '+7 (999) 999-99-99',
					events: [
						{
							id:'1',
							relevance: 'Прошедшее',
							position: 'Вратарь',
							title: 'Битва на Неве — 2023 (спортивный турнир)',
							dates: '23.03.2023 — 24.03.2023'
						},
						{
							id:'2',
							relevance: 'Предстоящее',
							position: 'Вратарь',
							title: 'Судейский семинар ММА (учебное мероприятие)',
							dates: '26.01.2024 — 26.01.2024'
						},
						{
							id:'3',
							relevance: 'Предстоящее',
							position: 'Вратарь',
							title: 'Судейский семинар ММА (учебное мероприятие)',
							dates: '29.01.2024 — 30.01.2024'
						},
					]
				}
			]
		},
		contracts: [
			{
				id: '0',
				name: 'Договор № 27-123',
				date: '23.06.2023',
				status: 'договор подписан обеими сторонами',
				type: 'contract'
			},

			{
				id: '1',
				name: 'Договор № 27-123',
				date: '23.06.2023',
				status: 'договор не подписан',
				type: 'contract'
			}
		],

		payments: [
			{
				id: '0',
				name: 'Счёт № 27-123',
				date: '23.06.2023',
				status: 'счет оплачен',
				cost: '20000',
				type: 'payment'
			},

			{
				id: '1',
				name: 'Акт № 27-123',
				date: '23.06.2023',
				status: 'акт не подписан',
				cost: '20000',
				type: 'payment'
			},
		],
	},
]
