import React from 'react'
import CourseRow from '../components/CourseRow'
import CourseService from '../services/CourseService'

class CourseList extends React.Component {
	constructor() {
		super();
		this.courseService = CourseService.instance
		this.titleChanged = this.titleChanged.bind(this)
		this.createCourse = this.createCourse.bind(this)
		this.deleteCourse = this.deleteCourse.bind(this)
		this.state = {courses: []}
	}

	componentDidMount() {
		this.courseService.findAllCourses()
			.then((courses) => {
				this.setState({courses: courses})
			})
	}

	findAllCourses() {
		this.courseService.findAllCourses()
			.then((courses) => {
				this.setState({courses: courses})
			})
	}

	titleChanged(event) {
		this.setState({course: {title: event.target.value, owner: 'Me'}
		})
	}

	createCourse() {
		if (this.state.course.title === "") {
			window.alert("Please enter a title for your course")
		} else {
			this.courseService.createCourse(this.state.course)
				.then(() => {
					this.findAllCourses()
					this.setState({course: {title: '', owner: ''}})
				})
		}
	}

	deleteCourse(courseId) {
		this.courseService.deleteCourse(courseId)
		this.findAllCourses()
	}

	renderCourseRows() {
		let courses = null

		if (this.state) {
			courses = this.state.courses.map((course) => {
					return <CourseRow key={course.id} course={course} delete={this.deleteCourse}/>
				}
			)
		}
		return (courses)
	}

	render() {
		return (
			<div className="card-deck">
				<table className="table">
					<thead className="card-header table-row">
						<tr>
							<th>Title</th>
							<th>Owner</th>
							<th>Date Created</th>
							<th>Modified</th>
						</tr>
					</thead>
					<thead>
						<tr className="row">
							<th>
								<input
									onChange={this.titleChanged}
									className="form-control"
									id="titleFld"
									placeholder="e.g. cs101"/>
							</th>
							<th>
								<button onClick={this.createCourse} className="btn btn-primary">Add</button>
							</th>
						</tr>
					</thead>
					<tbody className="card-body">
						{this.renderCourseRows()}
					</tbody>
				</table>
			</div>
		)
	}
}
export default CourseList
