import React, { Component } from 'react';
import './main.scss'


export default class extends Component {
	render() {
		const Project = () => {
			return <div className='project' style={{ backgroundImage: 'url(images/works/epson.png)' }}>
				<div className="headers">
					<h1>Epson ReadyInl</h1>
					<h5>Ready for hassala massala nigga yo?</h5>
				</div>
				<ul className="services">
					<li>one</li>
					<li>twoooo</li>
					<li>tree</li>
					<li>4444</li>
				</ul>
			</div>
		};
		
		const { AnimationCss } = this.props;
		return (
			<div className={`page-main ${AnimationCss}`} style={{ backgroundColor: '#0957b6' }}>
				<Project/>
			</div>
		
		);
	}
}
