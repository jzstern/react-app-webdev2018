import React from 'react'
import { Link } from 'react-router-dom'

class CourseRow
	extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		if (this.props.course.created !== null) {
			var convertedDateCreated = this.props.course.created.substr(0, 10)
		}
		if (this.props.course.modified !== null) {
			var convertedDateModified = this.props.course.modified.substr(0, 16)
		}

		return (
			<tr>
				<td>
					<Link to={`/course/${this.props.course.id}`}>{this.props.course.title}</Link>
				</td>
				<td>
					{this.props.course.owner}
				</td>
				<td>
					{convertedDateCreated}
				</td>
				<td>
					{convertedDateModified}
				</td>
				<td>
					<button onClick={() => {this.props.delete(this.props.course.id)}}
					        type="button"
					        className="btn btn-danger float-right">
						<i className="fa fa-trash"></i>
					</button>
				</td>
			</tr>
		)
	}
}
export default CourseRow