'use strict';

import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import revolutStore from './store';
import App from './App';


render(
    <Provider store={revolutStore}>
        <App />
    </Provider>,
    document.getElementById('index')
);
