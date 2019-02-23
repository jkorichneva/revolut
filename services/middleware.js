'use strict';

import axios from 'axios';

export const createApiMiddleware = () => {
    return store => next => action => {
        if (!action.payload || !action.payload.endpoint) {
            return next(action);
        }

        const {
            payload: {
                method = 'post',
                data = '',
                endpoint
            }
        } = action;
        const URL = action.payload.endpoint;


        let newPayload  = null;

        if (method === 'get') {
            newPayload  = axios[method](
                `${endpoint}${endpoint.indexOf('?') !== -1 ? '&' : '?'}${data}`
            );
        } else {
            newPayload = axios[method](
                `${endpoint}${endpoint.indexOf('?') !== -1 ? '&' : '?'}`,
                data
            );
        }

        action.meta     = {...action.meta, payload: action.payload};
        action.payload  = newPayload;

        return next(action);
    };
};

export const apiResponseMiddleware = () => {
    return store => next => action => {
        let actionName = '';

        if (action.payload && action.payload.data && !action.payload.data.status && !action.payload.data.ok) {
            try {
                let data = JSON.parse(action.payload.data);
                if (data.ok) {
                    action.payload.data = data.intervals;
                    return next({...action});
                }
                actionName = action.type.replace('FULFILLED', 'REJECTED')
                return next({...action, type: actionName});
            } catch(e) {
                actionName = action.type.replace('FULFILLED', 'REJECTED')
                return next({...action, type: actionName});
            }
        }

        if (action.type.indexOf('_PENDING') !== -1) {
            return next({...action, payload: action.meta ? action.meta.payload : undefined});
        }

        return next(action);
    };
}
