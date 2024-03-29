import { type FC } from 'react'
import { type FormDataWithEntries } from 'src/types/global'

import { employeeSelect } from 'src/pages/employees-page/consts'

import { SearchPanel } from 'src/components/search-panel/search-panel'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { PlusSvg } from 'src/UI/icons/plusSVG'
import { EmployeesTable } from 'src/pages/employees-page/employees-table/employees-table'
import { Pagination } from 'src/components/pagination/pagination'
import { EmployeeModal } from 'src/modals/employee-modal/employee-modal'
import { useActions } from 'src/hooks/actions/actions'

export const WorkforcePage: FC = () => {
	const { setEmployeeModal } = useActions()

	const getSearchPanelValues = (data: FormDataWithEntries) => {
		console.log(data)
	}
	return (
		<>
			<EmployeeModal />
			<SearchPanel
				additionalNode={
					<MainButton
						svgNode={<PlusSvg />}
						onClick={() => setEmployeeModal({ isActive: true, isEdit: false, formData: null })}
						as='button'
					>
						Добавить сотрудника
					</MainButton>
				}
				handleFormData={getSearchPanelValues}
				selectOptions={employeeSelect}
				searchConfig={{ name: 'workforce_search', placeholder: 'Поиск по фамилии или имени' }}
			/>
			<EmployeesTable />
			<Pagination pagesCount={5} activePage={3} />
		</>
	)
}
