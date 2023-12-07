import { type FC, useState } from 'react'
import { EmployeesTable } from 'src/pages/employees-page/employees-table/employees-table'
import { SearchPanel } from 'src/components/search-panel/search-panel'
import { employeeSelect } from 'src/pages/employees-page/consts'
import { type SearchPanelData } from 'src/types/searchPanel'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { PlusSvg } from 'src/UI/icons/plusSVG'
import { Pagination } from 'src/components/pagination/pagination'
import { AddEmployeeModal } from 'src/modals/add-employee-modal/add-employee-modal'

export const EmployeesPage: FC = () => {
	const getSearchPanelValues = (data: SearchPanelData) => {
		console.log(data)
	}

	const [activeEmployeeModal, setActiveEmployeeModal] = useState<boolean>(false)

	return (
		<>
			<AddEmployeeModal
				activeEmployeeModal={activeEmployeeModal}
				setActiveEmployeeModal={setActiveEmployeeModal}
			/>
			<SearchPanel
				additionalNode={
					<MainButton
						svgNode={<PlusSvg />}
						onClick={() => setActiveEmployeeModal(!activeEmployeeModal)}
					>
						Добавить сотрудника
					</MainButton>
				}
				handleFormData={getSearchPanelValues}
				selectOptions={employeeSelect}
				searchConfig={{ name: 'employee_search', placeholder: 'Поиск по фамилии или имени' }}
			/>
			<EmployeesTable />
			<Pagination pagesCount={5} activePage={1} />
		</>
	)
}
