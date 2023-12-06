import { type FC } from 'react'
import { type SearchPanelData } from 'src/types/searchPanel'
import { SearchPanel } from 'src/components/search-panel/search-panel'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { PlusSvg } from 'src/UI/icons/plusSVG'
import { employeeSelect } from 'src/pages/employees-page/consts'
import { EmployeesTable } from 'src/pages/employees-page/employees-table/employees-table'
import { Pagination } from 'src/components/pagination/pagination'

export const WorkforcePage: FC = () => {
	const getSearchPanelValues = (data: SearchPanelData) => {
		console.log(data)
	}
	return (
		<>
			<SearchPanel
				additionalNode={<MainButton svgNode={<PlusSvg />}>Добавить сотрудника</MainButton>}
				handleFormData={getSearchPanelValues}
				selectOptions={employeeSelect}
				searchConfig={{ name: 'workforce_search', placeholder: 'Поиск по фамилии или имени' }}
			/>
			<EmployeesTable />
			<Pagination pagesCount={5} activePage={3} />
		</>
	)
}
