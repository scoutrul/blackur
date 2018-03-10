import React from 'react';
import AnimatedLink from '../../HOC/AnimatedLink';
import './project.scss';

export default class extends React.Component {


	componentDidUpdate(){console.log(this.props.mouseCursor)}

	render() {
		let { X, Y, screenW } = this.props.mouseCursor;

		let img1X = -X / 40;
		let img1Y = -Y / 40;

		let perspX = -X / 100;
		let perspY = -Y / 100;

		return (
			<div
				className={`project ${this.props.className} ${this.props.active && 'active'}`}
			
			>
				<div className="images" id="img1">
					<div
						className="imgCover"
						style={{
							backgroundImage: `url(${this.props.image2})`,
							transform: `
								translate3d(${img1X * 1.1}px, ${img1Y}px, 0) 
								perspective(${screenW}px) 
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
							perspective(${screenW}px) 
							rotateY(${perspY / 11}deg) 
							rotateX(${perspX / 11}deg) `
						}}
					/>
				</div>

			</div>
		);
	}
}
