import React from 'react';

export default class extends React.Component {
	state = {
		X: 0,
		Y: 0,
		screenW: 0
	};

	render() {
		let { X, Y } = this.props.mouseCursor;

		let img1X = -X / 40;
		let img1Y = -Y / 40;

		let perspX = -X / 100;
		let perspY = -Y / 100;

		return (
			<div className={`project ${this.props.className} ${this.props.active ? 'active' : ''}`}>
				<div className="images" id="img1">
					<div
						className="imgCover"
						style={{
							backgroundImage: `url(${this.props.image2})`,
							transform: `
				translate3d(${img1X * 1.1}px, ${img1Y}px, 0) 
				 
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
							transform: `translate3d(${img1X/3 }px, ${img1Y / 5}px, 0) 
							 
							rotateY(${perspY / 11}deg) 
								rotateX(${perspX / 11}deg) `
						}}
					/>
				</div>
			</div>
		);
	}
}
