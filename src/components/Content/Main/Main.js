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
			screenW: null,
			screenH: null
		}
	};
	componentDidUnmount() {
		clearInterval(this.changeSlideEverySec);
	}
	componentDidMount() {
		this.drowSVGpath();
		this.props.setTitle('');
		// setInterval(this.drowSVGpath, 3000);
		setInterval(this.changeSlideEverySec, 7000);

		this.setState({
			mouseCursor: {
				screenH: this.layer.clientHeight,
				screenW: this.layer.clientWidth
			}
		});
	}

	_onMouseMove = (e) => {
		e.persist();
		this._mouseMove(e);
	};

	_mouseMove = _.throttle((e) => {
		let xCenter = e.clientX - this.layer.clientHeight / 2 || 0;
		let yCenter = e.clientY - this.layer.clientWidth / 2 || 0;
		this.setState({
			mouseCursor: {
				X: xCenter,
				Y: yCenter,
				screenH: this.layer.clientHeight,
				screenW: this.layer.clientWidth
			}
		});
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

	drowSVGpath = () => {
		let path = this.svgMask;
		let length = path.getTotalLength();
		path.style.transition = path.style.WebkitTransition = 'none';
		path.style.strokeDasharray = length;
		path.style.strokeDashoffset = length;

		path.getBoundingClientRect();
		path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 7s ease-in';
		path.style.strokeDashoffset = 0;
	};


	changeSlide = (dirrection) => {
		this.svgMask && this.drowSVGpath();

		let currSlide = this.state.currSlide + dirrection;

		let limit = this.props.works.length - 1;
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
					CSSAnimation: 'out now',
					currSlide
				});
			}, 800);
		});
	};

	_moveBack = () => this.changeSlide(-1);
	_moveForward = () => this.changeSlide(1);

	routSlide = (slide, limit) => {
		if (slide > limit) {
			return 0;
		} else if (slide < 0) {
			return limit;
		}
		return slide;
	};

	render() {
		let currSlide = this.state.currSlide;
		let limit = this.props.works.length - 1;

		const { AnimationCss } = this.props;
		let activeSlide = this.props.works[this.state.currSlide];

		return (
			<div className={`slider`}>
				<div className="slider_ui" style={{ display: 'block' }}>
					<button onClick={this._moveBack}>Back</button>
					<button onClick={this._moveForward}>Forward</button>
				</div>
				<div className={`page-main ${AnimationCss}`}>
					{this.props.works.map((prj, i) => {
						let active = i === this.state.currSlide ? true : false;

						if (
							i === this.routSlide(currSlide, limit) ||
							i === this.routSlide(currSlide + 1, limit) ||
							i === this.routSlide(currSlide - 1, limit)
						)
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
									mouseCursor={active ? this.state.mouseCursor : {}}
								/>
							);
						return false;
					})}
					<div
						className={`project_content ${this.state.CSSAnimation}`}
						onMouseMove={this._onMouseMove}
						ref={(layer) => (this.layer = layer)}
					>
						<div className="logoSvgMask">
							<svg x="0px" y="0px" viewBox="-2 -3 55 60">
								<path
									id="fix_stroke"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth=".05"
									strokeOpacity="0.6"
									stroke="#FFF"
									fill="transparent"
									d="M0,0h32.1c0,0,14.2-0.2,14.2,15c0,8.7-6.3,11.3-6.3,11.3s8.5,3.4,8.5,13.3s-9.6,14.3-12.7,14.3
	c-3.1,0-35.8,0-35.8,0V0z"
								/>
								<path
									ref={(svg) => (this.svgMask = svg)}
									id="float_stroke"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth=".15"
									strokeOpacity="1"
									stroke="#FFF"
									fill="transparent"
									d="M0,0h32.1c0,0,14.2-0.2,14.2,15c0,8.7-6.3,11.3-6.3,11.3s8.5,3.4,8.5,13.3s-9.6,14.3-12.7,14.3
	c-3.1,0-35.8,0-35.8,0V0z"
								/>
							</svg>
						</div>
						<div className="headers">
							<div className="hidden">
								<AnimatedLink to={`/${activeSlide.url}`}>
									<h1>{activeSlide.header}</h1>
								</AnimatedLink>
							</div>
							<div className="hidden subheader">
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
