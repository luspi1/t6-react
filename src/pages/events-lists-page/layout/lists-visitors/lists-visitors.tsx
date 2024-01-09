import { type FC } from 'react'
import { SearchPanel } from 'src/components/search-panel/search-panel'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { PlusSvg } from 'src/UI/icons/plusSVG'
import { visitorsSelect } from 'src/pages/events-lists-page/layout/lists-visitors/consts'
import { type FormDataWithEntries } from 'src/types/global'
import { VisitorsTable } from 'src/pages/events-lists-page/layout/lists-visitors/components/visitors-table/visitors-table'

export const ListsVisitors: FC = () => {
	const getSearchPanelValues = (data: FormDataWithEntries) => {
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
			<VisitorsTable />
		</div>
	)
}
