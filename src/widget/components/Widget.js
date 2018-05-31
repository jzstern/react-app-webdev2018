import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/font-awesome/css/font-awesome.css'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'

//                                      HEADING
// -------------------------------------------------------------------------------------------------
const Heading = ({widget, preview, headingTextChanged, headingSizeChanged, headingNameChanged}) => {
	let selectElement
	let textElement
	let nameElement

	return (
		<div className="container-fluid">
			{/*<div hidden={preview}>*/}
			<div>
				<label htmlFor="headingText">Text</label>
				<input onChange={() => headingTextChanged(widget.id, textElement.value)}
				       value={widget.text}
				       ref={node => textElement = node}
				       className="form-control"
				       type="text"
				       id="headingText"
				       placeholder="Heading text"/>
				<br/>
				<label htmlFor="headingSize">Heading Size</label>
				<select onChange={() => headingSizeChanged(widget.id, selectElement.value)}
				        value={widget.size}
				        ref={node => selectElement = node}
								className="form-control"
								id="headingSize">
					<option value="1">Heading 1</option>
					<option value="2">Heading 2</option>
					<option value="3">Heading 3</option>
				</select>
				<br/>
				<label htmlFor="widgetName">Widget Name</label>
				<input onChange={() => headingNameChanged(widget.id, nameElement.value)}
				       value={widget.name}
				       ref={node => nameElement = node}
				       className="form-control"
				       type="text"
				       id="widgetName"
				       placeholder="e.g. Main Heading"/>
				<br/>
			</div>
			<div hidden={!preview}>
				{/*<h5 hidden={!preview}>Preview</h5>*/}
				{widget.size == 1 && <h1>{widget.text}</h1>}
				{widget.size == 2 && <h2>{widget.text}</h2>}
				{widget.size == 3 && <h3>{widget.text}</h3>}
			</div>
			<hr/>
		</div>
	)
}

const headingDispatchToPropsMapper = dispatch => ({
	headingTextChanged: (widgetId, newText) =>
		actions.headingTextChanged(dispatch, widgetId, newText),
	headingSizeChanged: (widgetId, newSize) =>
		actions.headingSizeChanged(dispatch, widgetId, newSize),
	headingNameChanged: (widgetId, newName) =>
		actions.headingNameChanged(dispatch, widgetId, newName)
})

const stateToPropsMapper = state => ({
	preview: state.preview
})

const HeadingContainer = connect(stateToPropsMapper, headingDispatchToPropsMapper)(Heading)


//                                      PARAGRAPH
// -------------------------------------------------------------------------------------------------
const Paragraph = ({widget, preview, paragraphTextChanged, paragraphNameChanged}) => {
	let textElement
	let nameElement

	return (
		<div className="container-fluid">
			{/*<div hidden={preview}>*/}
			<div>
				<label htmlFor="paragraphInput">Text</label>
				<textarea onChange={() => paragraphTextChanged(widget.id, textElement.value)}
				          ref={node => textElement = node}
				          className="form-control"
				          placeholder="Enter your paragraph text here"
				          id="paragraphInput"
				          value={widget.text}/>
				{/*is this acceptable for any tag??^*/}
				<br/>
				<label htmlFor="widgetName">Widget Name</label>
				<input onChange={() => paragraphNameChanged(widget.id, nameElement.value)}
					ref={node => nameElement = node}
					value={widget.name}
					className="form-control"
					type="text"
					id="widgetName"
					placeholder="e.g. Paragraph Widget"/>
			</div>
			<div hidden={!preview}>
				<p>{widget.text}</p>
			</div>
			<hr/>
		</div>
		)
}

const paragraphDispatchToPropsMapper = dispatch => ({
	paragraphTextChanged: (widgetId, newText) =>
		actions.paragraphTextChanged(dispatch, widgetId, newText),
	paragraphNameChanged: (widgetId, newName) =>
		actions.paragraphNameChanged(dispatch, widgetId, newName)
})

const ParagraphContainer = connect(stateToPropsMapper, paragraphDispatchToPropsMapper)(Paragraph)

// const ParagraphContainer = connect(dispatch => ({
// 	paragraphTextChange: (widgetId, newText) =>
// 		actions.paragraphTextChanged(dispatch, widgetId, newText)
// }))(Paragraph)

