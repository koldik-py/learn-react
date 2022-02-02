import './employees-list-item.css'

function EmployeesListItem() {
	return (
		<li className="employees__item">
			<p className="employees__name">Kali</p>
			<input className="employees__sum" type="text" defaultValue="1000$"/>
			<button className="employees__btn1">
				<i className="fas fa-cookie"></i>
			</button>
			<button className="employees__btn2">
				<i className="fas fa-trash"></i>
			</button>
			<button className="employees__btn3">
				<i className="fas fa-star"></i>
			</button>
		</li>
	)
}
export default EmployeesListItem