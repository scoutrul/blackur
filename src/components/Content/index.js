import React, { Component } from 'react';

import Router from './Router'
import './content.scss'


export default class extends Component {
	componentDidUpdate() {
		document.querySelector('.scrollBox').scrollTop = 0;
	}
	render() {
		return (
			<div className='scrollBox'>
				<main>
					<Router/>
				</main>
			</div>
		);
	}
}


