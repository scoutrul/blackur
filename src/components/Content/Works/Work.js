import React, { Component } from 'react';
import { connect } from 'react-redux'
import Appear from '../../HOC/Appear'
import HeaderSlogan from '../../Header/HeaderSlogan'
import './works.scss';


const connectProps = (state) => {
	return {
		works: state.Content.works,
	}
};
@connect(connectProps)
@Appear
export default class extends Component {
	
	state = {
		work: ''
	}
	
	componentDidMount() {
		const work = this.props.works.find(item => item.url === this.props.url);
		this.setState({ work })
	
	}
	
	render() {
		const { AnimationCss } = this.props;
		
		const { header} = this.state.work || 'header';
		const { slogan } = this.state.work || 'slogan';
		return (
			<div className={`work ${AnimationCss}`}>
				<div className="firstScreen">
					<HeaderSlogan text={slogan}/>
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
