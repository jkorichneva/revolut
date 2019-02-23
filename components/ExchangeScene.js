'use strict';

import React from 'react';
import {connect} from "react-redux";
import ExchangeInput from './ExchangeInput';
import {changeCurrency, requestExchangeRate, saveRates, withdrawFunds} from '../services/actions';
import '../scss/exchange.scss';
import {Link} from "react-router-dom";

class ExchangeScene extends React.Component {
    constructor(props) {
        super(props);
        this.onExchangeClick = this.onExchangeClick.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(changeCurrency(0, true));
        this.props.dispatch(changeCurrency(0, false));
        this.props.dispatch(requestExchangeRate('EUR')).then((data) => this.props.dispatch(saveRates(data, 'EUR')));
        this.props.dispatch(requestExchangeRate('GBP')).then((data) => this.props.dispatch(saveRates(data, 'GBP')));
        this.props.dispatch(requestExchangeRate('USD')).then((data) => this.props.dispatch(saveRates(data, 'USD')));
    }

    onExchangeClick() {
        this.props.dispatch(withdrawFunds());
    }

    render() {
        return (
            <div className='exchange__scene'>
                <Link to="/exchange" className='exchange__back'>Cancel</Link>
                <div className='exchange__withdraw' onClick={this.onExchangeClick}>Exchange</div>
                <ExchangeInput swiper={1}
                               swiperClass='.swiper1' swiperPaginationClass='.swiper-pagination1'/>
                <ExchangeInput swiper={2} resultCurrency
                               swiperClass='.swiper2' swiperPaginationClass='.swiper-pagination2'/>
            </div>
        )
    }
}
export default connect (
    state => ({
        currentCurrency: state.revolut.currentCurrency,
        resultCurrency: state.revolut.resultCurrency,
        currencies: state.revolut.currencies,
    }), null
)(ExchangeScene)
