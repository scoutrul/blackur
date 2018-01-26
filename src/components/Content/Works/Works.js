import React, { Component } from 'react';
import { connect } from 'react-redux'
import AnimatedLink from '../../HOC/AnimatedLink'
import ScrollResizeChanger from '../../HOC/colorChanger'
import './works.scss';
import PropTypes from "prop-types";

const connectProps = (state) => {
	return {
		works: state.Content.works,
	}
};
@connect(connectProps)
export default class extends Component {
	
	render() {
		class Class extends Component {
			static propTypes = {
				MovingActions: PropTypes.object,
			};
			
			render() {
				let { divTopOffset, scrollTop } = this.props.MovingActions;
				let stopper = divTopOffset + scrollTop > 170;
				
				return <div className="contentTitle"
							style={
								{
									opacity: stopper && 0,
									transform: `translateY(${scrollTop}px)`
								}}>
					Works</div>
			}
		}
		
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
				<ScrollResizeChanger component={Class}/>
				<ul className="list">
					<WorksList/>
				</ul>
			</div>
		);
	}
}
