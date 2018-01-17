import React, { Component } from "react";
import "./project.scss";

export default class extends Component {
	state ={
		screenHeight: null
	};
	
	_bindResize = element => {
		this.setState({
			screenHeight: window.innerHeight
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
							screenHeight: window.innerHeight
						});
					}, 66);
				}
			},
			false
		);
	};
	
	componentDidMount() {
		this._bindResize(document.getElementsByTagName('body')[0]);
	}
	
	render() {
		return (
			<div className={"project"}>
				<div className={"one"} id={"one"} style={{height: this.state.screenHeight - 100}}>
					{}
				</div>
				<div className={"two"}>{}</div>
				<div className={"three"}>{}</div>
			</div>
		);
	}
}
