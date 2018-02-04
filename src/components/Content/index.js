import React, { Component } from 'react';

import Router from './Router'
import './content.scss'


export default class extends Component {
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


