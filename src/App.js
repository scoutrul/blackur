import React, { Component, Fragment } from 'react';

import {Header} from './components/Header'
import {Content} from './components/Content'
import {Footer} from './components/Footer'


import './App.scss';

class App extends Component {
	render() {
		return (
			<Fragment>

					<Header/>
					<Content/>
					<Footer/>

			</Fragment>
		);
	}
}

export default App;
