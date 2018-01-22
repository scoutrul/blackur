import React, { Component } from 'react';
import AnimatedLink from '../HOC/AnimatedLink'

import './footer.scss'

export default class extends Component {
	
	
	render() {
		return (
			<div className={'footer'}>
				<div><AnimatedLink to={'/'}>Home </AnimatedLink></div>
				<div><AnimatedLink to={'/works'}>Works  </AnimatedLink></div>
				<div><AnimatedLink to={'/contacts'}>Contacts</AnimatedLink></div>
			</div>
		);
	}
}
