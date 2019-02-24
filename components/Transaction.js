'use strict';

import React from 'react';
import SvgIcon from './SvgIcon';
import propTypes from "prop-types";

class Transaction extends React.Component {
    render() {
        return (
            <div className='pocket__transaction'>
                <SvgIcon type='refresh'/>
                <div className='transaction__line'>Exchanged
                    from {this.props.item.currencyFrom} pocket <b>{this.props.item.withdraw}</b></div>
                <div className='transaction__line'>to {this.props.item.currencyTo} pocket <b>{this.props.item.add}</b>
                </div>
            </div>
        )
    }
}

Transaction.propTypes = {
    item: propTypes.object,

};

export default Transaction;