import { type FC } from 'react'
import { SearchPanel } from 'src/components/search-panel/search-panel'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { PlusSvg } from 'src/UI/icons/plusSVG'
import { type SearchPanelData } from 'src/types/searchPanel'
import { visitorsSelect } from 'src/pages/events-lists-page/layout/lists-visitors/consts'

export const ListsVisitors: FC = () => {
	const getSearchPanelValues = (data: SearchPanelData) => {
		console.log(data)
	}
	return (
		<div>
			<SearchPanel
				additionalNode={
					<MainButton svgNode={<PlusSvg />} as='button'>
						Добавить посетителя
					</MainButton>
				}
				handleFormData={getSearchPanelValues}
				selectOptions={visitorsSelect}
				searchConfig={{
					name: 'visitors_search',
					placeholder: 'Поиск по фамилии или имени',
				}}
			/>
			<h2>Список посетителей</h2>
		</div>
	)
}
