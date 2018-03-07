import React, { Component } from 'react';
import './footer.scss'
import Appear from "../HOC/Appear";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

@connect(state => {
	return {
		changeColorBool: state.Animations.changeColorinWork
	}
})
@Appear
export default class extends Component {
	static propTypes = {
		MovingActions: PropTypes.object,
	};
	
	render() {
		let { viewBoxHeight, divHeight, divTopOffset, scrollTop } = this.props.MovingActions;
		
		const { AnimationCss } = this.props;
		
		let stopper = viewBoxHeight - (divHeight / 2 + divTopOffset);
		let actionBlock = scrollTop >= stopper;
		
		let changeColor = this.props.changeColorBool ? 'white' : !actionBlock && 'white';



		return (
			
			<div className={`footer ${AnimationCss}`}>
				<div className="sayhello" style={{ color: changeColor}}>
					<a href="mailto:hello@blackur.com">Say Hello!</a>
				</div>
			</div>
		
		);
	}
}
