'use strict';

import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import revolutStore from '../services/reducer';
import App from './App';

const store = createStore(revolutStore);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('index')
);
