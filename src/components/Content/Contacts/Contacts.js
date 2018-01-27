import React, { Component } from 'react';
import './contacts.scss'
import { setTitle_action } from "../../../store/reducers/Content";
import { connect } from "react-redux";

const connectProps = (state) => {
	return {
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
			<div className={`contentContainer page-contacts ${AnimationCss}`}>
				<div className="content">
					<h3 className={'dark'}><span>Tell us your</span> <br/>
						black secrets.</h3>
					<form>
						<label>enter your email</label>
						<input/>
						<label>type message</label>
						<input/>
					</form>
					<h4>Send</h4>
				</div>
			
			</div>
		
		);
	}
}
