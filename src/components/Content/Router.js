import React from 'react';

import { Switch, Route } from 'react-router-dom'
import Appear from '../HOC/Appear'
import { Works } from './Works'
import { Work } from './Works'
import { Contacts } from './Contacts'
import { Main } from './Main'


export default () =>
	<Switch>
		<Route exact path='/' component={Appear(Main)}/>
		<Route exact path='/works' component={Appear(Works)}/>
		<Route path='/works/:name' render={({ match }) => {
			return Appear(<Work name={match.params.name}/>)
		}}/>
		<Route path='/contacts' component={Appear(Contacts)}/>
		<Route render={() => <h1>Page not found</h1>}/>
	</Switch>



