import React, { Component } from 'react';
import AnimatedLink from '../HOC/AnimatedLink'

import './footer.scss'
import Appear from "../HOC/Appear";
import PropTypes from "prop-types";

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
		
		return (
			
			<div className={`footer ${AnimationCss}`}>
				<div style={{ color: !actionBlock && 'white' }}>
					<a href="mailto:hello@blackur.com">Say Hello!</a>
				</div>
			</div>
		
		);
	}
}
