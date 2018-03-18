import React, { Component } from 'react';
import AnimatedLink from '../HOC/AnimatedLink';
import Appear from '../HOC/Appear';
import { connect } from 'react-redux';
import './menu.scss';

@connect(state => {
	return {
		changeColorBool: state.Animations.changeColorinWork,
		menu: state.Content.menu,
	}
})
@Appear
export default class extends Component {
	state = {
		opened: false
	};

	_opener = () => {
		this.setState((prevState) => {
			return {
				opened: !prevState.opened
			};
		});
	};

	render() {
		let { viewBoxHeight, divHeight, divTopOffset, scrollTop } = this.props.MovingActions;

		const { AnimationCss } = this.props;

		const burgerColor1 = () => {
			let stopper = viewBoxHeight - divTopOffset;
			let actionBlock = scrollTop >= stopper - 15;
			return !this.props.changeColorBool ? actionBlock ? 'black' : 'white': 'white';
		};
		const burgerColor2 = () => {
			let stopper = viewBoxHeight - (divTopOffset + divHeight / 2);
			let actionBlock = scrollTop >= stopper - 15;
			return !this.props.changeColorBool ? actionBlock ? 'black' : 'white': 'white';
		};

		return (
			<div className={`menu`}>
				<div id="burger" onClick={this._opener} className={`${AnimationCss} ${this.state.opened ? 'opened' : ''}`}>
					<span style={{ color: burgerColor1() }}>{}</span>
					<span style={{ color: burgerColor2() }}>{}</span>
				</div>
				<nav className={(this.state.opened && 'visible') || 'hidden'}>
					<ul className="nav__menu">
						{this.props.menu.map(item => {
							return <li>
								<div onClick={this._opener}>
									<AnimatedLink to={item.url}>{item.name} </AnimatedLink>
								</div>
							</li>

						})}
					</ul>
					<div className="hello">
						<div>
							<a href="mailto:hello@blackur.com">Say Hello!</a>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}
