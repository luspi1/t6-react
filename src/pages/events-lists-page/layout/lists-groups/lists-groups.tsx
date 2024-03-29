import { type FC } from 'react'
import { SearchPanel } from 'src/components/search-panel/search-panel'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { PlusSvg } from 'src/UI/icons/plusSVG'

import { groupsSelect } from 'src/pages/events-lists-page/layout/lists-groups/consts'
import { type FormDataWithEntries } from 'src/types/global'

export const ListsGroups: FC = () => {
	const getSearchPanelValues = (data: FormDataWithEntries) => {
		console.log(data)
	}
	return (
		<div>
			<SearchPanel
				additionalNode={
					<MainButton svgNode={<PlusSvg />} as='button'>
						Добавить группу
					</MainButton>
				}
				handleFormData={getSearchPanelValues}
				selectOptions={groupsSelect}
				searchConfig={{
					name: 'groups_search',
					placeholder: 'Поиск по названию группы',
				}}
			/>
			<h2>Список групп</h2>
		</div>
	)
}
