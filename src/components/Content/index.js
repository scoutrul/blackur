import React, { Component } from 'react';

import Router from './Router'
import './content.scss'



export default class extends Component {

	componentDidMount() {
		// const scrollBarWidth = document.getElementsByClassName('scroll')[0].clientWidth - document.getElementsByClassName('scroll')[0].offsetWidth;

		// ToDO send scrollBar width to reducer. Use it for right-position elements (like burger or contact link)
	}
	
	render() {
		return (
			<div className='scroll' ref={p => this.scroll = p}>
				<div className='main' ref={p => this.main = p}>
					<Router/>
				</div>
			</div>
		);
	}
}


