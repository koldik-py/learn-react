import './app-info.css';

function AppInfo (props) {
	const {onIncrease, value} = props; 
	return (
		<div className="app-info">
			<h1>Учёт сотрудников в комании EVIX</h1>
			<h2>Общее число сотрудников: {value}</h2>
			<h2>Премию получат: {onIncrease}</h2>
		</div>
	)
}
export default AppInfo;