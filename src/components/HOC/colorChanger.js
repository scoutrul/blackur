import React, { Component } from 'react';

export default class extends Component {
	
	state = {
		scrollTop: 0,
		divTopOffset: 0,
		divHeight: 0,
		viewBoxHeight: 0,
		stopper: 0,
		actionBlock: false
	};
	
	_scrollEvent = e => {
		let ticking = false;
		let scrollTop = e ? e.target.scrollTop : 0;
		let stopper = this.state.viewBoxHeight - (this.state.divHeight + this.state.divTopOffset);
		let actionBlock = scrollTop >= stopper;
		
		if (!ticking) {
			window.requestAnimationFrame(() => {
				ticking = false;
				this.setState({
					scrollTop,
					stopper,
					actionBlock
				}, this._resizeEvent)
			});
			ticking = true;
		}
	};
	
	_resizeEvent = () => {
		let resizeTimeout;
		const vewBoxElement = document.getElementsByClassName('firstScreen')[0] || document.getElementsByClassName('Main')[0] || document.body;
		let divElement = this._findNestedDiv(this.divElement);
		
		let viewBoxHeight = vewBoxElement.getBoundingClientRect().height;
		let divTopOffset = divElement.offsetTop;
		let divHeight = divElement.getBoundingClientRect().height;
		let stopper = viewBoxHeight - (divHeight + divTopOffset);
		let actionBlock = this.state.scrollTop >= stopper;
		
		if (!resizeTimeout) {
			resizeTimeout = setTimeout(() => {
				resizeTimeout = false;
				this.setState({
					divTopOffset,
					divHeight,
					viewBoxHeight,
					actionBlock
				});
			}, 66);
		}
	};
	
	_findNestedDiv = (curElement) => {
		function getInsideDiv(curElement) {
			return curElement.clientHeight ? curElement : getInsideDiv(curElement.children[0])
		}
		
		return curElement.clientHeight ? curElement : getInsideDiv(curElement.children[0])
	};
	
	componentDidMount() {
		const vewBoxElement = document.getElementsByClassName('firstScreen')[0] || document.getElementsByClassName('Main')[0] || document.body;
		
		let divElement = this._findNestedDiv(this.divElement);
		let viewBoxHeight = vewBoxElement.getBoundingClientRect().height;
		let divTopOffset = divElement.offsetTop;
		let divHeight = divElement.getBoundingClientRect().height;
		
		this.setState({
			viewBoxHeight,
			divTopOffset,
			divHeight
		});
		
		window.addEventListener('resize', this._resizeEvent, false);
		document.getElementsByClassName('scrollBox')[0].addEventListener('scroll', this._scrollEvent);
		this._scrollEvent();
	}
	
	componentWillUnmount() {
		window.removeEventListener('resize', this._resizeEvent, false);
		document.getElementsByClassName('scrollBox')[0].removeEventListener('scroll', this._scrollEvent);
	}
	
	render() {
		return <div ref={div => this.divElement = div}>
			<this.props.component MovingActions={this.state}/>
		</div>
	}
}
	

