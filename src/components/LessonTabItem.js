import React from 'react'
import {Link} from 'react-router-dom'

class LessonTabItem
	extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: '',
			moduleId: '',
			courseId: '',
		}

		this.titleChanged = this.titleChanged.bind(this)
	}

	titleChanged(event) {
		this.setState({title: event.target.value})
	}

	render() {
		return (
			<div className="btn-group-vertical">
				<li className="nav-item">
					<div className="list-group-item">
						<Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}`} className="nav-link">
							{this.props.title}
							{/*<a className="nav-link active" href="#">Active Tab</a>*/}
						</Link>

						<button onClick={() => {this.props.delete(this.props.module.id)}}
						        className="btn btn-danger float-right"
						        type="button">
							<i className="fa fa-trash"></i>
						</button>
						{/*<i className="fa fa-pencil"></i>*/}
					</div>
				</li>
			</div>
		)
	}
}

export default LessonTabItem