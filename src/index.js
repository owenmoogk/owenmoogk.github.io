import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if (window.location.pathname === '/v1') {
	fetch('./old-versions/index.html')
		.then(function (response) {
			return response.text();
		})
		.then(function (body) {
			console.log(body);
		});
}
else {
	ReactDOM.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
		document.getElementById('root')
	);
}