//                                        IMAGE
// -------------------------------------------------------------------------------------------------

const Image = ({widget, preview, imageUrlChanged, imageNameChanged}) => {
	let urlElement
	let nameElement

	return (
		<div className="container-fluid">
			{/*<div hidden={preview}>*/}
			<div>
				<label htmlFor="imageUrl">Image URL</label>
				<input onChange={() => imageUrlChanged(widget.id, urlElement.value)}
				       ref={node => urlElement = node}
				       className="form-control"
				       placeholder="Copy & paste the URL to your image"
				       id="imageUrl"
				       type="text"
				       value={widget.url}/>
				<br/>

				<label htmlFor="widgetName">Widget Name</label>
				<input onChange={() => imageNameChanged(widget.id, nameElement.value)}
				       ref={node => nameElement = node}
				       value={widget.name}
				       className="form-control"
				       type="text"
				       id="widgetName"
				       placeholder="e.g. Image Widget"/>
			</div>
			<div hidden={!preview}>
				<img src={widget.url}/>
			</div>
		</div>
	)
}

const imageDispatchToPropsMapper = dispatch => ({
	imageUrlChanged: (widgetId, newURL) =>
		actions.imageUrlChanged(dispatch, widgetId, newURL),
	imageNameChanged: (widgetId, newName) =>
		actions.imageNameChanged(dispatch, widgetId, newName)
})

const ImageContainer = connect(stateToPropsMapper, imageDispatchToPropsMapper)(Image)


//                                        Link
// -------------------------------------------------------------------------------------------------

const Link = ({widget, preview, linkUrlChanged, linkTextChanged, linkNameChanged}) => {
	let urlElement
	let textElement
	let nameElement

	return (
		<div className="container-fluid">
			{/*<div hidden={preview}>*/}
			<div>
				<label htmlFor="linkUrl">Link URL</label>
				<input onChange={() => linkUrlChanged(widget.id, urlElement.value)}
				       ref={node => urlElement = node}
				       className="form-control"
				       placeholder="Link URL"
				       id="linkUrl"
				       type="text"
				       value={widget.url}/>
				<br/>

				<label htmlFor="linkText">Text</label>
				<input onChange={() => linkTextChanged(widget.id, textElement.value)}
				       ref={node => textElement = node}
				       className="form-control"
				       placeholder="Enter your link text here"
				       id="linkText"
				       type="text"
				       value={widget.text}/>
				<br/>

				<label htmlFor="widgetName">Widget Name</label>
				<input onChange={() => linkNameChanged(widget.id, nameElement.value)}
				       ref={node => nameElement = node}
				       value={widget.name}
				       className="form-control"
				       type="text"
				       id="widgetName"
				       placeholder="e.g. Link Widget"/>
			</div>
			<div hidden={!preview}>
				<a href={widget.url}>{widget.text}</a>
			</div>
		</div>
	)
}

const linkDispatchToPropsMapper = dispatch => ({
	linkTextChanged: (widgetId, newText) =>
		actions.linkTextChanged(dispatch, widgetId, newText),
	linkUrlChanged: (widgetId, newURL) =>
		actions.linkUrlChanged(dispatch, widgetId, newURL),
	linkNameChanged: (widgetId, newName) =>
		actions.linkNameChanged(dispatch, widgetId, newName)
})

const LinkContainer = connect(stateToPropsMapper, linkDispatchToPropsMapper)(Link)

//                                        LIST
// -------------------------------------------------------------------------------------------------

