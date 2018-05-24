import React from 'react'
import ModuleService from '../services/ModuleService'
import ModuleListItem from '../components/ModuleListItem'
import CourseService from '../services/CourseService'

class ModuleList
	extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			courseId: '',
			module: { title: '' },
			modules: []
		}

		this.titleChanged = this.titleChanged.bind(this)
		this.createModule = this.createModule.bind(this)
		this.setCourseId = this.setCourseId.bind(this)
		this.clearInputBox = this.clearInputBox.bind(this)
		this.deleteModule = this.deleteModule.bind(this)
		this.moduleService = ModuleService.instance
		this.courseService = CourseService.instance
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
			.then((modules) => {this.setModules(modules)})
	}

	setCourseId(courseId) {
		this.setState({courseId: courseId})
	}

	deleteModule(moduleId) {
		this.moduleService.deleteModule(moduleId)
		this.setModules(this.renderListOfModules())
	}

	renderListOfModules() {
		let modules = null

		if (this.state) {
			modules = this.state.modules.map((module) => {
				return <ModuleListItem title={module.title}
				                       key={module.id}
				                       delete={this.deleteModule}
				                       courseId={this.state.courseId}
				                       module={module}/>
				})
		}
		return modules
	}

	titleChanged(event) {
		this.setState({module: {title: event.target.value}})
	}

	createModule(event) {
		this.moduleService.createModule(this.props.courseId, this.state.module)
		this.clearInputBox()
		this.setModules(this.renderListOfModules())
	}

	clearInputBox() {
		this.setState({module: {title: ''}})
	}

	setModules(modules) {
		this.setState({modules: modules})
	}

	render() {
		return (
			<div style={{ margin: 20}}>
				<h3>Module list for course: {this.state.courseId}</h3>
				<input className="form-control"
				       placeholder="New Module Title"
				       value={this.state.module.title}
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