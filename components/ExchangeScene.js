'use strict';

import React from 'react';
import {connect} from "react-redux";
import propTypes from 'prop-types';
import ExchangeInput from './ExchangeInput';
import {changeCurrency, withdrawFunds} from '../services/actions';
import '../scss/exchange.scss';

class ExchangeScene extends React.Component {
    componentDidMount() {
        this.props.dispatch(changeCurrency(0, true));
        this.props.dispatch(changeCurrency(0, false));}


    render() {
        return (
            <div className='exchange__scene'>
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
