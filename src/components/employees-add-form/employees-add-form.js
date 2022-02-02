import './employees-add-form.css'

function EmployeesAddForm() {
	return (
		<div className="formAdd">
			<h3>Добавьте нового сотрудника</h3>
			<form className="formAdd__form">
				<input type="text" 
				className="formAdd__name"
				placeholder="Как его зовут?"
				/>
				<input type="text" 
				className="formAdd__sum"
				placeholder="З\П в $?"
				/>
				<button type="submit" className="formAdd__btn">Добавить</button>
			</form>
		</div>	
	)
}
export default EmployeesAddForm