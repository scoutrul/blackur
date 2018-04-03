import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import Appear from '../../HOC/Appear';
import './works.scss';
import { setTitle_action } from '../../../store/reducers/Content';
import { changeColorinWork_action } from '../../../store/reducers/Animations';

import WorksList from './WorksList';

const connectProps = (state) => {
	return {
		works: state.Content.works,
		changeColorBool: state.Animations.changeColorinWork
	};
};
const connectDispatch = (dispatch) => {
	return {
		setTitle: (payload) => {
			dispatch(setTitle_action(payload));
		},
		changeColorinWork: (payload) => {
			dispatch(changeColorinWork_action(payload))
		}
	};
};

@connect(connectProps, connectDispatch)
@Appear
export default class extends Component {
	state = {};

	static propTypes = {
		MovingActions: PropTypes.object,
	}

	componentWillUnmount(){
		document.querySelector('.scrollBox').removeEventListener('scroll', this._scrollEvent);
	}
	componentDidUpdate() {
		this.props.setTitle(this.props.works.find((item) => item.url === this.props.url).title);

	}
	componentDidMount() {
		this.props.setTitle(this.props.works.find((item) => item.url === this.props.url).title);

		let scrollBox = document.body.querySelector('.scrollBox').scrollHeight;

		let divElement = this.workListDiv;
		let divTopOffset = divElement.getBoundingClientRect().top;
		let divHeight = divElement.getBoundingClientRect().height;


		this.setState({
			scrollBox,
			divTopOffset,
			divHeight
		});

		document.querySelector('.scrollBox').addEventListener('scroll', this._scrollEvent);
		this._scrollEvent();
	}

	_scrollEvent = (e) => {
		let div =  this.workListDiv;
		let { stopper } = this.props.MovingActions;
		let scrollTop = e ? e.target.scrollTop : 0;
		let stop = -stopper - div.offsetHeight + 300;
		let actionLine = scrollTop >= stop;

		let ticking = false;
		if (!ticking) {
			window.requestAnimationFrame(() => {
				ticking = false;

				this.props.changeColorinWork(actionLine)
			});
			ticking = true;
		}
	};

	render() {
		const work = this.props.works.find((item) => item.url === this.props.url);
		const { AnimationCss } = this.props;

		const { header, subheader, slogan, text, services, image_main, images_page } = work;

		const inViewCss = this.props.changeColorBool ? 'makeChange' : 'setInitial';


		return (
			<div className={`work ${AnimationCss} ${inViewCss}`} >
				<div className="firstScreen" style={{ backgroundImage: `url(${image_main})` }}>
					{}
				</div>
				<div className="otherScreen">
					<div className="contentContainer">
						<h2>{header}</h2>
						<h5 className="content_text">{subheader}</h5>

						<h4>{slogan}</h4>
						{text && text.map((abzac, i) => (<p className="content_p" key={i}>{abzac}</p>))}
					</div>
					<div className="works_images">
						{images_page.map((url, i) => {
							return <img src={url} alt="" key={i} />;
						})}
					</div>
					<div className={`works_services`}>
						<div className="contentContainer" >
							<ul className="works_services_list">
								{services.map((services, i) => {
									return <li key={i}>{services}</li>;
								})}
							</ul>
						</div>
						<div className={`works contentContainer works_list ${AnimationCss}`} ref={workListDiv => this.workListDiv = workListDiv}>
							<ul className="list content">
								<WorksList works={this.props.works} curr={this.props.history.location.pathname} />
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
