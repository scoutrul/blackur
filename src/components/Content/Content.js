import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';

import Appear from '../HOC/Appear'
import { Project } from './Projects'
import { Contacts } from './Contacts'
import { Main } from './Main'

import './content.scss'


function mapStateToProps(state) {
	return { state: 'hi' }
}
function mapDispatchToProps(dispatch) {
	console.log('yo')
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ContentRouter extends Component {

	componentDidMount() {
		const scrollBarWidth = document.getElementsByClassName('scroll')[0].clientWidth - document.getElementsByClassName('scroll')[0].offsetWidth;
		console.log(this.context)
		// ToDO send scrollBar width to reducer. Use it for right-position elements (like burger or contact link)
	}
	
	render() {
		
		return (
			<div className='scroll' ref={p => this.scroll = p}>
				<div className='main' ref={p => this.main = p}>
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


