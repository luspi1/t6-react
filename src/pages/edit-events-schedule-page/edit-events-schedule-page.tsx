import { type FC } from 'react'
import { NavLink } from 'react-router-dom'

import { SectionTitle } from 'src/components/section-title/section-title'

import { LinkArrowSVG } from 'src/UI/icons/linkArrowSVG'

import { AppRoute } from 'src/helpers/consts'

export const EditEventsSchedulePage: FC = () => {
	return (
		<>
			<SectionTitle />
			<NavLink to={AppRoute.Home}>
				<LinkArrowSVG />
				Перейти к просмотру расписания
			</NavLink>
		</>
	)
}
