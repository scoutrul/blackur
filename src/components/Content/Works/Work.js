import React, {Component} from 'react';
import './works.scss';

export default class extends Component {
	render() {
		console.log(this.props)
		const name = this.props.name;
		const { AnimationCss } = this.props;
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
