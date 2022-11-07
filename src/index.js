import React from 'react';	
import ReactDOM from 'react-dom';

import App from './App';
import header from './header';

// Show the header and then the app
ReactDOM.render(
    <React.StrictMode>
        <header />
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
