import React from 'react';
import AnimatedLink from '../../HOC/AnimatedLink';
import './project.scss';
import _ from 'lodash';

export default class extends React.Component {
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
			screenW: this.layer.clientWidth,
			screenH: this.layer.clientHeight
		});
	}

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

	render() {
		let { X, Y } = this.state.mouseCursor;

		let img1X = -X / 40;
		let img1Y = -Y / 40;

		let perspX = -X / 100;
		let perspY = -Y / 100;

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
							transform: `
								translate3d(${img1X * 1.1}px, ${img1Y}px, 0) 
								perspective(${this.state.screenW}px) 
								rotateY(${perspY / 3}deg) 
								rotateX(${perspX / 2}deg)`
						}}
					/>
				</div>
				<div className="images" id="img0">
					<div
						className="imgCover"
						style={{
							backgroundImage: `url(${this.props.image1})`,
							transform: `translate3d(${img1X / 5}px, ${img1Y / 5}px, 0) 
							perspective(${this.state.screenW}px) 
							rotateY(${perspY / 11}deg) 
							rotateX(${perspX / 11}deg) `
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
