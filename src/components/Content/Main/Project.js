import React from 'react';
import AnimatedLink from '../../HOC/AnimatedLink'
import './project.scss'

export default class extends React.Component {
	state = {
		mouseCursor: {
			X: null,
			Y: null
		}
	}
	
	componentDidMount() {
		//add listeners
		this.layer.addEventListener('mousemove', this._mouseMove)
	}
	
	componentWillUnmount() {
		this.layer.removeEventListener('mousemove', this._mouseMove)
	}
	
	_mouseMove = e => {
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
			})
		};
		setState();
	};
	
	render() {
		let { X, Y } = this.state.mouseCursor;
		
		let img2X = -X / 20;
		let img1X = -X / 40;
		let img0X = -X / 70;
		let img2Y = -Y / 20;
		let img1Y = -Y / 40;
		let img0Y = -Y / 70;
		
		
		return <div className={`project ${this.props.className}`} ref={layer => this.layer = layer}>
			<div className="images" id="img0">
				<img src={this.props.image} style={{ transform: `translate(${img0X}px, ${img0Y}px)` }}/>
			</div>
			<div className="images" id="img1">
				<img src={this.props.image1} style={{ transform: `translate(${img1X}px, ${img1Y}px)` }}/>
			</div>
			<div className="images" id="img2">
				<img src={this.props.image2} style={{ transform: `translate(${img2X}px, ${img2Y}px)` }}/>
			</div>
			
			<div className="headers">
				<div className='hidden' >
					<AnimatedLink to={`/${this.props.url}`} >
						<h1>{this.props.header}</h1>
					</AnimatedLink>
				</div>
				<div className='hidden'>
					<h5>{this.props.slogan}</h5>
				</div>
			</div>
			<ul className="services">
				{this.props.services.map(services => {
					return <li key={services}>{services}</li>
				})}
			</ul>
		</div>
		
	}
}
