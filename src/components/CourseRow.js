import React from 'react'
import { Link } from 'react-router-dom'

class CourseRow extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<tr>
				<td>
					<Link to={`/course/${this.props.course.id}`}>{this.props.course.title}</Link>
				</td>
				<td>
					<button onClick={() => {this.props.delete(this.props.course.id)}}
					        type="button"
					        className="btn btn-block btn-danger">Delete</button>
				</td>
			</tr>
		)
	}
}
export default CourseRow