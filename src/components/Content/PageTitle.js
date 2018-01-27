import React, { Component } from 'react';
import { connect } from 'react-redux';

const connectProps = (state) => {
	return {
		pageTitle: state.Content.pageTitle,
	}
};

@connect(connectProps)
export default class extends Component {
	render() {
		return (
			<div className={'pageTitle'} ref={(node)=> this.title = node}>
				{this.props.pageTitle}
			</div>
		);
	}
}
