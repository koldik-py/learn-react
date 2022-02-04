import './app-info.css';

function AppInfo (props) {
	return (
		<div className="app-info">
			<h1>Учёт сотрудников в комании EVIX</h1>
			<h2>Общее число сотрудников</h2>
			<h2>Премию получат: {props.sum}</h2>
		</div>
	)
}
export default AppInfo;