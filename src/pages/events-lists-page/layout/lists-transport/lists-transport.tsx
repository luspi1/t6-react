import { type FC } from 'react'
import { type FormDataWithEntries } from 'src/types/global'

import { SearchPanel } from 'src/components/search-panel/search-panel'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { PlusSvg } from 'src/UI/icons/plusSVG'
import { transportSelect } from 'src/pages/events-lists-page/layout/lists-transport/consts'

export const ListsTransport: FC = () => {
	const getSearchPanelValues = (data: FormDataWithEntries) => {
		console.log(data)
	}
	return (
		<div>
			<SearchPanel
				additionalNode={
					<MainButton svgNode={<PlusSvg />} as='button'>
						Добавить ТС
					</MainButton>
				}
				handleFormData={getSearchPanelValues}
				selectOptions={transportSelect}
				searchConfig={{
					name: 'transport_search',
					placeholder: 'Поиск по фамилии владельца',
				}}
			/>
			<h2>Список владельцев ТС</h2>
		</div>
	)
}
