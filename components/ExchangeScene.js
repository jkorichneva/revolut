'use strict';

import React from 'react';
import {connect} from "react-redux";
import propTypes from 'prop-types';
import ExchangeInput from './ExchangeInput';
import {changeCurrency, withdrawFunds} from '../services/actions';
import '../scss/exchange.scss';
import {Link} from "react-router-dom";

class ExchangeScene extends React.Component {
    constructor(props) {
        super(props);
        this.onExchangeClick = this.onExchangeClick.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(changeCurrency(0, true));
        this.props.dispatch(changeCurrency(0, false));}

    onExchangeClick() {
        this.props.dispatch(withdrawFunds());
    }

    render() {
        return (
            <div className='exchange__scene'>
                <Link to="/" className='exchange__back'>Cancel</Link>
                <Link to='/' className='exchange__withdraw' onClick={this.onExchangeClick}>Exchange</Link>
                <ExchangeInput swiper='1'
                               swiperClass='.swiper1' swiperPaginationClass='.swiper-pagination1'/>
                <ExchangeInput swiper='2' resultCurrency
                               swiperClass='.swiper2' swiperPaginationClass='.swiper-pagination2'/>
            </div>
        )
    }
}
export default connect (
    state => ({
    }), null
)(ExchangeScene)
