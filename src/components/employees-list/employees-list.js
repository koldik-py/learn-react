import './employees-list.css'
import EmployeesListItem from '../employees-list-item/employees-list-item';



function EmployeesList() {
	return (
		<ul className="employees">
			<EmployeesListItem/>
			<EmployeesListItem/>
			<EmployeesListItem/>
		</ul>	
	)
}

export default EmployeesList