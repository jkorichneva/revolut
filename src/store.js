'use strict';

import { applyMiddleware, createStore, combineReducers } from 'redux';

import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import revolut from '../services/reducer';
import { createApiMiddleware, apiResponseMiddleware } from '../services/middleware';
const middlewares = [
    thunkMiddleware,
    createApiMiddleware(),
    apiResponseMiddleware(),
    promiseMiddleware,
];

export default createStore(
    combineReducers({ revolut }),
    applyMiddleware(...middlewares)
);
