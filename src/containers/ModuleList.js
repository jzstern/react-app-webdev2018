import React from 'react'
import ModuleListItem from '../components/ModuleListItem'

export default class ModuleList
	extends React.Component {
	constructor() { super();
		this.state = {
			module: { title: '' },
			modules: [
				{title: 'Module 1 - jQuery', id: 123},
				{title: 'Module 2 - React', id: 234},
				{title: 'Module 3 - Redux', id: 345},
				{title: 'Module 4 - Angular', id: 456},
				{title: 'Module 5 - Node.js', id: 567},
				{title: 'Module 6 - MongoDB', id: 678}
			]
		}

		this.titleChanged = this.titleChanged.bind(this)
		this.createModule = this.createModule.bind(this)
	}

	renderListOfModules() {
		let modules = this.state.modules
			.map(function(module) {
				return <ModuleListItem title={module.title} key={module.id}/>
			})
		return modules
	}

	titleChanged(event) {
		console.log(event.target.value)
		this.setState({ module: { title: event.target.value }})
	}

	createModule(event) {
		console.log('createModule')
	}

	render() {
		return (
		//<ul className="list-group">
		//	<ModuleListItem/>
		//	<ModuleListItem/>
		//</ul>
			<div>
				<br/>
				<input className="form-control" placeholder="title" onChange={this.titleChanged}/>
				<button onClick={this.createModule} className="btn btn-primary btn-block">
					<i className="fa fa-plus"></i>
				</button>
				<ul className="list-group"> {this.renderListOfModules()}</ul>
			</div>
		)
	}
}