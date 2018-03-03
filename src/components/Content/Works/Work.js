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
		this.props.setTitle(this.props.works.find((item) => item.url === this.props.url).slogan);
		
		document.getElementById("focus").focus({preventScroll:false});
	}

	render() {
		const work = this.props.works.find((item) => item.url === this.props.url);
		const { AnimationCss } = this.props;

		const { header, slogan } = work;

		return (
			<div className={`work ${AnimationCss}`} id="focus">
				<div className="firstScreen" style={{ backgroundImage: `url('/images/bg_1.jpg')` }}>
					{}
				</div>
				<div className="otherScreen">
					<div className="contentContainer">
						<h2>{header}</h2>
						<h5 className="content_text">{slogan}</h5>
						<h4>Create application which helps Epson to provide clients with automatic ongoing support.</h4>
						<h5 className="content_text">
							Thanks to this technology, you'll never run out of ink again. Just register with the
							retailer or reseller that you purchased the printer from and get a new cartridge is needed.
							With this automated system, you'll always have a supply of high-quality ink.
						</h5>
					</div>
					<div className="works_images">
						<img src="/images/bg_1.jpg" alt=''/>
						<img src="/images/bg_1.jpg" alt=''/>
						<img src="/images/bg_1.jpg" alt=''/>
					</div>
					<div className="works_services">
						<div className="contentContainer">
							<ul>
								<li>Create application</li>
								<li>automatic ongoing</li>
								<li>ongoing support.</li>
								<li>Create application</li>
								<li>automatic ongoing</li>
								<li>ongoing support.</li>
							</ul>
						</div>
						<div className={`works contentContainer ${AnimationCss}`}>
							<ul className="list content">
								<WorksList works={this.props.works} curr={this.props.history.location.pathname}/>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
