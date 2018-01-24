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
		
		return <div className={`menu ${AnimationCss}`}>
				<div style={{ color: !actionBlock && 'white' }}><AnimatedLink to={'/'}>Home </AnimatedLink></div>
				<div style={{ color: !actionBlock && 'white' }}><AnimatedLink to={'/works'}>Works </AnimatedLink></div>
				<div style={{ color: !actionBlock && 'white' }}><AnimatedLink to={'/contacts'}>Contacts</AnimatedLink>
			</div>
		
		
		</div>
		
	}
}
