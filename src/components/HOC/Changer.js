import React, { Component } from 'react';
import * as Promise from "promise";


export default (MountedComponent, timeToWait) => {
	return class extends Component {
		
		state = {
			timeToWait: timeToWait || 1000,
			needMount: false
		};
		
		componentWillMount() {
			new Promise(resolve => {
				setTimeout(() => {
					resolve()
				}, this.state.timeToWait);
				
			}).then(() => {
						this.setState({needMount: true})
					}
				);
		}
		
		render() {
			const beforeCss = 'Changer_before';
			const afterCss = this.state.needMount ? 'Changer_after' : '';
			const allCss = `${beforeCss} ${afterCss}`;
			return (
				<MountedComponent allCss={allCss || ''}/>
			)
		}
	}
};
