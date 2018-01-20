import React, { Component } from 'react';
import * as Promise from "promise";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


export default (MountedComponent) => {
	return class extends Component {
		
		state = {
			timeToWait: 1000,
			needMount: false
		};
		
		componentWillMount() {
			new Promise(resolve => {
				setTimeout(() => {
					resolve()
				}, this.state.timeToWait);
				
			}).then(() => {
					this.setState({ needMount: true })
				}
			);
		}
		
		componentDidAppear() {
			console.log('componentDidAppear()')
		}
		
		componentWillLeave() {
			console.log('componentWillLeave()')
			
		}
		
		render() {
			const beforeCss = 'Changer_before';
			const afterCss = this.state.needMount ? 'Changer_after' : '';
			const allCss = `${beforeCss} ${afterCss}`;
			return <ReactCSSTransitionGroup
				transitionName={'contact'}
				transitionEnter={true}
				transitionLeave={true}
				transitionEnterTimeout={1300}
				transitionLeaveTimeout={1300}>
				<MountedComponent allCss={allCss || ''}/>
			</ReactCSSTransitionGroup>
		
			
		}
	}
};
