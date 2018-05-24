import React from 'react'
import {Link} from 'react-router-dom'

class ModuleListItem
	extends React.Component {
	constructor(props) {
		super(props)
		this.state = {title: ''}

		this.titleChanged = this.titleChanged.bind(this)
	}

	titleChanged(event) {
		this.setState({title: event.target.value})
	}

	render() {
		return (
			<li className="list-group-item">
				<Link to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
					{this.props.title}
				</Link>

				<button onClick={() => {this.props.delete(this.props.module.id)}}
				        className="btn btn-danger float-right"
				        type="button">
						<i className="fa fa-trash"></i>
				</button>
				{/*<i className="fa fa-pencil"></i>*/}
			</li>
		)
	}
}

export default ModuleListItem