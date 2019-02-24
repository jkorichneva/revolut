'use strict';

import React from 'react';
import {connect} from "react-redux";
import propTypes from 'prop-types';
import classNames from 'classnames';
import '../scss/exchange_input.scss';
import {init as initSwiper} from '../services/Swiper';
import ExchangeInputBody from './ExchangeInputBody';
import {changeCurrency, checkRecalculate} from "../services/actions";

class ExchangeInput extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        initSwiper(this.props);
    }

    render() {
        const isResultCurrency = this.props.resultCurrency;
        return (
            <div className={classNames({
                'exchange__input': true,
                'converting': !this.props.resultCurrency,
            })}>
                <div className={classNames({
                    'swiper-container': true,
                    [`swiper${this.props.swiper}`]: true,
                })}>
                    <div className='swiper-wrapper'>
                        {this.props.pockets.map((data, index) => {
                            return <ExchangeInputBody key={index}
                                                      autoFocus={index === 0 && !isResultCurrency}
                                                      index={index}
                                                      resultCurrency={isResultCurrency}/>
                        })}
                    </div>
                    <div className={classNames({
                        'swiper-pagination': true,
                        [`swiper-pagination${this.props.swiper}`]: true,
                    })}/>
                </div>
            </div>
        )
    }
}

ExchangeInput.propTypes = {
    pockets:                propTypes.array,
    resultCurrency:         propTypes.bool,
    swiper:                 propTypes.string,
    swiperClass:            propTypes.string,
    swiperPaginationClass:  propTypes.string,
};
export default connect(
    state => ({
        pockets: state.revolut.pockets,
    }),
    (dispatch, ownProps) => ({
        onSlideChange: (index) => {
            dispatch(changeCurrency(index, !!ownProps.resultCurrency));
            dispatch(checkRecalculate(!!ownProps.resultCurrency));
        },
    }),
)(ExchangeInput)
