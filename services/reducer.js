'use strict';
import { REQUEST_EXCHANGE_RATE } from './actions';

const initialState = {
    pockets: {
        USD: {sum: 0},
        GBP: {sum: 0},
        EUR: {sum: 0},
    },
    currencies: {
        USD: {symbol: '$', desc: 'USD - American Dollar'},
        GBP: {symbol: '£', desc: 'GBP - British Pound'},
        EUR: {symbol: '€', desc: 'EUR - EURO'},
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case `${REQUEST_EXCHANGE_RATE}_FULLFILLED`:
            return state;

        default:
            return state;
    }
};
