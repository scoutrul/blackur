import React, { Component } from 'react';
import AnimatedLink from '../HOC/AnimatedLink';
import Appear from '../HOC/Appear';
import { connect } from 'react-redux';
import { isMenuOpen_action } from '../../store/reducers/Animations';
import './menu.scss';

@connect(
	(state) => {
		return {
			changeColorBool: state.Animations.changeColorinWork,
			menu: state.Content.menu,
			isMenuOpen: state.Animations.isMenuOpen
		};
	},
	(dispatch) => {
		return {
			isMenuOpen_action: (payload) => {
				dispatch(isMenuOpen_action(payload));
			}
		};
	}
)
@Appear
export default class extends Component {
	_opener = () => {
		this.props.isMenuOpen_action(true);
	};

	_closeMenu = () => {
		this.props.isMenuOpen_action(false);
	};

	render() {
		let { viewBoxHeight, divHeight, divTopOffset, scrollTop } = this.props.MovingActions;

		const { AnimationCss } = this.props;

		const burgerColor1 = () => {
			let stopper = viewBoxHeight - divTopOffset;
			let actionBlock = scrollTop >= stopper - 15;
			return !this.props.changeColorBool ? (actionBlock ? 'black' : 'white') : 'white';
		};
		const burgerColor2 = () => {
			let stopper = viewBoxHeight - (divTopOffset + divHeight / 2);
			let actionBlock = scrollTop >= stopper - 15;
			return !this.props.changeColorBool ? (actionBlock ? 'black' : 'white') : 'white';
		};

		const active = this.props.isMenuOpen ? 'active' : '';
		return (
			<div className={`menu-container ${active}`} onClick={this._closeMenu}>
				<div className={`menu`} onClick={(e) => e.stopPropagation()}>
					<div
						id="burger"
						onClick={!this.props.isMenuOpen ? this._opener : this._closeMenu}
						className={`${AnimationCss} ${this.props.isMenuOpen ? 'opened' : ''}`}
					>
						<span style={{ color: burgerColor1() }}>{}</span>
						<span style={{ color: burgerColor2() }}>{}</span>
					</div>
					<nav className={(this.props.isMenuOpen && 'visible') || 'hidden'}>
						<ul className="nav__menu">
							{this.props.menu.map((item, i) => {
								return (
									<li key={i}>
										<div onClick={this._closeMenu}>
											<AnimatedLink to={item.url}>{item.name} </AnimatedLink>
										</div>
									</li>
								);
							})}
						</ul>
						<div className="hello">
							<div>
								<a href="mailto:hello@blackur.com">Say Hello!</a>
							</div>
						</div>
					</nav>
				</div>
			</div>
		);
	}
}
