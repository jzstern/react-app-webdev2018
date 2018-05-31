import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import LessonService from "../services/LessonService"
import Lesson from '../components/LessonTabItem'

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

		// this.deleteLesson = this.deleteLesson.bind(this)
		this.moduleChanged = this.moduleChanged.bind(this)
		this.createLesson = this.createLesson.bind(this)
		this.titleChanged = this.titleChanged.bind(this)
		this.findAllLessons = this.findAllLessons.bind(this)
		this.renderLessonTabs = this.renderLessonTabs.bind(this)
		this.lessonService = LessonService.instance
	}

	componentDidMount() {
		this.moduleChanged(this.props.match.params.moduleId)
		// console.log('moduleId after moduleChanged: ' + this.state.moduleId)
	}

	componentWillReceiveProps(newProps) {
		this.moduleChanged(newProps.match.params.moduleId)
		// might need to add something when child state changes (e.g. show a different lesson)
	}

	renderLessonTabs() {
		let lessons = null

		if (this.state) {
			lessons = this.state.lessons.map((lesson) => {
				return <Lesson title={lesson.title}
				               key={lesson.id}
					             moduleId={this.state.moduleId}
					             courseId={this.state.courseId}
					             // refresh={this.findAllLessons()}
				/>
			})
		}
		return lessons
	}

	findAllLessons() {
		this.lessonService.findAllLessonsForModule(this.state.moduleId, this.props.match.params.courseId)
			.then((lessons) => {
				this.setState({lessons: lessons})
			})
	}

	createLesson() {
		this.lessonService.createLesson(
			this.props.match.params.moduleId,
			this.props.match.params.courseId,
			this.state.lesson)
		this.moduleChanged(this.state.moduleId)
	}

	titleChanged(event) {
		this.setState({lesson: {title: event.target.value}})
	}

	moduleChanged(moduleId) {
		this.setState({moduleId: moduleId}, () => this.findAllLessons())
	}


	render() { return(
		<div>
			<h2>Lessons</h2>
			<ul className="nav nav-tabs">
				{/*<li className="nav-item">*/}
					{/*<a className="nav-link active" href="#">Active Tab</a>*/}
				{/*</li>*/}
				{/*<li className="nav-item">*/}
					{/*<a className="nav-link" href="#">Another Tab</a>*/}
				{/*</li>*/}
			{this.renderLessonTabs()}
			</ul>
			<input onChange={this.titleChanged}
			       value={this.state.lesson.title}
			       className="form-control"
			       placeholder="New Lesson Title"/>
			<button className="btn btn-block btn-primary" onClick={this.createLesson} type="button">
				<i className="fa fa-plus"></i>
			</button>
		</div>
	)}
}
export default LessonTabs