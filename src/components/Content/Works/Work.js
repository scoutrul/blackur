import React, { Component } from 'react';
import { connect } from 'react-redux'
import Appear from '../../HOC/Appear'
import './works.scss';

@connect()
@Appear
export default class extends Component {
	
	componentWillMount() {
		
		console.log(this.props)
	}
	
	render() {
		const { AnimationCss, name } = this.props;
		return (
			<div className={`work ${AnimationCss}`}>
				<div className="firstScreen">
					<div className="contentContainer">
						<h1>{name}</h1>
					</div>
				</div>
				<div className="otherScreen">
					<div className="contentContainer">
						<h1>{name}'</h1>
						<h2>{name}'</h2>
						<h3>{name}'</h3>
						<h4>{name}'</h4>
						<h5>{name}'</h5>
						<h6>{name}'</h6>
					</div>
				</div>
			</div>
		);
	}
};
