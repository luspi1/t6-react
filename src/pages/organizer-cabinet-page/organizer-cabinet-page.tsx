import { type FC } from 'react'
import cn from 'classnames'

import styles from './index.module.scss'
import { useGetUserByIdQuery } from 'src/store/user/user.api'

import { CardInfo } from 'src/components/card-info/card-info'
import { OrgStatus } from 'src/modules/org-status/org-status'
import { Dropzone } from 'src/components/drop-zone/drop-zone'
import { GreenConfirmSVG } from 'src/UI/icons/greenConfirmSVG'
import { WebsiteSvg } from 'src/UI/icons/websiteSVG'

export const OrganizerCabinetPage: FC = () => {
	const { data } = useGetUserByIdQuery('0')
	return (
		<div className={styles.cabinetPage}>
			<p className={styles.cabinetDesc}>
				Это — внутренняя версия профиля организатора. В публичном доступе Ваша страница{' '}
				<a href='#'>выглядит так.</a>
			</p>
			<div className={styles.cabinetContent}>
				<div className={styles.cabinetLeft}>
					<CardInfo className={styles.cardInfo}>
						<OrgStatus />
						<Dropzone />
					</CardInfo>

					<CardInfo className={styles.createdEvents}>
						{data?.eventsStatistic.createdEventsCount === 25 ? (
							<p className={styles.noCreatedEvents}>Вы еще не создали ни одного мероприятия</p>
						) : (
							'Вы еще не создали ни одного мероприятия'
						)}
					</CardInfo>

					<CardInfo>
						<h5>Статистика</h5>

						<div>
							<h6>Мероприятия</h6>
							<p>
								Создал<span>25</span>
							</p>

							<p>
								Провел<span>18</span>
							</p>
							<p>
								Сейчас<span>2</span>
							</p>
							<p>
								Отменено<span>0</span>
							</p>
						</div>

						<div>
							<h6>Посетители</h6>
							<p>
								Всего<span>920</span>
							</p>

							<p>
								Платных<span>762</span>
							</p>
						</div>

						<div>
							<h6>Заработано</h6>
							<p>
								Всего<span>1 200 000.00 ₽</span>
							</p>
						</div>
					</CardInfo>

					<div>Тарифы</div>
					<div>Документы</div>
				</div>

				<div className={styles.cabinetRight}>
					<CardInfo>
						<div className={styles.cabinetInfoItem}>
							<p className={styles.cabinetInfoTitle}>Краткое название</p>
							<p className={styles.cabinetInfoValue}>{data?.cabinetInfo.shortOrganizationName}</p>
						</div>

						<div className={styles.cabinetInfoItem}>
							<p className={styles.cabinetInfoTitle}>Полное название</p>
							<p className={styles.cabinetInfoValue}>{data?.cabinetInfo.fullOrganizationName}</p>
						</div>

						<div className={styles.cabinetInfoItem}>
							<p className={styles.cabinetInfoTitle}>Торговая марка:</p>
							<p className={styles.cabinetInfoValue}>{data?.cabinetInfo.brandName}</p>
						</div>

						<div className={styles.cabinetInfoItem}>
							<p className={styles.cabinetInfoTitle}>Регион и город</p>
							<p className={styles.cabinetInfoValue}>{data?.cabinetInfo.region}</p>
						</div>

						<div className={styles.cabinetInfoItem}>
							<p className={styles.cabinetInfoTitle}>Интернет-сайт</p>
							<p className={styles.cabinetInfoValue}>
								<a href={data?.cabinetInfo.site}>{data?.cabinetInfo.site}</a>
								<WebsiteSvg />
							</p>
						</div>
					</CardInfo>

					<CardInfo>
						<div className={styles.cabinetInfoItem}>
							<p className={styles.cabinetInfoTitle}>E-mail / Логин</p>
							<p className={cn(styles.cabinetInfoValue, styles.email)}>{data?.cabinetInfo.email}</p>
						</div>

						<div className={styles.cabinetInfoItem}>
							<p className={styles.cabinetInfoTitle}>Пароль</p>
							<p className={styles.cabinetInfoValue}>
								{data?.cabinetInfo.hidePassword ? (
									<p className={styles.cabinetInfoValue}>*****************</p>
								) : (
									<p className={styles.cabinetInfoValue}>{data?.cabinetInfo.password}</p>
								)}
							</p>
						</div>

						<div className={styles.cabinetInfoItem}>
							<p className={styles.cabinetInfoTitle}>Пароль скрыт</p>

							<p className={styles.cabinetInfoValue} onClick={() => console.log(123)}>
								{data?.cabinetInfo.hidePassword ? 'Показать пароль' : 'Скрыть пароль'}
							</p>
						</div>

						<div className={styles.cabinetInfoItem}>
							<p className={styles.cabinetInfoTitle}>Номер телефона</p>
							<p className={styles.cabinetInfoValue}>{data?.cabinetInfo.phone}</p>
						</div>

						{data?.cabinetInfo.authenticationSecondFactor ? (
							<div className={cn(styles.cabinetInfoItem, styles.authFactor)}>
								<GreenConfirmSVG />
								Второй фактор аутентификации включен
							</div>
						) : null}
					</CardInfo>

					<CardInfo className={styles.eventsDescription}>
						<h5>Описание организатора мероприятий</h5>
						<p>{data?.eventsDescription.description}</p>
						<h6>Деятельность</h6>
						<ul>{data?.eventsDescription.activity.map((item) => <li key={item}>{item}</li>)}</ul>
					</CardInfo>
				</div>

				<div className={styles.cabinetLRight}></div>
			</div>
		</div>
	)
}
