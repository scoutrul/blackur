import React, { Component } from 'react';
import { connect } from 'react-redux';

const connectProps = (state) => {
	return {
		pageTitle: state.Content.pageTitle,
	}
};

@connect(connectProps)
export default class extends Component {
	
	state = {}
	
	_scrollEvent = e => {
		let scrollTop = e ? e.target.scrollTop : 0;
		
		let opacity = scrollTop >= 100 ? 0 : 1;
		this.setState({ opacity })
	};
	
	componentDidMount() {
		document.querySelector('.scrollBox').addEventListener('scroll', this._scrollEvent);
		this._scrollEvent();
	}
	
	componentWillUnmount() {
		document.querySelector('.scrollBox').removeEventListener('scroll', this._scrollEvent);
	}
	
	render() {
		
		const { AnimationCss } = this.props;
		
		
		return (
			<div className={`pageTitle ${AnimationCss}`}
				 ref={(node) => this.title = node}
				 style={{opacity: this.state.opacity}}
			>
				{this.props.pageTitle}
			
			</div>
		);
	}
}
