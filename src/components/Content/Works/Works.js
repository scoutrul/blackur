import React, { Component } from 'react';
import { connect } from 'react-redux'
import './works.scss';
import { setTitle_action } from "../../../store/reducers/Content";

import WorksList from "./WorksList"

const connectProps = (state) => {
	return {
		works: state.Content.works,
		title: state.Content.pages.contacts.title,
	}
};
const connectDispatch = dispatch => {
	return {
		setTitle: (payload) => {
			dispatch(setTitle_action(payload))
		}
	}
};
@connect(connectProps, connectDispatch)
export default class extends Component {
	
		componentDidMount() {
			this.props.setTitle(this.props.title);
		}
		
	render() {	
		const { AnimationCss } = this.props;
		return (
			<div className={`works contentContainer ${AnimationCss}`}>
				<ul className="list content">
					<WorksList works={this.props.works}/>
				</ul>
			</div>
		);
	}
}
