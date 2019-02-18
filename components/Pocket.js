'use strict';

import React from 'react';
import '../scss/pocket.scss';
import {connect} from "react-redux";

class Pocket extends React.Component {
    render() {
        return (
            <div className='pocket'>
                {this.props.currencies[this.props.currency].symbol} {this.props.pocket.sum}
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
    }), null
)(Pocket)

