import React from 'react';
import ReactDom from 'react-dom';
import './styles.css';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDom.render(
	<Router>
		<App />
	</Router>,
	document.querySelector('#root')
);
