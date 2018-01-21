import React, { Component } from 'react';
import './headerLogo.scss';
import InlineSVG from 'svg-inline-react';
import Changer from '../HOC/Appear'
import { connect } from 'react-redux'

const connectProps = (state) => {
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
		logoHeight:0,
		logoWidth: 0
	};
	
	_bindScroll = element => {
		element.addEventListener('scroll', e => {
			let ticking = false;
			let scrollTop = e.target.scrollTop || 0;
			
			if (!ticking) {
				window.requestAnimationFrame(() => {
					ticking = false;
					this.setState({
						scrollTop: scrollTop,
						logoHeight: this.logo.getBoundingClientRect().height,
						logoWidth: this.logo.getBoundingClientRect().width
					});
					console.log(this.logo.getBoundingClientRect().height,
						this.logo.getBoundingClientRect().width)
				});
				ticking = true;
			}
		});
	};
	
	_bindResize = element => {

		this.setState({
			layerHeight: element.getBoundingClientRect().height,
		});
		window.addEventListener(
			'resize',
			() => {
				console.log(this.logo.clientHeight)
				let resizeTimeout;
				if (!resizeTimeout) {
					resizeTimeout = setTimeout(() => {
						resizeTimeout = null;
						this.setState({
							layerHeight: element.getBoundingClientRect().height,
							offsetLogo: this.logo.offsetTop
						});
					}, 66);
				}
			},
			false
		);
	};
	
	componentDidMount() {
		this._bindResize(document.getElementsByClassName('firstScreen')[0] || document.getElementsByClassName('Main')[0]);
		this._bindScroll(document.getElementsByClassName('scroll')[0]);
		
		this.setState({
			offsetLogo: this.logo.offsetTop,
			logoHeight: this.logo.getBoundingClientRect().height,
			logoWidth: this.logo.getBoundingClientRect().width
		})
	}
	
	render() {
		const offsetLogo = this.state.offsetLogo;
		let [svgW, svgH] = [this.state.logoWidth, this.state.logoHeight];
		const scrollTop = this.state.scrollTop;
		const LayerHeight = this.state.layerHeight;
		
		let stopper1 = LayerHeight - (svgH + offsetLogo);
		let stopper2 = stopper1 + svgH
		let viewLimit = scrollTop >= stopper1 && scrollTop <= stopper2;
		
		let koef = viewLimit && scrollTop - (LayerHeight - offsetLogo - svgH);
		
		let whiteMask = (scrollTop > stopper2) ? svgH : -koef || 0;
		
		const svgSource = `
			<svg
				viewBox='0 0 ${svgW} ${svgH}'
				version='1.1'
				width=${svgW} height=${svgH}
				xmlns='http://www.w3.org/2000/svg'>
					<defs>
						<clipPath id='logo-white'>
							<rect x='0' y=${whiteMask} width=${svgW} height=${svgH} ></rect>
						</clipPath>
						<clipPath id='logo-black'>
							<rect x='0' y=${0} width=${svgW} height=${svgH}></rect>
						</clipPath>
					</defs>
				<g id='black' clip-path='url(#logo-black)'>
					<path id='path01' d='M40,26.4c3.8-2.6,6.3-7,6.3-11.9c0-8-6.5-14.4-14.4-14.4H0v54h34.1c8,0,14.4-6.5,14.4-14.4
			C48.5,33.7,45.1,28.6,40,26.4z' stroke='none' fill='#131517' ></path>
				</g>
				<g id='white' clip-path='url(#logo-white)'>
					<path id='path02' d='M40,26.4c3.8-2.6,6.3-7,6.3-11.9c0-8-6.5-14.4-14.4-14.4H0v54h34.1c8,0,14.4-6.5,14.4-14.4
			C48.5,33.7,45.1,28.6,40,26.4z' stroke='none' fill='#FFFFFF' ></path>
				</g>
			</svg>`;
		
		
		const beforeCss = 'appear_before';
		const afterCss = this.props.appearAfter ? 'appear_after' : '';
		const leaveCss = this.props.leaveAnimation ? 'leave_animation' : '';
		const AnimationCss = `${beforeCss} ${afterCss} ${leaveCss}`;
		
		return (
			<div className={`logo ${AnimationCss}`} ref={(logo) => this.logo = logo}>
				<InlineSVG src={svgSource} id={'svgLogo'}/>
			</div>
		);
	}
}

