import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';

// ReactDOM.render(<App />, document.getElementById('root'));

const LoadingIndicator = props => {
	const { promiseInProgress } = usePromiseTracker();
	return (
		promiseInProgress &&
		<div
			style={{
				with: '100%',
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<Loader type= 'ThreeDots' color= '#2c3e50' height='100' with='100' />
		</div>
	)}	

ReactDOM.render (
	<div>
		<App />
		<LoadingIndicator />
	</div>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
