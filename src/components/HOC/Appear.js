import React, { Component } from 'react';
import { connect } from 'react-redux'
import { appearBefore_action, appearAfter_action } from '../../store/reducers/Animations'
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";

const connectProps = (state) => {
	return {
		isAppearBefore: state.Animations.isAppearBefore,
		isAppearAfter: state.Animations.isAppearAfter,
		leaveAnimation: state.Animations.leaveAnimation,
		timeToWait: state.Animations.timeToWait,
	}
};

const connectDispatch = dispatch => {
	return {
		isAppearAfter_action: () => {
			dispatch(appearAfter_action())
		},
		isAppearBefore_action: () => {
			dispatch(appearBefore_action())
		}
	}
};

@withRouter @connect(connectProps, connectDispatch)
export default MountedComponent => {
	return class extends Component {
		
		static contextTypes = {
			viewBoxHeight: PropTypes.number,
			scrollTop: PropTypes.number,
			divTopOffset: PropTypes.number,
			divHeight: PropTypes.number,
			stopper: PropTypes.number,
			actionBlock: PropTypes.bool,
		};
		
		componentDidMount() {
			document.querySelector('.scrollBox').scrollTop = 0;
			this.props.isAppearBefore_action();
			
			let promise = new Promise(resolve => {
				setTimeout(() => resolve(), this.props.timeToWait)
			});
			
			promise.then(() => {
					this.props.isAppearAfter_action()
				}
			);
		}
		
		render() {
			const beforeCss = 'appear_before';
			const afterCss = this.props.isAppearAfter ? 'appear_after' : '';
			const leaveCss = this.props.leaveAnimation ? 'leave_animation' : '';
			const AnimationCss = `${beforeCss} ${afterCss} ${leaveCss}`;
			return <MountedComponent AnimationCss={AnimationCss || ''} {...this.props}/>
		}
	}
};


