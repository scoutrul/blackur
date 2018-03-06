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
		this.layer.addEventListener('mousemove', this._mouseListener);

		this.setState({
			screenW: this.layer.clientWidth
		});

		this._drawImage();
	}

	componentWillUnmount() {
		this.layer.removeEventListener('mousemove', this._mouseListener);
	}

	_mouseListener = (e) => {
		let ScreenH = this.layer.clientHeight;
		let ScreenW = this.layer.clientWidth;

		let xCenter = e.clientX - ScreenH / 2;
		let yCenter = e.clientY - ScreenW / 2;

		this.setState({
			mouseCursor: {
				X: xCenter,
				Y: yCenter
			}
		});

		this._drawImage();
	};

	_drawImage = () => {
		var canvas = this.canvas;
		var ctx = canvas.getContext('2d');
		var image = new Image();
		image.src = this.props.image2;
		
		// let { X = 0, Y = 0 } = this.state.mouseCursor;
		// let img1X = -X / 40;
		// let img1Y = -Y / 40;
		// let persp = -X / 100;
		// ctx.setTransform(1, 1, 0, 0, img1X * 1.1, img1Y);
		// ctx.rotate(90);

		const drawImageActualSize = () => {
			canvas.width = this.naturalWidth;
			canvas.height = this.naturalHeight;

			ctx.drawImage(this, 0, 0);
			
		}
		image.onload = drawImageActualSize;

		// `translate3d(px, ${}px, 0) perspective(${this.state
		// .screenW}px) rotateY(${persp / 3}deg) rotateX(${persp / 2}deg)`
	};

	componentDidUpdate() {
		this._drawImage();
		console.log(this.state);
	}

	render() {
		return (
			<div className={`project ${this.props.className}`} ref={(layer) => (this.layer = layer)}>
				<canvas ref={(dom) => (this.canvas = dom)} />

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

// <div className="images" id="img1">
// 					<img
// 						src={this.props.image2}
// 						style={{
// 							transform: `translate3d(${img1X * 1.1}px, ${img1Y}px, 0) perspective(${this.state
// 								.screenW}px) rotateY(${persp / 3}deg) rotateX(${persp / 2}deg)`
// 						}}
// 						alt=""
// 					/>
// 				</div>
// 				<div className="images" id="img0">
// 					<img
// 						src={this.props.image1}
// 						alt=""
// 						style={{
// 							transform: `translate3d(${img1X / 5}px, ${img1Y / 5}px, 0) perspective(${this.state
// 								.screenW}px) rotateY(${persp / 11}deg) rotateX(${persp / 11}deg)`
// 						}}
// 					/>
// 				</div>
