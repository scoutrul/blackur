import React, { Component } from 'react';
import { connect } from 'react-redux';
import Appear from '../../HOC/Appear';
import './works.scss';
import { setTitle_action } from '../../../store/reducers/Content';

import { WorksList } from './WorksList';

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
@Appear
export default class extends Component {
	state = {};

	componentDidMount() {
		this.props.setTitle(this.props.works.find((item) => item.url === this.props.url).title);

		let divElement = this.changeColors;
		let viewBoxHeight = document.body.querySelector('.scrollBox').scrollHeight;
		let divTopOffset = divElement.offsetTop;
		let divHeight = divElement.getBoundingClientRect().height;

		this.setState({
			viewBoxHeight,
			divTopOffset,
			divHeight
		});

		document.querySelector('.scrollBox').addEventListener('scroll', this._scrollEvent);
		this._scrollEvent();
	}

	_scrollEvent = (e) => {
		let ticking = false;
		let scrollTop = e ? e.target.scrollTop : 0;
		let stopper = this.state.divTopOffset ;
		let actionBlock = scrollTop >= stopper;

		if (!ticking) {
			window.requestAnimationFrame(() => {
				ticking = false;
				this.setState({
					actionBlock
				});
			});
			ticking = true;
		}
		console.log(this.state);
	};

	render() {
		const work = this.props.works.find((item) => item.url === this.props.url);
		const { AnimationCss } = this.props;

		const { header, subheader, slogan, text, services, image_main, images_page } = work;

		const inViewCss = this.state.actionBlock ? 'makeChange' : 'setInitial';
		return (
			<div className={`work ${AnimationCss}`} id="focus">
				<div className="firstScreen" style={{ backgroundImage: `url(${image_main})` }}>
					{}
				</div>
				<div className="otherScreen">
					<div className="contentContainer">
						<h2>{header}</h2>
						<h5 className="content_text">{subheader}</h5>

						<h4>{slogan}</h4>
						<h5>{text}</h5>
					</div>
					<div className="works_images">
						{images_page.map((url, i) => {
							return <img src={url} alt="" key={i} />;
						})}
					</div>
					<div className={`works_services ${inViewCss}`}>
						<div className="contentContainer" >
							<ul className="works_services_list">
								{services.map((services, i) => {
									return <li key={i}>{services}</li>;
								})}
							</ul>
						</div>
						<div className={`works contentContainer ${AnimationCss}`} ref={(changeColors) => (this.changeColors = changeColors)}>
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
