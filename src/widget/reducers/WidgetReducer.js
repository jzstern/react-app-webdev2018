import React from 'react'
import * as constants from "../constants"

export const widgetReducer = (state = {widgets: [], preview: false}, action) => {
	let newState, fixed
	let widgetList = state.widgets
	let position = action.position

	switch (action.type) {

		// case constants.POPULATE_LIST:
		// 	let textList = action.listText.split("/n")
		//
		// 	if (action.ordered) {
		// 		return (
		// 			<ol className="list-group">
		// 				{textList.map(listItem => (<li className="list-group-item">listItem</li>))}
		// 			</ol>
		// 		)
		// 	} else {
		// 		return (
		// 			<ul className="list-group">
		// 				{textList.map(listItem => (<li className="list-group-item">listItem</li>))}
		// 			</ul>
		// 		)
		// 	}

		case constants.SHIFT_WIDGET_UP:
			fixed = widgetList.map(widget => {
				if (position !== 0) {
					if (widget.position === position) {
						widget.position -= 1
					} else if (widget.position === position - 1) {
						widget.position += 1
					}
				}
				return Object.assign({}, widget);
			})

			console.log(fixed)
			return {
				widgets: fixed
			}

		case constants.SHIFT_WIDGET_DOWN:
			fixed = widgetList.map(widget => {
				if (position !== widgetList.length + 1) {
					if (widget.position === position) {
						widget.position += 1
					} else if (widget.position === position + 1) {
						widget.position -= 1
					}
				}
				return Object.assign({}, widget);
			})
			
			return {
				widgets: fixed
			}

		case constants.LINK_TEXT_CHANGED:
			return {
				widgets: state.widgets.map(widget => {
					if (widget.id === action.id) {
						widget.text = action.text
					}
					return Object.assign({}, widget)
				})
			}

		case constants.LINK_NAME_CHANGED:
			return {
				widgets: state.widgets.map(widget => {
					if (widget.id === action.id) {
						widget.name = action.name
					}
					return Object.assign({}, widget)
				})
			}

		case constants.LINK_URL_CHANGED:
			return {
				widgets: state.widgets.map(widget => {
					if (widget.id === action.id) {
						widget.url = action.url
					}
					return Object.assign({}, widget)
				})
			}

		case constants.IMAGE_NAME_CHANGED:
			return {
				widgets: state.widgets.map(widget => {
					if (widget.id === action.id) {
						widget.name = action.name
					}
					return Object.assign({}, widget)
				})
			}

		case constants.IMAGE_URL_CHANGED:
			return {
				widgets: state.widgets.map(widget => {
					if (widget.id === action.id) {
						widget.url = action.url
					}
					return Object.assign({}, widget)
				})
			}

		case constants.LIST_ORDER_CHANGED:
			return {
				widgets: state.widgets.map(widget => {
					if (widget.id === action.id) {
						widget.ordered = action.ordered
					}
					return Object.assign({}, widget)
				})
			}

		case constants.LIST_NAME_CHANGED:
			return {
				widgets: state.widgets.map(widget => {
					if (widget.id === action.id) {
						widget.name = action.name
					}
					return Object.assign({}, widget)
				})
			}

		case constants.LIST_TEXT_CHANGED:
			return {
				widgets: state.widgets.map(widget => {
					if (widget.id === action.id) {
						widget.text = action.text
					}
					return Object.assign({}, widget)
				})
			}

		case constants.PARAGRAPH_TEXT_CHANGED:
			return {
				widgets: state.widgets.map(widget => {
					if (widget.id === action.id) {
						widget.text = action.text
					}
					return Object.assign({}, widget)
				})
			}

		case constants.PARAGRAPH_NAME_CHANGED:
			return {
				widgets: state.widgets.map(widget => {
					if (widget.id === action.id) {
						widget.name = action.name
					}
					return Object.assign({}, widget)
				})
			}

		case constants.HEADING_NAME_CHANGED:
			return {
				widgets: state.widgets.map(widget => {
					if (widget.id === action.id) {
						widget.name = action.name
					}
					return Object.assign({}, widget)
				})
			}

		case constants.HEADING_SIZE_CHANGED:
			return {
				widgets: state.widgets.map(widget => {
					if (widget.id === action.id) {
						widget.size = action.size
					}
					return Object.assign({}, widget)
				})
			}

		case constants.HEADING_TEXT_CHANGED:
			return {
				widgets: state.widgets.map(widget => {
					if (widget.id === action.id) {
						widget.text = action.text
					}
					return Object.assign({}, widget)
				})
			}

		// found sort from https://stackoverflow.com/questions/12915445/sorting-a-json-list
		case constants.FIND_ALL_WIDGETS:
			newState = Object.assign({}, state)
			let widgets = action.widgets

			widgets.sort(function(w1, w2) {
				return (+w1.position || 0) - (+w2.position || 0)
			})

			newState.widgets = widgets
			return newState

		case constants.SELECT_WIDGET_TYPE:
			newState = {
				widgets: state.widgets.filter(widget => {
					if (widget.id === action.id) {
						widget.widgetType = action.widgetType
					}
					return true
				})
			}
			return JSON.parse(JSON.stringify(newState))

		case constants.ADD_WIDGET:
			return {
				widgets: [
					...state.widgets,
					{
						id: state.widgets.length + 1,
						text: 'New widget',
						widgetType: 'Heading',
						size: 1,
						name: '',
						position: state.widgets.length
					}
				]
			}

		case constants.DELETE_WIDGET:
			return {
				widgets: state.widgets.filter(widget => (
					widget.id !== action.id
				))
			}

		case constants.SAVE:
			fetch('http://localhost:8080/api/widget/save', {
				method: 'POST',
				body: JSON.stringify(state.widgets),
				headers: {'content-type': 'application/json'}
			})
			return state

		case constants.PREVIEW:
			newState = Object.assign({}, state)
			newState.preview = !state.preview
			return newState

		default:
			return {
				widgets: state.widgets.sort(function(w1, w2) {
					return (+w1.position || 0) - (+w2.position || 0)
				})
			}
	}
}