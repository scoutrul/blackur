import React, { Component } from 'react';
import './logo.scss';
import Appear from '../HOC/Appear'

import AnimatedLink from '../HOC/AnimatedLink'

const vewBoxElement = document.getElementsByClassName('firstScreen')[0] || document.getElementsByClassName('Main')[0] || document.body;

const doubbleLogo = (veiwBoxHeight, divTopOffset, scrollTop, divHeight, divWidth) => {
	
	let stopper = veiwBoxHeight - (divHeight + divTopOffset);
	let actionBlock = scrollTop >= stopper;
	
	let move = actionBlock ? scrollTop - (veiwBoxHeight - divTopOffset - divHeight) : 0;
	
	return <div className={'logos'}>
		<div className="white"
			 style={{ transform: `translateY(${-move}px)`, height: divHeight, width: divWidth }}>
			<img src={'images/logo_blackur.svg'}
				 alt={'Blackur logo'}
				 style={{ transform: `translateY(${move}px)` }}/>
		</div>
		<div className="black"
			 style={{ transform: `translateY(${move}px)`, height: divHeight, width: divWidth }}>
			<img src={'images/logo_blackur.svg'}
				 alt={'Blackur logo'}
				 style={{ transform: `translateY(${-move}px)` }}/>
		</div>
	</div>
}

@Appear
export default class Logo extends Component {
	state = {};
	
	_bindScroll = (divElement) => {
		document.getElementsByClassName('scroll')[0].addEventListener('scroll', e => {
			let ticking = false;
			let scrollTop = e.target.scrollTop || 0;
			if (!ticking) {
				window.requestAnimationFrame(() => {
					ticking = false;
					
					this.setState({
						scrollTop: scrollTop,
						divHeight: this.divElement.getBoundingClientRect().height,
						divWidth: this.divElement.getBoundingClientRect().width,
						veiwBoxHeight: vewBoxElement.getBoundingClientRect().height,
					});
				});
				ticking = true;
			}
		});
	};
	
	_bindResize = (div) => {
		window.addEventListener(
			'resize',
			() => {
				let resizeTimeout;
				if (!resizeTimeout) {
					resizeTimeout = setTimeout(() => {
						resizeTimeout = null;
						this.setState({
							divTopOffset: this.divElement.offsetTop,
							divHeight: this.divElement.getBoundingClientRect().height,
							divWidth: this.divElement.getBoundingClientRect().width,
							veiwBoxHeight: vewBoxElement.getBoundingClientRect().height,
						}, this._bindScroll());
					}, 66);
				}
			},
			false
		);
	};
	
	componentDidMount() {
		this._bindResize();
		this._bindScroll();
		//todo sometimes black logo appear, need to reset
		this.setState({
			divTopOffset: this.divElement.offsetTop,
			divHeight: this.divElement.getBoundingClientRect().height,
			divWidth: this.divElement.getBoundingClientRect().width,
			veiwBoxHeight: vewBoxElement,
		})
	}
	
	render() {
		let {
			divWidth, divHeight, divTopOffset,
			scrollTop, veiwBoxHeight
		} = this.state;
		
		
		const { AnimationCss } = this.props;
		return (
			<div className={`logo ${AnimationCss}`} ref={(div) => this.divElement = div}>
				<AnimatedLink to={'/'}>
					{doubbleLogo(veiwBoxHeight, divTopOffset, scrollTop, divHeight, divWidth)}
				</AnimatedLink>
			</div>
		
		);
	}
}
