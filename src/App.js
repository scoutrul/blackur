import React, { Component, Fragment } from 'react';

import { Header } from './components/Header'
import Content from './components/Content/index'
import { Menu } from './components/Menu'
import { Footer } from './components/Footer'


import './App.scss';

class App extends Component {
	render() {
		return (
			<Fragment>
				<Header/>
				<Menu/>
				<Content/>
				<Footer/>
			</Fragment>
		);
	}
}

export default App;
