import React, { Component } from 'react';
import AnimatedLink from '../HOC/AnimatedLink'

import './footer.scss'

export default class extends Component {
	
	
	render() {
		return (
			<div className={'footer'}>
				<div><AnimatedLink to={'/'}>home </AnimatedLink></div>
				<div><AnimatedLink to={'/projects'}>Projects  </AnimatedLink></div>
				<div><AnimatedLink to={'/contacts'}>contacts</AnimatedLink></div>
			</div>
		);
	}
}
