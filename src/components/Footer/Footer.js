import React, { Component } from 'react';
import AnimatedLink from '../HOC/AnimatedLink'
import './footer.scss'

export default class extends Component {
	render() {
		return (
			<div className={'footer'}>
				<AnimatedLink to={'/contacts'}>Say Hello!</AnimatedLink>
			</div>
		);
	}
}
