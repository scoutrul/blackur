import React, { Component } from 'react';
import './headerLogo.scss';
import Changer from '../HOC/Appear'
import { connect } from 'react-redux'
import AnimatedLink from '../HOC/AnimatedLink'

const connectProps = state => {
	return {
		appearBefore: state.Animations.appearBefore,
		appearAfter: state.Animations.appearAfter,
		leaveAnimation: state.Animations.leaveAnimation,
	}
};

@Changer @connect(connectProps)
export default class Logo extends Component {
	state = {
		scrollTop: 0,
		layerHeight: null,
		offsetLogo: 0,
		logoHeight: 0,
		logoWidth: 0
	};
	
	_bindScroll = element => {
		element.addEventListener('scroll', e => {
			let ticking = false;
			let scrollTop = e.target.scrollTop || 0;
			
			if (!ticking) {
				window.requestAnimationFrame(() => {
					ticking = false;
					this._bindResize();
					const element = document.getElementsByClassName('firstScreen')[0] || document.getElementsByClassName('Main')[0] || document.body;
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
		this.setState({
			layerHeight: element.getBoundingClientRect().height,
		});
		window.addEventListener(
			'resize',
			() => {
				let resizeTimeout;
				if (!resizeTimeout) {
					resizeTimeout = setTimeout(() => {
						resizeTimeout = null;
						this.setState({
							layerHeight: element.getBoundingClientRect().height,
							offsetLogo: this.logo.offsetTop,
							logoHeight: this.logo.getBoundingClientRect().height,
							logoWidth: this.logo.getBoundingClientRect().width,
						});
					}, 66);
				}
			},
			false
		);
	};
	
	componentDidMount() {
		this._bindResize();
		this._bindScroll(document.getElementsByClassName('scroll')[0]);
		
		this.setState({
			offsetLogo: this.logo.offsetTop,
			logoHeight: this.logo.getBoundingClientRect().height,
			logoWidth: this.logo.getBoundingClientRect().width
		})
	}
	
	render() {
		let {logoWidth, logoHeight, offsetLogo,
			scrollTop, layerHeight} = this.state;
		
		let stopper1 = layerHeight - (logoHeight + offsetLogo);
		let stopper2 = stopper1 + logoHeight *2;
		let actionBlock = scrollTop >= stopper1;
		
		let move = actionBlock && scrollTop - (layerHeight - offsetLogo - logoHeight);
				
		const doubbleLogo = () =>
			<div className={'logos'}>
				<div className="white" style={{ top: -move, height: logoHeight, width: logoWidth }}>
					<img src={'images/logo_blackur.svg'}
						 alt={'Blackur logo'}
						 style={{ top: move }}/>
				</div>
				<div className="black" style={{ top: move, height: logoHeight, width: logoWidth }}>
					<img src={'images/logo_blackur.svg'}
						 alt={'Blackur logo'}
						 style={{ top: -move }}/>
				</div>
			</div>
		
		const beforeCss = 'appear_before';
		const afterCss = this.props.appearAfter ? 'appear_after' : '';
		const leaveCss = this.props.leaveAnimation ? 'leave_animation' : '';
		const AnimationCss = `${beforeCss} ${afterCss} ${leaveCss}`;
		
		return (
			<div className={`logo ${AnimationCss}`} ref={(logo) => this.logo = logo}>
				<AnimatedLink to={'/'}>
					{doubbleLogo()}
				</AnimatedLink>
			</div>
		
		);
	}
}
