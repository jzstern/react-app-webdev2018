import React from 'react'
import LessonService from "../services/LessonService"

class LessonTabs
	extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			moduleId: '',
			courseId: '',
			lesson: {title: ''},
			lessons: []
		}

		this.createLesson = this.createLesson.bind(this)
		this.titleChanged = this.titleChanged.bind(this)
		this.lessonService = LessonService.instance
	}

	componentDidMount() {
		this.moduleChanged(this.props.moduleId)
	}

	componentWillReceiveProps(newProps) {
		this.moduleChanged(newProps.match.params.moduleId)
	}

	createLesson() {
		this.lessonService.createLesson(
			this.props.match.params.moduleId,
			this.props.match.params.courseId,
			this.state.lesson)
	}

	titleChanged(event) {
		this.setState({lesson: {title: event.target.value}})
	}

	moduleChanged(moduleId) {
		this.setState({moduleId: moduleId})
	}


	render() { return(
		<div>
			<h2>Lessons</h2>
			{/*{this.renderTabs()}*/}
			<input onChange={this.titleChanged}
			       value={this.state.lesson.title}
			       className="form-control"
			       placeholder="New Lesson Title"/>
			<button className="btn btn-block btn-primary" onClick={this.createLesson} type="button">
				<i className="fa fa-plus"></i>
			</button>
			{/*<ul className="nav nav-tabs">*/}
				{/*<li className="nav-item">*/}
					{/*<a className="nav-link active" href="#">Active Tab</a>*/}
				{/*</li>*/}
				{/*<li className="nav-item">*/}
					{/*<a className="nav-link" href="#">Another Tab</a>*/}
				{/*</li>*/}
			{/*</ul>*/}
		</div>
	)}
}
export default LessonTabs