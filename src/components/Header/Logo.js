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
		let { viewBoxHeight, divHeight, divTopOffset, scrollTop, actionBlock } = this.props.MovingActions;

		let move = actionBlock ? scrollTop - (viewBoxHeight - divTopOffset - divHeight) : 0;

		let changeColor = this.props.changeColorBool ? '0' : !actionBlock && '0';

		return (
			<AnimatedLink to={'/'}>
				<div className={`logo ${this.props.AnimationCss}`}>
					<div className={'logos'}>
					 	<div className="to_white" style={{ opacity: this.props.changeColorBool ? 1 : 0 }}>
							<img src={'images/logo_blackur.svg'} alt={'Blackur logo'} />
						</div>
						<div className="white" style={{ transform: `translate3D(0, ${-move}px ,0)` }}>
							<img
								src={'images/logo_blackur.svg'}
								alt={'Blackur logo'}
								style={{ transform: `translate3D(0, ${!this.props.changeColorBool ? move : 0}px ,0)` }}
							/>
						</div>
						<div className="black" style={{ transform: `translate3D(0, ${move}px ,0)` }}>
							<img
								src={'images/logo_blackur.svg'}
								alt={'Blackur logo'}
								style={{
									transform: `translate3D(0, ${-move}px ,0)`
								}}
							/>
						</div>
					</div>
				</div>
			</AnimatedLink>
		);
	}
}
