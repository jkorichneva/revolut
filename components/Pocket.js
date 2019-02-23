'use strict';

import React from 'react';
import '../scss/pocket.scss';
import classNames from 'classnames';
import {connect} from "react-redux";
import {changeCurrency} from "../services/actions";

class Pocket extends React.Component {
    constructor(props) {
        super(props);
        this.changeCurrentPocket = this.changeCurrentPocket.bind(this);
    }

    changeCurrentPocket(currency) {
        this.props.dispatch(changeCurrency(currency, false));
    }

    render() {
        return (
            <div className={classNames({
                'pocket': true,
                'pocket__active': this.props.currency === this.props.currentCurrency,
            })} onClick={() => this.changeCurrentPocket(this.props.currency)}>
                {this.props.currencies[this.props.currency].symbol} {this.props.pocket}
                <div className='pocket__description'>
                    {this.props.currencies[this.props.currency].desc}
                </div>
            </div>
        )
    }
}
export default connect (
    state => ({
        currencies: state.revolut.currencies,
        currentCurrency: state.revolut.currentCurrency,
    }), null
)(Pocket)

