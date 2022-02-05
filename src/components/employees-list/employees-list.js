import './employees-list.css'
import EmployeesListItem from '../employees-list-item/employees-list-item';



function EmployeesList({data, ondelite}) {

	const elements = data.map( item => {
		
		const {id, ...itemProps} = item;

		return (
			<EmployeesListItem key={id} {...itemProps} ondelite={() => ondelite(id)}/>
		)
	})

	return (
		<ul className="employees">
			{elements}
		</ul>	
	)
}

export default EmployeesList