import React from 'react'
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'

export default class CourseEditor
	extends React.Component {
		constructor(props) {
			super(props)

			this.state = {courseId: this.props.match.params.courseId}

			this.selectCourse = this.selectCourse.bind(this)
		}

		componentDidMount() {
			this.selectCourse(this.props.match.params.courseId)
		}

		componentWillReceiveProps(newProps) {
			this.selectCourse(newProps.match.params.courseId)
		}


		selectCourse(courseId) {
			this.setState({courseId: courseId})
		}

		render() {
			return (
				<div>
					<h2>Editing course: {this.state.courseId}</h2>
					<div className="row">
						<div className="col-4">
							{/*<p>{this.state.courseId}</p>*/}
							<ModuleList courseId={this.state.courseId}/>
						</div>
						<div className="col-8">
							<LessonTabs/>
						</div>
					</div>
				</div>
			)
		}
}