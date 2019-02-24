'use strict';

import React from 'react';
import {connect} from "react-redux";
import propTypes from 'prop-types';
import '../scss/exchange_input.scss';
import {exchangeMoney} from '../services/actions';
import {formatToFixed, formatValue} from '../services/model';

class ExchangeInputBody extends React.Component {
    constructor(props) {
        super(props);
    }

    convertCurrency(value) {
        if (formatValue(value)) {
            this.props.dispatch(exchangeMoney(value, this.props.resultCurrency));
        }
    }

    render() {
        return (
            <div className='swiper-slide'>
                <div className='pocket__currency'>{this.props.pockets[this.props.index].currency}</div>
                <div className='pocket__sum'>You
                    have {this.props.currencies[this.props.pockets[this.props.index].currency].symbol} {formatToFixed(this.props.pockets[this.props.index].sum)}</div>
                <div className='pocket__right'>
                    <input type='text' onChange={(e) => this.convertCurrency(e.target.value)}
                               value={this.props.resultCurrency && this.props.resultSum
                                   ? this.props.resultSum
                                   : (!this.props.resultCurrency && this.props.initialSum
                                       ? this.props.initialSum : '')}
                    />
                    {this.props.resultCurrency &&
                    <div className='ex_rate'>
                        {this.props.currencies[this.props.currentCurrency].symbol} 1
                        = {this.props.currencies[this.props.pockets[this.props.index].currency].symbol} {formatToFixed(this.props.currentRate)}
                    </div>}
                </div>
            </div>
        )
    }
}

ExchangeInputBody.propTypes = {
    currencies: propTypes.object,
    currentCurrency: propTypes.string,
    pockets: propTypes.array
};

export default connect(
    state => ({
        currencies: state.revolut.currencies,
        currentCurrency: state.revolut.currentCurrency,
        resultSum: state.revolut.resultSum,
        initialSum: state.revolut.initialSum,
        currentRate: state.revolut.currentRate,
        pockets: state.revolut.pockets,
    }), null
)(ExchangeInputBody)
