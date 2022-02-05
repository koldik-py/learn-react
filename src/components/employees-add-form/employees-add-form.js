import {Component} from 'react';
import './employees-add-form.css';


class EmployeesAddForm extends Component {
	constructor (props) {
		super(props);
		this.state = {
			name: '',
			salary: ''
		}
	}

	onValueChange = (e) => this.setState({[e.target.name]: e.target.value})

	onClickBtn = (e) => {
		e.preventDefault();
		this.props.create(this.state)
		this.setState( {name: '', salary: ''} )
	}

	render() {

		const {name, salary} = this.state;
		return (
			<div className="formAdd">
				<h3>Добавьте нового сотрудника</h3>
				<form className="formAdd__form">
					<input type="text" 
						className="formAdd__name"
						placeholder="Как его зовут?"
						name="name"
						value={name}
						onChange={this.onValueChange}/>
					<input type="number" 
						className="formAdd__sum"
						placeholder="З\П в $?"
						name="salary"
						value={salary}
						onChange={this.onValueChange}/>
					<button  type="submit"
						className="formAdd__btn"
						onClick={this.onClickBtn}
						>Добавить</button>
				</form>
			</div>	
		)
	}
}
export default EmployeesAddForm