import React from 'react'
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'
import CourseService from "../services/CourseService"
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

export default class CourseEditor
	extends React.Component {
		constructor(props) {
			super(props);
			this.state = {courseId: this.props.match.params.courseId, courseTitle: ''}

			this.titleChange = this.titleChange.bind(this)
			this.selectCourse = this.selectCourse.bind(this)
			this.courseService = CourseService.instance;
		}

		componentDidMount() {
			this.selectCourse(this.props.match.params.courseId)
			this.getCourseName()
		}

		componentWillReceiveProps(newProps) {
			this.selectCourse(newProps.match.params.courseId)
		}

		getCourseName() {
			this.courseService.findCourseById(this.props.match.params.courseId)
				.then((course) => {
					this.setState({courseTitle: course.title})
				})
		}

		titleChange(event) {
			this.setState({courseTitle: event.target.value,})
		}

		selectCourse(courseId) {
			this.setState({courseId: courseId})
		}

		updateCourse() {
			this.courseService.updateCourse(this.state)
		}

		render() {
			return (
				<div>
					<div className="col-6">
						<h2>Editing course: {this.state.courseId}</h2>
					</div>
					<div className="col-6">
						<table>
							<thead>
									<tr>
										<th>Course Name</th>
									</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<input onChange={this.titleChange}
										       id="title"
										       value={this.state.courseTitle}
										       placeholder="e.g. IS4800"
										       className="form-control"/>
									</td>
									<td>
										<button className="btn btn-success" onClick={this.updateCourse} type="button">
											<i className="fa fa-check"></i>
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="row">
						<div className="col-4">
							<ModuleList courseId={this.state.courseId}/>
						</div>
						<div className="col-8">
							<Route path="/course/:courseId/module/:moduleId" component={LessonTabs}></Route>
						</div>
					</div>
				</div>
			)
		}
}