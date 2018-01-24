import React, { Component, Fragment } from 'react';

import Content from './components/Content/index'
import { Menu } from './components/Menu'
import { Footer } from './components/Footer'
import { Logo } from './components/Header'
import ScrollResizeChanger from './components/HOC/onScrollResizeChanger'

import './App.scss';

class App extends Component {
	render() {
		return (
			<Fragment>
				<ScrollResizeChanger component={Logo}/>
				<ScrollResizeChanger component={Footer}/>
				<ScrollResizeChanger component={Menu}/>
				<Content/>
			</Fragment>
		);
	}
}

export default App;
