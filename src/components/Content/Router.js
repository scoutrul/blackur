import React from 'react';

import { Switch, Route } from 'react-router-dom'
import Appear from '../HOC/Appear'
import { Works } from './Works'
import { Work } from './Works'
import { Contacts } from './Contacts'
import { Main } from './Main'

export default () =><Switch>
		<Route exact path='/' component={Appear(Main)}/>
		<Route exact path='/works' component={Appear(Works)}/>
		<Route path='/:url' render={({ match }) => <Work url={match.params.url}/>}/>
		<Route exact path='/contacts' component={Appear(Contacts)}/>
		<Route render={() => <h1>Page not found</h1>}/>
	</Switch>



