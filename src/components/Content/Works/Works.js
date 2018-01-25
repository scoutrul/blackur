import React, { Component } from 'react';
import {connect} from 'react-redux'
import AnimatedLink from '../../HOC/AnimatedLink'
import HeaderSlogan from '../../Header/HeaderSlogan'
import './works.scss';

const connectProps = (state) => {
	return {
		works: state.Content.works,
	}
};
@connect(connectProps)
export default class extends Component {
	render() {
		const WorksList = () => this.props.works.map(item =>
			<li key={item.url}>
				<AnimatedLink to={`/${item.url}`}>
					<h2>{item.header}</h2>
					<span>{item.slogan}</span>
				</AnimatedLink>
			</li>);
		
		const { AnimationCss } = this.props;
		return (
			<div className={`works contentContainer ${AnimationCss}`}>
				<HeaderSlogan text={'Works'}/>
				<ul className="list">
					<WorksList/>
				</ul>
			</div>
		);
	}
}
