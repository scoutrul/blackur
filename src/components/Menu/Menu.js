import React, { Component } from 'react';
import AnimatedLink from '../HOC/AnimatedLink'

import './menu.scss'

export default class extends Component {
	
	render() {
		return (
			<div className={'menu'}>
				<div><AnimatedLink to={'/'}>Home </AnimatedLink></div>
				<div><AnimatedLink to={'/works'}>Works  </AnimatedLink></div>
				<div><AnimatedLink to={'/contacts'}>Contacts</AnimatedLink></div>
			</div>
		);
	}
}
