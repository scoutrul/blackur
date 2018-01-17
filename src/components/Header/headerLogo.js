import React, { Component } from "react";
import "./headerLogo.scss";
import InlineSVG from "svg-inline-react";

export default class extends Component {
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
			screenHeight: element.clientHeight
		});
		window.addEventListener(
			"resize",
			() => {
				let resizeTimeout;
				if (!resizeTimeout) {
					console.log('resizing')
					resizeTimeout = setTimeout(() => {
						resizeTimeout = null;
						
						this.setState({
							screenHeight: element.clientHeight
						});
					}, 66);
				}
			},
			false
		);
	};
	
	componentDidMount() {
		const element = document.getElementsByClassName("mainFrame")[0] ;
		this._bindScroll(element);
		this._bindResize(element);
	}
	
	componentDidUpdate() {
		console.log(this.state);
	}
	
	render() {
		
		// работать с нормальным svg с понятным размером
		// положение скролла минус размер блока минус размер логотипа
		// тогда применять к маске эту разницу
		// пока не настанет положение скролла > размер блока + размер логотипа
		
		const logoSize = 54;
		const padding = 109;
		const topScroll = this.state.topScroll;
		const MaskHeight = this.state.screenHeight;
		
		let viewLimit = ((topScroll > (MaskHeight - logoSize*1.5) - padding ) && (topScroll < (MaskHeight + logoSize*1.5) - padding));
		
		let koef = viewLimit && topScroll - MaskHeight + logoSize*1.5 + padding ;
		
		let initWhite =  (topScroll > (MaskHeight + logoSize*1.5) - padding-10 ) ? 100 : -koef || 0;
		let initBlack =  0;
		
		console.log(topScroll, koef)
		
		let [svgW, svgH] = [48.5, 54];
		const svgSource = `
	<svg
		viewBox="0 0 ${svgW} ${svgH}"
		version="1.1"
		width=${svgW} height=${svgH}
		xmlns="http://www.w3.org/2000/svg">
			<defs>
				<clipPath id="logo-white">
					<rect x="0" y=${initWhite} width=${svgW} height=${svgH}></rect>
				</clipPath>
				<clipPath id="logo-black">
					<rect x="0" y=${initBlack} width=${svgW} height=${svgH}></rect>
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
		
		return (
			<div className={"headerLogo"}>
				<InlineSVG src={svgSource} style={{ position: 'absolute' }}/>
			</div>
		);
	}
}
