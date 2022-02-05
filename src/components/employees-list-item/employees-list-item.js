import { Component } from 'react';
import './employees-list-item.css'



function EmployeesListItem (props){
	const {name, salary, ondelite, increase, star, onToggleProps} = props;
	
	return (
		<li className={"employees__item "+ (increase ? "increase": '')}>
			<p className="employees__name"
				data-toggle="star"
				onClick={onToggleProps}
				>{name}</p>
			<input className="employees__sum" type="text" defaultValue={salary + '$'}/>
			<button className="employees__btn1"
					data-toggle="increase"
					onClick={onToggleProps}
					>
				<i className="fas fa-cookie"></i>
			</button>
			<button className="employees__btn2"
					onClick={ondelite}>
				<i className="fas fa-trash"></i>
			</button>
			<button className={"employees__btn3" + (star ? ' employees__btn3--active':'')}>
				<i className="fas fa-star"></i>
			</button>
		</li>
	)
}

export default EmployeesListItem