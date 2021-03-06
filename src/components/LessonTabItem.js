import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {widgetReducer} from "../widget/reducers/WidgetReducer";
import {WidgetApp} from '../widget/containers/WidgetList'

let store = createStore(widgetReducer)

class LessonTabItem
	extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: '',
			moduleId: '',
			courseId: '',
			deleteLesson: this.props.deleteLesson
		}

		this.titleChanged = this.titleChanged.bind(this)
	}

	titleChanged(event) {
		this.setState({title: event.target.value})
	}

	render() { return (
		<div>
			<div className="btn-group-vertical">
			{/*<div>*/}
				<li className="nav-item list-group-item">
					<Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}/widgets`} className="nav-link">
						{this.props.title}
						{/*<a className="nav-link active" href="#">Active Tab</a>*/}
					</Link>

					<button onClick={() => {this.props.deleteLesson}}
					        className="btn btn-sm btn-danger float-right"
					        type="button">
						<i className="fa fa-trash"></i>
					</button>
					{/*<i className="fa fa-pencil"></i>*/}
				</li>
			</div>

			{/*put this provider outside of of the list of tabs*/}
			{/*put this provider outside of of the list of tabs*/}
			{/*put this provider outside of of the list of tabs*/}
			<div>
				<Provider store={store}>
					<WidgetApp/>
				</Provider>
			</div>
			{/*put this provider outside of of the list of tabs*/}
			{/*put this provider outside of of the list of tabs*/}
			{/*put this provider outside of of the list of tabs*/}
		</div>
	)}
}

export default LessonTabItem