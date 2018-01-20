import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as Promise from "promise";


@withRouter
export default class extends Component {
	
	
	linkHandler = (event, href) => {
		event.preventDefault();
		
		new Promise(resolve => {
			console.log('some action')
			
			setTimeout(() => {
				resolve();
			}, 1500);
			
		}).then(() => {
				console.log('did rout', href);
				this.props.history.push(href);
			}
		);
		
	};
	
	render() {
		return <a onClick={e => this.linkHandler(e, this.props.to)} href={this.props.to}>
			{this.props.children}
		</a>
	}
}
