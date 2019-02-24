'use strict';
import qs from 'qs';
export const REQUEST_EXCHANGE_RATE           = 'REQUEST_EXCHANGE_RATE';
export const SAVE_RATES                      = 'SAVE_RATES';
export const WITHDRAW_FUNDS                  = 'WITHDRAW_FUNDS';
export const CHANGE_CURRENCY                 = 'CHANGE_CURRENCY';
export const EXCHANGE_MONEY                  = 'EXCHANGE_MONEY';

const app_id = '5e2da50c785bea862ac87b831eb9c8d3';

export const requestExchangeRate = (base) =>  ({
    type: REQUEST_EXCHANGE_RATE,
    payload: {
        method: 'get',
        data: qs.stringify({access_key: app_id, base: base}),
        endpoint: 'http://data.fixer.io/api/latest?',
    }
});

export const saveRates = (data, currency) => ({
    type: SAVE_RATES,
    payload: {data, currency}
});

export const changeCurrency = (index, resultCurrency) => ({
    type: CHANGE_CURRENCY,
    payload: {index, resultCurrency}
});

export const exchangeMoney = (value, resultCurrency) => ({
    type: EXCHANGE_MONEY,
    payload: {value, resultCurrency}
});

export const withdrawFunds = () => ({
    type: WITHDRAW_FUNDS
});

export const checkRecalculate = (resultCurrency) => (dispatch, getState) => {
    const state = getState();
    if (resultCurrency) {
        dispatch(exchangeMoney(state.revolut.initialSum, false))
    } else {
        dispatch(exchangeMoney(state.revolut.resultSum, true));
    }
};
