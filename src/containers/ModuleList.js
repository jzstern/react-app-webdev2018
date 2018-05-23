import React from 'react'
import ModuleService from '../services/ModuleService'
import ModuleListItem from '../components/ModuleListItem'

class ModuleList
	extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			courseId: '',
			module: { title: '' },
			modules: []
		};

		this.titleChanged = this.titleChanged.bind(this)
		this.createModule = this.createModule.bind(this)
		this.setCourseId = this.setCourseId.bind(this)
		this.moduleService = ModuleService.instance;
	}

	componentDidMount() {
		this.setCourseId(this.props.courseId)
	}

	componentWillReceiveProps(newProps){
		this.setCourseId(this.props.courseId)
		this.findAllModulesForCourse(newProps.courseId)
	}

	findAllModulesForCourse(courseId) {
		this.moduleService
			.findAllModulesForCourse(courseId)
			.then((modules) => {this.setModules(modules)});
	}

	setCourseId(courseId) {
		this.setState({ courseId: courseId })
	}

	renderListOfModules() {
		let modules = this.state.modules.map(function(module) {
				return <ModuleListItem title={ module.title } key={ module.id }/>
			});
		return modules
	}

	titleChanged(event) {
		this.setState({ module: { title: event.target.value }})
	}

	createModule(event) {
		console.log(this.state.module)
		this.moduleService.createModule(this.props.courseId, this.state.module)
	}

	setModules(modules) {
		this.setState({modules: modules})
	}

	render() {
		return (
		//<ul className="list-group">
		//	<ModuleListItem/>
		//	<ModuleListItem/>
		//</ul>
			<div>
				<h3>Module list for course: {this.state.courseId}</h3>
				<br/>
				<input className="form-control"
				       placeholder="title"
				       onChange={this.titleChanged}/>
				<button onClick={this.createModule} className="btn btn-primary btn-block">
					<i className="fa fa-plus"></i>
				</button>
				<ul className="list-group"> {this.renderListOfModules()}</ul>
			</div>
		)
	}
}

export default ModuleList