import React from 'react';

import { Switch, Route } from 'react-router-dom'
import Appear from '../HOC/Appear'
import { Works, Work } from './Works'
import { Contacts } from './Contacts'
import { About } from './About'
import { Main } from './Main'

import ScrollResizeChanger from '../HOC/colorChanger';

export default () =>
	<Switch>
		<Route exact path='/' component={Appear(Main)} />
		<Route exact path='/contacts' component={Appear(Contacts)} />
		<Route exact path='/works' component={Appear(Works)} />
		<Route exact path='/about' component={Appear(About)} />
		<Route path='/:url' render={({ match }) => <ScrollResizeChanger component={(props) => <Work url={match.params.url} {...props} />} />} />
		<Route render={() => <h1>Page not found</h1>} />
	</Switch>



