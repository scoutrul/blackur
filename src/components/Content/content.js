import React, { Component } from 'react';
import Project from './Project'
import './content.scss'

export default class extends Component {
	render() {
		return (
			<div className={'content'}>
				<Project/>
			</div>
		);
	}
}
