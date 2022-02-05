import { Component } from 'react';
import './employees-list-item.css'



class EmployeesListItem extends Component {

	constructor(props) {
		super(props);
		this.state = {
			star: false,
			increase: false
		}
	}

	employeesTop = () => this.setState( ({star}) => ({star: !star}) )

	employeesCookie = () => this.setState( ({increase}) => ({increase: !increase}) )

	render() {
		const {name, salary, ondelite} = this.props;
		return (
			<li className={"employees__item "+ (this.state.increase ? "increase": '')}>
				<p onClick={this.employeesTop} className="employees__name">{name}</p>
				<input className="employees__sum" type="text" defaultValue={salary + '$'}/>
				<button onClick={this.employeesCookie} className="employees__btn1">
					<i className="fas fa-cookie"></i>
				</button>
				<button className="employees__btn2"
						onClick={ondelite}>
					<i className="fas fa-trash"></i>
				</button>
				<button className={"employees__btn3" + (this.state.star ? ' employees__btn3--active':'')}>
					<i className="fas fa-star"></i>
				</button>
			</li>
		)
	}
}

export default EmployeesListItem