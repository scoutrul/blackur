import React, { Component } from 'react';
import ScrollResizeChanger from '../../HOC/colorChanger'
import PropTypes from "prop-types";
import './contacts.scss'


export default class extends Component {
	
	render() {
		const { AnimationCss } = this.props;
		
		class Class extends Component {
			static propTypes = {
				MovingActions: PropTypes.object,
			};
			
			render() {
				let { divTopOffset, scrollTop } = this.props.MovingActions;
				let stopper = divTopOffset + scrollTop > 150;
				
				return <div className="contentTitle" style={{ opacity: stopper && 0 }}>
					We take ambitious projects and are proud of the result.</div>
			}
		}
		
		return (
			<div className={`contentContainer page-contacts ${AnimationCss}`}>
				<ScrollResizeChanger component={Class}/>
				<div className="content">
					<h3 className={'dark'}><span>Tell us your</span> <br/>
						black secrets.</h3>
					<form>
						<label>enter your email</label>
						<input/>
						<label>type message</label>
						<input/>
					</form>
					<h4>Send</h4>
				</div>
			
			</div>
		
		);
	}
}
