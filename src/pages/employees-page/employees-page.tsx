import { type FC } from 'react'
import { EmployeesTable } from 'src/pages/employees-page/employees-table/employees-table'
import { SearchPanel } from 'src/components/search-panel/search-panel'
import { employeeSelect } from 'src/pages/employees-page/consts'
import { type SearchPanelData } from 'src/types/searchPanel'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { PlusSvg } from 'src/UI/icons/plusSVG'
import { Pagination } from 'src/components/pagination/pagination'
import { useActions } from 'src/hooks/actions/actions'
import { EmployeeModal } from 'src/modals/employee-modal/employee-modal'
import { useAppSelector } from 'src/hooks/store'
import { getEmployeeModalActivity } from 'src/store/modals/modals.selectors'

export const EmployeesPage: FC = () => {
	const { setActiveEmployee, setEmployeeFormData } = useActions()

	const employeeModalActivity = useAppSelector(getEmployeeModalActivity)
	const getSearchPanelValues = (data: SearchPanelData) => {
		console.log(data)
	}
	const addEmployee = (data: FormData) => {
		console.log(data)
	}

	const changeActivityEmployeeModal = () => {
		setEmployeeFormData(null)
		setActiveEmployee(true)
	}

	return (
		<>
			<EmployeeModal
				activeEmployeeModal={employeeModalActivity}
				setActiveEmployeeModal={setActiveEmployee}
				handleSubmit={addEmployee}
			/>
			<SearchPanel
				additionalNode={
					<MainButton svgNode={<PlusSvg />} onClick={changeActivityEmployeeModal}>
						Добавить сотрудника
					</MainButton>
				}
				handleFormData={getSearchPanelValues}
				selectOptions={employeeSelect}
				searchConfig={{
					name: 'employee_search',
					placeholder: 'Поиск по фамилии или имени',
				}}
			/>
			<EmployeesTable />
			<Pagination pagesCount={5} activePage={1} />
		</>
	)
}
