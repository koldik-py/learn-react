import './employees-list.css'
import EmployeesListItem from '../employees-list-item/employees-list-item';



function EmployeesList({data}) {

	const elements = data.map( item => {
		
		const {id, ...itemProps} = item;

		return (
			<EmployeesListItem key={id} {...itemProps}/>
		)
	})

	return (
		<ul className="employees">
			{elements}
		</ul>	
	)
}

export default EmployeesList