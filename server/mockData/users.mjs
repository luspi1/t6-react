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
					typeEmployee: 'постоянный',
					accountActivity: false,
					isActiveEmployee: true,
					position: 'помощник',
					secondName: 'Никанорова',
					name: 'Василиса',
					patronymicName: 'Константиновна',
					alias: 'Вася',
					dateEmployment: '27.03.2023',
					email: 'test@ya.ru',
					mobileNumber: '+7 (999) 999-99-99',
					avatar:
						'https://masterpiecer-images.s3.yandex.net/a2e0950d474b11ee99acbaea8797b5f2:upscaled',
					typeAcc: '1',
					tableEvents: [
						[
							'1',
							'Прошедшее',
							'Вратарь',
							'Битва на Неве — 2023 (спортивный турнир)',
							'23.03.2023 — 24.03.2023',
						],
					],
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
					typeEmployee: 'временный',
					accountActivity: true,
					isActiveEmployee: false,
					position: 'вратарь',
					secondName: 'Иванов',
					name: 'Иван',
					patronymicName: 'Иванович',
					alias: 'Оригинал',
					dateEmployment: '27.03.2023',
					email: 'ivanov@inanov.iv',
					mobileNumber: '+7 (900) 123-93-45',
					typeAcc: '2',
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

		eventsStatistic: {
			createdEventsCount: 25,
			heldEventsCount: 18,
			currentEventsCount: 2,
			cancelledEventsCount: 0,
			totalVisitors: 920,
			paidVisitors: 762,
			earnings: 1200000,
		},

		
		tariffs: [
			{
				title: 'Тариф 1',
				description: 'Lorem ipsum dolor sit amet, consectetur...',
				cost: 299,
			},
			{
				title: 'Тариф 2',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...',
				cost: 699,
			},
		],

		documents: [
			{
				type: 'Счет',
				title: 'Счет № 23-233 от 03.03.2023г, ООО...',
				date: '27.03.2023',
			},
			{
				type: 'Квитанция',
				title: 'Квитанция ООО Мусоровоз от 04.04.2023г...',
				date: '27.03.2023',
			},
		],

		cabinetInfo: {
			shortOrganizationName: 'Еще один Организатор',
			fullOrganizationName: 'ООО «Организатор и сыновья»',
			brandName: 'ОРГАНИЗАТОРИЩЕ!!!',
			region: 'Тамбовская область, Тамбов',
			site: 'www.nashsite.com',
			email: 'info@nashsite.com',
			password: '12345',
			phone: '+79999999999',
			authenticationSecondFactor: true,
		},

		eventsDescription: {
			description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
				Aenean euismod bibendum laoreet. Proin gravida dolor sit 
				amet lacus accumsan et viverra justo commodo.`,
			activity: ['Проведение культурных мероприятий', 'Научная деятельность', 'Журналистика'],
		},
	},
]
