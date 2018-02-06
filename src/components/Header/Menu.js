import React, { Component } from 'react';
import AnimatedLink from '../HOC/AnimatedLink'
import Appear from "../HOC/Appear";

import './menu.scss'

@Appear
export default class extends Component {
	state = {
		opened: false
	};
	
	_opener = () => {
		this.setState(prevState => {
			return {
				opened: !prevState.opened
			}
		})
	};
	
	render() {
		let { viewBoxHeight, divHeight, divTopOffset, scrollTop } = this.props.MovingActions;
		
		const { AnimationCss } = this.props;
		
		
		const burgerColor1 = () => {
			let stopper = viewBoxHeight - (divTopOffset);
			let actionBlock = scrollTop >= stopper;
			return actionBlock ? 'black' : 'white'
		};
		const burgerColor2 = () => {
			let stopper = viewBoxHeight - (divTopOffset + divHeight / 2);
			let actionBlock = scrollTop >= stopper;
			return actionBlock ? 'black' : 'white'
		};

		
		return <div className={`menu`}>
			<div id="burger" onClick={this._opener} className={`${AnimationCss} ${this.state.opened && 'opened'}`}>
				<span style={{ color: burgerColor1()}}>{}</span>
				<span style={{ color: burgerColor2()}}>{}</span>
			</div>
			<nav className={this.state.opened && 'visible' || 'hidden'}>
				<ul className="nav__menu">
					<li>
						<div onClick={this._opener}><AnimatedLink to={'/'}>Home </AnimatedLink></div>
					</li>
					<li>
						<div onClick={this._opener}><AnimatedLink to={'/about'}>About </AnimatedLink></div>
					</li>
					<li>
						<div onClick={this._opener}><AnimatedLink to={'/works'}>Works </AnimatedLink></div>
					</li>
					<li>
						<div onClick={this._opener}><AnimatedLink to={'/contacts'}>Contacts</AnimatedLink></div>
					</li>
				</ul>
				<div className="hello">
					<a href="mailto:hello@blackur.com">Say Hello!</a>
				</div>
			</nav>
		</div>
	}
}
