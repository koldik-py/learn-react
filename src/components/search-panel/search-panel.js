import "./search-panel.css"
import AppFilter from '../app-filter/app-filter'

function SearchPanel (props){
	const {onSearch} = props;

	return (
		<div className="search-panel">
			<input type="text"
					className="form-control search-input"
					placeholder="Найти сотрудника"
					onChange={onSearch}
					/>
			<AppFilter/>
		</div>
		)
}

export default SearchPanel