import React, { Component } from 'react';
import AnimatedLink from '../../HOC/AnimatedLink'
import './works.scss';

const works = [
	{
		header: 'Epson ReadyInk',
		slogan: 'Design & Fuck',
		url: 'Epson',
	},
	{
		header: 'Cloudburst',
		slogan: 'Steam pack',
		url: 'Cloudburst',
	},
	{
		header: 'Edmunds',
		slogan: 'slogan-mogan',
		url: 'Edmunds',
	},
	{
		header: 'Storymaze',
		slogan: 'Design & Fuck',
		url: 'Storymaze',
	},
	{
		header: 'Omnistry',
		slogan: 'Steam pack',
		url: 'Omnistry',
	},

];

export default class extends Component {
	render() {
		const Works = () => works.map(item =>
			<li key={item.url}>
				<AnimatedLink to={`/works/${item.url}`}>
					<h2>{item.header}</h2>
					<h5>{item.slogan}</h5>
				</AnimatedLink>
			</li>);
		
		const { AnimationCss } = this.props;
		return (
			<div className={`works contentContainer ${AnimationCss}`}>
				<ul className="list">
					<Works/>
				
				</ul>
			</div>
		);
	}
}
