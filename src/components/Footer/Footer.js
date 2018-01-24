import React, { Component } from 'react';
import AnimatedLink from '../HOC/AnimatedLink'
import './footer.scss'
import Appear from "../HOC/Appear";

@Appear
export default class extends Component {
	state = {
		scrollTop: 0,
		layerHeight: null,
		offset: 0,
		blockHeight: 0,
	};
	
	//todo make a uiilit 4 auto resize and scroll and initial state ... and refactor here and logo
	
	_bindScroll = () => {
		document.getElementsByClassName('scrollBox')[0].addEventListener('scroll', e => {
			let ticking = false;
			let scrollTop = e.target.scrollTop || 0;
			
			const screenHeight = document.getElementsByClassName('firstScreen')[0] || document.getElementsByClassName('Main')[0] || document.body;
			if (!ticking) {
				window.requestAnimationFrame(() => {
					ticking = false;
					this.setState({
						scrollTop,
						blockHeight: this.blockView.getBoundingClientRect().height,
						layerHeight: screenHeight.getBoundingClientRect().height,
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
							layerHeight: element.getBoundingClientRect().height,
							offset: this.blockView.offsetTop,
							blockHeight: this.blockView.getBoundingClientRect().height,
						}, this._bindScroll());
					}, 66);
				}
			},
			false
		);
	};
	
	componentDidMount() {
		const element = document.getElementsByClassName('firstScreen')[0] || document.getElementsByClassName('Main')[0] || document.body;
		
		this._bindScroll();
		this._bindResize();
		this.setState({
			offset: this.blockView.offsetTop,
			blockHeight: this.blockView.getBoundingClientRect().height,
			layerHeight: element.getBoundingClientRect().height,
		})
	}
	
	render() {
		const { AnimationCss } = this.props;
		let {
			blockHeight, offset,
			scrollTop, layerHeight
		} = this.state;
		
		let stopper = layerHeight - (blockHeight/2 + offset);
		let actionBlock = scrollTop >= stopper;
		
		return (
			<div className={`footer ${AnimationCss}`} ref={blockView => this.blockView = blockView}
				 style={{color: !actionBlock && 'white'}}>
				<AnimatedLink to={'/contacts'}>Say Hello!</AnimatedLink>
			</div>
		);
	}
}
