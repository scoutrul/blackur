import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './footer.scss'

export default class extends Component {
	render() {
		return (
			<div className={'footer'}>
				<div><Link to={'/'}>home </Link></div>
				<div><Link to={'/contacts'}>contacts</Link></div>
			</div>
		);
	}
}
