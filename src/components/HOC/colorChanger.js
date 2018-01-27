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
		let divElement = this._findNestedDiv(this.divElement);
		let viewBoxHeight = document.querySelector('.firstScreen') ? document.querySelector('.firstScreen').getBoundingClientRect().height : document.body.querySelector('.main').scrollHeight;
		let divTopOffset = divElement.offsetTop;
		let divHeight = divElement.getBoundingClientRect().height;
		let stopper = viewBoxHeight - (divHeight + divTopOffset);
		let actionBlock = this.state.scrollTop >= stopper;
		
		this.setState({
			divTopOffset,
			divHeight,
			viewBoxHeight,
			actionBlock
		});
	};
	
	_findNestedDiv = (curElement) => {
		function getInsideDiv(curElement) {
			return curElement.clientHeight ? curElement : getInsideDiv(curElement.children[0])
		}
		
		return curElement.clientHeight ? curElement : getInsideDiv(curElement.children[0])
	};
	
	componentDidMount() {
		let divElement = this._findNestedDiv(this.divElement);
		let viewBoxHeight = document.querySelector('.firstScreen') ? document.querySelector('.firstScreen').getBoundingClientRect().height : document.body.querySelector('.main').scrollHeight;
		let divTopOffset = divElement.offsetTop;
		let divHeight = divElement.getBoundingClientRect().height;
		
		this.setState({
			viewBoxHeight,
			divTopOffset,
			divHeight
		});
		
		window.addEventListener('resize', this._resizeEvent, false);
		document.querySelector('.scrollBox').addEventListener('scroll', this._scrollEvent);
		this._scrollEvent();
	}
	
	componentWillUnmount() {
		window.removeEventListener('resize', this._resizeEvent, false);
		document.querySelector('.scrollBox').removeEventListener('scroll', this._scrollEvent);
	}
	
	render() {
		return <div ref={div => this.divElement = div}>
			<this.props.component MovingActions={this.state}/>
		</div>
	}
}
	

