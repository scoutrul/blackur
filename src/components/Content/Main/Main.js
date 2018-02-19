import React, { Component } from 'react';
import Project from './Project'
import './main.scss'
import { connect } from "react-redux";
import { setTitle_action } from "../../../store/reducers/Content";

const connectProps = (state) => {
	return {
		works: state.Content.works,
	}
};
const connectDispatch = dispatch => {
	return {
		setTitle: (payload) => {
			dispatch(setTitle_action(payload))
		}
	}
};
@connect(connectProps, connectDispatch)
export default class extends Component {
	
	state = {
		currSlide: 0,
		changerAnimation: ''
	}
	
	componentDidMount() {
		this.props.setTitle('');
		document.querySelector('.scrollBox').scrollTop = 0;
	}
	
	
	changeSlide = (move) => {
		let limit = this.props.works.length - 1;

		let right = move === 1 && 'right' ;
		
		let currSlide = this.state.currSlide + move;
		
		if (currSlide > limit) {
			currSlide = 0
		} else if (currSlide < 0) {
			currSlide = limit;
		}
		
		let promise = new Promise(resolve => {
			this.setState({ changerAnimation: `out ${right}` });
			setTimeout(() => {
				resolve()
			}, 400)
		});
		
		promise.then(() => {
				this.setState({
					currSlide,
					changerAnimation: `${this.state.changerAnimation} before`
				});
				setTimeout(() => {
					this.setState({ changerAnimation: `${this.state.changerAnimation} now` });
				}, 300)
				
			}
		);
		
	};
	
	_moveBack = () => {
		this.changeSlide(-1)
	};
	
	_moveForward = () => {
		this.changeSlide(1)
	};
		
	render() {
		const { AnimationCss } = this.props;
		let item = this.props.works[this.state.currSlide];
		return ([
				<div id='slider_ui'>
					<button onClick={this._moveBack}>Back</button>
					<button onClick={this._moveForward}>Forward</button>
				</div>,
				<div className={`page-main ${AnimationCss}`} style={{ backgroundColor: item.color }}>
					<Project header={item.header}
							 slogan={item.slogan}
							 services={item.services}
							 color={item.color}
							 image={item.image}
							 image1={item.image1}
							 image2={item.image2}
							 url={item.url}
							 key={item.url}
							 className={this.state.changerAnimation}/>
				</div>]
		
		);
	}
}
