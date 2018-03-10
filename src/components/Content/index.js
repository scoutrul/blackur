import React, { Component } from 'react';

import Router from './Router';
import './content.scss';

export default class extends Component {
	componentDidUpdate() {
		this.scrollBox.scrollTop = 0;
	}
	render() {
		return (
			<div className="scrollBox" ref={(elm) => (this.scrollBox = elm)}>
				<main>
					<Router />
				</main>
			</div>
		);
	}
}
