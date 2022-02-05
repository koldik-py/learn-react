import './employees-list.css'
import EmployeesListItem from '../employees-list-item/employees-list-item';



function EmployeesList({data, ondelite, onToggleProps}) {

	const elements = data.map( item => {
		
		const {id, ...itemProps} = item;

		return (
			<EmployeesListItem key={id} {...itemProps} 
							ondelite={() => ondelite(id)}
							onToggleProps={(e) => onToggleProps(id, e.currentTarget.getAttribute('data-toggle'))}
							/>
		)
	})

	return (
		<ul className="employees">
			{elements}
		</ul>	
	)
}

export default EmployeesList