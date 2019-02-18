'use strict';

import React from 'react';
import {connect} from "react-redux";
import {requestExchangeRate, saveRates} from '../services/actions';
import '../scss/exchange.scss';

class ExchangeScene extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(requestExchangeRate('USD')).then(data =>
            this.props.dispatch(saveRates(data)));
        //setTimeout(this.props.dispatch(requestExchangeRate('USD')), 10000);
    }

    render() {
        return (
            <div className='exchange__scene'>
            </div>
        )
    }
}
export default connect (
    state => ({
    }), null
)(ExchangeScene)
