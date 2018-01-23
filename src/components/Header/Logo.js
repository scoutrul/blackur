import React, { Component } from 'react';
import './Logo.scss';
import Appear from '../HOC/Appear'

import AnimatedLink from '../HOC/AnimatedLink'

@Appear
export default class Logo extends Component {
	state = {
		scrollTop: 0,
		layerHeight: null,
		offset: 0,
		logoHeight: 0,
		logoWidth: 0
	};
	
	_bindScroll = () => {
		document.getElementsByClassName('scroll')[0].addEventListener('scroll', e => {
			let ticking = false;
			let scrollTop = e.target.scrollTop || 0;
			
			const element = document.getElementsByClassName('firstScreen')[0] || document.getElementsByClassName('Main')[0] || document.body;
			if (!ticking) {
				window.requestAnimationFrame(() => {
					ticking = false;
					
					this.setState({
						scrollTop: scrollTop,
						logoHeight: this.logo.getBoundingClientRect().height,
						logoWidth: this.logo.getBoundingClientRect().width,
						layerHeight: element.getBoundingClientRect().height,
					});
				});
				ticking = true;
			}
		});
	};
	
	_bindResize = () => {
		const element = document.getElementsByClassName('firstScreen')[0] || document.getElementsByClassName('Main')[0] || document.body;
		window.addEventListener(
			'resize',
			() => {
				let resizeTimeout;
				if (!resizeTimeout) {
					resizeTimeout = setTimeout(() => {
						resizeTimeout = null;
						this.setState({
							offset: this.logo.offsetTop,
							logoHeight: this.logo.getBoundingClientRect().height,
							logoWidth: this.logo.getBoundingClientRect().width,
							layerHeight: element.getBoundingClientRect().height,
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
			offset: this.logo.offsetTop,
			logoHeight: this.logo.getBoundingClientRect().height,
			logoWidth: this.logo.getBoundingClientRect().width,
			layerHeight: document.getElementsByClassName('firstScreen')[0] || document.getElementsByClassName('Main')[0] || document.body.getBoundingClientRect().height,
		})
	}
	
	render() {
		let {
			logoWidth, logoHeight, offset,
			scrollTop, layerHeight
		} = this.state;
		
		let stopper = layerHeight - (logoHeight + offset);
		let actionBlock = scrollTop >= stopper;
		
		let move = actionBlock ? scrollTop - (layerHeight - offset - logoHeight) : 0;
		
		const doubbleLogo = () =>
			<div className={'logos'}>
				<div className="white"
					 style={{ transform: `translateY(${-move}px)`, height: logoHeight, width: logoWidth }}>
					<img src={'images/logo_blackur.svg'}
						 alt={'Blackur logo'}
						 style={{ transform: `translateY(${move}px)` }}/>
				</div>
				<div className="black"
					 style={{ transform: `translateY(${move}px)`, height: logoHeight, width: logoWidth }}>
					<img src={'images/logo_blackur.svg'}
						 alt={'Blackur logo'}
						 style={{ transform: `translateY(${-move}px)` }}/>
				</div>
			</div>
		
		
		const { AnimationCss } = this.props;
		return (
			<div className={`logo ${AnimationCss}`} ref={(logo) => this.logo = logo}>
				<AnimatedLink to={'/'}>
					{doubbleLogo()}
				</AnimatedLink>
			</div>
		
		);
	}
}
