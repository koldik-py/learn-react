import './app-filter.css'

const AppFilter = () => {
	return (
		<div className="btn">
			<button className="btn__click btn__click--active">Все сотрудники</button>
			<button className="btn__click">На повышение</button>
			<button className="btn__click">З/П больше 1000 $</button>
		</div>
		)
}
export default AppFilter