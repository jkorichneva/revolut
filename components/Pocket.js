'use strict';

import React from 'react';
import '../scss/pocket.scss';
import propTypes from 'prop-types';
import {connect} from "react-redux";

class Pocket extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='pocket'>
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

