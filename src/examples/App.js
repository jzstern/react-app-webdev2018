import React from 'react';
import Hello from '../components/Hello'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const Page1 = () => {
	return(<h2>Page 1 woohooo</h2>)
};

const Page2 = () => {
	return(<h2>Page 2 awww yeee</h2>)
};

const PageParam = ({match}) => {
	return(
		<h2>PageParam {match.params.id}</h2>
	)
}

class PageUpdate extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			id: ''
		}

		this.updatePage = this.updatePage.bind(this)
	}

	componentDidMount() {
		this.updatePage(this.props.courseId)
	}
	componentWillReceiveProps(newProps) {
		this.updatePage(newProps.courseId)
	}

	updatePage(id) {
		this.setState({id: id});
	}
	
	render() {
		return(
			<h2>PageUpdate{this.state.id}</h2>
		)
	}
}



const App = () => {
	return(
		<Router>
			<div>
				<Link to="/hello">Hello</Link>
				<Link to="/Page1"> page 1</Link>
				<Link to="/Page2">  page 2</Link>
				<Link to="/pageParam/123">Page 123</Link>
				<Link to="/pageParam/234">Page 234</Link>
				<Link to="/pageUpdate/345">PageUpdate 345</Link>
				<Link to="/pageUpdate/456">PageUpdate 456</Link>

				<Route path='/pageUpdate/:id' component={PageUpdate}/>
				<Route path='/pageParam/:id' component={PageParam}/>

			</div>
		</Router>
	)
}

export default App