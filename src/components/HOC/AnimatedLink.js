import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux'
import { leaveAnimation_action } from '../../store/reducers/Animations'

const connectProps = (state) => {
	return {
		appearBefore: state.Animations.appearBefore,
		appearAfter: state.Animations.appearAfter,
		leaveAnimation: state.Animations.leaveAnimation,
		timeToWait: state.Animations.timeToWait,
	}
};
const connectDispatch = dispatch => {
	return {
		leaveAnimation_action: () => {
			dispatch(leaveAnimation_action())
		}
	}
};


@withRouter @connect(connectProps, connectDispatch)
export default class extends Component {
	
	linkHandler = (event, href) => {
		event.preventDefault();
		this.props.leaveAnimation_action();
		
		(this.props.history.location.pathname !== href) &&
		new Promise(resolve => {
			
			setTimeout(() => {
				resolve();
			}, this.props.timeToWait);
			
		}).then(() => {
				this.props.history.push(href);
			}
		)
	};
	
	render() {
		return <a onClick={e => this.linkHandler(e, this.props.to)} href={this.props.to}>
			{this.props.children}
		</a>
	}
}
