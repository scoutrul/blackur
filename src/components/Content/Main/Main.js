import React, { Component } from 'react';
import Project from './Project';
import './main.scss';
import { connect } from 'react-redux';
import { setTitle_action } from '../../../store/reducers/Content';

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
		inAnimation: false
	};

	componentDidMount() {
		this.props.setTitle('');
	}

	changeSlide = (move) => {
		let limit = this.props.works.length - 1;

		let right = move === 1 && 'right';

		let currSlide = this.state.currSlide + move;

		if (currSlide > limit) {
			currSlide = 0;
		} else if (currSlide < 0) {
			currSlide = limit;
		}

		let promise = new Promise((resolve) => {
			this.setState({ CSSAnimation: `out ${right}`, inAnimation: true });
			setTimeout(() => {
				resolve();
			}, 400);
		});

		promise.then(() => {
			this.setState({
				currSlide,
				CSSAnimation: `${this.state.CSSAnimation} before`
			});
			setTimeout(() => {
				this.setState({ CSSAnimation: `now`, inAnimation: false });
			}, 300);
		});
	};

	_moveBack = () => {
		this.changeSlide(-1);
	};

	_moveForward = () => {
		this.changeSlide(1);
	};

	render() {
		const { AnimationCss } = this.props;
		let curr = this.props.works[this.state.currSlide];

		let limit = this.props.works.length - 1;


		let prev = curr - 1;
		let next = curr + 1;

		if (prev > limit) {
			prev = 0;
			prev = this.props.works[prev];
		} else if (next < 0) {
			next = limit;
			next = this.props.works[next];
		}

		return (
			<div className={`slider ${this.state.CSSAnimation}`}>
				{this.state.inAnimation && (
					<div className="overlay">
						<div className="logo">
							<img src="images/b_mask.svg" alt="" />
						</div>
						<div className="bg">back</div>
					</div>
				)}

				<div className="slider_ui">
					<button onClick={this._moveBack}>Back</button>
					<button onClick={this._moveForward}>Forward</button>
				</div>
				<div className={`page-main ${AnimationCss}`}>
					<Project
						header={curr.header}
						subheader={curr.subheader}
						slogan={curr.slogan}
						services={curr.services}
						color={curr.color}
						image={curr.image}
						image1={curr.image1}
						image2={curr.image2}
						url={curr.url}
						key={curr.url}
						className={this.state.CSSAnimation}
					/>

				</div>
			</div>
		);
	}
}
