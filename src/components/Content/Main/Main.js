import React, { Component} from 'react';
import './main.scss'


export default class extends Component {

	render() {
		
		const Project = () => {
			return <div className='project' style={{backgroundColor: '#0957b6', backgroundImage: 'url(images/works/epson.png)'}}>
				<h1>Epson</h1>
				<h2>Do u rdy?</h2>
				<ul className="services">
					<li>one</li>
					<li>twoooo</li>
					<li>tree</li>
					<li>4444</li>
				</ul>
			</div>
		}
		
		
		const {AnimationCss} = this.props;
		return (
			<div className={`page-main contentContainer ${AnimationCss}`}>
				<Project/>
			</div>
		
		);
	}
}
