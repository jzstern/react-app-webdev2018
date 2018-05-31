import * as constants from "../constants/index"

// export const populateList = (dispatch, listText, ordered) => (
// 	dispatch({
// 		type: constants.POPULATE_LIST,
// 		listText: listText,
// 		ordered: ordered
// 	})
// )

export const shiftUp = (dispatch, widgetId, position) => (
	dispatch({
		type: constants.SHIFT_WIDGET_UP,
		id: widgetId,
		position: position,
	})
)

export const shiftDown = (dispatch, widgetId, position) => (
	dispatch({
		type: constants.SHIFT_WIDGET_DOWN,
		id: widgetId,
		position: position
	})
)

export const deleteWidget = (dispatch, widgetId) => (
	dispatch({
		type: constants.DELETE_WIDGET,
		id: widgetId
	})
)

export const selectWidget = (dispatch, widgetId, widgetType) => (
	dispatch({
		type: constants.SELECT_WIDGET_TYPE,
		id: widgetId,
		widgetType: widgetType
	})
)

export const linkTextChanged = (dispatch, widgetId, newText) => (
	dispatch({
		type: constants.LINK_TEXT_CHANGED,
		id: widgetId,
		text: newText
	})
)

export const linkNameChanged = (dispatch, widgetId, newName) => (
	dispatch({
		type: constants.LINK_NAME_CHANGED,
		id: widgetId,
		name: newName
	})
)

export const linkUrlChanged = (dispatch, widgetId, newURL) => (
	dispatch({
		type: constants.LINK_URL_CHANGED,
		id: widgetId,
		url: newURL
	})
)

export const imageNameChanged = (dispatch, widgetId, newName) => (
	dispatch({
		type: constants.IMAGE_NAME_CHANGED,
		id: widgetId,
		name: newName
	})
)

export const imageUrlChanged = (dispatch, widgetId, newURL) => (
	dispatch({
		type: constants.IMAGE_URL_CHANGED,
		id: widgetId,
		url: newURL
	})
)

export const listOrderChanged = (dispatch, widgetId, ordered) => (
	dispatch({
		type: constants.LIST_ORDER_CHANGED,
		id: widgetId,
		ordered: ordered
	})
)

export const listNameChanged = (dispatch, widgetId, newName) => (
	dispatch({
		type: constants.LIST_NAME_CHANGED,
		id: widgetId,
		name: newName
	})
)

export const listTextChanged = (dispatch, widgetId, newText) => (
	dispatch({
		type: constants.LIST_TEXT_CHANGED,
		id: widgetId,
		text: newText
	})
)

export const paragraphTextChanged = (dispatch, widgetId, newText) => (
	dispatch({
		type: constants.PARAGRAPH_TEXT_CHANGED,
		id: widgetId,
		text: newText
	})
)

export const paragraphNameChanged = (dispatch, widgetId, newName) => (
	dispatch({
		type: constants.PARAGRAPH_NAME_CHANGED,
		id: widgetId,
		name: newName
	})
)

export const headingNameChanged = (dispatch, widgetId, newName) => (
	dispatch({
		type: constants.HEADING_NAME_CHANGED,
		id: widgetId,
		name: newName
	})
)

export const headingTextChanged = (dispatch, widgetId, newText) => (
	dispatch({
		type: constants.HEADING_TEXT_CHANGED,
		id: widgetId,
		text: newText
	})
)

export const headingSizeChanged = (dispatch, widgetId, headingSize) => (
	dispatch({
		type: constants.HEADING_SIZE_CHANGED,
		id: widgetId,
		size: headingSize
	})
)

export const findAllWidgets = dispatch => {
	fetch('http://localhost:8080/api/widget')
		.then(response => (response.json()))
		.then(widgets => dispatch({
			type: constants.FIND_ALL_WIDGETS,
			widgets: widgets
		}))
}

export const addWidget = dispatch => {
	dispatch({type: constants.ADD_WIDGET})
}

export const save = dispatch => {
	dispatch({type: constants.SAVE})
}

export const preview = dispatch => {
	dispatch({type: constants.PREVIEW})
}