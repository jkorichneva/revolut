'use strict';
import qs from 'qs';
export const REQUEST_EXCHANGE_RATE           = 'REQUEST_EXCHANGE_RATE';
export const SAVE_RATES                      = 'SAVE_RATES';

export const requestExchangeRate = (base) => (dispatch, getState) => {
    return fetch('https://openexchangerates.org/api/latest.json?app_id=15ffaf93b50b475aa03f1c224cf5eaa5&base=' + base)
        .then(response => {
            return response.json();
        })
};

export const saveRates = (data) => ({
    type: SAVE_RATES,
    payload: {data}
})
