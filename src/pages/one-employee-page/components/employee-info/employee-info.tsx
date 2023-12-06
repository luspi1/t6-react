import { type FC } from 'react'

import styles from './index.module.scss'
import avatarStub from 'src/assets/img/avatar-stub.png'
import { useGetUserByIdQuery } from 'src/store/user/user.api'
import { AccountActivity } from 'src/pages/one-employee-page/components/employee-info/components/account-activity'

export const EmployeeInfo: FC = () => {
	const { data } = useGetUserByIdQuery('0')

	if (!data) return <h3>нет данных о пользователе</h3>

	const {
		employees: { employeesList },
	} = data

	return (
		<div className={styles.employeeInfo}>
			<div className={styles.employeeAvatar}>
				<img src={employeesList[1].avatar ?? avatarStub} alt='avatar' />
			</div>
			<div className={styles.employeeContent}>
				<h3>{employeesList[1].fullName}</h3>
				<p className={styles.employeeStatus}>
					<span>{employeesList[1].typeEmployment}</span> сотрудник |{' '}
					<span>{employeesList[1].position}</span> | Сотрудник {employeesList[1].status}
				</p>

				<a href={`mailto:${employeesList[1].email}`}>{employeesList[1].email}</a>
				<p className={styles.employeePhone}>{employeesList[1].phone}</p>
				<AccountActivity isActive={employeesList[1].accountActivity} />
			</div>
		</div>
	)
}
