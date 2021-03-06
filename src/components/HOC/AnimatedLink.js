import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { leaveAnimation_action, appearBefore_action, appearAfter_action } from '../../store/reducers/Animations';

const connectProps = (state) => {
	return {
		isAppearBefore: state.Animations.isAppearBefore,
		isAppearAfter: state.Animations.isAppearAfter,
		leaveAnimation: state.Animations.leaveAnimation,
		timeToWait: state.Animations.timeToWait
	};
};
const connectDispatch = (dispatch) => {
	return {
		leaveAnimation_action: () => {
			dispatch(leaveAnimation_action());
		},
		appearAfter_action: () => {
			dispatch(appearAfter_action())
		},
		appearBefore_action: () => {
			dispatch(appearBefore_action());
		}
	};
};

@withRouter
@connect(connectProps, connectDispatch)
export default class extends Component {
	linkHandler = (event, href) => {
		event.preventDefault();

		let promise = new Promise((resolve) => {
			this.props.history.location.pathname !== href && this.props.leaveAnimation_action();
			setTimeout(() => {
				resolve();
			}, this.props.timeToWait);
		});

		this.props.history.location.pathname !== href &&
			promise.then(() => {
				this.props.appearAfter_action();
				this.props.history.push(href);
			});
	};

	render() {
		return (
			<a onClick={(e) => this.linkHandler(e, this.props.to)} href={this.props.to} style={this.props.style}>
				{this.props.children}
			</a>
		);
	}
}
