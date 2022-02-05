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
				{name: "Anton I.", salary: 800, star: false, increase: false , id:1},
				{name: "Anton1 I.", salary: 800, star: false, increase: false , id:2},
				{name: "Anton2 I.", salary: 800, star: false, increase: false , id:3},]
		return data
	}
	onToggleProps = (id, prop) => {
		this.setState( ({data}) => ({
			data: data.map( item => item.id === id ? {...item, [prop]: !item[prop]} : {...item} )
		}) )
	} 

	onDelete = (id) => {
		this.setState( ({data}) => ({ data: data.filter(elem => elem.id != id) }) )
	}
	onCreate = (onData) => {
		//				name, salary
		const newUser = {...onData,
						star: false, 
						increase: false,
						id: this.state.data.length + 1};
		
		if (newUser.name.length >= 2 && newUser.salary > 0) {
			this.setState( ({data}) => ({data: [...data, newUser]}) )
		}
	}

	valueEmpl = (name) => {
		if (name === 'value') return this.state.data.length
		if (name === 'onIncrease') return this.state.data.filter(elem => elem.increase === true).length
	}

	onSearch = (e) => {
		this.setState( ({data}) => ({ data: data.filter(elem => elem.name.startsWith(e.target.value)) }) )
	}

	render() {
		return (
		<div className="app">
		<AppInfo onIncrease={this.valueEmpl('onIncrease')}
				value={this.valueEmpl('value')}/>
		<SearchPanel onSearch={this.onSearch}/>
		<EmployeesList data={this.state.data} 
					ondelite={this.onDelete}
					onToggleProps={this.onToggleProps}
					/>
		<EmployeesAddForm create={this.onCreate}/>
		</div>
	)
	}
}
export default App;


