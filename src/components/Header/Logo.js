import React, { Component } from 'react';
import Appear from '../HOC/Appear'
import AnimatedLink from '../HOC/AnimatedLink'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import './logo.scss';

@connect(state => {
	return {
		changeColorBool: state.Animations.changeColorinWork
	}
})
@Appear
export default class extends Component {

	static propTypes = {
		MovingActions: PropTypes.object,
	}

	render() {

		let { viewBoxHeight, divHeight, divTopOffset, scrollTop, actionBlock } = this.props.MovingActions;

		let move = actionBlock ? scrollTop - (viewBoxHeight - divTopOffset - divHeight) : 0;

		let changeColor = this.props.changeColorBool ? '0' : !actionBlock && '0';

		return <AnimatedLink to={'/'}>
			<div className={`logo ${this.props.AnimationCss}`}>
				<div className={'logos'}>
					<div className="white"
						style={{ transform: `translateY(${!this.props.changeColorBool ? -move : 0}px)` }}>
						<img src={'images/logo_blackur.svg'}
							alt={'Blackur logo'}
							style={{ transform: `translateY(${!this.props.changeColorBool ? move : 0}px)` }} />
					</div>
					<div className="black"
						style={{ transform: `translateY(${move}px)`, opacity: changeColor}}>
						<img src={'images/logo_blackur.svg'}
							alt={'Blackur logo'}
							style={{ transform: `translateY(${-move}px)` }} />
					</div>
				</div>
			</div>
		</AnimatedLink>

	}

}
