import React, { Component } from "react";
import "./headerLogo.scss";
import InlineSVG from "svg-inline-react";
import Changer from '../HOC/Appear'
import { connect } from 'react-redux'

const connectProps = (state) => {
	return {
		appearBefore: state.Animations.appearBefore,
		appearAfter: state.Animations.appearAfter,
		leaveAnimation: state.Animations.leaveAnimation,
	}
};

@Changer@connect(connectProps)
export default class Logo extends Component {
	state = {
		topScroll: 0,
		screenHeight: null
	};
	
	_bindScroll = element => {
		element.addEventListener("scroll", e => {
			let ticking = false;
			let topScroll = e.target.scrollTop || 0;
			
			if (!ticking) {
				window.requestAnimationFrame(() => {
					ticking = false;
					this.setState({
						topScroll: topScroll
					});
				});
				ticking = true;
			}
		});
	};
	
	_bindResize = element => {
		this.setState({
			screenHeight: element.getBoundingClientRect().height
		});
		window.addEventListener(
			"resize",
			() => {
				let resizeTimeout;
				if (!resizeTimeout) {
					resizeTimeout = setTimeout(() => {
						resizeTimeout = null;
						this.setState({
							screenHeight: element.getBoundingClientRect().height
						});
					}, 66);
				}
			},
			false
		);
	};
	
	componentDidMount() {
		let body = document.body;
		this._bindResize(body);
		this._bindScroll(document.getElementsByClassName("scroll")[0] || body);
	}
	
	render() {
		let [svgW, svgH] = [48.5, 54];
		const logoSize = svgH;
		const padding = 47 ; // + firstScreen addition height
		const topScroll = this.state.topScroll;
		const MaskHeight = this.state.screenHeight;
		
		let stopper1 = MaskHeight - (logoSize * 2) - padding;
		let stopper2 = stopper1 + logoSize * 2
		let viewLimit = topScroll >= stopper1 && topScroll <= stopper2;
		
		let koef = viewLimit && topScroll - (MaskHeight - padding - logoSize * 2);
		
		let whiteMask = (topScroll > stopper2) ? svgH : -koef || 0;
		
		const svgSource = `
			<svg
				viewBox="0 0 ${svgW} ${svgH}"
				version="1.1"
				width=${svgW} height=${svgH}
				xmlns="http://www.w3.org/2000/svg">
					<defs>
						<clipPath id="logo-white">
							<rect x="0" y=${whiteMask} width=${svgW} height=${svgH} ></rect>
						</clipPath>
						<clipPath id="logo-black">
							<rect x="0" y=${0} width=${svgW} height=${svgH}></rect>
						</clipPath>
					</defs>
				<g id="black" clip-path="url(#logo-black)">
					<path id="path01" d="M40,26.4c3.8-2.6,6.3-7,6.3-11.9c0-8-6.5-14.4-14.4-14.4H0v54h34.1c8,0,14.4-6.5,14.4-14.4
			C48.5,33.7,45.1,28.6,40,26.4z" stroke="none" fill="#131517" ></path>
				</g>
				<g id="white" clip-path="url(#logo-white)">
					<path id="path02" d="M40,26.4c3.8-2.6,6.3-7,6.3-11.9c0-8-6.5-14.4-14.4-14.4H0v54h34.1c8,0,14.4-6.5,14.4-14.4
			C48.5,33.7,45.1,28.6,40,26.4z" stroke="none" fill="#FFFFFF" ></path>
				</g>
			</svg>`;
		
		
		const beforeCss = 'appear_before';
		const afterCss = this.props.appearAfter ? 'appear_after' : '';
		const leaveCss = this.props.leaveAnimation ? 'leave_animation' : '';
		const AnimationCss = `${beforeCss} ${afterCss} ${leaveCss}`;

		return (
			<div className={`headerLogo ${AnimationCss}`}>
				<InlineSVG src={svgSource} id={'svgLogo'}/>
			</div>
		);
	}
}

