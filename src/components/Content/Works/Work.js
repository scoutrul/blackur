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

@connect(connectProps,connectDispatch)
@Appear
export default class extends Component {
	
	componentDidMount() {
		this.props.setTitle(this.props.works.find(item => item.url === this.props.url).slogan);
	}
	
	render() {
		const work = this.props.works.find(item => item.url === this.props.url);
		const { AnimationCss } = this.props;
		
		const { header } = work || 'header';
		
		
		return (
			<div className={`work ${AnimationCss}`}>
				<div className="firstScreen" style={{backgroundColor: work.color}}>
					
					<div className="contentContainer">
						<h1>{header}</h1>
					</div>
				</div>
				<div className="otherScreen">
					<div className="contentContainer">
						<h1>{header}</h1>
						<h2>{header}</h2>
						<h3>{header}</h3>
						<h4>{header}</h4>
						<h5>{header}</h5>
						<h6>{header}</h6>
					</div>
				</div>
			</div>
		);
	}
};
