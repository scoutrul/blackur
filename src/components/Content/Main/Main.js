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
	componentDidMount() {
		this.props.setTitle('');
		
		document.querySelector('.scrollBox').scrollTop = 0;
		
		
	}
	
	render() {
		const { AnimationCss } = this.props;
		return (
			<div className={`page-main ${AnimationCss}`}>
				{this.props.works.map((item, i) => {
					return <Project header={item.header}
									slogan={item.slogan}
									services={item.services}
									color={item.color}
									image={item.image}
									image1={item.image1}
									image2={item.image2}
									url={item.url}
									key={i}/>
				})}
			</div>
		
		);
	}
}
