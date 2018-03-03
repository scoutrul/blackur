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
	componentDidMount() {
		this.props.setTitle(this.props.works.find((item) => item.url === this.props.url).title);

		document.getElementById('focus').focus({ preventScroll: false });
	}

	render() {
		const work = this.props.works.find((item) => item.url === this.props.url);
		const { AnimationCss } = this.props;

		const { header, subheader, slogan, text, services, image1 } = work;

		return (
			<div className={`work ${AnimationCss}`} id="focus">
				<div className="firstScreen" style={{ backgroundImage: `url('images/bg_1.jpg')` }}>
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
						<img src={image1} alt="" />
						<img src={image1} alt="" />
					</div>
					<div className="works_services">
						<div className="contentContainer">
							<ul className="services">
								{services.map((services, i) => {
									return <li key={i}>{services}</li>;
								})}
							</ul>

						</div>
						<div className={`works contentContainer ${AnimationCss}`}>
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
