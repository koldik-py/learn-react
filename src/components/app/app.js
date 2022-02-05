import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.getData()
		}
	}
	
	getData(){
		const data = [
				{name: "Anton I.",salary: 800, id:1},
				{name: "Jina I.",salary: 600, id:2},
				{name: "Cally I.",salary: 1200, id:3}]
		return data
	}

	onDelete = (id) => {
		this.setState( ({data}) => ({ data: data.filter(elem => elem.id != id) }) )
	}
	onCreate = (onData) => {
		//				name, salary
		const newUser = {...onData,
						id: this.state.data.length + 1};
		this.setState( ({data}) => ({data: [...data, newUser]}) )
		// this.setState( ({data}) => ({data: data.concat(newUser)}) )
	}

	render() {
		return (
		<div className="app">
		<AppInfo sum="564"/>
		<SearchPanel/>
		<EmployeesList data={this.state.data} ondelite={this.onDelete}/>
		<EmployeesAddForm create={this.onCreate}/>
		</div>
	)
	}
}
export default App;


