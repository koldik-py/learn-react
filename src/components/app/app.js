import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


function App() {

	const data = [
		{name: "Anton I.",salary: 800, id:1},
		{name: "Jina I.",salary: 600, id:2},
		{name: "Cally I.",salary: 1200, id:3}
	]

	return (
		<div className="app">
		<AppInfo sum="564"/>
		<SearchPanel/>
		<EmployeesList data={data}/>
		<EmployeesAddForm/>
		</div>
	);
}
export default App;


