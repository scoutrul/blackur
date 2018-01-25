import React, { Component } from 'react';
import AnimatedLink from '../HOC/AnimatedLink'
import Appear from "../HOC/Appear";
import PropTypes from "prop-types";

import './menu.scss'

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
		
		let blackColor = actionBlock ? 'black' : 'white';
		return <div className={`menu ${AnimationCss}`}>
			<AnimatedLink to={'/'} style={{color: blackColor}}>Home </AnimatedLink>
			<AnimatedLink to={'/about'} style={{color: blackColor}}>About </AnimatedLink>
			<AnimatedLink to={'/works'} style={{color: blackColor}}>Works </AnimatedLink>
			<AnimatedLink to={'/contacts'} style={{color: blackColor}}>Contacts</AnimatedLink>
		</div>
		
		
	}
}
