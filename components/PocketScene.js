'use strict';

import React from 'react';
import {connect} from "react-redux";
import propTypes from 'prop-types';
import Pockets from './Pockets';
import Transaction from './Transaction';
import '../scss/pocket_scene.scss';
import {requestExchangeRate, saveRates} from "../services/actions";

class PocketScene extends React.Component {
    constructor(props) {
        super(props);
        this.fetchRates = this.fetchRates.bind(this);
    }

    componentDidMount() {
        this.fetchRates();
        setInterval(this.fetchRates, 10000);
    }

    fetchRates() {
        for(let key in this.props.currencies) {
            if(this.props.currencies.hasOwnProperty(key)) {
                this.props.dispatch(requestExchangeRate(key)).then((data) => this.props.dispatch(saveRates(data, key)));
            }
        }
    }


    render() {
        return (
            <div className='pocket__scene'>
                <Pockets/>
                {!!this.props.transactions.length && <div className="pocket__transactions">
                    {this.props.transactions.map((item, index) => {
                        return <Transaction item={item} key={index}/>
                    })}
                </div>}
                {!this.props.transactions.length &&
                <div className='pocket__transactions__empty'>Your transactions will appear here</div>}
            </div>
        )
    }
}

PocketScene.propTypes = {
    transactions: propTypes.array,
};
export default connect(
    state => ({
        transactions: state.revolut.transactions,
        currencies: state.revolut.currencies,
    }), null
)(PocketScene)
