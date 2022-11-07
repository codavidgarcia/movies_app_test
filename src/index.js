import React from 'react';	
import ReactDOM from 'react-dom';

import App from './App';

// Show the header and then the app
ReactDOM.render(
    <React.StrictMode>
        <header />
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
