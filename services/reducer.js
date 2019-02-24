'use strict';
import {
    REQUEST_EXCHANGE_RATE,
    SAVE_RATES,
    CHANGE_CURRENCY,
    EXCHANGE_MONEY, WITHDRAW_FUNDS
} from './actions';

const initialState = {
    pockets: [
        {currency: 'USD', sum: 0.00},
        {currency: 'GBP', sum: 0.00},
        {currency: 'EUR', sum: 0.00},
    ],
    currentCurrency: 'USD',
    resultCurrency: 'USD',
    resultSum: '',
    currentRate: '',
    transactions: [],
    currencies: {
        USD: {symbol: '$', desc: 'USD - American Dollar', pocketIndex: 0},
        GBP: {symbol: '£', desc: 'GBP - British Pound', pocketIndex: 1},
        EUR: {symbol: '€', desc: 'EUR - Euro', pocketIndex: 2},
    },
    rates: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case `${REQUEST_EXCHANGE_RATE}_FULLFILLED`:
            return state;
        case SAVE_RATES:
            return {...state, rates: {...state.rates, [action.payload.currency]: action.payload.data.value.data.rates}};
        case CHANGE_CURRENCY:
            let name = action.payload.resultCurrency ? 'resultCurrency' : 'currentCurrency';
            let currencyRate = action.payload.resultCurrency
                ? state.rates[state.currentCurrency][state.pockets[action.payload.index].currency]
                : state.rates[state.pockets[action.payload.index].currency][state.resultCurrency];
            let reverseRate = action.payload.resultCurrency
                ? state.rates[state.pockets[action.payload.index].currency][state.currentCurrency]
                : state.rates[state.resultCurrency][state.pockets[action.payload.index].currency];
            return {
                ...state,
                [name]: state.pockets[action.payload.index].currency,
                currentRate: currencyRate,
                reverseRate: reverseRate
            };

        case EXCHANGE_MONEY:
            let sum = action.payload.value;
            let resultSum = Math.round((action.payload.resultCurrency ? sum * state.reverseRate : sum * state.currentRate) * 100) / 100;
            if (action.payload.resultCurrency) {
                return {...state, resultSum: sum, initialSum: resultSum};
            } else {
                return {...state, resultSum: resultSum, initialSum: sum};
            }
        case WITHDRAW_FUNDS:
            let initialPocketIndex = state.currencies[state.currentCurrency].pocketIndex;
            let resultPocketIndex = state.currencies[state.resultCurrency].pocketIndex;
            let initialPocket = state.pockets[initialPocketIndex];
            let resultPocket = state.pockets[resultPocketIndex];
            initialPocket.sum = +initialPocket.sum - +state.initialSum;
            resultPocket.sum = +resultPocket.sum + +state.resultSum;
            let newPockets = state.pockets.slice();
            newPockets.splice(initialPocketIndex, 1, initialPocket);
            newPockets.splice(resultPocketIndex, 1, resultPocket);
            let transactions = state.transactions.slice();
            let newTransaction = {
                currencyFrom: initialPocket.currency,
                currencyTo: resultPocket.currency,
                withdraw: `- ${Number.parseFloat(state.initialSum).toFixed(2)}`,
                add: `+ ${Number.parseFloat(state.resultSum).toFixed(2)}`
            };
            transactions.push(newTransaction);

            return {...state, pockets: newPockets, transactions: transactions};
        default:
            return state;
    }
};
