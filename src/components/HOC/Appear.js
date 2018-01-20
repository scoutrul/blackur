import React, { Component } from 'react';
import * as Promise from "promise";
import { connect } from 'react-redux'
import {appearBefore_action, appearAfter_action} from '../../store/reducers/Animations'
import { withRouter } from "react-router-dom";

const connectProps = (state) => {
	return {
		appearBefore: state.Animations.appearBefore,
		appearAfter: state.Animations.appearAfter,
		leaveAnimation: state.Animations.leaveAnimation,
	}
};

const connectDispatch = dispatch => {
	return {
		appearAfter_action: () => {
			dispatch(appearAfter_action())
		},
		appearBefore_action: () => {
			dispatch(appearBefore_action())
		}
	}
};

@withRouter@connect(connectProps, connectDispatch)
export default (MountedComponent) => {
	return class extends Component {
		
		componentDidMount() {
			new Promise(resolve => {
				this.props.appearBefore_action();
				setTimeout(() => resolve(), this.props.timeToWait);
			}).then(() => {
				this.props.appearAfter_action()
				}
			);
		}
		
		render() {
			const beforeCss = 'appear_before';
			const afterCss = this.props.appearAfter ? 'appear_after' : '';
			const leaveCss = this.props.leaveAnimation ? 'leave_animation' : '';
			const AnimationCss = `${beforeCss} ${afterCss} ${leaveCss}`;
			return <MountedComponent AnimationCss={AnimationCss || ''}/>
		}
	}
};
