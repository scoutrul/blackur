import React, { Component } from 'react';
import { connect } from 'react-redux'
import Appear from '../../HOC/Appear'
import './works.scss';
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
@Appear
export default class extends Component {
	
	componentDidMount() {
		this.props.setTitle(this.props.works.find(item => item.url === this.props.url).slogan);
		// document.querySelector('.scrollBox').scrollTop = 0;
	}
	
	render() {
		const work = this.props.works.find(item => item.url === this.props.url);
		const { AnimationCss } = this.props;
		
		const { header, slogan } = work;
		
		
		return (
			<div className={`work ${AnimationCss}`}>
				<div className="firstScreen" style={{ backgroundColor: work.color }}>
					
					<div className="contentContainer">
						<h1>{header}</h1>
					</div>
				</div>
				<div className="otherScreen">
					<div className="contentContainer">
						<h3>{header}</h3>
						<h6>{slogan}</h6>
						
						<h4>Create application which helps Epson to provide clients with automatic ongoing support.</h4>
						<h5>Thanks to this technology, you'll never run out of ink again. Just register with the
							retailer or reseller that you purchased the printer from and get a new cartridge is needed.
							With this automated system, you'll always have a supply of high-quality ink.</h5>
					</div>
				</div>
			</div>
		);
	}
};
