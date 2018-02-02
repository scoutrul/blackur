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
			}})
	};
	
	
	componentDidMount() {
		console.log(this)
	}
	
	render() {
		let { viewBoxHeight, divHeight, divTopOffset, scrollTop } = this.props.MovingActions;
		
		const { AnimationCss } = this.props;
		
		let stopper = viewBoxHeight - (divHeight / 2 + divTopOffset);
		let actionBlock = scrollTop >= stopper;
		
		let blackColor = actionBlock ? 'black' : 'white';
		return <div className={`menu`}>
			<div id="burger" style={{ color: blackColor }}  onClick={this._opener} className={`${AnimationCss}`}>
				=
			</div>
			<nav className={this.state.opened && 'visible' || 'hidden'}>
				<ul className="nav__menu">
					<li><div onClick={this._opener}><AnimatedLink to={'/'}>Home </AnimatedLink></div></li>
					<li><div onClick={this._opener}><AnimatedLink to={'/about'} >About </AnimatedLink></div></li>
					<li><div onClick={this._opener}><AnimatedLink to={'/works'} >Works </AnimatedLink></div></li>
					<li><div onClick={this._opener}><AnimatedLink to={'/contacts'} >Contacts</AnimatedLink></div></li>
				</ul>
			</nav>
		</div>
	}
}
