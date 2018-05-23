import React from 'react'
import CourseRow from '../components/CourseRow'
import CourseService from '../services/CourseService'

class CourseList extends React.Component {
	constructor() {
		super();
		this.courseService = CourseService.instance
		this.titleChanged = this.titleChanged.bind(this)
		this.createCourse = this.createCourse.bind(this)
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
		this.setState({
			course: {
				title: event.target.value
			}
		})
	}

	createCourse() {
		this.courseService.createCourse(this.state.course)
			.then(this.findAllCourses())
	}

	renderCourseRows() {
		let courses = null

		// console.log("render course rows (this.state)")
		// console.log(this.state)

		if (this.state) {
			courses = this.state.courses.map(
				function (course) {
					return <CourseRow key={course.id} course={course}/>
				}
			);
		}
		return (
			courses
		)
	}

	render() {
		return (
			<div className="card-deck">
				<table className="table">
					<thead>
						<tr>
							<th>Title</th>
						</tr>
						<tr>
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

					<tbody>{this.renderCourseRows()}</tbody>
				</table>
			</div>
		)
	}
}
export default CourseList