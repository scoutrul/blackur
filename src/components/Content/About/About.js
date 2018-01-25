import React, { Component } from 'react';
import ScrollResizeChanger from '../../HOC/colorChanger'
import './about.scss'
import PropTypes from "prop-types";


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
					We help products find their place in digital void.</div>
			}
		}
		
		return (
			<div className={`contentContainer page-about ${AnimationCss}`}>
				<ScrollResizeChanger component={Class}/>
				<div className="content">
					
					<h1>We are Blackur.</h1>
					<h1 className={'dark'}>And we are in the black.</h1>
					<div className="column">
						<div>We are young agency with drastically new approach to work. We’ve got rid of everything that
							prevents us to create perfect products.
						</div>
						<div>We believe that the result is the only important thing in the modern world. And nothing
							more.
						</div>
					</div>
					<h3>We just use mathematics.<br/>
						It helps us to optimize work and brings the best result for every project we work on.</h3>
					<div className="column">
						<div>We have developed a system that helps us to assemble teams of experts to work on each
							project.
							It's so smart that can analyze up to several tens of different parameters.
						</div>
						<div>After we get the project information, this system selects the candidate and places it in
							the
							overall picture of the team. That’s how our dream team formed.
						</div>
					</div>
					<div className="column">
						<div>Every day we examine a lot of resumes to find the best. We make an offer to the unique
							candidates with interesting experience to keep the quality of our products at the highest
							level.
						</div>
					</div>
					<h3 className={'dark'}>
						Tell about yourself & move to the dark side using <span>work@blackur.com</span>
					</h3>
				</div>
			</div>
		
		);
	}
}
