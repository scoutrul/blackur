import React, { Component } from 'react';
import { connect } from 'react-redux'
import Appear from '../../HOC/Appear'
import ScrollResizeChanger from '../../HOC/colorChanger'
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
				let { divTopOffset, scrollTop } = this.props.MovingActions;
				let stopper = divTopOffset + scrollTop > 170;
				
				return <div className="contentTitle" style={{ opacity: stopper && 0, top: scrollTop }}>
					{slogan}</div>
			}
		}
		
		
		return (
			<div className={`work ${AnimationCss}`}>
				<div className="firstScreen" style={{backgroundColor: work.color}}>
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
