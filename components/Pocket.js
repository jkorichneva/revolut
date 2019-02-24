'use strict';

import React from 'react';
import '../scss/pocket.scss';
import propTypes from 'prop-types';
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
            <div className='pocket' onClick={() => this.changeCurrentPocket(this.props.currency)}>
                {this.props.currencies[this.props.currency].symbol} {this.props.pocket.toFixed(2)}
                <div className='pocket__description'>
                    {this.props.currencies[this.props.currency].desc}
                </div>
            </div>
        )
    }
}

Pocket.propTypes = {
    currencies: propTypes.object,
    currency: propTypes.string,
};

export default connect(
    state => ({
        currencies: state.revolut.currencies,
    }), null
)(Pocket)

