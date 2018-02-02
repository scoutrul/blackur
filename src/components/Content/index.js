import React, { Component } from 'react';

import Router from './Router'
import './content.scss'


export default class extends Component {
	render() {
		return (
			<div className='scrollBox' ref={p => this.scroll = p}>
				<div className='main' ref={p => this.main = p}>
					<Router/>
				</div>
			</div>
		);
	}
}


