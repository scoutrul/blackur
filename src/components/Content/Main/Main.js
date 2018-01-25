import React, { Component } from 'react';
import Project from './Project'
import './main.scss'
import { connect } from "react-redux";

const connectProps = (state) => {
	return {
		works: state.Content.works,
	}
};
@connect(connectProps)
export default class extends Component {
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
									url={item.url}
									key={i}/>
				})}
			</div>
		
		);
	}
}
