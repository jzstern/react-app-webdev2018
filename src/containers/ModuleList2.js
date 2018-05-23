import React from 'react'
import ModuleListItem from '../components/ModuleListItem'

export default class ModuleList2
	extends React.Component {
	render() {
		return (
			<div>
				<ModuleListItem title="React"/>
				<ModuleListItem title="Redux"/>
				<ModuleListItem title="React Native"/>
			</div>
		)
	}
}