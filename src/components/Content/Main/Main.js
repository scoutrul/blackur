import React, { Component } from 'react';
import _ from 'lodash';
import Project from './Project';
import './main.scss';
import { connect } from 'react-redux';
import { setTitle_action } from '../../../store/reducers/Content';
import AnimatedLink from '../../HOC/AnimatedLink';

const connectProps = (state) => {
	return {
		works: state.Content.works
	};
};
const connectDispatch = (dispatch) => {
	return {
		setTitle: (payload) => {
			dispatch(setTitle_action(payload));
		}
	};
};
@connect(connectProps, connectDispatch)
export default class extends Component {
	state = {
		currSlide: 0,
		CSSAnimation: '',
		inAnimation: false,
		mouseCursor: {
			X: null,
			Y: null,
			screenW: null
		}
	};

	_onMouseMove = (e) => {
		e.persist();
		this._mouseMove(e);
	};
	_mouseMove = _.throttle((e) => {
		let { clientHeight = 0, clientWidth = 0 } = this.setState;
		let xCenter = e.clientX - clientHeight / 2;
		let yCenter = e.clientY - clientWidth / 2;

		const setState = () => {
			this.setState({
				mouseCursor: {
					X: xCenter,
					Y: yCenter
				}
			});
		};
		setState();
	}, 1000 / 24);

	changeSlideEverySec = () => {
		// this.changeSlide(_.random(0, this.props.works.length - 1));
		let limit = this.props.works.length - 1;

		let currSlide = this.state.currSlide;
		let nextSlide = currSlide + 1;

		if (nextSlide > limit) {
			nextSlide = -1;
		}
		this.changeSlide(nextSlide);
	};

	componentDidUpdate() {
		// console.log('did update', this.state);
	}
	componentDidMount() {
		const drowSVGpath = () => {

			var path = document.querySelector('.float_stroke');
			var length = path.getTotalLength();
			path.style.transition = path.style.WebkitTransition = 'none';
			path.style.strokeDasharray = length;
			path.style.strokeDashoffset = length;
			
			path.getBoundingClientRect();
			path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2.8s ease-in';
			path.style.strokeDashoffset = 0;
		}
		drowSVGpath();
		this.props.setTitle('');
		setInterval(drowSVGpath, 3000);
		setInterval(this.changeSlideEverySec, 3000);
		this.setState({
			mouseCursor: {
				screenW: this.layer.clientWidth,
				screenH: this.layer.clientHeight
			}
		});
	}

	componentWillUnmount() {
		clearInterval(this.changeSlideEverySec);
	}
	changeSlide = (dirrection) => {
		let limit = this.props.works.length - 1;

		let right = dirrection === 1 && 'right';

		let currSlide = this.state.currSlide + dirrection;

		if (currSlide > limit) {
			currSlide = 0;
		} else if (currSlide < 0) {
			currSlide = limit;
		}

		new Promise((resolve) => {
			this.setState({
				inAnimation: true,
				CSSAnimation: 'out'
			});
			resolve();
		}).then(() => {
			setTimeout(() => {
				this.setState({
					inAnimation: false,
					CSSAnimation: 'now',
					currSlide
				});
			}, 400);
		});
	};

	_moveBack = () => this.changeSlide(-1);
	_moveForward = () => this.changeSlide(1);

	render() {
		const { AnimationCss } = this.props;
		let activeSlide = this.props.works[this.state.currSlide];
		return (
			<div className={`slider`}>
				<div className="logoSvgMask">
					<svg x="0px" y="0px" viewBox="-2 -3 55 60">
						<path
							className="fix_stroke"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width=".1"
							stroke-opacity="0.6"
							stroke="#FFF"
							fill="transparent"
							d="M0,0h32.1c0,0,14.2-0.2,14.2,15c0,8.7-6.3,11.3-6.3,11.3s8.5,3.4,8.5,13.3s-9.6,14.3-12.7,14.3
	c-3.1,0-35.8,0-35.8,0V0z"
						/>
						<path
							className="float_stroke"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width=".3"
							stroke-opacity="1"
							stroke="#FFF"
							fill="transparent"
							d="M0,0h32.1c0,0,14.2-0.2,14.2,15c0,8.7-6.3,11.3-6.3,11.3s8.5,3.4,8.5,13.3s-9.6,14.3-12.7,14.3
	c-3.1,0-35.8,0-35.8,0V0z"
						/>
					</svg>
				</div>
				<div className="slider_ui" style={{display:'none'}}>
					<button onClick={this._moveBack}>Back</button>
					<button onClick={this._moveForward}>Forward</button>
				</div>
				<div className={`page-main ${AnimationCss}`}>
					{this.props.works.map((prj, i) => {
						let active = i === this.state.currSlide ? true : false;
						return (
							<Project
								header={prj.header}
								subheader={prj.subheader}
								slogan={prj.slogan}
								color={prj.color}
								image={prj.image}
								image1={prj.image1}
								image2={prj.image2}
								url={prj.url}
								key={prj.url}
								className={this.state.CSSAnimation}
								active={active}
								mouseCursor={this.state.mouseCursor}
							/>
						);
					})}
					<div
						className={`project_content ${this.state.CSSAnimation}`}
						onMouseMove={this._onMouseMove}
						ref={(layer) => (this.layer = layer)}
					>
						<div className="headers">
							<div className="hidden">
								<AnimatedLink to={`/${activeSlide.url}`}>
									<h1>{activeSlide.header}</h1>
								</AnimatedLink>
							</div>
							<div className="hidden">
								<h5>{activeSlide.subheader}</h5>
							</div>
						</div>
						<ul className={`services ${this.state.CSSAnimation}`}>
							{activeSlide.services.map((services) => {
								return (
									<li key={services}>
										<div>{services}</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
