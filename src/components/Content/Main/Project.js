import React from 'react';
import AnimatedLink from '../../HOC/AnimatedLink';
import './project.scss';
import _ from 'lodash';

export default class extends React.Component {
	constructor(props) {
		super(props);
		this._mouseMove = _.throttle(this._mouseMove.bind(this), 200);
	}

	state = {
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

	componentDidMount() {
		//add listeners
		this.setState({
			screenW: this.layer.clientWidth
		});
	}

	_mouseMove = (e) => {
		let { clientHeight = 0, clientWidth = 0 } = this.layer;
		let ScreenH = clientHeight;
		let ScreenW = clientWidth;

		let xCenter = e.clientX - ScreenH / 2;
		let yCenter = e.clientY - ScreenW / 2;

		const setState = () => {
			this.setState({
				mouseCursor: {
					X: xCenter,
					Y: yCenter
				}
			});
		};
		setState();
	};

	render() {
		let { X, Y } = this.state.mouseCursor;

		let img1X = -X / 80;
		let img1Y = -Y / 40;

		let persp = -X / 500;

		return (
			<div
				className={`project ${this.props.className}`}
				ref={(layer) => (this.layer = layer)}
				onMouseMove={this._onMouseMove}
			>
				<div className="images" id="img1">
					<div
						className="imgCover"
						style={{
							backgroundImage: `url(${this.props.image2})`,
							transform: `translate3d(${img1X * 1.1}px, ${img1Y}px, 0) perspective(${this.state.screenW *
								2}px) rotateX(${persp / 4}deg) rotateY(${persp}deg) `
						}}
					/>
				</div>
				<div className="images" id="img0">
					<div
						className="imgCover"
						style={{
							backgroundImage: `url(${this.props.image1})`,
							transform: `translate3d(${img1X / 5}px, ${img1Y / 5}px, 0) perspective(${this.state
								.screenW}px) rotateY(${persp / 11}deg) rotateX(${persp / 11}deg)`
						}}
					/>
				</div>

				<div className="headers">
					<div className="hidden">
						<AnimatedLink to={`/${this.props.url}`}>
							<h1>{this.props.header}</h1>
						</AnimatedLink>
					</div>
					<div className="hidden">
						<h5>{this.props.subheader}</h5>
					</div>
				</div>
				<ul className="services">
					{this.props.services.map((services) => {
						return <li key={services}>{services}</li>;
					})}
				</ul>
			</div>
		);
	}
}
