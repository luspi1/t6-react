import { type FC } from 'react'
import { ProfileContentHeader } from 'src/modules/profile-content-header/profile-content-header'
import { ProfileContent } from 'src/components/profile-content/profile-content'

export const StatisticsPage: FC = () => {
	return (
		<>
			<ProfileContentHeader mainTitle='Организатор' navItems='Статистика' />
			<ProfileContent>
				<h3>Контент статистики</h3>
			</ProfileContent>
		</>
	)
}
