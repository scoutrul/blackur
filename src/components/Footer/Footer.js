import React, { Component } from 'react';
import AnimatedLink from '../HOC/AnimatedLink'

import './footer.scss'

export default class extends Component {
	
	
	render() {
		return (
			<div className={'footer'}>
				<div><AnimatedLink to={'/contacts'}>Say Hello! </AnimatedLink></div>
			</div>
		);
	}
}
