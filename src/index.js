import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router} from 'react-router-dom';

import 'normalize.css';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router>
		<App/>
	</Router>
	, document.getElementById('app'));
registerServiceWorker();
