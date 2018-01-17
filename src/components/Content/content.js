import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import { Project } from './Project'
import { Contacts } from './Contacts'

import './content.scss'


export default class extends Component {
	render() {
		return (
			<div className={'content'}>
				<div className="mainFrame">
					<Switch>
						<Route exact path='/' component={Project}/>
						<Route path='/contacts' component={Contacts}/>
					</Switch>
					
				</div>
			</div>
		);
	}
}
