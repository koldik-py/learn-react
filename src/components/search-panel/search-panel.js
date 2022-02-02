import "./search-panel.css"
import AppFilter from '../app-filter/app-filter'

function SearchPanel (){
	return (
		<div className="search-panel">
			<input type="text"
					className="form-control search-input"
					placeholder="Найти сотрудника"/>
			<AppFilter/>
		</div>
		)
}

export default SearchPanel