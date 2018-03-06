import React from 'react';
import AnimatedLink from '../../HOC/AnimatedLink';
import './project.scss';

export default class extends React.Component {
	state = {
		mouseCursor: {
			X: null,
			Y: null,
			screenW: null
		}
	};

	componentDidMount() {
		//add listeners
		this.layer.addEventListener('mousemove', this._mouseMove);

		this.setState({
			screenW: this.layer.clientWidth
		});
	}

	componentWillUnmount() {
		this.layer.removeEventListener('mousemove', this._mouseMove);
	}

	_mouseMove = (e) => {
		let ScreenH = this.layer.clientHeight;
		let ScreenW = this.layer.clientWidth;

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
			<div className={`project ${this.props.className}`} ref={(layer) => (this.layer = layer)}>
				<div className="images" id="img1">
					<img
						src={this.props.image2}
						style={{
							transform: `translate3d(${img1X * 1.1}px, ${img1Y}px, 0) perspective(${this.state
								.screenW}px) rotateX(${persp/4}deg) rotateY(${persp}deg) `
						}}
						alt=""
					/>
				</div>
				<div className="images" id="img0">
					<img
						src={this.props.image1}
						alt=""
						style={{
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
