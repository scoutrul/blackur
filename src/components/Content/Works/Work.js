import React, { Component } from 'react';
import { connect } from 'react-redux'
import Appear from '../../HOC/Appear'
import ScrollResizeChanger from '../../HOC/onScrollResizeChanger'
import './works.scss';
import PropTypes from "prop-types";

const connectProps = (state) => {
	return {
		works: state.Content.works,
	}
};
@connect(connectProps)
@Appear
export default class extends Component {
	
	render() {
		const work = this.props.works.find(item => item.url === this.props.url);
		const { AnimationCss } = this.props;
		
		const { header } = work || 'header';
		const { slogan } = work || 'slogan';
		
		class Class extends Component {
			static propTypes = {
				MovingActions: PropTypes.object,
			};
			
			render() {
				let { viewBoxHeight, divHeight, divTopOffset, scrollTop } = this.props.MovingActions;
				let stopper = viewBoxHeight - (divHeight / 2 + divTopOffset);
				let actionBlock = scrollTop >= stopper;
				return <div className="contentTitle" style={{ color: !actionBlock && 'white' }}>{slogan}</div>
			}
		}
		
		
		return (
			<div className={`work ${AnimationCss}`}>
				<div className="firstScreen">
					<ScrollResizeChanger component={Class}/>
					
					<div className="contentContainer">
						<h1>{header}</h1>
					</div>
				</div>
				<div className="otherScreen">
					<div className="contentContainer">
						<h1>{header}</h1>
						<h2>{header}</h2>
						<h3>{header}</h3>
						<h4>{header}</h4>
						<h5>{header}</h5>
						<h6>{header}</h6>
					</div>
				</div>
			</div>
		);
	}
};