const List = ({widget, preview, listTextChanged, listNameChanged, listOrderChanged}) => {
	let textElement
	let nameElement
	let selectElement

	return (
		<div className="container-fluid">
			{/*<div hidden={preview}>*/}
			<div>
				<h2>List</h2>

				<label htmlFor="listText">Text</label>
				<textarea onChange={() => listTextChanged(widget.id, textElement.value)}
				          ref={node => textElement = node}
				          className="form-control"
				          placeholder="Enter one list item per line"
				          id="listTest"
				          value={widget.text}/>
				<br/>

				<label htmlFor="listOrder">List Type</label>
				<select onChange={() => listOrderChanged(widget.id, selectElement.value)}
				        value={widget.ordered}
				        ref={node => selectElement = node}
				        className="form-control"
				        id="listOrder">
					<option value="true">Ordered</option>
					<option value="false">Unordered</option>
				</select>
				<br/>

				<label htmlFor="widgetName">Widget Name</label>
				<input onChange={() => listNameChanged(widget.id, nameElement.value)}
				       ref={node => nameElement = node}
				       value={widget.name}
				       className="form-control"
				       type="text"
				       id="widgetName"
				       placeholder="e.g. List Widget"/>
			</div>
			<div hidden={!preview}>
				{/*{this.populateList(widget.text, widget.ordered)}*/}
				{/*<p>{widget.text}</p>*/}
				<ol hidden={widget.ordered === false || widget.text.split("\n") <= 1}>
					{widget.text.split("\n").map(listItem => (<li key={listItem}>{listItem}</li>))}
				</ol>
				<ul hidden={widget.ordered === true || widget.text.split("\n") <= 1}>
					{widget.text.split("\n").map(listItem => (<li key={listItem}>{listItem}</li>))}
				</ul>
			</div>
			<hr/>
		</div>
	)
}

const listDispatchToPropsMapper = dispatch => ({
	listTextChanged: (widgetId, newText) =>
		actions.listTextChanged(dispatch, widgetId, newText),
	listNameChanged: (widgetId, newName) =>
		actions.listNameChanged(dispatch, widgetId, newName),
	listOrderChanged: (widgetId, newOrder) =>
		actions.listOrderChanged(dispatch, widgetId, newOrder)
	// populateList: (listText, ordered) =>
	// 	actions.populateList(dispatch, listText, ordered)
})

const ListContainer = connect(stateToPropsMapper, listDispatchToPropsMapper)(List)


// -------------------------------------------------------------------------------------------------
//                                        WIDGET
// -------------------------------------------------------------------------------------------------

const Widget = ({widget, preview, shiftUp, shiftDown, selectWidget, deleteWidget}) => {
	let selectElement

	return (
		<li className="list-group-item">
			{/*<div hidden={preview} className="form-row panel panel-default">*/}
			<div className="form-row panel panel-default">
				<h3 className="col-sm-9 float-left">{widget.widgetType} Widget</h3>

				<div className="form-row float-right">
					<button onClick={() => shiftUp(widget.id, widget.position)} className="btn btn-warning ml-2">
						<i className="fa fa-arrow-up"/>
					</button>
					<button onClick={() => shiftDown(widget.id, widget.position)} className="btn btn-warning ml-2">
						<i className="fa fa-arrow-down"/>
					</button>

					<select value={widget.widgetType}
					        onChange={() => selectWidget(widget.id, selectElement.value)}
					        ref={node => selectElement = node}
					        className="float-right ml-2">
						<option>Heading</option>
						<option>Paragraph</option>
						<option>List</option>
						<option>Image</option>
						<option>Link</option>
					</select>

					<button onClick={() => deleteWidget(widget.id)} className="btn btn-danger ml-2">
							<i className="fa fa-trash"/>
					</button>
				</div>
			</div>

			<div>
				{widget.widgetType === 'Heading' && <HeadingContainer widget={widget}/>}
				{widget.widgetType === 'Paragraph' && <ParagraphContainer widget={widget}/>}
				{widget.widgetType === 'List' && <ListContainer widget={widget}/>}
				{widget.widgetType === 'Image' && <ImageContainer widget={widget}/>}
				{widget.widgetType === 'Link' && <LinkContainer widget={widget}/>}
				<br/>
			</div>
		</li>
	)
}

const widgetDispatchToPropsMapper = dispatch => ({
	selectWidget: (widgetId, widgetType) =>
		actions.selectWidget(dispatch, widgetId, widgetType),
	deleteWidget: (widgetId) =>
		actions.deleteWidget(dispatch, widgetId),
	shiftUp: (widgetId, widgetPosition) =>
		actions.shiftUp(dispatch, widgetId, widgetPosition),
	shiftDown: (widgetId, widgetPosition) =>
		actions.shiftDown(dispatch, widgetId, widgetPosition)
})

const WidgetContainer = connect(stateToPropsMapper, widgetDispatchToPropsMapper)(Widget)
export default WidgetContainer