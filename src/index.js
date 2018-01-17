import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import 'normalize.css';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<HashRouter>
		<App/>
	</HashRouter>
	, document.getElementById('app'));
registerServiceWorker();
