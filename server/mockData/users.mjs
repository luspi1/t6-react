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
		employees: {
			tableEmployees: [
				[
					'1',
					'Постоянная',
					'Помощник',
					'Никанорова Василиса Константиновна (Вася)',
					'27.03.2023',
					'Активен',
				],
				['2', 'Временная', 'Вратарь', 'Иванов Иван Иванович (Оригинал)', '27.03.2023', 'Активен'],
			],
			employeesList: [
				{
					id: '1',
					typeEmployment: 'постоянный',
					status: 'активен',
					accountActivity: false,
					position: 'помощник',
					fullName: 'Никанорова Василиса Константиновна (Вася)',
					dateEmployment: '27.03.2023',
					email: 'test@ya.ru',
					phone: '+7 (999) 999-99-99',
					tableEvents: [
						[
							'1',
							'Прошедшее',
							'Вратарь',
							'Битва на Неве — 2023 (спортивный турнир)',
							'23.03.2023 — 24.03.2023',
						],
					],
					avatar:
						'https://masterpiecer-images.s3.yandex.net/a2e0950d474b11ee99acbaea8797b5f2:upscaled',
					events: [
						{
							id: '1',
							relevance: 'Прошедшее',
							position: 'Нападающий',
							title: 'Битва на Неве — 2023 (спортивный турнир)',
							dates: '23.03.2023 — 24.03.2023',
						},
					],
				},
				{
					id: '2',
					typeEmployment: 'временный',
					status: 'активен',
					accountActivity: true,
					position: 'вратарь',
					fullName: 'Иванов Иван Иванович (Оригинал)',
					dateEmployment: '27.03.2023',
					email: 'ivanov@inanov.iv',
					phone: '+7 (999) 999-99-99',
					tableEvents: [
						[
							'1',
							'Прошедшее',
							'Вратарь',
							'Битва на Неве — 2023 (спортивный турнир)',
							'23.03.2023 — 24.03.2023',
						],
						[
							'2',
							'Предстоящее',
							'Вратарь',
							'Судейский семинар ММА (учебное мероприятие)',
							'26.01.2024 — 26.01.2024',
						],
						[
							'3',
							'Предстоящее',
							'Вратарь',
							'Судейский семинар ММА (учебное мероприятие)',
							'29.01.2024 — 30.01.2024',
						],
					],
					events: [
						{
							id: '1',
							relevance: 'Прошедшее',
							position: 'Вратарь',
							title: 'Битва на Неве — 2023 (спортивный турнир)',
							dates: '23.03.2023 — 24.03.2023',
						},
						{
							id: '2',
							relevance: 'Предстоящее',
							position: 'Вратарь',
							title: 'Судейский семинар ММА (учебное мероприятие)',
							dates: '26.01.2024 — 26.01.2024',
						},
						{
							id: '3',
							relevance: 'Предстоящее',
							position: 'Вратарь',
							title: 'Судейский семинар ММА (учебное мероприятие)',
							dates: '29.01.2024 — 30.01.2024',
						},
					],
				},
			],
		},
		contracts: [
			{
				id: '0',
				name: 'Договор № 27-123',
				date: '23.06.2023',
				status: 'договор подписан обеими сторонами',
				//type: 'contract'
				files: [
					{ id: '0', data: 'A1' },
					{ id: '1', data: 'A2' },
				],
			},

			{
				id: '1',
				name: 'Договор № 27-123',
				date: '23.06.2023',
				status: 'договор не подписан',
				//type: 'contract'
				files: [{ id: '2', data: 'B1' }],
			},
		],

		payments: [
			{
				id: '2',
				name: 'Счёт № 27-123',
				date: '23.06.2023',
				status: 'счет оплачен',
				cost: '20000',
				//type: 'payment'
				files: [{ id: '3', data: 'C1' }],
			},

			{
				id: '3',
				name: 'Акт № 27-123',
				date: '23.06.2023',
				status: 'акт не подписан',
				cost: '20000',
				//type: 'payment'
				files: [
					// { id: '5', data: 'D1' },
				],
			},
		],
	},
]

export let contracts = users
	.reduce(function (result, user) {
		return [
			...result,
			...user.contracts.map((item) => item.files),
			...user.payments.map((item) => item.files),
		]
	}, [])
	.flat()
