import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Appear from '../HOC/Appear'
import { Project } from './Projects'
import { Contacts } from './Contacts'
import { Main } from './Main'

import './content.scss'

export default class extends Component {
	
	
	componentDidMount() {
		// console.log(this.scroll)
		// ++ padding right of scroll width
	}
	
	render() {
		
		return (
			<div className="scroll" ref={p => this.scroll = p}>
				<div className="main" ref={p => this.main = p}>
					<Switch>
						<Route exact path='/' component={Appear(Main)}/>
						<Route path='/projects' component={Appear(Project)}/>
						<Route path='/contacts' component={Appear(Contacts)}/>
						<Route render={() => <h1>Page not found</h1>}/>
					</Switch>
				</div>
			</div>
		);
	}
}
