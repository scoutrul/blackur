import React, { Component } from 'react';
import Appear from '../HOC/Appear';
import AnimatedLink from '../HOC/AnimatedLink';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './logo.scss';

@connect((state) => {
	return {
		changeColorBool: state.Animations.changeColorinWork
	};
})
@Appear
export default class extends Component {
	static propTypes = {
		MovingActions: PropTypes.object
	};

	render() {
		let {
			viewBoxHeight,
			divHeight,
			divWidth,
			divTopOffset,
			scrollTop,
			actionBlock,
			stopper
		} = this.props.MovingActions;

		let move = actionBlock ? scrollTop - (viewBoxHeight - divTopOffset - divHeight) : 0;

		
		let svgGradient = () => {
			let actionBlock = scrollTop >= stopper && scrollTop >= stopper + divHeight;
			let toBlack = scrollTop >= stopper + divHeight ;

			let result = !toBlack ?  `${divHeight * 2 - move * 2}px` : '0%' ;
			console.log('actionBlock',actionBlock, 'toBlack', toBlack, 'result', result)

			return !this.props.changeColorBool ? result : !actionBlock && '200px'
		} 

		return (
			<AnimatedLink to={'/'}>
				<div className={`logo ${this.props.AnimationCss}`}>
					<div className={'logos'}>
						<div className={'logo_svg'}>
							<svg x="0px" y="0px" viewBox={`0 0 48.5 53.9`}>
								<linearGradient
									id="grad"
									y1={svgGradient()}
									x1={`100%`}
									spreadMethod="pad"
									gradientUnits="userSpaceOnUse"
								>
									<stop offset="50%" stopColor="black" />
									<stop offset="50%" stopColor="white" />
								</linearGradient>
								<path
									fill="url(#grad)"
									d="M40,26.4c3.8-2.6,6.3-7,6.3-11.9c0-8-6.5-14.4-14.4-14.4H0v54h34.1c8,0,14.4-6.5,14.4-14.4
	C48.5,33.7,45.1,28.6,40,26.4z"
								/>
							</svg>
						</div>
						<div className="to_white" style={{ opacity: (this.props.changeColorBool && actionBlock) ? 1 : 0 }}>
							<svg x="0px" y="0px" viewBox={`0 0 48.5 53.9`} width={divWidth} height={divHeight}>
								<path
									fill="#FFF"
									d="M40,26.4c3.8-2.6,6.3-7,6.3-11.9c0-8-6.5-14.4-14.4-14.4H0v54h34.1c8,0,14.4-6.5,14.4-14.4
C48.5,33.7,45.1,28.6,40,26.4z"
								/>
							</svg>
						</div>
					</div>
				</div>
			</AnimatedLink>
		);
	}
}

// <div className="white" style={{ transform: `translate3D(0, ${-move}px ,0)` }}>
// 							<img
// 								src={'images/logo_blackur.svg'}
// 								alt={'Blackur logo'}
// 								style={{ transform: `translate3D(0, ${!this.props.changeColorBool ? move : 0}px ,0)` }}
// 							/>
// 						</div>
// 						<div className="black" style={{ transform: `translate3D(0, ${move}px ,0)` }}>
// 							<img
// 								src={'images/logo_blackur.svg'}
// 								alt={'Blackur logo'}
// 								style={{
// 									transform: `translate3D(0, ${-move}px ,0)`
// 								}}
// 							/>
// 						</div>
