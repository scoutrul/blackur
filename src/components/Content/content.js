import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Appear from '../HOC/Appear'
import { Project } from './Project'
import { Contacts } from './Contacts'

import './content.scss'

export default class extends Component {
	
	render() {
		return (
			
			<div className="scroll">
				<div className="mainFrame">
					
					<Switch>
						<Route exact path='/' component={Appear(Project)}/>
						<Route path='/contacts' component={Appear(Contacts)}/>
						<Route render={() => <h1>Page not found</h1>}/>
					</Switch>
				</div>
			</div>
		);
	}
}
