import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Changer from '../HOC/Changer'
import { Project } from './Project'
import { Contacts } from './Contacts'

import './content.scss'


export default class extends Component {
	render() {
		return (
			<div className="mainFrame">
				<Switch>
					<Route exact path='/' component={Project}/>
					<Route path='/contacts' component={Changer(Contacts)}/>
				</Switch>
			</div>
		);
	}
}
