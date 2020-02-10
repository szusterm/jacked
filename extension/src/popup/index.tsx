import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

const rootElement = document.createElement('div');

document.querySelector('body').appendChild(rootElement);

ReactDOM.render(
    <App/>,
    rootElement
);
