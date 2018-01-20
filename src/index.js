
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import createBrowserHistory from 'history/createBrowserHistory'
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'normalize.css';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();
const store = configureStore();


ReactDOM.render(

		<Provider store={store}>
			<Router history={history}>
				<App/>
			</Router>
		</Provider>

	, document.getElementById('app'));
registerServiceWorker();

console.log(store.getState())
store.subscribe(() =>
	console.log(store.getState())
)