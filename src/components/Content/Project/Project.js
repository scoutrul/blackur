import React, { Component } from "react";
import "./project.scss";

import { ProjectContent } from './index'

export default class extends Component {
	state = {
		screenHeight: null
	};
	

	_bindResize = () => {
		this.setState({
			screenHeight: window.innerHeight
		});
		window.addEventListener(
			"resize",
			() => {
				let resizeTimeout;
				if (!resizeTimeout) {
					resizeTimeout = setTimeout(() => {
						resizeTimeout = null;
						this.setState({
							screenHeight: window.innerHeight
						});
					}, 66);
				}
			},
			false
		);
	};
	
	componentDidMount() {
		this._bindResize();
	}
	
	render() {
		const {AnimationCss} = this.props;
		return (
			<div className={`project ${AnimationCss}`}>
				<ProjectContent screenHeight={this.state.screenHeight}/>
			</div>
		);
	}
}
