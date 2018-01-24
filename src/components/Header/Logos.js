import React, { Component } from 'react';
import Appear from '../HOC/Appear'
import AnimatedLink from '../HOC/AnimatedLink'
import PropTypes from 'prop-types'

import './logo.scss';

export default class extends Component {
	
	static contextTypes = {
		scrollTop: PropTypes.number,
		divTopOffset: PropTypes.number,
		divHeight: PropTypes.number,
		divWidth: PropTypes.number,
		viewBoxHeight: PropTypes.number,
		stopper: PropTypes.number,
		actionBlock: PropTypes.bool,
	}
	

	render() {
		
		let {viewBoxHeight, divHeight, divTopOffset, scrollTop, stopper, actionBlock} = this.context;
		
		let move = actionBlock ? scrollTop - (viewBoxHeight - divTopOffset - divHeight) : 0;
		return <AnimatedLink to={'/'}>
				<div className={`logo ${this.props.AnimationCss}`}>
					<div className={'logos'}>
						<div className="white"
							 style={{ transform: `translateY(${-move}px)` }}>
							<img src={'images/logo_blackur.svg'}
								 alt={'Blackur logo'}
								 style={{ transform: `translateY(${move}px)` }}/>
						</div>
						<div className="black"
							 style={{ transform: `translateY(${move}px)` }}>
							<img src={'images/logo_blackur.svg'}
								 alt={'Blackur logo'}
								 style={{ transform: `translateY(${-move}px)` }}/>
						</div>
					</div>
				</div>
			</AnimatedLink>

	}
	
}
